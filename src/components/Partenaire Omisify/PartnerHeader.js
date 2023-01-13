import axios from "axios";
import { useState } from "react";
import PopupMaintenance from "../Home Omisify/Maintenance/PopupMaintenance";
import NavbarBottomPartner from "../Home Omisify/NavbarBottomPartner";
import PartnerFooter from "./PartnerFooter";

export default function PartnerHeader() {
  const name = localStorage.getItem("https://omisify.com/name");
  const partnername = localStorage.getItem("https://omisify.com/partnername");

  /*
  const age = localStorage.getItem("https://omisify.com/age");
  const country = localStorage.getItem("https://omisify.com/country");
  const codewelcome = localStorage.getItem("https://omisify.com/codewelcome");
  const genre = localStorage.getItem("https://omisify.com/genre");
  const paymentmethod = localStorage.getItem(
    "https://omisify.com/paymentmethod"
  );
  const generositydays = localStorage.getItem(
    "https://omisify.com/generositydays"
  );
  */

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
          "Cet utilisateur a été présent sur la page partner de son compte Omisify";
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

  // maintenance
  const [popupMaintenance, setPopupMaintenance] = useState(false);
  function Maintenance() {
    setPopupMaintenance(!popupMaintenance);
  }

  // popup to right
  const [popup, setPopup] = useState(false);
  function PopupInCenter() {
    setPopup(!popup);
  }

  async function Print(e) {
    e.preventDefault();
    window.print();
  }

  const [popupGain, setPopupGain] = useState(false);
  function PopupGain() {
    setPopupGain(!popupGain);
  }

  // gain total
  const getoldgaintlife = localStorage.getItem("https://omisify.com/gaintlife");

  return (
    <>
      <div className="profil">
        <div className="partner-profil">
          <div className="page-partner-omisify-popup-to-right">
            <svg
              onClick={PopupInCenter}
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              width="20px"
              cursor="pointer"
              enableBackground="new 0 0 296.999 296.999"
              version="1.1"
              viewBox="0 0 296.999 296.999"
              xmlSpace="preserve"
            >
              <path d="M173.062 0h-49.126c-10.419 0-18.895 8.476-18.895 18.895v49.126c0 10.419 8.476 18.895 18.895 18.895h49.126c10.419 0 18.895-8.476 18.895-18.895V18.895C191.958 8.476 183.481 0 173.062 0zm-.871 67.15h-47.383V19.767h47.383V67.15zM173.062 105.041h-49.126c-10.419 0-18.895 8.476-18.895 18.895v49.126c0 10.419 8.476 18.895 18.895 18.895h49.126c10.419 0 18.895-8.476 18.895-18.895v-49.126c.001-10.418-8.476-18.895-18.895-18.895zm-.871 67.151h-47.383v-47.383h47.383v47.383zM173.062 210.083h-49.126c-10.419 0-18.895 8.476-18.895 18.895v49.126c0 10.419 8.476 18.895 18.895 18.895h49.126c10.419 0 18.895-8.476 18.895-18.895v-49.126c.001-10.419-8.476-18.895-18.895-18.895zm-.871 67.15h-47.383V229.85h47.383v47.383z"></path>
            </svg>
            <svg
              onClick={Print}
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              cursor="pointer"
              viewBox="0 0 48 48"
            >
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill="#212121" fillRule="nonzero">
                  <path d="M16.25 8h15.5a3.25 3.25 0 013.245 3.066l.005.184v2.749l1.75.001c2.9 0 5.25 2.35 5.25 5.25v13.5A3.25 3.25 0 0138.75 36L35 35.999v1.751A3.25 3.25 0 0131.75 41h-15.5A3.25 3.25 0 0113 37.75v-1.751L9.25 36A3.25 3.25 0 016 32.75v-13.5C6 16.35 8.35 14 11.25 14l1.75-.001V11.25a3.25 3.25 0 013.066-3.245L16.25 8h15.5-15.5zm15.5 20.5h-15.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h15.5a.75.75 0 00.75-.75v-8.5a.75.75 0 00-.75-.75zm5-12h-25.5a2.75 2.75 0 00-2.75 2.75v13.5c0 .414.336.75.75.75l3.75-.001V29.25A3.25 3.25 0 0116.25 26h15.5A3.25 3.25 0 0135 29.25v4.249l3.75.001a.75.75 0 00.75-.75v-13.5a2.75 2.75 0 00-2.75-2.75zm-5-6h-15.5a.75.75 0 00-.743.648l-.007.102v2.749h17V11.25a.75.75 0 00-.648-.743l-.102-.007z"></path>
                </g>
              </g>
            </svg>
          </div>
          {/* page-partner-omisify-popup-to-right */}

          <div className="profil-desc">
            <div className="profil-name-role">
              <div className="partner-name">
                <p>@{partnername}</p>
              </div>
              <div className="partner-role">
                <i>Génération Connecté</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : {name}</p>

              {/*
              <p>Genre : {genre}</p>
              <p>Pays : {country}</p>
              <p>Age : {age}</p>
              <p>Code B : {codewelcome}</p>
              <p>Journées de générosité : {generositydays}</p>
              <p>Méthode de Paiement préféré : {paymentmethod}</p>
               */}
              <div className="profil-hr">
                <hr />
                <hr />
              </div>
              <PartnerFooter />
            </div>
          </div>
        </div>
      </div>

      <NavbarBottomPartner />

      {popupMaintenance && (
        <div onClick={Maintenance}>
          <PopupMaintenance />
        </div>
      )}

      {popup && (
        <>
          <div
            onClick={PopupInCenter}
            className="page-partner-popup-to-right-opacity"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <p
                    onClick={PopupGain}
                    style={{
                      color: "red",
                      cursor: "pointer",
                      fontSize: "20px",
                      paddingRight: "10px",
                    }}
                  >
                    CFA
                  </p>

                  <p
                    onClick={PopupGain}
                    style={{
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    Voir mes Gains
                  </p>
                </div>
                {/* display */}
              </div>
            </div>
            {/* align */}
          </div>
          {/* page-partner-popup-to-right-opacity */}
        </>
      )}

      {popupGain && (
        <>
          <div
            onClick={PopupGain}
            className="page-partner-popup-to-right-opacity"
          >
            <div className="align">
              <div className="card">
                {getoldgaintlife ? (
                  <>
                    <div className="display">
                      <p style={{ color: "black", paddingRight: "10px" }}>
                        Gains :
                      </p>
                      <p>{getoldgaintlife} FCFA</p>
                    </div>
                    {/* display */}
                  </>
                ) : (
                  <>
                    <div className="display">
                      <p style={{ color: "black", paddingRight: "10px" }}>
                        Gains :
                      </p>
                      <p>0 FCFA</p>
                    </div>
                    {/* display */}
                  </>
                )}
              </div>
            </div>
            {/* align */}
          </div>
          {/* page-partner-popup-to-right-opacity */}
        </>
      )}
    </>
  );
}
