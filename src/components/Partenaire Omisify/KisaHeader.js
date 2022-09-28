import KisaFooter from "./KisaFooter";

export default function KisaHeader() {
  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@Kisa Djata</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : NZawanene Kisa Djata Aimée Gloria</p>
              <p>Sexe : Féminin</p>
              <p>Pays : RDC</p>
              <p>Age : 19 ans</p>
              <p>Page Facebook : Story of the life</p>
              <p>Code de Bienvenue : _ _ _</p>
              <p>Catégorie : Influenceur</p>
              <p>Méthode de Paiement préféré : _ _ _</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <KisaFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
