import { config } from "../config";
import { useGlobalContext } from "../context/Global";
import "../style/hero.scss";
import { v4 as uuidv4 } from "uuid";
import { getFund, getMe, payToFund } from "../utils/coinosClient";
import { send } from "../utils/telegram";
import log from "loglevel";
import { Show } from "solid-js";
import { isMobile } from "../utils/helper";

log.setLevel(config.loglevel as log.LogLevelDesc);

const redirect = (loc: string) => {
  log.info("Redirecting to", loc);
  window.location.href = loc;
};

export const Hero = () => {
  const { id, fund, secret, setFund, setNotification, setNotificationType, t } =
    useGlobalContext();

  const handleClick = () => {
    if (fund()) {
      // user was onboarded before, check the fund
      getFund(fund())
        .then((data) => {
          if (data.amount > 0) {
            // fund has money, redirect to sweep
            redirect(`https://${config.backend}/fund/${fund()}/sweep`);
          } else {
            // fund is empty, redirect to the user account
            redirect(
              `https://${config.backend}/${data.payments[0].user.username}`,
            );
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
      // generate new fund id
      const fundId = uuidv4();
      log.info("New fund id is", fundId);

      const amount = config.giftAmount;
      payToFund(fundId, amount)
        .then((data) => {
          if (data) {
            // save the fund id as a cookie
            setFund(fundId);         
            // get remaining balance
            let myBalance = 0;
            getMe()
              .then((data) => {
                myBalance=data.balance;
              })
              .catch((error) => {
                log.error("Error getting me:", error);
              })
              .finally(() => {
                // send a telegram
                const telegram_message = `Id: ${id()}\nFund: ${fund()}\nPaid: ${amount}\nBalance: ${myBalance}`;
                send(telegram_message);
                // redirect to sweep
                redirect(`https://${config.backend}/fund/${fund()}/sweep`);
              })
          }
        })
        .catch((error) => {
          log.error("Error paying to the fund:", error);
          // redirect to Coinos main page
          setNotificationType("error");
          setNotification(t("api_offline_msg"));
        });
    }
  };

  const isValid = () => {
    return isMobile() && secret() == config.secret;
  }

  return (
    <div id="hero" class="inner-wrap">
      <h1>
        {t("headline")}
      </h1>
      <h2>
        {t("subline")}
      </h2>
      <br/>
      <p>{t("description")}</p>
      <br/>
      <Show when={isValid()}>
        <span class="btn btn-inline" onClick={() => handleClick()}>
          {t("continue")}
        </span>
      </Show>
      <Show when={!isValid()}>
        <h3>
          {t("no_nfc")}
        </h3>
      </Show>
    </div>
  );
};

export default Hero;
