import axios from "axios";
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

  async function get() {
    await axios
      .get("https://ip.nf/me.json")
      .then((res) => {
        console.log(res.data.ip.country);

        const getcountryip = res.data.ip.country;
        if (getcountryip) {
          localStorage.setItem("https://omisify.com/countryip", getcountryip);
        }

        const getcityip = res.data.ip.city;
        if (getcityip) {
          localStorage.setItem("https://omisify.com/cityip", getcityip);
        }

        const getuserip = res.data.ip.ip;
        if (getuserip) {
          localStorage.setItem("https://omisify.com/userip", getuserip);
        }

        const page =
          "Cet utilisateur a été présent sur la page des traductions d'Omisify";
        const countryip = localStorage.getItem("https://omisify.com/countryip");
        const cityip = localStorage.getItem("https://omisify.com/cityip");
        const userip = localStorage.getItem("https://omisify.com/userip");
        const userId = localStorage.getItem("https://omisify.com/userId");
        const name = localStorage.getItem("https://omisify.com/name");
        const shortname = localStorage.getItem("https://omisify.com/shortname");
        const partnername = localStorage.getItem(
          "https://omisify.com/partnername"
        );

        const getdate = new Date();
        const date = getdate.toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        });

        axios({
          method: "post",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/panel/add`,
          data: {
            countryip,
            cityip,
            userip,
            page,
            date,
            userId,
            shortname,
            partnername,
            name,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
  get();

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
