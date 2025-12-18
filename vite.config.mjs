import * as child from "child_process";
import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import solidPlugin from "vite-plugin-solid";
import topLevelAwait from "vite-plugin-top-level-await";
import vitePluginBundleObfuscator from 'vite-plugin-bundle-obfuscator';

const commitHash = child
  .execSync("git rev-parse --short HEAD")
  .toString()
  .trim();

const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "package.json"), "utf8"),
);

const configFile = path.resolve(__dirname, "src/config.ts");

const defaultObfuscatorConfig = {
  excludes: [],
  enable: true,
  log: true,
  autoExcludeNodeModules: false,
  // autoExcludeNodeModules: { enable: true, manualChunks: ['vue'] }
  threadPool: false,
  // threadPool: { enable: true, size: 4 }
  options: {
    compact: true,
    controlFlowFlattening: false,
    controlFlowFlatteningThreshold: 1,
    deadCodeInjection: false,
    debugProtection: false,
    debugProtectionInterval: 0,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    numbersToExpressions: false,
    renameGlobals: false,
    selfDefending: false,
    simplify: true,
    splitStrings: true,
    stringArray: true,
    stringArrayCallsTransform: true,
    stringArrayCallsTransformThreshold: 0.5,
    stringArrayEncoding: [],
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 1,
    stringArrayWrappersChainedCalls: true,
    stringArrayWrappersParametersMaxCount: 2,
    stringArrayWrappersType: 'function',
    stringArrayThreshold: 0.75,
    unicodeEscapeSequence: false,
  }
};

if (!fs.existsSync(configFile)) {
  console.error(`
❌ Missing configuration file: src/config.ts

Please run one of the following commands to generate a config file:
    - \x1b[36mnpm run mainnet\x1b[0m
    - \x1b[36mnpm run regtest\x1b[0m
    - \x1b[36mnpm run testnet\x1b[0m
  
Then start the dev server again.
  `);
  process.exit(1);
}

export default defineConfig({
  plugins: [
    solidPlugin(),
    topLevelAwait(),
    mkcert(),
    nodePolyfills(),
    vitePluginBundleObfuscator(defaultObfuscatorConfig)
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  server: {
    https: true,
    cors: { origin: "*" },
  },
  base: "/",
  build: {
    cssCodeSplit: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  define: {
    __APP_VERSION__: `"${packageJson.version}"`,
    __GIT_COMMIT__: `"${commitHash}"`,
  },
});
