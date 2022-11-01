import axios from "axios";
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

  async function get() {
    await axios
      .get("https://ip.nf/me.json")
      .then((res) => {
        console.log(res.data.ip.country);

        const getcountryip = res.data.ip.country;
        if (getcountryip) {
          localStorage.setItem("https://omisify.com/countryip", getcountryip);
        }

        const getcityip = res.data.ip.city;
        if (getcityip) {
          localStorage.setItem("https://omisify.com/cityip", getcityip);
        }

        const getuserip = res.data.ip.ip;
        if (getuserip) {
          localStorage.setItem("https://omisify.com/userip", getuserip);
        }

        const page =
          "Cet utilisateur a été présent sur la page partner de son compte Omisify";
        const countryip = localStorage.getItem("https://omisify.com/countryip");
        const cityip = localStorage.getItem("https://omisify.com/cityip");
        const userip = localStorage.getItem("https://omisify.com/userip");
        const userId = localStorage.getItem("https://omisify.com/userId");
        const name = localStorage.getItem("https://omisify.com/name");
        const shortname = localStorage.getItem("https://omisify.com/shortname");
        const partnername = localStorage.getItem(
          "https://omisify.com/partnername"
        );

        const getdate = new Date();
        const date = getdate.toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        });

        axios({
          method: "post",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/panel/add`,
          data: {
            countryip,
            cityip,
            userip,
            page,
            date,
            userId,
            shortname,
            partnername,
            name,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
  get();

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
              <p>Code B : {codewelcome}</p>
              <p>Journées de générosité : {generositydays}</p>
              <p>Méthode de Paiement préféré : {paymentmethod}</p>
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
