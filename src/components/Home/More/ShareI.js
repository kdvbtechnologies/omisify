import { t } from "i18next";
import { NavLink } from "react-router-dom";

export default function ShareI() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");

  return (
    <div className="comment-i-shrink">
      <div className="comment-i-a">
        <i>{t("-Share")}</i>
      </div>
      <div className="comment-i-b">
        <p>
          {t("-Earn passive income every time your followers share your posts")}
        </p>
      </div>

      <div className="comment-i-c">
        <p>
          {t(
            "-With Omisify you earn money when your subscribers share your post"
          )}
        </p>

        <p>
          {t(
            "-With Omisify you earn money when your subscribers share your video"
          )}
        </p>

        <p>
          {t(
            "-With Omisify you earn money even when you sleep because your subscribers work for you"
          )}
        </p>
        <p>{t("-Start now and Earn money with your subscribers")}</p>
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
