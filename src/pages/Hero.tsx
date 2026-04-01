import { config } from "../config";
import { useGlobalContext } from "../context/Global";
import "../style/hero.scss";
import { v4 as uuidv4 } from "uuid";
import { getToken, getFund, getMe, payToFund } from "../utils/coinosClient";
import { send } from "../utils/telegram";
import log from "loglevel";
import { Show } from "solid-js";
import { isMobile, getBlacklist } from "../utils/helper";
import FpJS from "@fingerprintjs/fingerprintjs";
import { detectIncognito } from "detectincognitojs";
import { createSignal, createEffect, onMount } from "solid-js";

log.setLevel(config.loglevel as log.LogLevelDesc);

const redirect = (loc: string) => {
  log.info("Redirecting to", loc);
  window.location.href = loc;
};

export const Hero = () => {
  const {
    id,
    fund,
    secret,
    setFund,
    setNotification,
    setNotificationType,
    t,
  } = useGlobalContext();

  const [fpHash, setFpHash] = createSignal("");
  const [blacklist, setBlacklist] = createSignal([]);
  const [isValid, setIsValid] = createSignal(false);
  const [isPrivate, setIsPrivate] = createSignal(false);

  // Load fingerprint and blacklist on mount
  onMount(() => {
    if (config.recaptchaSiteKey) {
      const s = document.createElement("script");
      s.src =
        "https://www.google.com/recaptcha/api.js?render=" + config.recaptchaSiteKey;
      document.head.appendChild(s);
    } else {
      log.info('no recaptcha siteKey');
    }
    // get browser fingerprint
    if (!fpHash()) {
      FpJS.load()
        .then((fp) => {
          fp.get()
            .then((result) => {
              log.debug(result.visitorId);
              setFpHash(result.visitorId);
            })
            .catch(() => {});
        })
        .catch(() => {});
    }

    // load fingerprints blacklist
    getBlacklist()
      .then((list) => {
        if (list) {
          setBlacklist(list.split(" "));
        }
      })
      .catch(() => {});

    // check incognito mode
    detectIncognito()
      .then((result) => {
        log.debug(result.browserName, result.isPrivate);
        setIsPrivate(result.isPrivate);
      })
      .catch(() => {});
  });

  createEffect(() => {
    const valid =
      config.network !== "mainnet" ||
      fund() != "" ||
      (isMobile() &&
        !isPrivate() &&
        secret() === config.secret &&
        !blacklist().includes(fpHash()));

    setIsValid(valid);
  });

  const handleClick = () => {
    if (fund()) {
      // user was onboarded before, check the fund
      getFund(fund())
        .then((data) => {
          if (data.amount > 0) {
            // fund has money, redirect to sweep
            redirect(`${config.backend}/fund/${fund()}/sweep`);
          } else {
            // fund is empty, redirect to the user account
            redirect(`${config.backend}/${data.payments[0].user.username}`);
          }
          return;
        })
        .catch((error) => {
          log.error("Error getting the fund:", error);
          // reset fund Id
          setFund("");
          return handleClick();
        });
    } else {
      // login
      getToken()
        .then((token) => {
          if (!token) {
            throw new Error("unable to login");
          }

          config.token = token;
            
          // generate new fund id
          const fundId = uuidv4();
          log.info("New fund id is", fundId);

          const amount = config.giftAmount;
          payToFund(fundId, amount)
            .then((data) => {
              if (data) {
                // get remaining balance
                let myBalance = 0;
                getMe()
                  .then((data) => {
                    myBalance = data.balance;
                  })
                  .catch((error) => {
                    log.error("Error getting me:", error);
                  })
                  // eslint-disable-next-line solid/reactivity
                  .finally(() => {
                    // send a telegram
                    const telegram_message = `Fp: ${fpHash()}\nId: ${id()}\nFund: ${config.backend}/fund/${fundId}\nPaid: ${amount}\nBalance: ${myBalance}`;
                    send(telegram_message);
                    // save the fund id as a cookie
                    setFund(fundId);
                    // redirect to sweep
                    redirect(`${config.backend}/fund/${fundId}/sweep`);
                  });
              }
            })
            .catch((error) => {
              log.error("Error paying to the fund:", error);
              // redirect to Coinos main page
              setNotificationType("error");
              setNotification(t("api_offline_msg"));
              // send a telegram
              send(`Error: ${error}`);
            });
        })
        .catch((error) => {
          log.error("Error logging in:", error);
          setNotificationType("error");
          setNotification(t("api_offline_msg"));
          // send a telegram
          send(`Error: ${error}`);
        });
    }
  };

  return (
    <div id="hero" class="inner-wrap">
      <h1>{t("headline")}</h1>
      <h2>{t("subline")}</h2>
      <br />
      <p>{t("description")}</p>
      <br />
      <Show when={isValid()}>
        <span class="btn btn-inline" onClick={() => handleClick()}>
          {fund() ? t("open_wallet") : t("continue")}
        </span>
      </Show>
      <Show when={!isValid()}>
        <h3>{t("no_nfc")}</h3>
      </Show>
    </div>
  );
};

export default Hero;
