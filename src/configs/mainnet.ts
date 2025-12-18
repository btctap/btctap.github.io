import type { Config } from "src/configs/base";
import { baseConfig } from "src/configs/base";
import type log from "loglevel";

const config = {
  ...baseConfig,
  network: "mainnet",
  backend: import.meta.env.VITE_BACKEND,
  token: import.meta.env.VITE_TOKEN,
  secret: import.meta.env.VITE_SECRET,
  loglevel: "info" as log.LogLevelDesc,
} as Config;

export { config };
