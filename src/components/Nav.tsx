import { A } from "@solidjs/router";
import { BsGlobe } from "solid-icons/bs";
import { For, Show } from "solid-js";

import logo from "../assets/logo.svg";
import { useGlobalContext } from "../context/Global";
import locales from "../i18n/i18n";
import "../style/nav.scss";

const Nav = (props: { network: string }) => {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  const { setI18nConfigured } = useGlobalContext();
  return (
    <nav>
      <div class="nav-inner">
        <A id="logo" href="/">
          <img src={logo} alt="BTC Tap logo" />
        </A>
        <Show when={props.network !== "mainnet"}>
          <div id="network" class="btn btn-small">
            {props.network}
          </div>
        </Show>
        <div
          id="languages"
          onClick={(e) => e.currentTarget.classList.toggle("active")}
          onMouseEnter={() => {
            if (timeout) {
              clearTimeout(timeout);
            }
          }}
          onMouseLeave={(e) => {
            timeout = setTimeout(() => {
              e.target.classList.remove("active");
            }, 300);
          }}
        >
          <span class="globe">
            <BsGlobe size={19} />
          </span>
          <div class="dropdown">
            <For each={Object.keys(locales)}>
              {(lang) => (
                <span class="lang" onClick={() => setI18nConfigured(lang)}>
                  {locales[lang].language}
                </span>
              )}
            </For>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
