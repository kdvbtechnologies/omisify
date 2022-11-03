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
          "-Loading data..": "Loading data..",
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

          // en - footer
          // en - footer
          // en - footer
          // en - footer
          // en - footer
          // en - footer
          // en - footer
          "--omisify-footer": "© 2022 Omisify",
          "--cgu": "Terms of use",
          "--privacy": "Privacy Policy",
          "--legal": "Legal Notice",

          // en - home - LikeI.js
          // en - home - LikeI.js
          // en - home - LikeI.js
          // en - home - LikeI.js
          // en - home - LikeI.js
          // en - home - LikeI.js
          // en - home - LikeI.js
          "--influencer": "Influencer",

          "-Let your subscribers make you money":
            "Let your followers make you money",

          "-With Omisify you earn money when your subscribers like your post on social networks":
            "With Omisify you earn money when your followers like your post on social networks",

          "-With Omisify you earn money when your subscribers like your photo":
            "With Omisify you earn money when your followers like your photo",

          "-With Omisify you earn money when your subscribers like your video":
            "With Omisify you earn money when your followers like your video",

          // en - home - commentI
          // en - home - commentI
          // en - home - commentI
          // en - home - commentI
          // en - home - commentI
          // en - home - commentI
          // en - home - commentI
          // en - home - commentI
          // en - home - commentI
          "-Comment": "Comment",

          "-Earn money on any comments left on your post":
            "Earn money on any comments left on your post",

          "-With Omisify you earn money when your subscribers comment on your post":
            "With Omisify you earn money when your followers comment on your post",

          "-With Omisify you earn money when your subscribers comment on your video":
            "With Omisify you earn money when your followers comment on your video",

          "-Omisify gives you the opportunity to earn money when your subscribers comment on your post, regardless of the nature of the comment, you earn money on any comments left on your post by your subscribers":
            "Omisify gives you the opportunity to earn money when your followers comment on your post, regardless of the nature of the comment, you earn money on any comments left on your post by your followers",

          "-With Omisify, all the conditions have been met to allow you to transform a simple additional income into incredible success":
            "With Omisify, all the conditions have been met to allow you to transform a simple additional income into incredible success",

          // en - home - shareI
          // en - home - shareI
          // en - home - shareI
          // en - home - shareI
          // en - home - shareI
          // en - home - shareI
          // en - home - shareI
          // en - home - shareI
          // en - home - shareI
          // en - home - shareI
          "-Share": "Share",

          "-Earn passive income every time your followers share your posts":
            "Earn passive income every time your followers share your posts",

          "-With Omisify you earn money when your subscribers share your post":
            "With Omisify you earn money when your subscribers share your post",

          "-With Omisify you earn money when your subscribers share your video":
            "With Omisify you earn money when your subscribers share your video",

          "-With Omisify you earn money even when you sleep because your subscribers work for you":
            "With Omisify you earn money even when you sleep because your subscribers work for you",

          "-Start now and Earn money with your subscribers":
            "Start now and Earn money with your subscribers",

          // en - home - aftershareI.js
          // en - home - aftershareI.js
          // en - home - aftershareI.js
          // en - home - aftershareI.js
          // en - home - aftershareI.js
          // en - home - aftershareI.js
          // en - home - aftershareI.js
          // en - home - aftershareI.js
          // en - home - aftershareI.js
          "-Omisify has met all the conditions to allow you to earn money with your subscribers. Start now and earn money with your subscribers, Use them to your advantage and earn money with Omisify":
            "Omisify has met all the conditions to allow you to earn money with your subscribers. Start now and earn money with your subscribers, Use them to your advantage and earn money with Omisify",

          "": "",
        },
      },

      pt: {
        translations: {
          "--omisify": "Omisify",
          "-Loading data..": "Carregando dados..",
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

          // pt - footer
          // pt - footer
          // pt - footer
          // pt - footer
          // pt - footer
          // pt - footer
          "--omisify-footer": "© 2022 Omisify",
          "--cgu": "Termos de uso",
          "--privacy": "Política de Privacidade",
          "--legal": "Notícia legal",

          // pt - home - LikeI.js
          // pt - home - LikeI.js
          // pt - home - LikeI.js
          // pt - home - LikeI.js
          // pt - home - LikeI.js
          // pt - home - LikeI.js
          // pt - home - LikeI.js
          "--influencer": "Influenciador",
          "-Let your subscribers make you money":
            "Deixe seus assinantes ganharem dinheiro",

          "-With Omisify you earn money when your subscribers like your post on social networks":
            "Com Omisify você ganha dinheiro quando seus assinantes curtem seu post nas redes sociais",

          "-With Omisify you earn money when your subscribers like your photo":
            "Com o Omisify você ganha dinheiro quando seus assinantes curtem sua foto",

          "-With Omisify you earn money when your subscribers like your video":
            "Com o Omisify você ganha dinheiro quando seus inscritos curtem seu vídeo",

          // pt - home - commentI
          // pt - home - commentI
          // pt - home - commentI
          // pt - home - commentI
          // pt - home - commentI
          // pt - home - commentI
          // pt - home - commentI
          // pt - home - commentI
          // pt - home - commentI
          "-Comment": "Comente",

          "-Earn money on any comments left on your post":
            "Ganhe dinheiro com os comentários deixados em sua postagem",

          "-With Omisify you earn money when your subscribers comment on your post":
            "Com o Omisify você ganha dinheiro quando seus assinantes comentam em seu post",

          "-With Omisify you earn money when your subscribers comment on your video":
            "Com o Omisify você ganha dinheiro quando seus inscritos comentam no seu vídeo",

          "-Omisify gives you the opportunity to earn money when your subscribers comment on your post, regardless of the nature of the comment, you earn money on any comments left on your post by your subscribers":
            "Omisify lhe dá a oportunidade de ganhar dinheiro quando seus assinantes comentam em sua postagem, independentemente da natureza do comentário, você ganha dinheiro com qualquer comentário deixado em sua postagem por seus assinantes",

          "-With Omisify, all the conditions have been met to allow you to transform a simple additional income into incredible success":
            "Com o Omisify, todas as condições estão reunidas para permitir que você transforme uma simples renda adicional em um sucesso incrível",

          // pt - home - shareI
          // pt - home - shareI
          // pt - home - shareI
          // pt - home - shareI
          // pt - home - shareI
          // pt - home - shareI
          // pt - home - shareI
          // pt - home - shareI
          // pt - home - shareI
          // pt - home - shareI
          "-Share": "",

          "-Earn passive income every time your followers share your posts":
            "Ganhe renda passiva toda vez que seus seguidores compartilharem suas postagens",

          "-With Omisify you earn money when your subscribers share your post":
            "Com o Omisify você ganha dinheiro quando seus assinantes compartilham sua postagem",

          "-With Omisify you earn money when your subscribers share your video":
            "Com o Omisify você ganha dinheiro quando seus assinantes compartilham seu vídeo",

          "With Omisify you earn money even when you sleep because your subscribers work for you":
            "Com o Omisify você ganha dinheiro mesmo dormindo porque seus assinantes trabalham para você",

          "-Start now and Earn money with your subscribers":
            "Comece agora e ganhe dinheiro com seus assinantes",

          // pt - home - aftershareI.js
          // pt - home - aftershareI.js
          // pt - home - aftershareI.js
          // pt - home - aftershareI.js
          // pt - home - aftershareI.js
          // pt - home - aftershareI.js
          // pt - home - aftershareI.js
          // pt - home - aftershareI.js
          // pt - home - aftershareI.js
          "-Omisify has met all the conditions to allow you to earn money with your subscribers. Start now and earn money with your subscribers, Use them to your advantage and earn money with Omisify":
            "Omisify atendeu a todas as condições para permitir que você ganhe dinheiro com seus assinantes. Comece agora e ganhe dinheiro com seus assinantes, use-os a seu favor e ganhe dinheiro com o Omisify",
        },
      },

      es: {
        translations: {
          "--omisify": "Omisify",
          "-Loading data..": "Cargando datos..",
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

          // es - footer
          // es - footer
          // es - footer
          // es - footer
          // es - footer
          // es - footer
          // es - footer
          // es - footer
          "--omisify-footer": "© 2022 Omisify",
          "--cgu": "Condiciones de uso",
          "--privacy": "Política de confidencialidad",
          "--legal": "Notas legales",

          // es - home - LikeI.js
          // es - home - LikeI.js
          // es - home - LikeI.js
          // es - home - LikeI.js
          // es - home - LikeI.js
          // es - home - LikeI.js
          // es - home - LikeI.js
          // es - home - LikeI.js
          "--influencer": "Influenciador",

          "-Let your subscribers make you money":
            "Deja que tus suscriptores te hagan ganar dinero",

          "-With Omisify you earn money when your subscribers like your post on social networks":
            "Con Omisify ganas dinero cuando a tus suscriptores les gusta tu publicación en las redes sociales",

          "-With Omisify you earn money when your subscribers like your photo":
            "Con Omisify ganas dinero cuando a tus suscriptores les gusta tu foto",

          "-With Omisify you earn money when your subscribers like your video":
            "Con Omisify ganas dinero cuando a tus suscriptores les gusta tu video",

          // es - home - commentI
          // es - home - commentI
          // es - home - commentI
          // es - home - commentI
          // es - home - commentI
          // es - home - commentI
          // es - home - commentI
          // es - home - commentI
          // es - home - commentI
          "-Comment": "Comentario",

          "-Earn money on any comments left on your post":
            "Gana dinero con los comentarios que dejes en tu publicación",

          "-With Omisify you earn money when your subscribers comment on your post":
            "Con Omisify ganas dinero cuando tus suscriptores comentan tu publicación",

          "-With Omisify you earn money when your subscribers comment on your video":
            "Con Omisify ganas dinero cuando tus suscriptores comentan tu vídeo",

          "-Omisify gives you the opportunity to earn money when your subscribers comment on your post, regardless of the nature of the comment, you earn money on any comments left on your post by your subscribers":
            "Omisify le brinda la oportunidad de ganar dinero cuando sus suscriptores comentan su publicación, independientemente de la naturaleza del comentario, usted gana dinero con los comentarios que sus suscriptores dejan en su publicación",

          "-With Omisify, all the conditions have been met to allow you to transform a simple additional income into incredible success":
            "Con Omisify, se han cumplido todas las condiciones para permitirle transformar un simple ingreso adicional en un éxito increíble",

          // es - home - shareI
          // es - home - shareI
          // es - home - shareI
          // es - home - shareI
          // es - home - shareI
          // es - home - shareI
          // es - home - shareI
          // es - home - shareI
          // es - home - shareI
          "-Share": "Compartir",

          "-Earn passive income every time your followers share your posts":
            "Obtenga ingresos pasivos cada vez que sus seguidores compartan sus publicaciones",

          "-With Omisify you earn money when your subscribers share your post":
            "Con Omisify ganas dinero cuando tus suscriptores comparten tu publicación",

          "-With Omisify you earn money when your subscribers share your video":
            "Con Omisify ganas dinero cuando tus suscriptores comparten tu video",

          "-With Omisify you earn money even when you sleep because your subscribers work for you":
            "Con Omisify ganas dinero hasta cuando duermes porque tus suscriptores trabajan para ti",

          "-Start now and Earn money with your subscribers":
            "Empieza ahora y Gana dinero con tus suscriptores",

          // es - home - aftershareI.js
          // es - home - aftershareI.js
          // es - home - aftershareI.js
          // es - home - aftershareI.js
          // es - home - aftershareI.js
          // es - home - aftershareI.js
          // es - home - aftershareI.js
          // es - home - aftershareI.js
          // es - home - aftershareI.js
          "-Omisify has met all the conditions to allow you to earn money with your subscribers. Start now and earn money with your subscribers, Use them to your advantage and earn money with Omisify":
            "Omisify ha cumplido con todas las condiciones para permitirte ganar dinero con tus suscriptores. Comience ahora y gane dinero con sus suscriptores, utilícelos a su favor y gane dinero con Omisify",
        },
      },

      fr: {
        translations: {
          "--omisify": "Omisify",
          "-Loading data..": "Chargement des données..",
          "--choose-language": "Choisissez votre langue",
          "--back-btn": "Retour",
          "--a-intro":
            "Omisify est une plateforme qui proprose des programmes d'affiliation. Augmentez vos revenus en devenant Partenaire Omisify",
          "--join": "Devenir Partenaire Omisify",
          "--favorable":
            "Omisify est favorable pour les influencers et pour les non-influencers !",
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

          // fr - footer
          // fr - footer
          // fr - footer
          // fr - footer
          // fr - footer
          // fr - footer
          // fr - footer
          // fr - footer
          "--omisify-footer": "© 2022 Omisify",
          "--cgu": "Conditions d'utilisation",
          "--privacy": "Politique de confidentialité",
          "--legal": "Mentions légales",

          // fr - home - LikeI.js
          // fr - home - LikeI.js
          // fr - home - LikeI.js
          // fr - home - LikeI.js
          // fr - home - LikeI.js
          // fr - home - LikeI.js
          // fr - home - LikeI.js
          // fr - home - LikeI.js
          "--influencer": "Influenceur",

          "-Let your subscribers make you money":
            "Laisser vos abonnés vous faire gagner de l'argent",

          "-With Omisify you earn money when your subscribers like your post on social networks":
            "Avec Omisify vous gagnez de l'argent lorsque vos abonnés like votre publication sur les réseaux sociaux",

          "-With Omisify you earn money when your subscribers like your photo":
            "Avec Omisify vous gagnez de l'argent lorsque vos abonnés like votre photo",

          "-With Omisify you earn money when your subscribers like your video":
            "Avec Omisify vous gagnez de l'argent lorsque vos abonnés like votre vidéo",

          // fr - home - commentI
          // fr - home - commentI
          // fr - home - commentI
          // fr - home - commentI
          // fr - home - commentI
          // fr - home - commentI
          // fr - home - commentI
          // fr - home - commentI
          // fr - home - commentI

          "-Comment": "Commentaire",

          "-Earn money on any comments left on your post":
            "Gagner de l'argent sur tout commentaires laissés sur votre publication",

          "-With Omisify you earn money when your subscribers comment on your post":
            "Avec Omisify vous gagnez de l'argent lorsque vos abonnés commentent votre publication",

          "-With Omisify you earn money when your subscribers comment on your video":
            "Avec Omisify vous gagnez de l'argent lorsque vos abonnés commentent votre vidéo",

          "-Omisify gives you the opportunity to earn money when your subscribers comment on your post, regardless of the nature of the comment, you earn money on any comments left on your post by your subscribers":
            "Omisify vous donne la possibilité de gagner de l'argent lorsque vos abonnés commente votre publication, peu importe la nature du commentaire, vous gagnez de l'argent sur tout commentaires laissés sur votre publication par vos abonnés",

          "-With Omisify, all the conditions have been met to allow you to transform a simple additional income into incredible success":
            "Avec Omisify toutes les conditions ont été réunies pour vous permettre de transformer un simple complément de revenue en succèss incroyable",

          // fr - home - shareI
          // fr - home - shareI
          // fr - home - shareI
          // fr - home - shareI
          // fr - home - shareI
          // fr - home - shareI
          // fr - home - shareI
          // fr - home - shareI
          // fr - home - shareI
          "-Share": "Partage",

          "-Earn passive income every time your followers share your posts":
            "Gagner un revenu passif chaque fois que vos abonnés partagent vos publications",

          "-With Omisify you earn money when your subscribers share your post":
            "Avec Omisify vous gagnez de l'argent lorsque vos abonnés partagent votre publication",

          "-With Omisify you earn money when your subscribers share your video":
            "Avec Omisify vous gagnez de l'argent lorsque vos abonnés partagent votre vidéo",

          "-With Omisify you earn money even when you sleep because your subscribers work for you":
            "Avec Omisify vous gagnez de l'argent même lorsque vous dormez car vos abonnés travaillent pour vous",

          "-Start now and Earn money with your subscribers":
            "Commencer maintenant et Gagner de l'argent avec vos abonnés",

          // fr - home - aftershareI.js
          // fr - home - aftershareI.js
          // fr - home - aftershareI.js
          // fr - home - aftershareI.js
          // fr - home - aftershareI.js
          // fr - home - aftershareI.js
          // fr - home - aftershareI.js
          // fr - home - aftershareI.js
          "-Omisify has met all the conditions to allow you to earn money with your subscribers. Start now and earn money with your subscribers, Use them to your advantage and earn money with Omisify":
            "Omisify à réunie toutes les conditions pour vous permettre de gagner de l'argent avec vos abonnés. Commencer maintenant et gagner de l'argent avec vos abonnés, Utilisez-les à votre avantage et gagnez de l'argent avec Omisify",
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
