import type log from "loglevel";

export type Config = {
  network?: "mainnet" | "testnet" | "regtest";
  secret?: string; // stored on the NCF tag
  token?: string; // auth token to create new funds
  backend?: string; // Coinos instance
} & typeof defaults;

const defaults = {
  loglevel: "info" as log.LogLevelDesc,
  defaultLanguage: "en",
  giftAmount: 1,
  repoUrl: "https://github.com/btctap/btctap.github.io",
  mapUrl: "https://btcmap.org",
};

const baseConfig: Config = defaults;

export { baseConfig };
