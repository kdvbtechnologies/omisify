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
          "--back-btn": "Return",
          "--a-intro":
            "Omisify is a platform that offers affiliate programs. Increase your income by becoming an Omisify Partner",
          "--join-omisify": "Become an Omisify Partner",
        },
      },

      pt: {
        translations: {
          "--omisify": "Omisify",
          "--choose-language": "Escolha seu idioma",
          "--back-btn": "Retornar",
          "--a-intro":
            "Omisify é uma plataforma que oferece programas de afiliados. Aumente sua renda tornando-se um Parceiro Omisify",
          "--join-omisify": "Seja um Parceiro Omisify",
        },
      },

      es: {
        translations: {
          "--omisify": "Omisify",
          "--choose-language": "Elige tu idioma",
          "--back-btn": "Devolver",
          "--a-intro":
            "Omisify es una plataforma que ofrece programas de afiliados. Aumente sus ingresos convirtiéndose en un Socio de Omisify",
          "--join-omisify": "Conviértase en un Socio de Omisify",
        },
      },

      fr: {
        translations: {
          "--omisify": "Omisify",
          "--choose-language": "Choisissez votre langue",
          "--back-btn": "Retour",
          "--a-intro":
            "Omisify est une plateforme qui proprose des programmes d'affiliation. Augmentez vos revenus en devenant Partenaire Omisify",
          "--join-omisify": "Devenir Partenaire Omisify",
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
