import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Finish() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");

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
          "Cet utilisateur a été présent sur la page Finish -dossier /More d'Omisify";
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
      <div className="email-shrink">
        <div className="email-c">
          <p>
            Devenez Partenaire Omisify, Travaillez à n'importe quel moment et
            Gagnez de l'argent avec Omisify
          </p>
          <p>
            Omisify a réunie toutes les conditions pour vous permettre de
            transformer un simple complément de revenue en succèss incroyable
          </p>
          <div className="align-button">
            {userId && shortname && partnername && name ? (
              <>
                <NavLink to="/partner">
                  <button>Devenir Partenaire Omisify</button>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/signup">
                  <button>Devenir Partenaire Omisify</button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
