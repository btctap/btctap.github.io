import type log from "loglevel";

export type Config = {
  network?: "mainnet" | "testnet" | "regtest";
  secret?: string; // stored on the NCF tag
  username?: string; // account username
  password?: string; // account password
} & typeof defaults;

const defaults = {
  loglevel: "info" as log.LogLevelDesc,
  defaultLanguage: "en",
  backend: import.meta.env.VITE_BACKEND,
  username: import.meta.env.VITE_USERNAME,
  password: import.meta.env.VITE_PASSWORD,
  giftAmount: import.meta.env.VITE_GIFT_AMOUNT,
  repoUrl: "https://github.com/btctap/btctap.github.io",
  myUrl: "https://btctap.github.io",
  mapUrl: "https://btcmap.org",
  token: "",
};

const baseConfig: Config = defaults;

export { baseConfig };
