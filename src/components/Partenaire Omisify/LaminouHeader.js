import LaminouFooter from "./LaminouFooter";

export default function LaminouHeader() {
  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@Laminou Akram</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : Laminou Akram</p>
              <p>Sexe : Homme</p>
              <p>Pays : Bénin</p>
              <p>Age : 20 ans</p>
              <p>Compte Facebook : Chi nän</p>
              <p>Code de Bienvenue : _ _ _</p>
              <p>Catégorie : Non-Influenceur</p>
              <p>Méthode de Paiement préféré : _ _ _</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <LaminouFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
