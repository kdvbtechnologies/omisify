import AkouaFooter from "./AkouaFooter";

export default function AkouaHeader() {
  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@Akoua Kamagate</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : Kamagate Akoua Djenebou</p>
              <p>Sexe : Féminin</p>
              <p>Pays : Côte d'Ivoire</p>
              <p>Age : 21 ans</p>
              <p>Page Facebook : Djene Adou</p>
              <p>Code de Bienvenue : _ _ _</p>
              <p>Catégorie : Influenceur</p>
              <p>Méthode de Paiement préféré : _ _ _</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <AkouaFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
