import SimoFooter from "./SimoFooter";

export default function SimoHeader() {
  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@Simo Randy</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : Simo Randy</p>
              <p>Sexe : Homme</p>
              <p>Pays : Cameroun</p>
              <p>Age : 25 ans</p>
              <p>Compte Facebook : Randy Chef</p>
              <p>Code de Bienvenue : _ _ _</p>
              <p>Catégorie : Non-Influenceur</p>
              <p>Méthode de Paiement préféré : _ _ _</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <SimoFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
