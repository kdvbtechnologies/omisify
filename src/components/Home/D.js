import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../Partenaire Omisify/Loader";

export default function D() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

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

  async function Next(e) {
    setIsLoading(true);
    e.preventDefault();
    window.location = "/influencer";
  }

  return (
    <>
      <div className="align-part-d">
        <div className="part-d">
          <div className="title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              width="30px"
              fill="red"
              enableBackground="new 0 0 490.766 490.766"
              version="1.1"
              viewBox="0 0 490.766 490.766"
              xmlSpace="preserve"
            >
              <path d="M472.554 319.199c-9.4-.7-28.8 9.8-34.1 12.5-18.9 9.5-45.2 24.4-62.5 36.3-1.2.8-2.8 1.9-4 2.7-7.8 5-16 8.3-25.1 10.3-50.2 10.7-123.3 11.8-123.3 11.8l-4.3.2c-3.2.2-6.1-2.1-6.5-5.2-.5-3.4 2-6.6 5.6-6.9l108.7-10.3c12-1.3 21.5-12.5 20.2-25.1s-12.9-21.8-24.9-20.5l-96.7-1.2c-6.6-.1-17.1-1.7-23.4-3.6-62.3-18.2-97.5-1.2-116.2 6.8-4.2-6.9-12.1-11.4-20.9-10.8l-41.7 2.8c-13.9.9-24.3 12.5-23.4 25.9l6.7 92.6c1 13.4 13 23.5 26.9 22.5l41.7-2.8c8.8-.6 16-6 19.1-13.4l183.2 7.9c20.4 2.2 39.5-.3 57.5-9.7l5.2-2.7 138.5-81c6.8-4 11.6-10.9 11.9-18.5.3-9.3-5-19.6-18.2-20.6zm-423.6 118.9c-7.8 0-14.2-6.1-14.2-13.7s6.4-13.7 14.2-13.7 14.2 6.1 14.2 13.7-6.4 13.7-14.2 13.7zm320.6-87c.2-2.5.2-5.1-.1-7.7-.3-3.3-1.1-6.4-2.1-9.4.1-.2.2-.4.2-.6 14.6-8 43.2-21.8 58.8-27.9 7.8-3.1 15.5-2.9 22.6 1.9-5.6 2-10.8 4.5-15.7 6.9-16.4 8.2-45.3 23.9-59.4 33.8-1.4 1-2.9 2-4.3 3zm41.8-54.9c-11.3 5-33 12.6-43.3 18.3l-7 3.8c-.7.4-1.3.8-1.9 1.3-3.1-3.7-6.8-6.8-10.9-9.3 9.6-5.1 31-12 40.7-15.8 7.8-3.1 15.3-2.9 22.4 1.7zm-155.3-231.6c-29.7 0-53.7 24.1-53.7 53.7s24.1 53.7 53.7 53.7c29.7 0 53.7-24.1 53.7-53.7s-24-53.7-53.7-53.7zm15.4 74.9c-2.3 2.8-5.4 4.8-9 5.7-1.6.4-2.2 1.2-2.2 2.9.1 1.6 0 3.2 0 4.8 0 1.4-.7 2.2-2.1 2.2h-5.1c-1.5 0-2.2-.9-2.2-2.3v-3.5c0-2.6-.1-2.7-2.6-3.1-3.1-.5-6.2-1.2-9.1-2.6-2.3-1.1-2.5-1.7-1.8-4 .5-1.8 1-3.5 1.5-5.3.6-2 1.2-2.3 3-1.3 3.2 1.7 6.6 2.6 10.1 3 2.3.3 4.5.1 6.6-.9 3.9-1.7 4.6-6.3 1.2-9.1-1.1-.9-2.4-1.6-3.8-2.2-3.5-1.5-7.1-2.7-10.3-4.6-5.3-3.2-8.7-7.5-8.3-14 .4-7.3 4.6-11.9 11.3-14.3 2.8-1 2.8-1 2.8-3.9v-2.9c.1-2.2.4-2.5 2.6-2.6h2c4.6 0 4.6 0 4.6 4.6 0 3.3 0 3.3 3.3 3.8 2.5.4 4.9 1.1 7.2 2.1 1.3.6 1.8 1.4 1.4 2.8-.6 2-1.1 4-1.8 6-.6 1.9-1.2 2.1-3 1.3-3.6-1.7-7.4-2.5-11.4-2.3-1 .1-2.1.2-3 .6-3.4 1.5-4 5.3-1.1 7.6 1.5 1.2 3.2 2 4.9 2.8 3 1.3 6.1 2.5 9 4.1 9.4 5.2 11.8 16.7 5.3 24.6zm77.7-21.2c0 8.2-6.7 14.9-14.9 14.9s-14.9-6.7-14.9-14.9 6.7-14.9 14.9-14.9 14.9 6.7 14.9 14.9zm-156.3 0c0 8.2-6.7 14.9-14.9 14.9s-14.9-6.7-14.9-14.9 6.7-14.9 14.9-14.9 14.9 6.7 14.9 14.9zm180.2-87.6h-234c-13.5 0-24.5 11-24.5 24.5v126.2c0 13.5 11 24.5 24.5 24.5h234c13.5 0 24.5-11 24.5-24.5v-126.2c0-13.5-11-24.5-24.5-24.5zm3.6 127.2c-2-.5-4-.8-6.1-.8-13.7 0-24.8 11.1-24.8 24.8 0 1 .1 2.1.2 3.1h-181.7c.3-1.5.4-3 .4-4.6 0-13.7-11.1-24.8-24.8-24.8-1.5 0-2.9.1-4.4.4v-75.4c1.4.3 2.9.4 4.4.4 13.7 0 24.8-11.1 24.8-24.8 0-1.6-.1-3.1-.4-4.6h182.2c-.5 1.9-.8 4-.8 6.1 0 13.7 11.1 24.8 24.8 24.8 2.1 0 4.2-.3 6.1-.8v76.2h.1zm-261.7 75.1c0-5.8 4.7-10.5 10.5-10.5h261.7c5.8 0 10.5 4.7 10.5 10.5s-4.7 10.5-10.5 10.5h-261.8c-5.7 0-10.4-4.7-10.4-10.5zm0 38c0-5.8 4.7-10.5 10.5-10.5h261.7c5.8 0 10.5 4.7 10.5 10.5s-4.7 10.5-10.5 10.5h-261.8c-5.7 0-10.4-4.7-10.4-10.5z"></path>
            </svg>
            <p>{t("--remuneration")}</p>
          </div>

          <li>{t("--1comment")}</li>
          <li>{t("--1e10k")}</li>
          <li>{t("--1email")}</li>
          <li>{t("--1likec")}</li>
          <li>{t("--1likep")}</li>
          <li>{t("--1m10k")}</li>
          <li>{t("--1message")}</li>
          <li>{t("--1mwi")}</li>
          <li>{t("--1post")}</li>
          <li>{t("--1pwi")}</li>
          <li>{t("--1pwp")}</li>
          <li>{t("--1euro")}</li>
          <p>{t("--nb")}</p>
          <div className="go-down-i">
            <i>{t("--turn")}</i>
          </div>
        </div>
      </div>

      <div className="see-more">
        {isLoading ? (
          <>
            <p>{t("-Loading data..")}</p>
            <Loader />
          </>
        ) : (
          <>
            <button onClick={Next}>{t("--see-more")}</button>
          </>
        )}
      </div>
    </>
  );
}
