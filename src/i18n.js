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
            "Omisify is favorable for influencers and for non-influencers !",
          "--free-a":
            "Omisify is free and always remunerates its Partners whatever the country in which you are and whatever the situation of your country",
          "--free-b":
            "With Omisify you can withdraw your remuneration at any time. With Omisify, your compensation is at your fingertips. Omisify uses all the means of payment available to allow all its Partners to always be remunerated",
          "--free-c":
            "With Omisify you earn money even when you sleep. Omisify is free and always remunerates its Partners",
          "--remuneration": "Remuneration",
          "--1comment": "1 Comment = 1 point",
          "--1e10k": "1 E10k = 0.7 point",
          "--1email": "1 Email = 0.3 point",
          "--1likec": "1 Like C = 0.01 point",
          "--1likep": "1 Like P = 0.01 point",
          "--1m10k": "1 M10k = 0.7 point",
          "--1message": "1 Message = 0.3 point",
          "--1mwi": "1 MWI = 5 points",
          "--1post": "1 Post = 1 point",
          "--1pwi": "1 PWI = 5 points",
          "--1pwp": "1 PWP = 0.1 point",
          "--1euro": "1000 Points = 1€",
          "--see-more": "See more",
          "--turn": "Turn a simple extra income into an incredible success",
          "--nb":
            "N.B: All Omisify Partners withdraw their remuneration at any time",

          // footer
          // footer
          // footer
          // footer
          // footer
          // footer
          "--omisify-footer": "© 2022 Omisify",
          "--cgu": "Terms of use",
          "--privacy": "Privacy Policy",
          "--legal": "Legal Notice",
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
            "Omisify é favorável para influenciadores e não influenciadores !",
          "--free-a":
            "A Omisify é gratuita e remunera sempre os seus Parceiros independentemente do país em que se encontre e seja qual for a situação do seu país",
          "--free-b":
            "Com a Omisify pode retirar a sua remuneração a qualquer momento. Com o Omisify, sua compensação está ao seu alcance. A Omisify utiliza todos os meios de pagamento disponíveis para permitir que todos os seus Parceiros sejam sempre remunerados",
          "--free-c":
            "Com o Omisify você ganha dinheiro mesmo dormindo. A Omisify é gratuita e remunera sempre os seus Parceiros",
          "--remuneration": "Remuneração",
          "--1comment": "1 Comentário = 1 ponto",
          "--1e10k": "1 E10k = 0.7 ponto",
          "--1email": "1 E-mail = 0.3 ponto",
          "--1likec": "1 Like C = 0.01 ponto",
          "--1likep": "1 Like P = 0.01 ponto",
          "--1m10k": "1 M10k = 0.7 ponto",
          "--1message": "1 Mensagem = 0.3 ponto",
          "--1mwi": "1 MWI = 5 pontos",
          "--1post": "1 Post = 1 ponto",
          "--1pwi": "1 PWI = 5 pontos",
          "--1pwp": "1 PWP = 0.1 ponto",
          "--1euro": "1000 Pontos = 1€",
          "--see-more": "Ver mais",
          "--turn":
            "Transforme uma simples renda suplementar em um sucesso incrível",
          "--nb":
            "N.B: Todos os Parceiros Omisify retiram sua remuneração a qualquer momento",

          // footer
          // footer
          // footer
          // footer
          // footer
          // footer
          "--omisify-footer": "© 2022 Omisify",
          "--cgu": "Termos de uso",
          "--privacy": "Política de Privacidade",
          "--legal": "Notícia legal",
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
            "¡ Omisify es favorable para personas influyentes y no influyentes !",
          "--free-a":
            "Omisify es gratuito y siempre remunera a sus Socios sea cual sea el país en el que se encuentre y sea cual sea la situación de su país",
          "--free-b":
            "Con Omisify puedes retirar tu remuneración en cualquier momento. Con Omisify, su compensación está al alcance de su mano. Omisify utiliza todos los medios de pago disponibles para permitir que todos sus Socios sean siempre remunerados",
          "--free-c":
            "Con Omisify ganas dinero incluso cuando duermes. Omisify es gratis y siempre remunera a sus Socios",
          "--remuneration": "Remuneración",
          "--1comment": "1 Comentario = 1 punto",
          "--1e10k": "1 E10k = 0.7 punto",
          "--1email": "1 E-mail = 0.3 punto",
          "--1likec": "1 Like C = 0.01 punto",
          "--1likep": "1 Like P = 0.01 punto",
          "--1m10k": "1 M10k = 0.7 punto",
          "--1message": "1 Mensaje = 0.3 punto",
          "--1mwi": "1 MWI = 5 puntos",
          "--1post": "1 Publicación = 1 punto",
          "--1pwi": "1 PWI = 5 puntos",
          "--1pwp": "1 PWP = 0.1 punto",
          "--1euro": "1000 Puntos = 1€",
          "--see-more": "Ver más",
          "--turn":
            "Convierta un ingreso suplementario simple en un éxito increíble",
          "--nb":
            "N.B: Todos los Socios de Omisify retiran su remuneración en cualquier momento",

          // footer
          // footer
          // footer
          // footer
          // footer
          // footer
          // footer
          // footer
          // footer
          "--omisify-footer": "© 2022 Omisify",
          "--cgu": "Condiciones de uso",
          "--privacy": "Política de confidencialidad",
          "--legal": "Notas legales",
          "": "",
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
          "--free-a":
            "Omisify est gratuit et rémunère toujours ses Partenaires quelque soit le pays dans lequel vous vous trouver et quelque soit la situation de votre pays",
          "--free-b":
            "Avec Omisify vous pourrez retirer votre rémunération à n'importe quel moment. Avec Omisify, votre rémunération est à porter de vos mains. Omisify utilise tout les moyens de paiement disponible pour permettre à tout ses Partenaires d'être toujours rémunérer",
          "--free-c":
            "Avec Omisify vous gagnez de l'argent même lorsque vous dormez. Omisify est gratuit et rémunère toujours ses Partenaires",
          "--remuneration": "Rémunération",
          "--1comment": "1 Commentaire = 1 point",
          "--1e10k": "1 E10k = 0.7 point",
          "--1email": "1 E-mail = 0.3 point",
          "--1likec": "1 Like C = 0.01 point",
          "--1likep": "1 Like P = 0.01 point",
          "--1m10k": "1 M10k = 0.7 point",
          "--1message": "1 Message = 0.3 point",
          "--1mwi": "1 MWI = 5 points",
          "--1post": "1 Publication = 1 point",
          "--1pwi": "1 PWI = 5 points",
          "--1pwp": "1 PWP = 0.1 point",
          "--1euro": "1000 Points = 1€",
          "--see-more": "Voir plus",
          "--turn":
            "Transformez un simple complément de revenu en succès incroyable",
          "--nb":
            "N.B: Tous les Partenaires Omisify retirent leur rémunération à n'importe quel moment",

          // footer
          // footer
          // footer
          // footer
          // footer
          // footer
          // footer
          // footer
          // footer
          "--omisify-footer": "© 2022 Omisify",
          "--cgu": "Conditions d'utilisation",
          "--privacy": "Politique de confidentialité",
          "--legal": "Mentions légales",
          "": "",
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
