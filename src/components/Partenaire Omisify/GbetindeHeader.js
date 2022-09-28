import GbetindeFooter from "./GbetindeFooter";

export default function GbetindeHeader() {
  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@Gbetinde Epiphane</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : Gbetinde Epiphane</p>
              <p>Sexe : Homme</p>
              <p>Pays : Bénin</p>
              <p>Age : 18 ans</p>
              <p>Compte Facebook : Epiphane Gbetinde</p>
              <p>Code de Bienvenue : _ _ _</p>
              <p>Catégorie : Non-Influenceur</p>
              <p>Méthode de Paiement préféré : _ _ _</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <GbetindeFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
