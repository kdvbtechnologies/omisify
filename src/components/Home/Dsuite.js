import axios from "axios";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Dsuite() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");
  const { t } = useTranslation();

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
          "Cet utilisateur a été présent sur la page d'accueil Dsuite d'Omisify";
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
      <div className="dsuite-shrink">
        <div className="dsuite">
          <div className="left">
            <div className="svg-c">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                width="17px"
                fill="red"
                enableBackground="new 0 0 51.997 51.997"
                version="1.1"
                viewBox="0 0 51.997 51.997"
                xmlSpace="preserve"
              >
                <path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477z"></path>
              </svg>
            </div>

            <div className="svg-b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                width="20px"
                fill="blue"
                enableBackground="new 0 0 485.027 485.027"
                version="1.1"
                viewBox="0 0 485.027 485.027"
                xmlSpace="preserve"
              >
                <path
                  fill="#3C92CA"
                  d="M109.4 459.991H13c-2.1 0-3.9-1.8-3.9-3.9v-248.4c0-2.1 1.8-3.9 3.9-3.9h96.4c2.1 0 3.9 1.8 3.9 3.9v248.4c0 2.1-1.7 3.9-3.9 3.9z"
                ></path>
                <path d="M284.6 20.391c-28.2-20.7-67.2-8.8-68.8-8.3-3.8 1.2-6.3 4.7-6.3 8.6v85.8c0 29.1-13.8 53.7-41.1 73.2-21.1 15.1-42.7 21.3-42.9 21.4-.2 0-.3.1-.5.2l-5.1 1.7c-3-4.9-8.3-8.2-14.5-8.2H16.9c-9.3 0-16.9 7.6-16.9 16.9v240.5c0 9.3 7.6 16.9 16.9 16.9h88.6c8 0 14.7-5.6 16.4-13 11.9 12.7 28.8 20.7 47.6 20.7h209.8c44.6 0 73.1-23.3 78.1-64l26.8-170.2c3.9-24.7-6.2-49.7-25.8-63.7-11.1-8-24.2-12.2-37.9-12.2H311.4v-79.6c0-31.2-9-53.6-26.8-66.7zm-180.4 430.5H18.1v-238h86.1v238zm316.3-266.1c9.9 0 19.3 3 27.3 8.8 14 10.1 21.3 28.2 18.4 46.2l-26.7 170.3v.3c-4.9 39.8-35.4 48.2-60.2 48.2H169.5c-26 0-47.1-21.1-47.1-47.1v-190.2l8.3-2.8c2.9-.8 25.2-7.6 47.8-23.7 32.1-22.8 49.1-53.3 49.1-88.2v-78.6c10.4-2 31.3-4 46.4 7.1 12.8 9.4 19.3 26.9 19.3 52v88.7c0 5 4.1 9.1 9.1 9.1h118.1v-.1z"></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                width="17px"
                fill="red"
                enableBackground="new 0 0 51.997 51.997"
                version="1.1"
                viewBox="0 0 51.997 51.997"
                xmlSpace="preserve"
              >
                <path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477z"></path>
              </svg>
            </div>

            <div className="svg-a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                width="23px"
                fill="blue"
                enableBackground="new 0 0 486.926 486.926"
                version="1.1"
                viewBox="0 0 486.926 486.926"
                xmlSpace="preserve"
              >
                <path d="M462.8 181.564c-12.3-10.5-27.7-16.2-43.3-16.2H314.4v-75.9c0-31.9-9.3-54.9-27.7-68.4-29.1-21.4-69.2-9.2-70.9-8.6-5 1.6-8.4 6.2-8.4 11.4v84.9c0 27.7-13.2 51.2-39.3 69.9-19.5 14-39.4 20.1-41.5 20.8l-2.9.7c-4.3-7.3-12.2-12.2-21.3-12.2H24.7c-13.6 0-24.7 11.1-24.7 24.7v228.4c0 13.6 11.1 24.7 24.7 24.7h77.9c7.6 0 14.5-3.5 19-8.9 12.5 13.3 30.2 21.6 49.4 21.6h207.8c45.9 0 75.2-24 80.4-66l26.9-166.9c3.7-24-5.2-48.6-23.3-64zm-359.6 259.5c0 .4-.3.7-.7.7H24.7c-.4 0-.7-.3-.7-.7v-228.4c0-.4.3-.7.7-.7h77.9c.4 0 .7.3.7.7v228.4h-.1zm359-199.3l-26.8 167.2c0 .1 0 .3-.1.5-3.7 29.9-22.7 45.1-56.6 45.1H170.9c-21.3 0-39.8-15.9-43.1-36.9-.1-.7-.3-1.4-.5-2.1v-191.6l5.2-1.2c.2 0 .3-.1.5-.1 1-.3 24.7-7 48.6-24 32.7-23.2 49.9-54.3 49.9-89.9v-75.3c10.4-1.7 28.2-2.6 41.1 7 11.8 8.7 17.8 25.2 17.8 49v87.8c0 6.6 5.4 12 12 12h117.1c9.9 0 19.8 3.7 27.7 10.5 11.8 10.1 17.6 26.2 15 42z"></path>
              </svg>
            </div>
          </div>
          <div className="right">
            <p>
              Plutot que de perdre votre temps à publier des commentaires et
              liker des publications sur les réseaux sociaux, inverser les
              choses, désormais travaillez avec Omisify et gagnez de l'argent
              avec vos réseaux sociaux
              {/*  
              {t(
                "-Even if you are not an influencer, Omisify gives you the opportunity to earn money when your friend likes your photo"
              )}
              */}
            </p>

            <p>Aucun diplome n'est nécessaire pour travailler avec Omisify</p>
            <p>
              Aucune expérience profesionnelle n'est nécessaire pour travailler
              avec Omisify
            </p>
            <p>
              Juste votre forfait internet et vous êtes prêt à débuter le
              travail
            </p>
            <p>Lancez-vous maintenant</p>
            <button>Travailler avec Omisify</button>
          </div>
        </div>

        <div className="align-button-dsuite-shrink">
          {userId && shortname && partnername && name ? (
            <>
              <p>Lancez-vous maintenant</p>
              <NavLink to="/partner">
                <button>Travailler avec Omisify</button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signup">
                <button>{t("--join")}</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
}
