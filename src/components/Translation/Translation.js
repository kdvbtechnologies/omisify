import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import i18n from "../../i18n";

export default function Translation() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [languageModel, setLanguageModel] = useState(
    localStorage.getItem("language-model") === "true"
  );

  // language model (change language and select language)
  // Here change language
  function ChangeLanguage(lng) {
    i18n.changeLanguage(lng);
    setLanguageModel(lng);
  }

  const storage = localStorage.getItem("i18nextLng");

  const en = "en";
  const preferenceLangEn = storage === en;

  const pt = "pt";
  const preferenceLangPt = storage === pt;

  const es = "es";
  const preferenceLangEs = storage === es;

  const fr = "fr";
  const preferenceLangFr = storage === fr;

  // toggle language model + localStorage
  useEffect(() => {
    localStorage.setItem("language-model", languageModel);
  }, [languageModel]);

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>{t("--back-btn")}</button>
      </div>
      <div className="translation">
        <div className="title">
          <p>{t("--choose-language")}</p>
        </div>

        <div className="button">
          <button
            className={`${preferenceLangEn ? "btn-active" : "btn"}`}
            onClick={() => ChangeLanguage("en")}
          >
            English
          </button>
        </div>

        <div className="button">
          <button
            className={`${preferenceLangPt ? "btn-active" : "btn"}`}
            onClick={() => ChangeLanguage("pt")}
          >
            Português
          </button>
        </div>

        <div className="button">
          <button
            className={`${preferenceLangEs ? "btn-active" : "btn"}`}
            onClick={() => ChangeLanguage("es")}
          >
            Español
          </button>
        </div>

        <div className="button">
          <button
            className={`${preferenceLangFr ? "btn-active" : "btn"}`}
            onClick={() => ChangeLanguage("fr")}
          >
            Français
          </button>
        </div>
      </div>
    </div>
  );
}
