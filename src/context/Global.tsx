/* @refresh skip */
import { flatten, resolveTemplate, translator } from "@solid-primitives/i18n";
import { makePersisted } from "@solid-primitives/storage";
import { UrlParam } from "../consts/Enums";

import {
  createContext,
  createEffect,
  createMemo,
  createSignal,
  useContext,
} from "solid-js";
import type { Accessor, JSX, Setter } from "solid-js";

import { config } from "../config";
import { detectLanguage } from "../i18n/detect";
import type { DictKey } from "../i18n/i18n";
import dict from "../i18n/i18n";
import { getUrlParam, resetUrlParam } from "../utils/urlParams";
import { formatError } from "../utils/errors";

type NotificationType = "success" | "error";
export type tFn = (key: DictKey, values?: Record<string, unknown>) => string;
export type notifyFn = (type: NotificationType, message: string) => void;

export type GlobalContextType = {
  online: Accessor<boolean>;
  setOnline: Setter<boolean>;
  id: Accessor<string>;
  setId: Setter<string>;
  fund: Accessor<string>;
  setFund: Setter<string>;
  secret: Accessor<string>;
  setSecret: Setter<string>;
  i18n: Accessor<string | null>;
  setI18n: Setter<string | null>;
  i18nConfigured: Accessor<string | null>;
  setI18nConfigured: Setter<string | null>;
  notification: Accessor<string>;
  setNotification: Setter<string>;
  notificationType: Accessor<string>;
  setNotificationType: Setter<string>;
  fpHash: Accessor<string>;
  setFpHash: Setter<string>;
  blacklist: Accessor<string[]>;
  setBlacklist: Setter<string[]>;
  // functions
  t: tFn;
  notify: notifyFn;
};

// Local storage serializer to support the values created by the deprecated "createStorageSignal"
const stringSerializer = {
  serialize: (value: never) => value,
  deserialize: (value: never) => value,
};

const GlobalContext = createContext<GlobalContextType>();

const GlobalProvider = (props: { children: JSX.Element }) => {
  const [online, setOnline] = createSignal<boolean>(true);

  const [notification, setNotification] = createSignal<string>("");
  const [notificationType, setNotificationType] = createSignal<string>("");

  const [i18n, setI18n] = createSignal<string | null>(null);

  const [id, setId] = createSignal<string | null>(null);

  const [secret, setSecret] = createSignal<string | null>(null);

  const [fpHash, setFpHash] = makePersisted(
    // eslint-disable-next-line solid/reactivity
    createSignal<string>(""),
    {
      name: "fp",
    },
  );

  const [blacklist, setBlacklist] = createSignal<string[]>([]);

  const [fund, setFund] = makePersisted(
    // eslint-disable-next-line solid/reactivity
    createSignal<string>(""),
    {
      name: "fund",
    },
  );

  const [i18nConfigured, setI18nConfigured] = makePersisted(
    // eslint-disable-next-line solid/reactivity
    createSignal(null),
    {
      name: "i18n",
      ...stringSerializer,
    },
  );
  const [i18nUrl, setI18nUrl] = makePersisted(
    // eslint-disable-next-line solid/reactivity
    createSignal<string | null>(null),
    {
      name: "i18nUrl",
      ...stringSerializer,
    },
  );

  // Get the tag id from the URL parameters
  const idParam = getUrlParam(UrlParam.Id);
  if (idParam && idParam !== "") {
    setId(idParam);
    resetUrlParam(UrlParam.Id);
  }

  // Get the secret from the URL parameters
  const secretParam = getUrlParam(UrlParam.Secret);
  if (secretParam && secretParam !== "") {
    setSecret(secretParam);
    resetUrlParam(UrlParam.Secret);
  }

  const notify = (type: NotificationType, message: unknown) => {
    const messageStr = formatError(message);

    setNotificationType(type);
    setNotification(messageStr);
  };

  // i18n
  createEffect(() => {
    setI18n(detectLanguage(i18nConfigured() || i18nUrl()));
  });
  const dictLocale = createMemo(
    () => flatten(dict[i18n() || config.defaultLanguage]) as never,
  );

  setI18n(detectLanguage(i18nConfigured(), i18nUrl(), setI18nUrl));

  // eslint-disable-next-line solid/reactivity
  const t = translator(dictLocale, resolveTemplate) as (
    key: DictKey,
    values?: Record<string, unknown>,
  ) => string;

  return (
    <GlobalContext.Provider
      value={{
        online,
        setOnline,
        i18n,
        setI18n,
        i18nConfigured,
        setI18nConfigured,
        notification,
        setNotification,
        notificationType,
        setNotificationType,
        fund,
        setFund,
        id,
        setId,
        secret,
        setSecret,
        fpHash,
        setFpHash,
        blacklist,
        setBlacklist,
        // functions
        t,
        notify,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext: cannot find a GlobalContext");
  }
  return context;
};

export { useGlobalContext, GlobalProvider };
