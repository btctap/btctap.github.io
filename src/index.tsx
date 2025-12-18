/* @refresh reload */
import "@fontsource/noto-mono";
import "@fontsource/noto-sans";
import "@fontsource/noto-sans/200.css";
import "@fontsource/noto-sans/800.css";
import log from "loglevel";
import { render } from "solid-js/web";
import "./style/index.scss";
import { config } from "./config";
import type { RouteSectionProps } from "@solidjs/router";
import { Route, Router } from "@solidjs/router";
import { GlobalProvider } from "./context/Global";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Error from "./pages/Error";
import Hero from "./pages/Hero";
import NotFound from "./pages/NotFound";
import Notification from "./components/Notification";

log.setLevel(config.loglevel as log.LogLevelDesc);

if ("serviceWorker" in navigator) {
  void navigator.serviceWorker
    .register("/service-worker.js", { scope: "/" })
    .then((reg) => {
      log.info(`Registration succeeded. Scope is ${reg.scope}`);
    });
}

log.setLevel(config.loglevel as log.LogLevelDesc);
document.documentElement.setAttribute("boltz-theme", "default");
document.body.classList.remove("loading");

// change to publish to /testnet etc
const base = "/";

const App = (props: RouteSectionProps) => {
  return (
    <GlobalProvider>
      <Nav network={config.network} />
      {props.children}
      <Notification />
      <Footer />
    </GlobalProvider>
  );
};

const cleanup = render(
  () => (
    <Router root={App} base={base}>
      <Route path="/" component={Hero} />
      <Route path="/error" component={() => <Error />} />
      <Route path="*404" component={NotFound} />
    </Router>
  ),
  document.getElementById("root"),
);

if (import.meta.hot) {
  log.info("Hot reload");
  import.meta.hot.dispose(cleanup);
}
