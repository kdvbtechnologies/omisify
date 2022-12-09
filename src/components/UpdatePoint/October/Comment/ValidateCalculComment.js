import { NavLink } from "react-router-dom";
import axios from "axios";
import Loader from "../../../Partenaire Omisify/Loader";
import { useState } from "react";
import Back from "../../../Back/Back";

export default function ValidateCalculComment() {
  const [isLoading, setIsLoading] = useState(false);
  const newnumbercommententeradmin = 0;
  const statuscomment = "NO";

  const resultpointtlife = localStorage.getItem(
    "https://omisify.com/resultpointtlife"
  );

  const getdate = new Date();
  const date = getdate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const userId = localStorage.getItem("https://omisify.com/userId");

  /* premierement on recupere le pointtcommentlife (et les autres) qu'on avait sauvegardé 
  dans le localStorage 

  ensuite pour le pointtcommentlife
  on effectue une verification, pour la validation automatique
  si le nombre de comment qu'il a rentrer correspond au nombre de comment que l'admin
  avait rentrer alors la validation sera reussie sinon la validation sera impossible
  
  validation reussie = total envoyé et mis a jour sur le profil de l'utilisateur

  pour le gaintlife
  on met directement gaintlife au niveau de data pour etre pret a envoyé

  */
  const pointtcommentlife = localStorage.getItem(
    "https://omisify.com/resultpointtcommentlife"
  );

  const pointtlife = localStorage.getItem(
    "https://omisify.com/resultpointtlife"
  );

  const gaintlife = localStorage.getItem("https://omisify.com/resultgaintlife");

  const generositydaysbonus = localStorage.getItem(
    "https://omisify.com/resultgenerositydaysbonus"
  );
  console.log(generositydaysbonus);

  const gdb = localStorage.getItem("https://omisify.com/gdb");

  const suggestgdb = localStorage.getItem("https://omisify.com/suggestgdb");

  async function Validate(e) {
    setIsLoading(true);
    e.preventDefault();
    const numbercommententeradmin = localStorage.getItem(
      "https://omisify.com/numbercommententeradmin"
    );

    let getnewnumber = localStorage.getItem("https://omisify.com/newnumber");
    console.log(getnewnumber);

    if (getnewnumber === numbercommententeradmin) {
      if (gdb === suggestgdb) {
        await axios({
          method: "put",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/${userId}`,
          data: {
            pointtcommentlife,
            numbercommententeradmin: newnumbercommententeradmin,
            statuscomment,

            pointtlife,
            gaintlife,

            generositydaysbonus,
            date,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        // validation reussie
        window.location = "/validate-comment-success";
      } else {
        await axios({
          method: "put",
          url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/${userId}`,
          data: {
            pointtcommentlife,
            numbercommententeradmin: newnumbercommententeradmin,
            statuscomment,

            pointtlife,
            gaintlife,

            date,
          },
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        // validation reussie
        window.location = "/validate-comment-success";
      }
    } else {
      // validation impossible
      window.location = "/validate-comment-error";
    }
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  const [popup, setPopup] = useState(false);
  function Popup() {
    setPopup(!popup);
  }

  const [seeMore, setSeeMore] = useState(false);
  function SeeMore() {
    setSeeMore(!seeMore);
  }

  return (
    <>
      <div style={family}>
        <div className="calcul-comment-title">
          <div className="display">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              width="25px"
              fill="white"
              enableBackground="new 0 0 489.999 489.999"
              version="1.1"
              viewBox="0 0 489.999 489.999"
              xmlSpace="preserve"
            >
              <path d="M398.125 0H91.875a7.656 7.656 0 00-7.656 7.656v474.687a7.656 7.656 0 007.656 7.656h306.25a7.656 7.656 0 007.656-7.656V7.656A7.656 7.656 0 00398.125 0zm-7.656 474.687H99.531V15.313h290.938v459.374z"></path>
              <path d="M130.156 229.687h229.687a7.656 7.656 0 007.656-7.656V45.937a7.656 7.656 0 00-7.656-7.656H130.156a7.656 7.656 0 00-7.656 7.656v176.094a7.656 7.656 0 007.656 7.656zm7.656-176.094h214.375v160.781H137.812V53.593zM359.843 390.469h-91.875a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656h91.875a7.656 7.656 0 007.656-7.656v-45.937a7.655 7.655 0 00-7.656-7.656zm-7.656 45.937h-76.563v-30.624h76.563v30.624zM359.843 321.562h-91.875a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656h91.875a7.656 7.656 0 007.656-7.656v-45.937a7.656 7.656 0 00-7.656-7.656zm-7.656 45.938h-76.563v-30.624h76.563V367.5zM359.843 252.656h-91.875a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656h91.875a7.656 7.656 0 007.656-7.656v-45.937a7.656 7.656 0 00-7.656-7.656zm-7.656 45.937h-76.563v-30.624h76.563v30.624zM130.156 451.718h45.938a7.656 7.656 0 007.656-7.656v-45.937a7.656 7.656 0 00-7.656-7.656h-45.938a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656zm7.656-45.937h30.625v30.624h-30.625v-30.624zM245 390.469h-45.938a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656H245a7.656 7.656 0 007.656-7.656v-45.937a7.656 7.656 0 00-7.656-7.656zm-7.656 45.937h-30.625v-30.624h30.625v30.624zM130.156 382.812h45.938a7.656 7.656 0 007.656-7.656v-45.937a7.656 7.656 0 00-7.656-7.656h-45.938a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656zm7.656-45.937h30.625V367.5h-30.625v-30.625zM245 321.562h-45.938a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656H245a7.656 7.656 0 007.656-7.656v-45.937a7.657 7.657 0 00-7.656-7.656zm-7.656 45.938h-30.625v-30.624h30.625V367.5zM130.156 313.906h45.938a7.656 7.656 0 007.656-7.656v-45.937a7.656 7.656 0 00-7.656-7.656h-45.938a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656zm7.656-45.937h30.625v30.624h-30.625v-30.624zM245 252.656h-45.938a7.656 7.656 0 00-7.656 7.656v45.937a7.656 7.656 0 007.656 7.656H245a7.656 7.656 0 007.656-7.656v-45.937a7.657 7.657 0 00-7.656-7.656zm-7.656 45.937h-30.625v-30.624h30.625v30.624z"></path>
              <path d="M283.281 122.499h-30.624V91.875a7.656 7.656 0 00-15.312 0v30.624H206.72a7.656 7.656 0 000 15.312h30.625v30.625a7.656 7.656 0 0015.312 0v-30.625h30.624a7.656 7.656 0 000-15.312zM329.219 183.749h-15.313a7.656 7.656 0 000 15.312h15.313a7.656 7.656 0 000-15.312zM176.094 183.749h-15.313a7.656 7.656 0 000 15.312h15.313a7.656 7.656 0 000-15.312z"></path>
            </svg>
            <p>Actualisation des points</p>
          </div>
          {/* display */}
        </div>
        {/* calcul-comment-title */}

        <div className="back-btn">
          <NavLink to="/before-calcul-comment">
            <Back />
          </NavLink>
        </div>

        <div className="validate-calcul-comment">
          <div className="title">
            <p>Résultats</p>
          </div>

          <div className="a">
            <div className="shrink-border">
              <div className="border">
                {pointtcommentlife ? (
                  <>
                    <svg
                      onClick={Popup}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      cursor="pointer"
                      width="20px"
                      enableBackground="new 0 0 496.158 496.158"
                      version="1.1"
                      viewBox="0 0 496.158 496.158"
                      xmlSpace="preserve"
                    >
                      <path
                        fill="#25B7D3"
                        d="M496.158 248.085C496.158 111.063 385.089.003 248.083.003 111.07.003 0 111.063 0 248.085c0 137.001 111.07 248.07 248.083 248.07 137.006 0 248.075-111.069 248.075-248.07z"
                      ></path>
                      <g fill="#FFF">
                        <path d="M315.249 359.555a5.002 5.002 0 00-6.27-1.702c-24.582 11.637-52.482 23.94-57.958 25.015a4.83 4.83 0 01-.644-.737c-.742-1.005-1.103-2.318-1.103-4.015 0-13.905 10.495-56.205 31.192-125.719 17.451-58.406 19.469-70.499 19.469-74.514 0-6.198-2.373-11.435-6.865-15.146-4.267-3.519-10.229-5.302-17.719-5.302-12.459 0-26.899 4.73-44.146 14.461-16.713 9.433-35.352 25.41-55.396 47.487a5.002 5.002 0 005.591 7.992c7.037-2.872 42.402-17.359 47.557-20.597 4.221-2.646 7.875-3.989 10.861-3.989.107 0 .199.004.276.01.036.198.07.5.07.933 0 3.047-.627 6.654-1.856 10.703-30.136 97.641-44.785 157.498-44.785 182.994 0 8.998 2.501 16.242 7.432 21.528 5.025 5.393 11.803 8.127 20.146 8.127 8.891 0 19.712-3.714 33.08-11.354 12.936-7.392 32.68-23.653 60.363-49.717a4.998 4.998 0 00.705-6.458zM314.282 76.672c-4.925-5.041-11.227-7.597-18.729-7.597-9.34 0-17.475 3.691-24.176 10.971-6.594 7.16-9.938 15.946-9.938 26.113 0 8.033 2.463 14.69 7.32 19.785 4.922 5.172 11.139 7.794 18.476 7.794 8.958 0 17.049-3.898 24.047-11.586 6.876-7.553 10.363-16.433 10.363-26.393.001-7.654-2.476-14.075-7.363-19.087z"></path>
                      </g>
                    </svg>
                    <p>Commentaire(s) : {pointtcommentlife} point(s)</p>
                    <p>Total des Points : {resultpointtlife} point(s)</p>
                    <p>Gains : {gaintlife}€</p>
                  </>
                ) : (
                  <>
                    <p></p>
                  </>
                )}
              </div>
            </div>

            {!seeMore && (
              <>
                <div className="go-down-i">
                  <svg
                    onClick={SeeMore}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    fill="black"
                    enableBackground="new 0 0 283.535 283.535"
                    version="1.1"
                    viewBox="0 0 283.535 283.535"
                    xmlSpace="preserve"
                  >
                    <path d="M40.687 101.082C18.252 101.082 0 119.333 0 141.768s18.252 40.686 40.687 40.686 40.686-18.251 40.686-40.686-18.252-40.686-40.686-40.686zm0 63.371c-12.51 0-22.687-10.177-22.687-22.686s10.177-22.686 22.687-22.686c12.509 0 22.686 10.177 22.686 22.686s-10.178 22.686-22.686 22.686zM141.768 101.082c-22.435 0-40.686 18.251-40.686 40.686s18.251 40.686 40.686 40.686 40.686-18.251 40.686-40.686-18.252-40.686-40.686-40.686zm0 63.371c-12.509 0-22.686-10.177-22.686-22.686s10.177-22.686 22.686-22.686 22.686 10.177 22.686 22.686-10.178 22.686-22.686 22.686zM242.849 101.082c-22.435 0-40.686 18.251-40.686 40.686s18.251 40.686 40.686 40.686 40.687-18.251 40.687-40.686-18.253-40.686-40.687-40.686zm0 63.371c-12.509 0-22.686-10.177-22.686-22.686s10.177-22.686 22.686-22.686c12.51 0 22.687 10.177 22.687 22.686s-10.178 22.686-22.687 22.686z"></path>
                  </svg>
                </div>
              </>
            )}

            {/* seeMore */}
            {/* seeMore */}
            {/* seeMore */}
            {/* seeMore */}
            {/* seeMore */}
            {/* seeMore */}
            {/* seeMore */}
            {/* seeMore */}
            {/* seeMore */}
            {seeMore && (
              <>
                <div className="go-down-i">
                  <div className="b">
                    <i>
                      Avant de cliquer sur Valider, vérifier que les résultats
                      de votre travail affichés sur cette page sont conformes à
                      ce que vous avez calculés
                    </i>
                  </div>

                  <div className="b">
                    <i>
                      Si les résultats ne sont pas correct, cliquer{" "}
                      <NavLink className="navlink" to="/before-calcul-comment">
                        ici
                      </NavLink>{" "}
                      pour reprendre les calculs ou{" "}
                      <NavLink className="navlink" to="/partner-contact">
                        contacter
                      </NavLink>{" "}
                      le service partenaire pour obtenir de l'aide
                    </i>
                  </div>

                  <div className="b">
                    <svg
                      onClick={SeeMore}
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      width="20px"
                      cursor="pointer"
                      enableBackground="new 0 0 511.881 511.881"
                      version="1.1"
                      viewBox="0 0 511.881 511.881"
                      xmlSpace="preserve"
                    >
                      <path d="M248.36 263.428a10.623 10.623 0 0015.04 0L508.733 18.095c4.053-4.267 3.947-10.987-.213-15.04a10.763 10.763 0 00-14.827 0l-237.76 237.76L18.173 3.054c-4.266-4.16-10.986-4.053-15.146.214a10.763 10.763 0 000 14.827L248.36 263.428z"></path>
                      <path d="M508.627 248.388c-4.267-4.053-10.773-4.053-14.933 0l-237.76 237.76-237.76-237.76c-4.267-4.053-10.987-3.947-15.04.213a10.763 10.763 0 000 14.827l245.333 245.333a10.623 10.623 0 0015.04 0L508.84 263.428c4.053-4.267 3.947-10.987-.213-15.04z"></path>
                    </svg>
                  </div>

                  <div className="c">
                    <p>Cliquer sur Valider pour actualiser vos points</p>
                  </div>
                </div>
                {/* go-down-i */}
              </>
            )}
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <button onClick={Validate}>Valider</button>
            </>
          )}
        </div>
      </div>

      {popup && (
        <>
          <div onClick={Popup} className="popup-infos-comment-opacity">
            <div className="align">
              <div className="card">
                <p>Option : Commentaire</p>
                <p>{date}</p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-infos-comment-opacity */}
        </>
      )}
    </>
  );
}
