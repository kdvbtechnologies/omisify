import { NavLink } from "react-router-dom";
import axios from "axios";

export default function A() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");

  async function get() {
    await axios
      .get("https://ip.nf/me.json")
      .then((res) => {
        console.log(res.data.ip.country);

        const countryip = res.data.ip.country;
        if (countryip) {
          localStorage.setItem("https://omisify.com/countryip", countryip);
        }

        const cityip = res.data.ip.city;
        if (cityip) {
          localStorage.setItem("https://omisify.com/cityip", cityip);
        }

        const userip = res.data.ip.ip;
        if (userip) {
          localStorage.setItem("https://omisify.com/userip", userip);
        }
      })
      .catch((err) => console.log(err));
  }
  get();

  return (
    <div className="a">
      <p>
        Omisify est une plateforme qui proprose des programmes d'affiliation.
        Augmentez vos revenus en devenant Partenaire Omisify
      </p>
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
  );
}
