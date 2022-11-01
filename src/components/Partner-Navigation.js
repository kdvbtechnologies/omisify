import axios from "axios";
import { NavLink } from "react-router-dom";

export default function PartnerNavigation() {
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

        const page = "Cet Utilisateur a été présent sur la navbar d'Omisify";
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
      <div className="navigation">
        <div className="left-navigation">
          <NavLink className="navlink" to="/">
            <li>Omisify</li>
          </NavLink>
        </div>
        <div className="right-navigation">
          {userId && shortname && partnername && name ? (
            <>
              <NavLink className="navlink" to="/partner">
                <li>{shortname}</li>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="navlink" to="/partner">
                <li>Connexion</li>
              </NavLink>
            </>
          )}

          {userId && shortname && partnername && name ? (
            <>
              <NavLink className="navlink" to="/secure-menu">
                <li>Menu</li>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="navlink" to="/menu">
                <li>Menu</li>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
}
