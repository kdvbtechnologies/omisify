import axios from "axios";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PartnerNavigation from "../../Partner-Navigation";
import { useNavigate } from "react-router-dom";

export default function LikeI() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");
  const { t } = useTranslation();
  const navigate = useNavigate();

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
          "Cet utilisateur a été présent sur la page d'accueil LikeI d'Omisify";
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
      <PartnerNavigation />
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>

      <div className="like-i">
        <div className="like-i-a">
          <p>{t("--influencer")}</p>
          <div className="hr">
            <hr />
          </div>

          <div className="hr">
            <hr />
          </div>
        </div>

        <div className="shrink">
          <div className="box-shadow">
            <div className="like-i-b">
              <i>Like</i>
            </div>
            <div className="like-i-c">
              <p>{t("-Let your subscribers make you money")}</p>
            </div>

            <div className="like-i-d">
              <div className="svg-and-p">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="red"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 94.026 94.026"
                  version="1.1"
                  viewBox="0 0 94.026 94.026"
                  xmlSpace="preserve"
                >
                  <path d="M76.497 6.772c3.207 4.848 3.565 12.041 1.078 21.434 6.192 2.121 14.082 8.084 15.953 24.516 1.612 14.15-.69 24.828-6.856 31.734-4.978 5.579-11.988 8.407-20.841 8.407-14.853 0-31.035-8.331-34.131-10.002a9.25 9.25 0 01-4.857-8.146V35.249a9.249 9.249 0 017.646-9.118c1.334-.235 13.113-2.533 15.66-10.566 2.774-8.749 9.098-14.402 16.112-14.402 4.139 0 7.87 2.043 10.236 5.609zM37.066 74.136c3.143 1.646 16.955 8.504 28.766 8.504 5.895 0 10.217-1.633 13.213-4.989 4.143-4.642 5.598-12.638 4.328-23.771-1.215-10.654-5.619-16.543-12.404-16.583l-7.16-.042 2.367-6.759c2.982-8.516 3.654-15.275 1.801-18.076-.313-.471-.864-1.033-1.715-1.033-1.971 0-4.871 2.548-6.367 7.268-3.992 12.592-18.35 16.475-22.828 17.391l-.001 38.09zM20.011 82.123V30.336a2.024 2.024 0 00-2.025-2.024H2.023A2.024 2.024 0 000 30.336v51.787c0 1.119.906 2.024 2.023 2.024h15.963a2.023 2.023 0 002.025-2.024zm-6.084-5.95a3.927 3.927 0 01-3.922 3.922c-2.162 0-3.922-1.76-3.922-3.922s1.76-3.922 3.922-3.922a3.927 3.927 0 013.922 3.922z"></path>
                </svg>

                <p>
                  {t(
                    "-With Omisify you earn money when your subscribers like your post on social networks"
                  )}
                </p>
              </div>

              <div className="svg-and-p">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="red"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 51.997 51.997"
                  version="1.1"
                  viewBox="0 0 51.997 51.997"
                  xmlSpace="preserve"
                >
                  <path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477zM15.999 9.904c-4.411 0-8 3.589-8 8a1 1 0 11-2 0c0-5.514 4.486-10 10-10a1 1 0 110 2z"></path>
                </svg>

                <p>
                  {t(
                    "-With Omisify you earn money when your subscribers like your photo"
                  )}
                </p>
              </div>

              <div className="svg-and-p">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40px"
                  height="40px"
                  fill="red"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 300.005 300.005"
                  version="1.1"
                  viewBox="0 0 300.005 300.005"
                  xmlSpace="preserve"
                >
                  <path d="M262.934 150.003l-17.486-25.576 2.355-30.89-27.928-13.407-13.412-27.933-30.89 2.355L150 37.068l-25.573 17.484-30.893-2.355L80.127 80.13 52.194 93.537l2.352 30.89-17.478 25.576 17.481 25.573-2.352 30.89 27.933 13.409 13.406 27.931 30.89-2.352L150 262.937l25.573-17.484 30.89 2.352 13.412-27.931 27.931-13.409-2.355-30.89 17.483-25.572zm-141.612 29.741c0 5.701-4.622 10.323-10.323 10.323-5.698 0-10.32-4.622-10.32-10.323V135.74c0-5.703 4.622-10.325 10.32-10.325 5.701 0 10.323 4.622 10.323 10.325v44.004zm72.813-.737c0 8.061-4.71 10.95-12.776 10.95h-37.12c-8.061 0-14.602-6.539-14.602-14.6v-36.516s-.721-6.072 5.999-11.778c3.802-3.232 9.449-9.392 13.388-16.872 7.838-14.854 12.525-19.177 16.101-18.015 13.212 4.282 6.601 23.877 2.339 32.06h12.066c8.069 0 14.605 6.539 14.605 14.605v40.166z"></path>
                  <path d="M150 0C67.159 0 .002 67.162.002 150S67.159 300.005 150 300.005 300.003 232.841 300.003 150 232.841 0 150 0zm80.89 231.541l-15.647 32.594-36.046-2.749-29.842 20.401-29.842-20.401-36.046 2.749-15.645-32.594-32.592-15.642 2.747-36.046-20.409-29.848 20.404-29.842-2.747-36.046 32.592-15.645L83.46 35.88l36.046 2.747 29.842-20.404 29.842 20.404 36.046-2.747 15.647 32.592 32.592 15.645-2.752 36.046 20.404 29.845-20.404 29.845 2.752 36.046-32.585 15.642z"></path>
                </svg>

                <p>
                  {t(
                    "-With Omisify you earn money when your subscribers like your video"
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="align-button">
            {userId && shortname && partnername && name ? (
              <>
                <NavLink to="/partner">
                  <button>{t("--join")}</button>
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
      </div>
    </>
  );
}
