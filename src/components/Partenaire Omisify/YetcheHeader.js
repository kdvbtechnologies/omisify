import YetcheFooter from "./YetcheFooter";

export default function YetcheHeader() {
  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@Yetche Aldo</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : Yetche Siegomnou Aldo</p>
              <p>Sexe : Homme</p>
              <p>Pays : Cameroun</p>
              <p>Age : 32 ans</p>
              <p>Compte Facebook : Yetche Siegomnou Aldo</p>
              <p>Code de Bienvenue : Crypto90</p>
              <p>Catégorie : Non-Influenceur</p>
              <p>Méthode de Paiement préféré : _ _ _</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <YetcheFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
