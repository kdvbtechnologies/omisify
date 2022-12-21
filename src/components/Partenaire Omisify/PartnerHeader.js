import axios from "axios";
import { useState } from "react";
import PopupMaintenance from "../Home Omisify/Maintenance/PopupMaintenance";
import NavbarBottomPartner from "../Home Omisify/NavbarBottomOmisify";
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
                <i>Partenaire Omisify</i>
              </div>
            </div>

            <div className="partner-info">
              <p>Noms de naissance : {name}</p>
              <p align="center" onClick={Maintenance}>
                ..
              </p>
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
                  <svg
                    onClick={PopupGain}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    fill="red"
                    cursor="pointer"
                    enableBackground="new 0 0 511.976 511.976"
                    version="1.1"
                    viewBox="0 0 511.976 511.976"
                    xmlSpace="preserve"
                  >
                    <path d="M462.323 440.044c-3.508 0-6.98.936-10.028 2.704-32.78 19.032-70.192 29.204-108.18 29.204-91.9 0-173.012-59.864-203.564-143.864h185.24c11.036 0 20.012-8.968 20.012-20 0-11.04-8.976-20-20.012-20H130.583c-1.596-12-2.412-21.468-2.412-32.004 0-10.532.812-19.996 2.412-31.996h195.204c11.036 0 20.012-8.968 20.012-20 0-11.04-8.976-20-20.012-20h-185.24c30.556-88 111.668-144.068 203.568-144.068 37.988 0 75.4 10.028 108.188 29.052a20 20 0 0010.02 2.688c7.112 0 13.756-3.832 17.328-9.98 5.536-9.54 2.276-21.816-7.268-27.364C433.495 11.86 389.147 0 344.119 0 230.911.004 130.367 76.088 98.531 184.088H49.635c-11.028 0-20.008 8.96-20.008 20 0 11.032 8.98 20 20.008 20h40.556c-1.356 12-2.036 21.496-2.036 31.996 0 10.504.68 20.004 2.036 32.004H49.635c-11.028 0-20.008 8.96-20.008 20 0 11.032 8.98 20 20.008 20h48.896c31.836 108 132.384 183.888 245.584 183.888 45.032 0 89.38-11.98 128.264-34.552 9.548-5.54 12.804-17.832 7.26-27.376-3.56-6.152-10.204-10.004-17.316-10.004z"></path>
                  </svg>
                  <p
                    onClick={PopupGain}
                    style={{ color: "black", cursor: "pointer" }}
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
                      <p>{getoldgaintlife} €</p>
                    </div>
                    {/* display */}
                  </>
                ) : (
                  <>
                    <div className="display">
                      <p style={{ color: "black", paddingRight: "10px" }}>
                        Gains :
                      </p>
                      <p>0 €</p>
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
