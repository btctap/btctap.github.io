import type { Config } from "src/configs/base";
import { baseConfig } from "src/configs/base";
import type log from "loglevel";

const config = {
  ...baseConfig,
  network: "regtest",
  backend: "https://localhost:5173",
  secret: "secret",
  token: "your regtest Coinos API token",
  loglevel: "debug" as log.LogLevelDesc,
} as Config;

export { config };
