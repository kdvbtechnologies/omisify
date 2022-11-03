import axios from "axios";
import { NavLink } from "react-router-dom";

export default function A() {
  async function get() {
    await axios
      .get("https://ip.nf/me.json")
      .then((res) => {
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

        const page = "Cet utilisateur a visité la Page d'accueil O.Business";
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
        }).catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
  get();

  return (
    <div className="a">
      <p>
        Omisify Business est une plateforme qui vends de la Publicité. Augmentez
        vos ventes et vos bénéfices en utilisant la Publicité des Contacts de
        Confiance d'Omisify Business
      </p>
      <NavLink to="/signup">
        <button>Essayer gratuitement la Publicité</button>
      </NavLink>
    </div>
  );
}
