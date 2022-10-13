import PartnerFooter from "./PartnerFooter";

export default function PartnerHeader() {
  const name = localStorage.getItem("https://omisify.com/name");
  const partnername = localStorage.getItem("https://omisify.com/partnername");

  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@{partnername}</p>
              </div>
              <div className="partner-role">
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : {name}</p>
              <p>Sexe : _ _ _</p>
              <p>Pays : _ _ _</p>
              <p>Age : _ _ _</p>
              <p>Code de Bienvenue : _ _ _</p>
              <p>Méthode de Paiement préféré : _ _ _</p>
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <PartnerFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
