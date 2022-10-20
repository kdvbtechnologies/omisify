import PartnerFooter from "./PartnerFooter";

export default function PartnerHeader() {
  const name = localStorage.getItem("https://omisify.com/name");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const age = localStorage.getItem("https://omisify.com/age");
  const country = localStorage.getItem("https://omisify.com/country");
  const codewelcome = localStorage.getItem("https://omisify.com/codewelcome");
  const genre = localStorage.getItem("https://omisify.com/genre");
  const paymentmethod = localStorage.getItem(
    "https://omisify.com/paymentmethod"
  );
  const generositydays = localStorage.getItem(
    "https://omisify.com/generositydays"
  );

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
              <p>Genre : {genre}</p>
              <p>Pays : {country}</p>
              <p>Age : {age}</p>
              <p>Code de Bienvenue : {codewelcome}</p>
              <p>Méthode de Paiement préféré : {paymentmethod}</p>
              <p>Journées de générosité : {generositydays}</p>
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
