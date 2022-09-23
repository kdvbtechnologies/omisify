import { NavLink, useNavigate } from "react-router-dom";

export default function MentionsAction() {
  const navigate = useNavigate();

  return (
    <>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="main-politique">
        <div className="politique">
          <h1>Mentions légales</h1>
          <h2>Conditions d'utilisation</h2>
          <p>
            Toute personne qui accède au site Omisify.com (ci-après le "Site")
            s'engage à respecter les présentes conditions d'utilisation, qui
            pourront pour certains services être complétées par des conditions
            particulières. Les données diffusées sur le réseau internet et
            extranet peuvent être réglementées en termes d'usage ou être
            protégées par un droit de propriété.
          </p>
          <p>
            Toute personne est responsable des données qu'elle diffuse, utilise
            et/ou transfère et s'engage à ce titre à respecter la réglementation
            brésilienne en vigueur, notamment celle relative aux contenus
            manifestement illicites (pédophilie, incitation à la haine
            raciale...) ou la protection des droits des tiers (droits de
            propriété intellectuelle....).
          </p>
          <p>
            Les données, comprenant leur contenu, les profils et les outils qui
            y sont rattachés et les marques commerciales présentes sur le Site,
            sont protégées par un droit de propriété intellectuelle. Toute
            reproduction ou représentation, même partielle des éléments
            susmentionnés, à d'autres fins qu'une utilisation privative, sur un
            quelconque support, est interdite et pourrait engager la
            responsabilité civile et pénale de la personne qui ne respecterait
            pas cette interdiction.
          </p>
          <p>
            Nous vous invitons à prendre connaissance de nos{" "}
            <NavLink to="/conditions">
              termes et conditions d'utilisation.
            </NavLink>
          </p>
        </div>
        <div className="politique">
          <h2>Protection des données personnelles</h2>
          <p>
            Nous vous invitons à prendre connaissance de notre
            <NavLink to="/mentions"> politique de confidentialité</NavLink> qui
            présente les règles de protection des données personnelles dans le
            cadre de l'utilisation de notre plateforme.
          </p>
        </div>
        <div className="politique">
          <h2>Utilisation du courrier électronique</h2>
          <p>
            Si vous souhaitez utiliser le courrier électronique mis à votre
            disposition sur ce site, vous êtes informé(e) que le secret des
            correspondances transmises sur le réseau Internet n'est pas garanti.
          </p>
        </div>
      </div>
    </>
  );
}
