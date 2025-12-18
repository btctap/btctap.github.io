import { Show } from "solid-js";

import { useGlobalContext } from "../context/Global";

const Warnings = () => {
  const { t, online } = useGlobalContext();

  return (
    <div>
      <Show when={!online()}>
        <div id="offline" class="banner">
          {t("api_offline_msg")}
        </div>
      </Show>
    </div>
  );
};

export default Warnings;
