import { config } from "../config";
import { useGlobalContext } from "../context/Global";
import "../style/footer.scss";

const Footer = () => {
  const { t } = useGlobalContext();

  return (
    <footer>
      <p class="version">
        {t("version")}:{" "}
        <a target="_blank" href={`${config.repoUrl}`}>
          {__APP_VERSION__}
        </a>
        , {t("commithash")}:{" "}
        <a target="_blank" href={`${config.repoUrl}/commit/${__GIT_COMMIT__}`}>
          {__GIT_COMMIT__}
        </a>
      </p>
    </footer>
  );
};
export default Footer;
