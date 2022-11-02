import axios from "axios";
import { useState } from "react";
import Loader from "../Partenaire Omisify/Loader";
import { useTranslation } from "react-i18next";

export default function D() {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  async function Next(e) {
    setIsLoading(true);
    e.preventDefault();
    window.location = "/influencer";
  }

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
          "Cet utilisateur a été présent sur la page d'accueil D d'Omisify";
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
      <div className="align-part-d">
        <div className="part-d">
          <div className="title">
            <p>{t("--remuneration")}</p>
          </div>
          <li>{t("--1comment")}</li>
          <li>{t("--1e10k")}</li>
          <li>{t("--1email")}</li>
          <li>{t("--1likec")}</li>
          <li>{t("--1likep")}</li>
          <li>1 M10k = 0.7 point</li>
          <li>1 Message = 0.3 point</li>
          <li>1 MWI = 5 points</li>
          <li>1 Publication = 1 point</li>
          <li>1 PWI = 5 points</li>
          <li>1 PWP = 0.1 point</li>
          <li>1000 Points = 1€</li>
          <p>{t("--nb")}</p>
          <div className="go-down-i">
            <i>{t("--turn")}</i>
          </div>
        </div>
      </div>

      <div className="see-more">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <button onClick={Next}>{t("--see-more")}</button>
          </>
        )}
      </div>
    </>
  );
}
