import type { Config } from "src/configs/base";
import { baseConfig } from "src/configs/base";
import type log from "loglevel";

const config = {
  ...baseConfig,
  network: "regtest",
  secret: "secret",
  loglevel: "debug" as log.LogLevelDesc,
} as Config;

export { config };
