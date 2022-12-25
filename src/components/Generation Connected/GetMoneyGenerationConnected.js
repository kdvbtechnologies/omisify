import axios from "axios";
import { useState } from "react";

export default function GetMoneyGenerationConnected() {
  const [listOfDays, setListOfDays] = useState(false);
  function ListOfDays() {
    setListOfDays(!listOfDays);
  }

  const oldPoint = "1000";
  const getnumberEnter = "100";

  const nbreDePersonnes = "1000000";
  const nbreDeJours = "30";
  const nbreDePlateforme = "4";

  const userId = localStorage.getItem("https://omisify.com/userId");
  const [numberEnter, setNumberEnter] = useState(getnumberEnter);
  const calculGCRemuneration = parseInt(numberEnter) + parseFloat(oldPoint);
  const calculGainTotalLife =
    0.0025 *
    parseFloat(nbreDePersonnes) *
    parseFloat(nbreDeJours) *
    parseFloat(nbreDePlateforme);

  async function GetMoney(e) {
    console.log(calculGCRemuneration);
    e.preventDefault();

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/${userId}`,
      data: {
        pointtlife: calculGCRemuneration,
        gaintlife: calculGainTotalLife,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    //window.location = "/get-money-success";
  }

  return (
    <>
      <div className="get-money-generation-connected">
        <div className="display">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            fill="white"
            x="0"
            y="0"
            enableBackground="new 0 0 503.2 503.2"
            version="1.1"
            viewBox="0 0 503.2 503.2"
            xmlSpace="preserve"
          >
            <path d="M404.601 299.199c-26.105 0-49.776 10.221-67.415 26.785L272.001 277.1v-74.664c46.335-8.071 81.6-48.389 81.6-97.036 0-54.454-44.146-98.6-98.6-98.6-54.455 0-98.601 44.146-98.601 98.6 0 48.647 35.265 88.965 81.6 97.036v74.439l-70.101 50.286c-12.886-12.642-29.267-21.732-47.58-25.643C52.014 286.939-7.69 343.168.81 410.617c5.536 43.949 41.024 79.432 84.973 84.974 67.449 8.5 123.678-51.204 109.099-119.518-1.584-7.432-4.06-14.531-7.242-21.229l67.137-48.164 61.981 46.484c-6.827 13.417-10.757 28.554-10.757 44.636 0 54.454 44.146 98.6 98.6 98.6s98.6-44.146 98.6-98.6c-.001-54.455-44.146-98.601-98.6-98.601zm-306 34.014c16.395 0 29.689 13.294 29.689 29.689s-13.294 29.688-29.689 29.688-29.689-13.294-29.689-29.688c0-16.402 13.294-29.689 29.689-29.689zm44.2 115.587H54.4v-13.328c0-18.217 12.784-34.272 31.008-34.272h26.391c18.217 0 31.001 16.056 31.001 34.272V448.8zm112.2-407.987c16.395 0 29.688 13.294 29.688 29.688 0 16.395-13.294 29.689-29.688 29.689-16.395 0-29.689-13.294-29.689-29.689 0-16.4 13.294-29.688 29.689-29.688zm-44.2 115.586v-13.328c0-18.217 12.784-34.272 31.008-34.272H268.2c18.218 0 31.001 16.055 31.001 34.272v13.328h-88.4zm193.8 176.814c16.395 0 29.688 13.294 29.688 29.689s-13.294 29.688-29.688 29.688-29.688-13.294-29.688-29.688c-.001-16.402 13.293-29.689 29.688-29.689zm44.2 115.587h-88.4v-13.328c0-18.217 12.784-34.272 31.008-34.272H417.8c18.217 0 31.001 16.056 31.001 34.272V448.8z"></path>
          </svg>
          <p>Rémunération</p>
        </div>
        {/* display */}

        <div className="back-and-help-btn-get-money-generation-connected">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="20px"
            cursor="pointer"
            enableBackground="new 0 0 486.975 486.975"
            version="1.1"
            viewBox="0 0 486.975 486.975"
            xmlSpace="preserve"
          >
            <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            cursor="pointer"
            fill="blue"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 12a1 1 0 110 2 1 1 0 010-2zm0-10a4 4 0 011.19 7.82l-.19.054V14a1 1 0 01-1.993.117L11 14v-1a1 1 0 01.883-.993l.266-.012A2 2 0 1010 10a1 1 0 01-2 0 4 4 0 014-4z"
            ></path>
          </svg>
        </div>
        {/* back-and-help-btn-get-money-generation-connected */}
      </div>
      {/* get-money-generation-connected */}

      <div className="get-money-generation-connected-title">
        <p>Génération Connecté</p>
      </div>
      {/* get-money-generation-connected-title */}

      <div className="get-money-generation-connected-align">
        <p>Recevoir ma rémunération journalière</p>
        <button onClick={ListOfDays}>Recevoir</button>
      </div>
      {/* get-money-generation-connected-align */}

      {listOfDays && (
        <>
          <div
            onClick={ListOfDays}
            className="popup-list-of-days-get-money-generation-connected-opacity"
          >
            <div className="align">
              <div className="card">
                <div className="last-day">
                  <p>25/12/2022</p>
                  <p>26/12/2022</p>
                  <p>27/12/2022</p>
                  <p>28/12/2022</p>
                  <p>29/12/2022</p>
                </div>
                {/* last-day */}

                <div className="present-day">
                  <p
                    onClick={GetMoney}
                    value={numberEnter}
                    onChange={(e) => setNumberEnter(e.target.value)}
                    name="numberEnter"
                  >
                    30/12/2022
                  </p>
                </div>
                {/* present-day */}

                <div className="futur-day">
                  <p>31/12/2022</p>
                  <p>01/01/2023</p>
                  <p>02/01/2023</p>
                  <p>03/01/2023</p>
                  <p>04/01/2023</p>
                  <p>05/01/2023</p>
                  <p>06/01/2023</p>
                  <p>07/01/2023</p>
                  <p>08/01/2023</p>
                  <p>09/01/2023</p>
                  <p>10/01/2023</p>
                </div>
                {/* futur-day */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-list-of-days-get-money-generation-connected-opacity */}
        </>
      )}
    </>
  );
}
