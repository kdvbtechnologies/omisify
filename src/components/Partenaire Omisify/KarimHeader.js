import KarimFooter from "./KarimFooter";

export default function KarimHeader() {
  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@Karim Zénab</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : Karim Zénab</p>
              <p>Sexe : Féminin</p>
              <p>Pays : Bénin</p>
              <p>Age : 20 ans</p>
              <p>Compte Facebook : Karim Zénab la charmante</p>
              <p>Page Facebook I : Les écrits d'une inconnue</p>
              <p>Page Facebook II : Les chroniques de kaylee</p>
              <p>Groupe Facebook : Ma vie mon choix</p>
              <p>Code de Bienvenue : _ _ _</p>
              <p>Catégorie : Non-Influenceur</p>
              <p>Méthode de Paiement préféré : _ _ _</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <KarimFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
