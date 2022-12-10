import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Back from "../../../Back/Back";
import Loader from "../../../Partenaire Omisify/Loader";

export default function CalculPublication() {
  const suggestgdb = "10";
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [newnumber, setNewnumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const statuspublication = localStorage.getItem(
    "https://omisify.com/statuspublication"
  );

  // 1ere etape
  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);

          const suggestgdb = 10;
          localStorage.setItem("https://omisify.com/suggestgdb", suggestgdb);

          const pointtpublicationlife = res.data.pointtpublicationlife;
          if (pointtpublicationlife) {
            localStorage.setItem(
              "https://omisify.com/pointtpublicationlife",
              pointtpublicationlife
            );
          }

          const pointtlife = res.data.pointtlife;
          if (pointtlife) {
            localStorage.setItem("https://omisify.com/pointtlife", pointtlife);
          }

          const gaintlife = res.data.gaintlife;
          if (gaintlife) {
            localStorage.setItem("https://omisify.com/gaintlife", gaintlife);
          }

          const statuspublication = res.data.statuspublication;
          if (statuspublication) {
            localStorage.setItem(
              "https://omisify.com/statuspublication",
              statuspublication
            );
          }

          const numberpublicationenteradmin =
            res.data.numberpublicationenteradmin;
          if (numberpublicationenteradmin) {
            localStorage.setItem(
              "https://omisify.com/numberpublicationenteradmin",
              numberpublicationenteradmin
            );
          }

          const gdb = res.data.gdb;
          if (gdb) {
            localStorage.setItem("https://omisify.com/gdb", gdb);
          }

          const generositydaysbonus = res.data.generositydaysbonus;
          if (generositydaysbonus) {
            localStorage.setItem(
              "https://omisify.com/generositydaysbonus",
              generositydaysbonus
            );
          }
        });
    }
    get();
  });

  // 2e etape
  const oldpointtpublicationlife = localStorage.getItem(
    "https://omisify.com/pointtpublicationlife"
  );

  const oldpointtlife = localStorage.getItem("https://omisify.com/pointtlife");

  const oldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  const gdb = localStorage.getItem("https://omisify.com/gdb");

  const oldgenerositydaysbonus = localStorage.getItem(
    "https://omisify.com/generositydaysbonus"
  );

  const calculpointtpublicationlife =
    parseInt(newnumber) * 1000 * gdb + parseFloat(oldpointtpublicationlife);

  const calculpointtlife =
    parseInt(newnumber) * 1000 * gdb + parseFloat(oldpointtlife);

  const calculgaintlife =
    parseInt(newnumber) * 0.000002 * gdb + parseFloat(oldgaintlife);

  if (gdb === suggestgdb) {
    const calculgenerositydaysbonus =
      parseInt(newnumber) * 1000 * gdb + parseFloat(oldgenerositydaysbonus);

    localStorage.setItem(
      "https://omisify.com/resultgenerositydaysbonus",
      calculgenerositydaysbonus
    );
  }

  function Save(e) {
    setIsLoading(true);
    e.preventDefault();

    localStorage.setItem("https://omisify.com/newnumber", newnumber);

    localStorage.setItem(
      "https://omisify.com/resultpointtpublicationlife",
      calculpointtpublicationlife
    );

    localStorage.setItem(
      "https://omisify.com/resultpointtlife",
      calculpointtlife
    );

    localStorage.setItem(
      "https://omisify.com/resultgaintlife",
      calculgaintlife
    );

    window.location = "/validate-calcul-publication";
  }

  const getdate = new Date();
  const date = getdate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const [popupInfosComment, setPopupInfosComment] = useState(false);
  function InfosComment() {
    setPopupInfosComment(!popupInfosComment);
  }

  const [popupEnterComment, setPopupEnterComment] = useState(false);
  function EnterComment() {
    setPopupEnterComment(!popupEnterComment);
  }

  return (
    <>
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
        <NavLink to="/complete">
          <Back />
        </NavLink>
      </div>

      <div className="calcul-comment">
        <div className="a">
          <div className="b">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              width="25px"
              enableBackground="new 0 0 470 470"
              version="1.1"
              viewBox="0 0 470 470"
              xmlSpace="preserve"
            >
              <path
                fill="#FFCC75"
                d="M264.41 87.197c-1.465 1.464-3.385 2.196-5.304 2.196s-3.839-.732-5.304-2.196a7.5 7.5 0 010-10.607L275.393 55h-38.785l-75 75h38.786l32.197-32.197a7.5 7.5 0 0110.607 10.607L221.607 130H349.75V55h-53.143L264.41 87.197z"
              ></path>
              <path
                fill="#FFCC75"
                d="M121 55L121 130 140.393 130 215.393 55z"
              ></path>
              <path fill="#F2484B" d="M302.75 225H349.75V240H302.75z"></path>
              <path
                fill="#185F8D"
                d="M349.75 342.5V285h-47v130h47v-42.5c0-4.143 3.357-7.5 7.5-7.5v-15a7.499 7.499 0 01-7.5-7.5z"
              ></path>
              <path fill="#185F8D" d="M211.5 285H257.75V327.5H211.5z"></path>
              <path fill="#185F8D" d="M120.25 285H166.5V327.5H120.25z"></path>
              <path fill="#185F8D" d="M211.5 372.5H257.75V415H211.5z"></path>
              <path fill="#185F8D" d="M120.25 372.5H166.5V415H120.25z"></path>
              <path
                fill="#6DA8D6"
                d="M367.25 15h-264.5c-12.407 0-22.5 10.094-22.5 22.5v395c0 12.406 10.093 22.5 22.5 22.5h264.5c12.406 0 22.5-10.094 22.5-22.5v-395c0-12.406-10.094-22.5-22.5-22.5zM181.5 422.5a7.5 7.5 0 01-7.5 7.5h-61.25a7.5 7.5 0 01-7.5-7.5V365a7.5 7.5 0 017.5-7.5H174a7.5 7.5 0 017.5 7.5v57.5zm0-87.5a7.5 7.5 0 01-7.5 7.5h-61.25a7.5 7.5 0 01-7.5-7.5v-57.5a7.5 7.5 0 017.5-7.5H174a7.5 7.5 0 017.5 7.5V335zM174 185h-60.5c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5H174c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5zm98.75 237.5c0 4.143-3.357 7.5-7.5 7.5H204a7.5 7.5 0 01-7.5-7.5V365a7.5 7.5 0 017.5-7.5h61.25c4.143 0 7.5 3.357 7.5 7.5v57.5zm0-87.5c0 4.143-3.357 7.5-7.5 7.5H204a7.5 7.5 0 01-7.5-7.5v-57.5a7.5 7.5 0 017.5-7.5h61.25c4.143 0 7.5 3.357 7.5 7.5V335zm92 7.5c0 4.143-3.357 7.5-7.5 7.5v15c4.143 0 7.5 3.357 7.5 7.5v50c0 4.143-3.357 7.5-7.5 7.5h-62a7.499 7.499 0 01-7.5-7.5v-145c0-4.143 3.357-7.5 7.5-7.5h62c4.143 0 7.5 3.357 7.5 7.5v65zm0-95c0 4.143-3.357 7.5-7.5 7.5h-62a7.499 7.499 0 01-7.5-7.5v-30c0-4.143 3.357-7.5 7.5-7.5h62c4.143 0 7.5 3.357 7.5 7.5v30zm-7.5-62.5H204c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h153.25c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5zm7.5-47.5c0 4.143-3.357 7.5-7.5 7.5H113.5a7.5 7.5 0 01-7.5-7.5v-90a7.5 7.5 0 017.5-7.5h243.75c4.143 0 7.5 3.357 7.5 7.5v90z"
              ></path>
              <path
                fill="#082947"
                d="M357.25 210h-62a7.499 7.499 0 00-7.5 7.5v30c0 4.143 3.357 7.5 7.5 7.5h62c4.143 0 7.5-3.357 7.5-7.5v-30c0-4.143-3.357-7.5-7.5-7.5zm-7.5 30h-47v-15h47v15zM174 357.5h-61.25a7.5 7.5 0 00-7.5 7.5v57.5a7.5 7.5 0 007.5 7.5H174a7.5 7.5 0 007.5-7.5V365a7.5 7.5 0 00-7.5-7.5zm-7.5 57.5h-46.25v-42.5h46.25V415zM265.25 357.5H204a7.5 7.5 0 00-7.5 7.5v57.5a7.5 7.5 0 007.5 7.5h61.25c4.143 0 7.5-3.357 7.5-7.5V365c0-4.143-3.357-7.5-7.5-7.5zm-7.5 57.5H211.5v-42.5h46.25V415zM174 270h-61.25a7.5 7.5 0 00-7.5 7.5V335a7.5 7.5 0 007.5 7.5H174a7.5 7.5 0 007.5-7.5v-57.5a7.5 7.5 0 00-7.5-7.5zm-7.5 57.5h-46.25V285h46.25v42.5zM265.25 270H204a7.5 7.5 0 00-7.5 7.5V335a7.5 7.5 0 007.5 7.5h61.25c4.143 0 7.5-3.357 7.5-7.5v-57.5c0-4.143-3.357-7.5-7.5-7.5zm-7.5 57.5H211.5V285h46.25v42.5zM357.25 270h-62a7.499 7.499 0 00-7.5 7.5v145c0 4.143 3.357 7.5 7.5 7.5h62c4.143 0 7.5-3.357 7.5-7.5v-50c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5V415h-47V285h47v57.5c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-65c0-4.143-3.357-7.5-7.5-7.5z"
              ></path>
              <path
                fill="#082947"
                d="M367.25 0h-264.5c-20.678 0-37.5 16.822-37.5 37.5v395c0 20.678 16.822 37.5 37.5 37.5h264.5c20.678 0 37.5-16.822 37.5-37.5v-395c0-20.678-16.822-37.5-37.5-37.5zm22.5 432.5c0 12.406-10.094 22.5-22.5 22.5h-264.5c-12.407 0-22.5-10.094-22.5-22.5v-395c0-12.406 10.093-22.5 22.5-22.5h264.5c12.406 0 22.5 10.094 22.5 22.5v395z"
              ></path>
              <path
                fill="#FFF"
                d="M215.393 55L140.393 130 161.607 130 236.607 55z"
              ></path>
              <path
                fill="#FFF"
                d="M253.803 87.197c1.465 1.464 3.385 2.196 5.304 2.196s3.839-.732 5.304-2.196L296.607 55h-21.215l-21.59 21.59a7.501 7.501 0 00.001 10.607zM243.197 97.803a7.503 7.503 0 00-10.607 0L200.393 130h21.214l21.59-21.59a7.5 7.5 0 000-10.607z"
              ></path>
              <path
                fill="#082947"
                d="M357.25 40H113.5a7.5 7.5 0 00-7.5 7.5v90a7.5 7.5 0 007.5 7.5h243.75c4.143 0 7.5-3.357 7.5-7.5v-90c0-4.143-3.357-7.5-7.5-7.5zm-7.5 90H121V55h228.75v75zM357.25 170H204c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h153.25c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5zM174 170h-60.5c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5H174c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"
              ></path>
            </svg>
            <p>Calcul du résultat de votre travail</p>
          </div>
          {/* b */}

          <div className="display-calcul-comment-title">
            <div className="calcul-comment-title">
              <div className="a">
                <svg
                  onClick={InfosComment}
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  viewBox="0 0 1024 1024"
                >
                  <defs>
                    <style></style>
                  </defs>
                  <path d="M573 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40zm-280 0c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"></path>
                  <path d="M894 345c-48.1-66-115.3-110.1-189-130v.1c-17.1-19-36.4-36.5-58-52.1-163.7-119-393.5-82.7-513 81-96.3 133-92.2 311.9 6 439l.8 132.6c0 3.2.5 6.4 1.5 9.4 5.3 16.9 23.3 26.2 40.1 20.9L309 806c33.5 11.9 68.1 18.7 102.5 20.6l-.5.4c89.1 64.9 205.9 84.4 313 49l127.1 41.4c3.2 1 6.5 1.6 9.9 1.6 17.7 0 32-14.3 32-32V753c88.1-119.6 90.4-284.9 1-408zM323 735l-12-5-99 31-1-104-8-9c-84.6-103.2-90.2-251.9-11-361 96.4-132.2 281.2-161.4 413-66 132.2 96.1 161.5 280.6 66 412-80.1 109.9-223.5 150.5-348 102zm505-17l-8 10 1 104-98-33-12 5c-56 20.8-115.7 22.5-171 7l-.2-.1C613.7 788.2 680.7 742.2 729 676c76.4-105.3 88.8-237.6 44.4-350.4l.6.4c23 16.5 44.1 37.1 62 62 72.6 99.6 68.5 235.2-8 330z"></path>
                  <path d="M433 421c-23.1 0-41 17.9-41 40s17.9 40 41 40c21.1 0 39-17.9 39-40s-17.9-40-39-40z"></path>
                </svg>
              </div>

              <div className="b">
                <p onClick={InfosComment}>Publication</p>
              </div>

              <div className="c">
                <svg
                  onClick={InfosComment}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  width="12px"
                  cursor="pointer"
                  fill="blue"
                  enableBackground="new 0 0 477.175 477.175"
                  version="1.1"
                  viewBox="0 0 477.175 477.175"
                  xmlSpace="preserve"
                >
                  <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path>
                </svg>
              </div>
            </div>
            {/* calcul-comment-title */}
          </div>
          {/* display-calcul-comment-title */}

          <div className="status-comment">
            <p>{date}</p>
            {statuspublication && (
              <p>Validation automatique : {statuspublication}</p>
            )}
          </div>

          {newnumber && oldpointtpublicationlife && (
            <p>
              ({newnumber} x 1000 ) + {oldpointtpublicationlife} ={" "}
              {calculpointtpublicationlife} point(s)
            </p>
          )}

          {calculgaintlife ? (
            <div className="c">
              <i>Total des Points : {calculpointtlife} point(s)</i>
              <i>Gains : {calculgaintlife}€</i>
            </div>
          ) : (
            <>
              <p></p>
            </>
          )}

          <div className="d">
            <svg
              onClick={EnterComment}
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
            <input
              type="number"
              value={newnumber}
              onChange={(e) => setNewnumber(e.target.value)}
              name="newnumber"
              placeholder="Nombre de publication"
            />
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              {" "}
              <button onClick={Save}>Calcul terminé</button>
            </>
          )}
        </div>
      </div>

      {/* popupInfosComment */}
      {/* popupInfosComment */}
      {/* popupInfosComment */}
      {popupInfosComment && (
        <>
          <div onClick={InfosComment} className="popup-infos-comment-opacity">
            <div className="align">
              <div className="card">
                <div className="display">
                  <p>L'option</p>
                  <p style={{ color: "red" }}>Publication</p>
                  <p>concerne</p>
                  <p>une</p>
                  <p>publication publicitaire</p>
                  <p>publiée par</p>
                  <p>
                    un Partenaire Omisify ou un Partenaire Omisify Influent avec
                    la présentation de la publicité, le lien publicitaire et
                    l'affiche publicitaire
                  </p>
                </div>

                <p>
                  1 Publication avec une affiche publicitaire » 1000 points »
                  0.000002€
                </p>

                <p style={{ fontSize: "14px" }}>
                  Ancien total des points des publications :{" "}
                  {oldpointtpublicationlife} point(s)
                </p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-infos-comment-opacity */}
        </>
      )}

      {/* popup enter Comment */}
      {/* popup enter Comment */}
      {/* popup enter Comment */}
      {popupEnterComment && (
        <>
          <div onClick={EnterComment} className="popup-infos-comment-opacity">
            <div className="align">
              <div className="card">
                <div className="popup-enter-number-comment">
                  <p>Entrer le nombre de nouvelle(s) publication(s)</p>
                </div>
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
