import { NavLink } from "react-router-dom";
import LoginNav from "../Auth/LoginNav";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Partenaire Omisify/Loader";

export default function UpdateSuccess() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get(`https://famous-peplum-dove.cyclic.app/api/user/${userId}`)
        .then((res) => {
          const name = res.data.name;
          const partnername = res.data.partnername;
          const shortname = res.data.shortname;

          const getoldpointtlife = res.data.pointtlife;
          if (getoldpointtlife) {
            localStorage.setItem(
              "https://omisify.com/getoldpointtlife",
              getoldpointtlife
            );
          }

          const getoldnumbertemaillife = res.data.numbertemaillife;
          if (getoldnumbertemaillife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertemaillife",
              getoldnumbertemaillife
            );
          }

          const getoldnumbertmwilife = res.data.numbertmwilife;
          if (getoldnumbertmwilife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmwilife",
              getoldnumbertmwilife
            );
          }

          const getoldnumbertmessagelife = res.data.numbertmessagelife;
          if (getoldnumbertmessagelife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertmessagelife",
              getoldnumbertmessagelife
            );
          }

          const getoldnumbertpwilife = res.data.numbertpwilife;
          if (getoldnumbertpwilife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpwilife",
              getoldnumbertpwilife
            );
          }

          const getoldnumbertpublicationlife = res.data.numbertpublicationlife;
          if (getoldnumbertpublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertpublicationlife",
              getoldnumbertpublicationlife
            );
          }

          const getoldnumbertlikepublicationlife =
            res.data.numbertlikepublicationlife;
          if (getoldnumbertlikepublicationlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikepublicationlife",
              getoldnumbertlikepublicationlife
            );
          }

          const getoldnumbertcommentlife = res.data.numbertcommentlife;
          if (getoldnumbertcommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertcommentlife",
              getoldnumbertcommentlife
            );
          }

          const getoldgaintlife = res.data.gaintlife;
          if (getoldgaintlife) {
            localStorage.setItem(
              "https://omisify.com/getoldgaintlife",
              getoldgaintlife
            );
          }

          const getoldnumbertlikecommentlife = res.data.numbertlikecommentlife;
          if (getoldnumbertlikecommentlife) {
            localStorage.setItem(
              "https://omisify.com/getoldnumbertlikecommentlife",
              getoldnumbertlikecommentlife
            );
          }

          localStorage.setItem("https://omisify.com/name", name);
          localStorage.setItem("https://omisify.com/partnername", partnername);
          localStorage.setItem("https://omisify.com/shortname", shortname);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <LoginNav />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="update-success">
            <div className="title">
              <p>Terminé !</p>
            </div>

            {shortname && (
              <div className="a">
                <p>Le téléchargement de la dernière mise à jour à réussi</p>
                <NavLink to="/partner">
                  <button>Retourner sur la page d'accueil</button>
                </NavLink>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
