import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer>
        <div className="footer-nav">
          <p>{t("--omisify-footer")}</p>
          <NavLink className="navlink" to="/conditions">
            <p>{t("--cgu")}</p>
          </NavLink>
          <NavLink className="navlink" to="/politique">
            <p>{t("--privacy")}</p>
          </NavLink>
          <NavLink className="navlink" to="/mentions">
            <p>{t("--legal")}</p>
          </NavLink>
        </div>
      </footer>
    </>
  );
}
