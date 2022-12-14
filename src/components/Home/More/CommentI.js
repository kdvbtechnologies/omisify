import axios from "axios";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function CommentI() {
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
          "Cet utilisateur a été présent sur la page CommentI d'Omisify";
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
    <div className="comment-i-shrink">
      <div className="comment-i-a">
        <i>{t("-Comment")}</i>
      </div>

      <div className="comment-i-b">
        <p>{t("-Earn money on any comments left on your post")}</p>
      </div>

      <div className="comment-i-c">
        <p>
          {t(
            "-With Omisify you earn money when your subscribers comment on your post"
          )}
        </p>

        <p>
          {t(
            "-With Omisify you earn money when your subscribers comment on your video"
          )}
        </p>

        <p>
          {t(
            "-Omisify gives you the opportunity to earn money when your subscribers comment on your post, regardless of the nature of the comment, you earn money on any comments left on your post by your subscribers"
          )}
        </p>

        <p>
          {t(
            "-With Omisify, all the conditions have been met to allow you to transform a simple additional income into incredible success"
          )}
        </p>

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
  );
}
