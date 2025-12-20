import { config } from "../config";
import { useGlobalContext } from "../context/Global";
import "../style/footer.scss";
import { BsGithub } from "solid-icons/bs";

const Footer = () => {
  const { t } = useGlobalContext();

  return (
    <footer>
      <div class="socials">
        <a title="Github" class="github" target="_blank" href={config.repoUrl}>
          <BsGithub size={22} color="#22374F" />
        </a>
      </div>
      <p class="version">
        {t("commithash")}:{" "}
        <a target="_blank" href={`${config.repoUrl}/commit/${__GIT_COMMIT__}`}>
          {__GIT_COMMIT__}
        </a>
      </p>
    </footer>
  );
};
export default Footer;
