import { useState } from "react";
import { NavLink } from "react-router-dom";

function Enfant({ api }) {
  const [checked, setChecked] = useState(false);

  function Checked() {
    setChecked(!checked);

    const id = api.id;
    localStorage.setItem("https://omisify.com/getIdFB", id);
  }

  return (
    <>
      <div className="fb-others">
        <div className="a">
          <div className="align" onClick={Checked}>
            <p>{api.nomPageFacebook}</p>

            <div className="b">
              <p>{api.nombreDabonnesPageFacebook} abonnés</p>
            </div>
          </div>
          {/* align */}

          <div className="hr">
            <hr />
          </div>
          {/* hr */}
        </div>
        {/* a */}
      </div>
      {/* others */}
    </>
  );
}

export default function Facebook() {
  const api = [
    {
      nomPageFacebook: "Les Montagnes de l'Alsace",
      nombreDabonnesPageFacebook: "8000",
      lienPageFacebook: "1254568222",
      id: "12",
    },

    {
      nomPageFacebook: "Kigali Hier, Aujourd'hui et Demain",
      nombreDabonnesPageFacebook: "12000",
      lienPageFacebook: "https://alrani.com/",
      id: "222",
    },

    {
      nomPageFacebook: "Dégustez et Prenez",
      nombreDabonnesPageFacebook: "7000",
      lienPageFacebook: "https://alrani.com/",
      id: "3",
    },

    {
      nomPageFacebook: "5 minutes avec Henri",
      nombreDabonnesPageFacebook: "5000",
      lienPageFacebook: "https://alrani.com/",
      id: "4",
    },
  ];

  /* 
    const data = api
      .sort((a, b) => b.num - a.num)
      .map((x) => x.nomPageFacebook);
    console.log(data);

     const [popup, setPopup] = useState(false);
  function Popup() {
    const num = "4";
    const apii = api.filter((item) => item.num === num);
    console.log(apii);

    setPopup(!popup);
  }
  */

  // filtre et onClick par id
  const getIdFB = localStorage.getItem("https://omisify.com/getIdFB");
  const id = getIdFB;
  const filtreTrouver = api.filter((item) => item.id === id);

  // popup infos
  const [popup, setPopup] = useState(false);
  function Popup() {
    setPopup(!popup);
  }

  const [popupAdd, setPopupAdd] = useState(false);
  function Add() {
    setPopupAdd(!popupAdd);
  }

  // popup help
  const [popupHelp, setPopupHelp] = useState(false);
  function Help() {
    setPopupHelp(!popupHelp);
  }

  // Before Modifier Nom Page - popup help
  const [beforeModifierNomPageHelpPopup, setBeforeModifierNomPageHelpPopup] =
    useState(false);

  function BeforeModifierNomPageHelp() {
    setBeforeModifierNomPageHelpPopup(!beforeModifierNomPageHelpPopup);
  }

  // Compte Lier
  const [toggle, setToggle] = useState(false);
  function CompteLier() {
    const resCompteLier = "idDuCompte";
    localStorage.setItem("https://omisify.com/idDuCompte", resCompteLier);
    setToggle(!toggle);
  }

  /*
  const resCompteLier = localStorage.getItem(
    "https://omisify.com/res-compte-lier"
  );
*/

  return (
    <>
      <div className="fb">
        <div className="space">
          <div className="a">
            <NavLink to="/generation-connected">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                width="20px"
                cursor="pointer"
                fill="#ccc"
                style={{ paddingRight: "40px" }}
                enableBackground="new 0 0 486.975 486.975"
                version="1.1"
                viewBox="0 0 486.975 486.975"
                xmlSpace="preserve"
              >
                <path d="M473.475 230.025h-427.4l116-116c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0l-139 139c-5.3 5.3-5.3 13.8 0 19.1l139 139c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-116-116h427.5c7.5 0 13.5-6 13.5-13.5s-6-13.4-13.5-13.4z"></path>
              </svg>
            </NavLink>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              width="20px"
              style={{ paddingRight: "5px" }}
              version="1.1"
              viewBox="0 0 422 422"
              xmlSpace="preserve"
            >
              <path d="M315.91 415.682c-18.036-25.363-33.765-53.708-46.749-84.248-9.987-23.464-18.514-48.622-25.406-74.934h1.595a4 4 0 000-8h-3.608c-.284-1.148-.586-2.285-.864-3.438-27.564-114.287-16.372-214.6-16.255-215.6a4.006 4.006 0 00-3.575-4.444L215 24.412V4a4 4 0 00-8 0v20.414l-6.049.606a4.004 4.004 0 00-3.575 4.444c.117 1 11.311 101.313-16.255 215.6-.278 1.152-.58 2.289-.864 3.438h-3.608a4 4 0 000 8h1.596c-6.893 26.315-15.42 51.474-25.407 74.935-12.98 30.534-28.709 58.88-46.748 84.246a4.001 4.001 0 003.26 6.318h41.69a4.001 4.001 0 003.997-4.182 40.58 40.58 0 01-.036-1.817c0-30.879 25.121-56 56-56s56 25.121 56 56c0 .61-.01 1.221-.036 1.822a3.997 3.997 0 003.996 4.177h41.689a4.001 4.001 0 003.26-6.319zM188.899 246.938c24.771-102.701 18.605-194.315 16.82-214.354l5.13-.514 5.432.514c-1.785 20.039-7.95 111.653 16.82 214.354.126.524.265 1.039.393 1.563h-44.987c.127-.524.266-1.039.392-1.563zM274.969 414c-1.06-34.367-29.349-62-63.969-62s-62.908 27.633-63.969 62h-30.017c16.536-24.193 31.046-50.878 43.186-79.434 10.393-24.417 19.213-50.643 26.295-78.066h49.009c7.081 27.42 15.901 53.645 26.295 78.065 12.142 28.56 26.651 55.244 43.185 79.435h-30.015z"></path>
              <path d="M224.001 274.458a4 4 0 00-3.862-2.959h-18.275a3.999 3.999 0 00-3.862 2.959l-15.362 57a4 4 0 005.68 4.604 50.14 50.14 0 0122.683-5.452 50.143 50.143 0 0122.683 5.452 4 4 0 005.68-4.605l-15.365-56.999zm-13 48.152a58.162 58.162 0 00-18.513 3.045l12.439-46.156h12.146l12.439 46.156a58.145 58.145 0 00-18.511-3.045z"></path>
            </svg>

            <p style={{ color: "black", fontSize: "17px" }}>Alrani</p>
          </div>

          <div className="b">
            <svg
              onClick={Add}
              style={{ marginTop: "5px" }}
              cursor="pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              viewBox="0 0 48 48"
            >
              <g data-name="Layer 2">
                <path
                  fill="none"
                  d="M0 0H48V48H0z"
                  data-name="invisible box"
                ></path>
                <g data-name="icons Q2">
                  <path d="M34 22h-8v-8a2 2 0 00-4 0v8h-8a2 2 0 000 4h8v8a2 2 0 004 0v-8h8a2 2 0 000-4z"></path>
                  <path d="M40 8v32H8V8h32m2-4H6a2 2 0 00-2 2v36a2 2 0 002 2h36a2 2 0 002-2V6a2 2 0 00-2-2z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        {/* space */}

        <div className="fb-others">
          <div className="a">
            <div className="hr">
              <hr />
            </div>
            {api.map((api) => {
              return (
                <>
                  {" "}
                  <div onClick={Popup}>
                    {" "}
                    <Enfant api={api} />{" "}
                  </div>{" "}
                </>
              );
            })}
          </div>
          {/* a */}
        </div>
        {/* others */}
      </div>
      {/* fb */}

      {/* infos of page - popup */}
      {/* infos of page - popup */}
      {/* infos of page - popup */}
      {/* infos of page - popup */}
      {/* infos of page - popup */}
      {/* infos of page - popup */}
      {/* infos of page - popup */}
      {popup && (
        <>
          {filtreTrouver.map((api) => (
            <>
              <div className="fb-popup-opacity">
                <div className="align">
                  <svg
                    onClick={Popup}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    cursor="pointer"
                    fill="#ff6f79"
                    version="1.1"
                    viewBox="0 0 40 40"
                    xmlSpace="preserve"
                  >
                    <path d="M21.414 20L33.207 8.207a.999.999 0 10-1.414-1.414L20 18.586 8.207 6.793a.999.999 0 10-1.414 1.414L18.586 20 6.793 31.793a.999.999 0 101.414 1.414L20 21.414l11.793 11.793a.997.997 0 001.414 0 .999.999 0 000-1.414L21.414 20z"></path>
                  </svg>

                  <div className="card">
                    <div className="a">
                      <p style={{ fontSize: "17px" }}>{api.nomPageFacebook}</p>

                      <p
                        style={{
                          fontSize: "13px",
                          textDecoration: "overline dotted",
                          paddingTop: "10px",
                        }}
                      >
                        Compte Alrani
                      </p>
                    </div>

                    <div className="b">
                      <div className="display">
                        <div className="f">
                          <p>{api.nombreDabonnesPageFacebook} abonnés</p>
                        </div>

                        <div className="g">
                          <svg
                            onClick={BeforeModifierNomPageHelp}
                            style={{ paddingRight: "10px" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            cursor="pointer"
                            fill="#fff"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 12a1 1 0 110 2 1 1 0 010-2zm0-10a4 4 0 011.19 7.82l-.19.054V14a1 1 0 01-1.993.117L11 14v-1a1 1 0 01.883-.993l.266-.012A2 2 0 1010 10a1 1 0 01-2 0 4 4 0 014-4z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      {/* display */}
                    </div>
                    {/* b */}

                    <div className="c">
                      <a
                        href={`https://alrani.com/${api.lienPageFacebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://alrani.com..
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          cursor="pointer"
                          fill="white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 0v3H1v12h12v-3h3V0zm7.2 13.2H2.8V4.8H4V12h7.2zm3.4-2.6H6.39l5.11-5.1L13 7V3H9l1.5 1.5-5.1 5.11V1.4h9.2z"></path>
                        </svg>
                      </a>
                    </div>
                    {/* c */}
                  </div>
                </div>
              </div>
            </>
          ))}
        </>
      )}
      {/* infos of page - popup */}

      {/* infos of page - help popup */}
      {/* infos of page - help popup */}
      {/* infos of page - help popup */}
      {/* infos of page - help popup */}
      {beforeModifierNomPageHelpPopup && (
        <>
          <div
            onClick={BeforeModifierNomPageHelp}
            className="popup-help-list-of-contacts-whatsapp-opacity"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur</li>
                  <p style={{ paddingRight: "3px" }}>l'icone</p>
                  <svg
                    style={{ paddingRight: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    fill="#000"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 0v3H1v12h12v-3h3V0zm7.2 13.2H2.8V4.8H4V12h7.2zm3.4-2.6H6.39l5.11-5.1L13 7V3H9l1.5 1.5-5.1 5.11V1.4h9.2z"></path>
                  </svg>

                  <p style={{ paddingRight: "5px" }}>pour</p>
                  <p style={{ paddingRight: "3px" }}>être</p>
                  <p style={{ paddingRight: "3px" }}>rediriger</p>
                  <p style={{ paddingRight: "3px" }}>
                    vers votre compte Alrani
                  </p>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-help-list-of-contacts-whatsapp-opacity */}
        </>
      )}
      {/* infos of page - help popup */}

      {/* ajouter - popup */}
      {/* ajouter - popup */}
      {/* ajouter - popup */}
      {/* ajouter - popup */}
      {/* ajouter - popup */}
      {/* ajouter - popup */}
      {/* ajouter - popup */}
      {popupAdd && (
        <>
          <div className="popup-add-page-fb-opacity">
            <div className="align">
              {!toggle && (
                <>
                  <div className="space">
                    <svg
                      onClick={Add}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      cursor="pointer"
                      fill="white"
                      version="1.1"
                      viewBox="0 0 40 40"
                      xmlSpace="preserve"
                    >
                      <path d="M21.414 20L33.207 8.207a.999.999 0 10-1.414-1.414L20 18.586 8.207 6.793a.999.999 0 10-1.414 1.414L18.586 20 6.793 31.793a.999.999 0 101.414 1.414L20 21.414l11.793 11.793a.997.997 0 001.414 0 .999.999 0 000-1.414L21.414 20z"></path>
                    </svg>

                    <svg
                      onClick={Help}
                      cursor="pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <g fill="yellow">
                        <path
                          fillRule="evenodd"
                          d="M8.197 4.523a1.532 1.532 0 00-1.051.196c-.318.19-.563.49-.687.85a.75.75 0 01-1.418-.49 3.1 3.1 0 011.335-1.648 3.032 3.032 0 012.079-.386 3.057 3.057 0 011.829 1.065 3.13 3.13 0 01.716 2c0 .487-.092.905-.275 1.266-.182.36-.431.62-.679.817-.194.156-.41.291-.581.398l-.096.06a2.507 2.507 0 00-.452.34.643.643 0 00-.172.292.75.75 0 01-1.499-.033c0-.163.035-.324.086-.479.08-.243.232-.543.515-.832.239-.243.505-.419.72-.554.044-.029.086-.056.126-.08.169-.106.296-.186.415-.282a.976.976 0 00.279-.323c.059-.117.113-.296.113-.59v-.002a1.63 1.63 0 00-.372-1.041c-.24-.29-.57-.481-.931-.544z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M8 11a1 1 0 100 2h.007a1 1 0 100-2H8z"></path>
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1116 0A8 8 0 010 8zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  {/* space */}
                </>
              )}

              <div className="card">
                {!toggle && (
                  <>
                    <div className="display">
                      <p
                        style={{
                          color: "red",
                          fontSize: "18px",
                        }}
                      >
                        Compte Alrani
                      </p>
                    </div>
                    {/* display */}

                    <div className="ajouter-compte-fb">
                      <p>Ajouter un Compte Alrani</p>
                    </div>
                    {/* ajouter-compte-fb */}

                    <div className="input-nom-page-fb">
                      <div className="align-in-center">
                        <input type="text" placeholder="Adresse E-mail" />
                      </div>
                    </div>
                    {/* input-nom-page-fb */}

                    <div className="input-nom-page-fb">
                      <div className="align-in-center">
                        <input type="text" placeholder="Mot de passe" />
                      </div>
                    </div>
                    {/* input-nom-page-fb */}

                    <div className="btn-ajouter-nouvelle-page-fb">
                      <button onClick={CompteLier}>Se connecter</button>
                    </div>
                  </>
                )}

                {/* display-compte-lier-om-al */}
                {/* display-compte-lier-om-al */}
                {/* display-compte-lier-om-al */}
                {toggle && (
                  <>
                    <div className="display-compte-lier-om-al">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        version="1.1"
                        viewBox="0 0 422 422"
                        xmlSpace="preserve"
                      >
                        <path d="M315.91 415.682c-18.036-25.363-33.765-53.708-46.749-84.248-9.987-23.464-18.514-48.622-25.406-74.934h1.595a4 4 0 000-8h-3.608c-.284-1.148-.586-2.285-.864-3.438-27.564-114.287-16.372-214.6-16.255-215.6a4.006 4.006 0 00-3.575-4.444L215 24.412V4a4 4 0 00-8 0v20.414l-6.049.606a4.004 4.004 0 00-3.575 4.444c.117 1 11.311 101.313-16.255 215.6-.278 1.152-.58 2.289-.864 3.438h-3.608a4 4 0 000 8h1.596c-6.893 26.315-15.42 51.474-25.407 74.935-12.98 30.534-28.709 58.88-46.748 84.246a4.001 4.001 0 003.26 6.318h41.69a4.001 4.001 0 003.997-4.182 40.58 40.58 0 01-.036-1.817c0-30.879 25.121-56 56-56s56 25.121 56 56c0 .61-.01 1.221-.036 1.822a3.997 3.997 0 003.996 4.177h41.689a4.001 4.001 0 003.26-6.319zM188.899 246.938c24.771-102.701 18.605-194.315 16.82-214.354l5.13-.514 5.432.514c-1.785 20.039-7.95 111.653 16.82 214.354.126.524.265 1.039.393 1.563h-44.987c.127-.524.266-1.039.392-1.563zM274.969 414c-1.06-34.367-29.349-62-63.969-62s-62.908 27.633-63.969 62h-30.017c16.536-24.193 31.046-50.878 43.186-79.434 10.393-24.417 19.213-50.643 26.295-78.066h49.009c7.081 27.42 15.901 53.645 26.295 78.065 12.142 28.56 26.651 55.244 43.185 79.435h-30.015z"></path>
                        <path d="M224.001 274.458a4 4 0 00-3.862-2.959h-18.275a3.999 3.999 0 00-3.862 2.959l-15.362 57a4 4 0 005.68 4.604 50.14 50.14 0 0122.683-5.452 50.143 50.143 0 0122.683 5.452 4 4 0 005.68-4.605l-15.365-56.999zm-13 48.152a58.162 58.162 0 00-18.513 3.045l12.439-46.156h12.146l12.439 46.156a58.145 58.145 0 00-18.511-3.045z"></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        viewBox="-5.5 0 32 32"
                      >
                        <path d="M4.52 23.72c-1.2 0-2.36-.48-3.2-1.32-.84-.88-1.32-2-1.32-3.2s.48-2.36 1.32-3.2l4.24-4.24c.8-.8 1.88-1.28 3.04-1.32.48 0 .84.36.88.8 0 .48-.36.84-.8.88-.72.04-1.4.32-1.92.84l-4.24 4.2c-.52.52-.84 1.24-.84 2s.28 1.48.84 2c.52.52 1.24.84 2 .84s1.48-.28 2-.84l4.24-4.24c.52-.52.84-1.24.84-2 0-.48.36-.84.84-.84s.84.36.84.84c0 1.2-.48 2.36-1.32 3.2l-4.24 4.24c-.88.88-2 1.36-3.2 1.36zM12 21.56c-.44 0-.8-.36-.84-.8 0-.48.32-.84.8-.88.72-.04 1.4-.32 1.88-.84l4.28-4.24c1.12-1.12 1.12-2.92 0-4-1.12-1.12-2.92-1.12-4 0l-4.28 4.24c-.52.52-.8 1.2-.84 1.92 0 .48-.4.8-.88.8s-.84-.4-.8-.88c.04-1.16.52-2.24 1.32-3.04l4.28-4.24c1.76-1.76 4.64-1.76 6.4 0s1.76 4.64 0 6.4l-4.28 4.24c-.8.8-1.84 1.28-3.04 1.32.04 0 0 0 0 0z"></path>
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100px"
                        version="1"
                        viewBox="0 0 1368 1368"
                      >
                        <path
                          d="M8938 6719c-8-5-42-11-74-14s-72-8-89-10c-16-3-115-7-220-11-104-3-224-8-265-11s-89-5-107-4c-18 0-35-4-38-9-4-6-11-7-18-3-17 10-156 1-222-14-16-4-34-8-40-8-30-3-82-19-101-31-11-8-24-11-27-7-4 3-15-1-25-10s-27-18-38-20c-10-1-25-6-32-11-22-14-74-27-177-46-232-43-245-50-265-136-26-109 0-177 115-298 41-43 72-83 68-89-3-5-9-3-14 4-6 11-11 11-21 1-16-16-45-16-52 1-5 10-7 10-12 0-3-7-14-13-24-13s-20 6-23 13c-4 10-7 10-18 0-7-7-21-13-30-13-10 0-20 6-23 13-5 10-7 10-12 0-7-15-44-17-44-3s-37 13-46-1c-5-8-8-8-13 0-5 7-83 12-226 15-121 3-236 9-255 13-39 9-107 8-160-3-28-5-447-16-594-15-16 0-35-4-42-10s-14-6-18-1c-7 13-105 13-112 0-3-5-11-5-19 2-9 8-15 8-20 0-3-5-24-10-45-10s-42-5-45-10c-5-8-11-8-20 0-8 7-15 7-19 1-6-10-31-9-41 1-4 3-18 0-33-8s-34-14-42-14-38-8-66-19c-28-10-73-22-99-25-26-4-57-11-69-16-11-4-39-13-61-19-45-14-161-58-187-72-10-5-24-9-32-9s-29-8-48-17c-18-9-45-22-60-30-14-7-32-13-40-13-27 0-58-63-58-119 0-101 68-118 202-50 10 5 26 9 36 9 9 0 26 6 37 13s40 19 65 27c25 7 52 20 61 27 8 7 24 13 35 13s29 7 40 15c10 8 39 15 64 15s54 7 64 15c11 8 29 15 41 15s25 3 28 7c4 3 17 8 30 9 12 2 74 12 137 23 98 17 172 21 492 25 208 2 381 7 386 10 18 11 138 14 186 5 73-13 681-26 906-19 47 2 113 0 147-5 61-7 62-7 98 28 25 25 36 43 34 59-2 13 0 29 4 36 5 6 5 18 0 25-4 6-6 20-5 30 2 9-1 17-7 17-5 0-13 9-16 20-7 23-62 80-116 121-19 15-60 53-91 85-31 33-67 69-80 82-16 17-18 21-5 16 9-3 17-2 17 2 0 5 34 10 76 11 51 2 80 7 90 18 9 8 24 15 34 15s31 6 47 14c115 59 218 84 378 91 44 2 118 7 165 10s150 8 230 10c182 5 325 13 370 19 19 3 51 8 70 10 19 3 51 8 70 11s78 7 130 10c167 7 194 15 216 57 20 38 15 145-7 159-18 11-341 10-361-2z"
                          transform="matrix(.1 0 0 -.1 0 1368)"
                        ></path>
                      </svg>

                      <p>
                        Le compte Alrani que vous avez ajouté a été lié à votre
                        compte Omisify
                      </p>
                    </div>

                    <div className="btn-ajouter-nouvelle-page-fb">
                      <NavLink to="/secure-page">
                        <button>Terminer</button>
                      </NavLink>
                    </div>
                  </>
                )}
                {/* display-compte-lier-om-al */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* fb-popup-add-opacity */}
        </>
      )}
      {/* ajouter - popup */}

      {/* ajouter - help popup */}
      {/* ajouter - help popup */}
      {/* ajouter - help popup */}
      {/* ajouter - help popup */}
      {/* ajouter - help popup */}
      {/* ajouter - help popup */}
      {popupHelp && (
        <>
          <div
            onClick={Help}
            className="popup-help-list-of-contacts-whatsapp-opacity"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <li>
                    Connectez-vous à votre compte Alrani pour lié votre compte
                    Alrani à votre compte Omisify
                  </li>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-help-list-of-contacts-whatsapp-opacity */}
        </>
      )}
      {/* ajouter - help popup */}
    </>
  );
}
