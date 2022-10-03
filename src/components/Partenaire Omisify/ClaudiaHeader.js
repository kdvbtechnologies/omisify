import ClaudiaFooter from "./ClaudiaFooter";

export default function ClaudiaHeader() {
  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@Claudia Espérance</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : N'Da Akoua Anadia Claudia Espérance</p>
              <p>Sexe : Femme</p>
              <p>Pays : Côte d'Ivoire</p>
              <p>Age : 22 ans</p>
              <p>Compte Facebook : espérance n'da</p>
              <p>Code de Bienvenue : _ _ _</p>
              <p>Catégorie : Non-Influenceur</p>
              <p>Méthode de Paiement préféré : _ _ _</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <ClaudiaFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}