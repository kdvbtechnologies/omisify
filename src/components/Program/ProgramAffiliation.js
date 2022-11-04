import axios from "axios";
import { useEffect, useState } from "react";

export default function ProgramAffiliation() {
  const [isActive, setIsActive] = useState(false);
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/panel/`)
        .then((res) => {
          setApi(res.data);
        })
        .catch((err) => console.log(err));
    }
    get();
  }, []);

  const data = api.filter((user) => user.adstatus === "no validate");
  console.log(data);

  return (
    <>
      <div className="accordion-item">
        {api
          .filter((user) => user.adstatus === "no validate")
          .map((api) => (
            <>
              <div
                className="accordion-title"
                onClick={() => setIsActive(!isActive)}
              >
                <div>{api.affiliateprogramname}</div>
                <div>{isActive ? "-" : "+"}</div>
              </div>
            </>
          ))}

        {isActive && (
          <div className="accordion-programs">
            {api
              .filter((filter) => filter.adstatus === "no validate")
              .map((api) => (
                <>
                  <div className="accordion-program">
                    Programme publicitaire : {api.affiliateprogramname}"
                  </div>

                  <div className="accordion-program">
                    Lien publicitaire : https://omisify.com
                  </div>
                </>
              ))}
          </div>
        )}

        {isActive && (
          <div className="accordion-desc">
            <div className="program-presentation">
              <p>Présentation de la publicité</p>
            </div>
            programDesc. Omisify est une plateforme qui proprose des programmes
            d'affiliation. Vous pourrez augmenter vos revenus en devenant
            Partenaire Omisify. Omisify est gratuit et rémunère toujours ses
            partenaires quelque soit le pays dans lequel vous vous trouver et
            quelque soit la situation de votre pays. Avec Omisify vous pourrez
            retirer votre rémunération à tout moment que vous le souhaiterez.
            Gagnez de l'argent avec Omisify !
          </div>
        )}
        {isActive && (
          <div className="">
            <p>Consigne : Lien publicitaire obligatoire</p>
            <p>Condition :</p>
            <p>Pour les influenceurs</p>
            <p>Pour les Influenceurs Vidéos</p>
            <p>Pour les Non-Influenceurs</p>
            <p>Indice</p>
            <p>Indice pour les Influenceurs</p>
            <p>Indice pour les Influenceurs videos</p>
            <p>Indice pour les Non-influenceurs</p>
            <p>MWI</p>
            <p>
              Par exemple sur Facebook il y'a beaucoup de personnes qui sont
              dans votre liste d'amis mais vous ne les connaissez pas et entre
              vous deux personne n'a jamais fait le premier pas pour démarrer la
              discussion. Maintenant foncer, faites le premier pas, démarrer la
              discussion. Prenez du temps jusqu'à ce qu'il soit à un stade où la
              confiance s'installe entre vous deux et maintenant qu'il vous fait
              confiance commencer à lui parler d'Omisify Business comme votre
              mentor vous l'a enseigné
            </p>
            <p>
              Envoyer des demandes d'ami à de nouvelles personnes, prenez du
              temps, installer la confiance comme votre mentor vous l'a
              enseigné, une fois la confiance installé, il est prêt à écouter et
              à aller jusqu'au bout de la chose (visiter le site, télécharger
              l'application, visiter le profil de l'entreprise sur les réseaux
              sociaux, visiter le magasin,..). Prener lui par la main et Guider
              lui à chaque étape comme votre mentor vous l'a enseigné
            </p>
            <p>
              Ce qui s'applique sur Facebook est appliquable sur tout les types
              de réseaux sociaux. Vous pouvez l'appliquer sur tout les types de
              réseaux sociaux, vous pouvez même l'appliquer sur Whatsapp ou sur
              Telegram ou sue tout les types d'application de messagerie
            </p>
            <p>
              Par exemple sur Whatsapp, rejoignez un groupe Whatsapp comme votre
              mentor vous l'a enseigné, ensuite diriger vous vers la liste des
              membres du groupe et oser, entrer en contact avec certaines
              personnes, mettez leur en situation de confiance et recommander
              leur des produits ou des entreprises{" "}
            </p>
            <p>Message</p>
            <p>
              Donner leur envie d'acheter le produit, de visiter le magasin, de
              contacter l'entreprise ou de télécharger l'application, donner
              leur le maximum d'avantages et de bénéfices que contient le
              produit, le maximum d'information pour faire le premier pas
            </p>

            <p>Mot(s) Clé(s) : Omisify, Argent, Gagner</p>
            <p>
              Terme(s) clé(s) : Gagnez de l'argent avec Omisify, Devenez
              Partenaire Omisify, Augmentez vos revenus avec Omisify
            </p>
          </div>
        )}
      </div>
    </>
  );
}
