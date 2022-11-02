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
          "--join": "Become an Omisify Partner",
          "--favorable":
            "Omisify is favorable for influencers and for non-influencers!",
          "": "",
        },
      },

      pt: {
        translations: {
          "--omisify": "Omisify",
          "--choose-language": "Escolha seu idioma",
          "--back-btn": "Retornar",
          "--a-intro":
            "Omisify é uma plataforma que oferece programas de afiliados. Aumente sua renda tornando-se um Parceiro Omisify",
          "--join": "Seja um Parceiro Omisify",
          "--favorable":
            "Omisify é favorável para influenciadores e não influenciadores!",
          "": "",
        },
      },

      es: {
        translations: {
          "--omisify": "Omisify",
          "--choose-language": "Elige tu idioma",
          "--back-btn": "Devolver",
          "--a-intro":
            "Omisify es una plataforma que ofrece programas de afiliados. Aumente sus ingresos convirtiéndose en un Socio de Omisify",
          "--join": "Conviértase en un Socio de Omisify",
          "--favorable":
            "¡Omisify es favorable para personas influyentes y no influyentes!",
        },
      },

      fr: {
        translations: {
          "--omisify": "Omisify",
          "--choose-language": "Choisissez votre langue",
          "--back-btn": "Retour",
          "--a-intro":
            "Omisify est une plateforme qui proprose des programmes d'affiliation. Augmentez vos revenus en devenant Partenaire Omisify",
          "--join": "Devenir Partenaire Omisify",
          "--favorable":
            "Omisify est favorable pour les influenceurs et pour les non-influenceurs !",
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
