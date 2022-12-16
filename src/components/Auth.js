import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import LoginNav from "./Auth/LoginNav";
import Back from "./Back/Back";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth() {
  const [signup, setSignup] = useState(true);

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
          "Cet utilisateur a été présent sur la page de connexion d'Omisify";
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

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(-1)}>
        <Back />
      </div>

      <div style={family} className="login">
        <div>
          <button
            onClick={() => setSignup(true)}
            style={{ color: signup ? "blue" : "white" }}
          >
            Connexion
          </button>
          <button
            onClick={() => setSignup(false)}
            style={{ color: signup ? "white" : "blue" }}
          >
            Inscription
          </button>
          {signup ? <Login /> : <Signup />}
        </div>
      </div>
    </>
  );
}
