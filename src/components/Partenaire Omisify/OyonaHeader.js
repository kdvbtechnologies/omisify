import OyonaFooter from "./OyonaFooter";

export default function OyonaHeader() {
  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@Oyona Mimfele</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : Mimfele Oyona Lyse</p>
              <p>Sexe : Féminin</p>
              <p>Pays : Cameroun</p>
              <p>Age : 19 ans</p>
              <p>Date d'inscription : 27/09/2022</p>
              <p>Page Facebook : Les histoires de Lyse</p>
              <p>Code de Bienvenue : _ _ _</p>
              <p>Catégorie : Influenceur</p>
              <p>Méthode de Paiement préféré : _ _ _</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <OyonaFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
