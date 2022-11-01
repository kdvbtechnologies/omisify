import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          "--omisify": "Omisify",
          "--choose-language": "Choose your language",
        },
      },

      pt: {
        translations: {
          "--omisify": "Omisify",
          "--choose-language": "Escolha seu idioma",
        },
      },

      es: {
        translations: {
          "--omisify": "Omisify",
          "--choose-language": "Elige tu idioma",
        },
      },

      fr: {
        translations: {
          "--omisify": "Omisify",
          "--choose-language": "Choisissez votre langue",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
