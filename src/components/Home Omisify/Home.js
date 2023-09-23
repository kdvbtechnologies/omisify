import { useState } from "react";
import { NavLink } from "react-router-dom";
import BackbtnTwo from "../Back/BackbtnTwo";
import FilePopupImagePartner from "./PopupImagePartner";
import FilePopupImageVideaste from "./PopupImageVideaste";
import FilePopupImageInfluent from "./PopupImageInfluent";
import FilePopupComment from "./PopupComment";
import { useTranslation } from "react-i18next";
import Back from "../Back/Back";
import GenerationOmisify from "./GenerationOmisify";
import NavbarTopOmisify from "./NavbarTopOmisify";
import PopupMaintenance from "./Maintenance/PopupMaintenance";
import axios from "axios";
import NavbarBottomHome from "./NavbarBottomHome";

export default function HomeOmisify() {
  const { t } = useTranslation();
  const userId = localStorage.getItem("https://omisify.com/userId");
  //const shortname = localStorage.getItem("https://omisify.com/shortname");
  const homeinfluencer =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671410641/omisify/home-influencer_h9degr.jpg";

  const partner =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671415292/omisify/partner_eo1nnu.jpg";

  const videaste =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671415297/omisify/videaste_az2frv.jpg";

  const influentgroup =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671416353/omisify/influent-group_ptvler.jpg";

  // const influentdroitdauteur =
  // "https://res.cloudinary.com/rasivyy/image/upload/v1671653231/vixinol/influent_droit_dauteur_r5ygv6.jpg";

  const [popupPartner, setPopupPartner] = useState(false);
  const [popupVideaste, setPopupVideaste] = useState(false);
  const [popupInfluent, setPopupInfluent] = useState(false);

  const [popupImagePartner, setPopupImagePartner] = useState(false);
  const [popupImageVideaste, setPopupImageVideaste] = useState(false);
  const [popupImageInfluent, setPopupImageInfluent] = useState(false);

  const [popupRemunerationPartner, setPopupRemunerationPartner] =
    useState(false);

  const [popupComment, setPopupComment] = useState(false);

  function PopupRemunerationPartner() {
    setPopupRemunerationPartner(!popupRemunerationPartner);
  }

  function PopupComment() {
    setPopupComment(!popupComment);
  }

  // partner
  // partner
  // partner
  function PopupPartner() {
    setPopupPartner(!popupPartner);
  }

  function PopupImagePartner() {
    setPopupImagePartner(!popupImagePartner);
  }

  // videaste
  // videaste
  // videaste
  function PopupVideaste() {
    setPopupVideaste(!popupVideaste);
  }

  function PopupImageVideaste() {
    setPopupImageVideaste(!popupImageVideaste);
  }

  // influent
  // influent
  // influent
  function PopupInfluent() {
    setPopupInfluent(!popupInfluent);
  }

  function PopupImageInfluent() {
    setPopupImageInfluent(!popupImageInfluent);
  }

  // popup consesil
  // popup conseil
  // popup conseil
  // popup conseil
  const [popupConseil, setPopupConseil] = useState(false);
  function PopupConseil() {
    setPopupConseil(!popupConseil);
  }
  console.log(PopupConseil);

  // popup maintenance
  const [popupMaintenance, setPopupMaintenance] = useState(false);
  function Maintenance() {
    setPopupMaintenance(!popupMaintenance);
  }

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
          "Cet utilisateur a été présent sur la page de la Nouvelle version d'Omisify (Navbar Bottom)";
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

  const [ecranDemarrageOA, setEcranDemarrageOA] = useState(false);
  //fermer
  function CloseEcranDemarrageOA() {
    setEcranDemarrageOA(false);
    console.log(ecranDemarrageOA);
    console.log("ecran de demarrage false, menu des applications true");
    const menu = "1";
    localStorage.setItem("https://vixinol.com/menu", menu);
    console.log("localStorage.setItem reussie !");
  }

  return (
    <>
      <NavbarTopOmisify />

      <div className="home-influencer-new-omisify">
        <div className="a">
          <div className="title">
            <p>Omisify la marque préférée des influenceurs</p>
          </div>

          {/* 
          <div className="display-btn">
            <div className="button-a">
              <button>Installer l'application Omisify</button>
            </div>
            

            <div className="button-b">
              <NavLink to="/signup">
                <button>Travailler avec Omisify</button>
              </NavLink>
            </div>
          </div>
          {/* display-btn */}
        </div>
        {/* a */}

        <div className="b">
          <img onClick={CloseEcranDemarrageOA} src={homeinfluencer} alt="" />
        </div>
      </div>
      {/* home-influencer-new-omisify */}

      <div className="home-influencer-new-omisify-mobile">
        <div className="b">
          <img src={homeinfluencer} alt="" />
        </div>

        <div className="a">
          <div className="title">
            <p>Omisify la marque préférée des influenceurs</p>
          </div>

          {/* 
          <div className="display-btn">

            <div className="button-a">
              <button>Installer l'application Omisify</button>
            </div>

            <div className="button-b">
              <NavLink to="/signup">
                <button>Travailler avec Omisify</button>
              </NavLink>
            </div>
          </div>
          {/* display-btn */}
        </div>
        {/* a */}
      </div>
      {/* home-influencer-new-omisify-mobile */}

      <GenerationOmisify />

      <div className="home-omisify-go-down">
        <div className="center">
          <p onClick={CloseEcranDemarrageOA}>
            Omisify est favorable pour les influenceurs et pour les
            non-influenceurs
          </p>

          <div className="a">
            {/* 
            <div className="align">
              <p onClick={PopupConseil}>Comment devenir influenceur</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                cursor="pointer"
                width="17px"
                fill="white"
                enableBackground="new 0 0 489.6 489.6"
                version="1.1"
                viewBox="0 0 489.6 489.6"
                xmlSpace="preserve"
              >
                <path d="M0 244.8c0 9.5 7.7 17.2 17.2 17.2h414.2L322.9 370.4c-3.3 3.3-5 7.7-5 12.1s1.7 8.8 5 12.1c6.7 6.7 17.6 6.7 24.3 0l137.6-137.7c6.4-6.4 6.4-17.8 0-24.3L347.1 95c-6.7-6.7-17.6-6.7-24.3 0-6.7 6.7-6.7 17.6 0 24.3l108.4 108.4H17.1C7.6 227.6 0 235.3 0 244.8z"></path>
              </svg>
            </div>
           {/* align */}
          </div>
          {/* a */}
        </div>
        {/* center */}
      </div>
      {/* home-omisify-go-down */}

      <div className="shrink-omisify-free-box-shadow">
        <div className="box-shadow">
          <div className="like-i-b">
            <i>Gratuit !!!</i>
          </div>

          <div className="like-i-c">
            <p>Omisify est Gratuit !</p>
          </div>

          <div className="like-i-d">
            <div style={{ marginTop: "40px" }} className="svg-and-p">
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
                Omisify est Gratuit et rémunère toujours ses Partenaires quelque
                soit le pays dans lequel vous vous trouver et quelque soit la
                situation de votre pays
              </p>
            </div>

            <div className="svg-and-p">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                width="28px"
                height="28px"
                fill="red"
                enableBackground="new 0 0 490.766 490.766"
                version="1.1"
                viewBox="0 0 490.766 490.766"
                xmlSpace="preserve"
              >
                <path d="M472.554 319.199c-9.4-.7-28.8 9.8-34.1 12.5-18.9 9.5-45.2 24.4-62.5 36.3-1.2.8-2.8 1.9-4 2.7-7.8 5-16 8.3-25.1 10.3-50.2 10.7-123.3 11.8-123.3 11.8l-4.3.2c-3.2.2-6.1-2.1-6.5-5.2-.5-3.4 2-6.6 5.6-6.9l108.7-10.3c12-1.3 21.5-12.5 20.2-25.1s-12.9-21.8-24.9-20.5l-96.7-1.2c-6.6-.1-17.1-1.7-23.4-3.6-62.3-18.2-97.5-1.2-116.2 6.8-4.2-6.9-12.1-11.4-20.9-10.8l-41.7 2.8c-13.9.9-24.3 12.5-23.4 25.9l6.7 92.6c1 13.4 13 23.5 26.9 22.5l41.7-2.8c8.8-.6 16-6 19.1-13.4l183.2 7.9c20.4 2.2 39.5-.3 57.5-9.7l5.2-2.7 138.5-81c6.8-4 11.6-10.9 11.9-18.5.3-9.3-5-19.6-18.2-20.6zm-423.6 118.9c-7.8 0-14.2-6.1-14.2-13.7s6.4-13.7 14.2-13.7 14.2 6.1 14.2 13.7-6.4 13.7-14.2 13.7zm320.6-87c.2-2.5.2-5.1-.1-7.7-.3-3.3-1.1-6.4-2.1-9.4.1-.2.2-.4.2-.6 14.6-8 43.2-21.8 58.8-27.9 7.8-3.1 15.5-2.9 22.6 1.9-5.6 2-10.8 4.5-15.7 6.9-16.4 8.2-45.3 23.9-59.4 33.8-1.4 1-2.9 2-4.3 3zm41.8-54.9c-11.3 5-33 12.6-43.3 18.3l-7 3.8c-.7.4-1.3.8-1.9 1.3-3.1-3.7-6.8-6.8-10.9-9.3 9.6-5.1 31-12 40.7-15.8 7.8-3.1 15.3-2.9 22.4 1.7zm-155.3-231.6c-29.7 0-53.7 24.1-53.7 53.7s24.1 53.7 53.7 53.7c29.7 0 53.7-24.1 53.7-53.7s-24-53.7-53.7-53.7zm15.4 74.9c-2.3 2.8-5.4 4.8-9 5.7-1.6.4-2.2 1.2-2.2 2.9.1 1.6 0 3.2 0 4.8 0 1.4-.7 2.2-2.1 2.2h-5.1c-1.5 0-2.2-.9-2.2-2.3v-3.5c0-2.6-.1-2.7-2.6-3.1-3.1-.5-6.2-1.2-9.1-2.6-2.3-1.1-2.5-1.7-1.8-4 .5-1.8 1-3.5 1.5-5.3.6-2 1.2-2.3 3-1.3 3.2 1.7 6.6 2.6 10.1 3 2.3.3 4.5.1 6.6-.9 3.9-1.7 4.6-6.3 1.2-9.1-1.1-.9-2.4-1.6-3.8-2.2-3.5-1.5-7.1-2.7-10.3-4.6-5.3-3.2-8.7-7.5-8.3-14 .4-7.3 4.6-11.9 11.3-14.3 2.8-1 2.8-1 2.8-3.9v-2.9c.1-2.2.4-2.5 2.6-2.6h2c4.6 0 4.6 0 4.6 4.6 0 3.3 0 3.3 3.3 3.8 2.5.4 4.9 1.1 7.2 2.1 1.3.6 1.8 1.4 1.4 2.8-.6 2-1.1 4-1.8 6-.6 1.9-1.2 2.1-3 1.3-3.6-1.7-7.4-2.5-11.4-2.3-1 .1-2.1.2-3 .6-3.4 1.5-4 5.3-1.1 7.6 1.5 1.2 3.2 2 4.9 2.8 3 1.3 6.1 2.5 9 4.1 9.4 5.2 11.8 16.7 5.3 24.6zm77.7-21.2c0 8.2-6.7 14.9-14.9 14.9s-14.9-6.7-14.9-14.9 6.7-14.9 14.9-14.9 14.9 6.7 14.9 14.9zm-156.3 0c0 8.2-6.7 14.9-14.9 14.9s-14.9-6.7-14.9-14.9 6.7-14.9 14.9-14.9 14.9 6.7 14.9 14.9zm180.2-87.6h-234c-13.5 0-24.5 11-24.5 24.5v126.2c0 13.5 11 24.5 24.5 24.5h234c13.5 0 24.5-11 24.5-24.5v-126.2c0-13.5-11-24.5-24.5-24.5zm3.6 127.2c-2-.5-4-.8-6.1-.8-13.7 0-24.8 11.1-24.8 24.8 0 1 .1 2.1.2 3.1h-181.7c.3-1.5.4-3 .4-4.6 0-13.7-11.1-24.8-24.8-24.8-1.5 0-2.9.1-4.4.4v-75.4c1.4.3 2.9.4 4.4.4 13.7 0 24.8-11.1 24.8-24.8 0-1.6-.1-3.1-.4-4.6h182.2c-.5 1.9-.8 4-.8 6.1 0 13.7 11.1 24.8 24.8 24.8 2.1 0 4.2-.3 6.1-.8v76.2h.1zm-261.7 75.1c0-5.8 4.7-10.5 10.5-10.5h261.7c5.8 0 10.5 4.7 10.5 10.5s-4.7 10.5-10.5 10.5h-261.8c-5.7 0-10.4-4.7-10.4-10.5zm0 38c0-5.8 4.7-10.5 10.5-10.5h261.7c5.8 0 10.5 4.7 10.5 10.5s-4.7 10.5-10.5 10.5h-261.8c-5.7 0-10.4-4.7-10.4-10.5z"></path>
              </svg>

              <p>
                Avec Omisify vous pourrez retirer votre rémunération à n'importe
                quel moment. Avec Omisify, votre rémunération est à porter de
                vos mains. Omisify utilise tout les moyens de paiement
                disponible pour permettre à tout ses Partenaires d'être toujours
                rémunérer
              </p>
            </div>

            <div className="svg-and-p">
              <svg
                width="40px"
                height="40px"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M473.6 256.6c0-99.3-67.1-185.9-163.3-210.6-9.2-2.4-18.6 3.2-20.9 12.4-2.4 9.2 3.2 18.6 12.4 20.9C382.7 100 439.2 173 439.2 256.6c0 73.7-43.9 139-109.6 167.7l15.9-37c3.7-8.7-.3-18.8-9-22.6-8.7-3.7-18.8.3-22.6 9l-31 72.2c-3.7 8.7.3 18.8 9 22.6l72.2 31c10.8 3.8 19.8-2.5 22.6-9 3.7-8.7-.3-18.8-9-22.6l-31.4-13.5c76.5-34.6 127.3-111.4 127.3-197.8zM210.4 433.9C129.5 413.1 73 340.2 73 256.6c0-72.7 42.7-137.2 106.9-166.5L165 124.7c-3.7 8.7.1 19.2 9 22.6 10.4 3.9 19.2-.8 22.6-9l31-72.3c3-7 2.9-17.5-9-22.6l-72.2-31c-8.7-3.7-18.8.3-22.6 9-3.7 8.7.3 18.8 9 22.6l33.6 14.4C89.6 93.1 38.6 170 38.6 256.6c0 99.3 67.2 185.8 163.3 210.6 11.6 3 18.9-4.6 20.9-12.4 2.3-9.2-3.2-18.5-12.4-20.9z"></path>
                <path d="M296.6 321.4c8.8-9.2 13.2-20.8 13.2-34.6 0-6.3-1.1-12.1-3.2-17.5s-5.1-10-9-14c-3.9-3.9-9-7.2-15.2-10-3.3-1.4-9.9-3.4-20-5.9V182c6.5 1.3 11.6 4.1 15.4 8.3 3.7 4.2 6.2 10.2 7.4 18l20.6-3.1c-1.8-12.6-7-22.6-15.7-29.8-6.8-5.7-16-9.1-27.6-10.2v-9.5h-11.8v9.5c-13.2 1.3-23.2 5-29.9 10.9-10.1 8.8-15.1 20.3-15.1 34.5 0 8 1.7 15.1 5.2 21.4 3.4 6.3 8.3 11.2 14.7 14.7 8.6 4.8 17 8 25.2 9.5v63.5c-7.8-.8-14.6-4.8-20.2-11.9-3.9-5-6.7-12.9-8.2-23.6l-20.1 3.8c.7 10.3 3.4 19.1 7.9 26.3 4.5 7.2 9.9 12.4 16.2 15.6 6.2 3.2 14.4 5.4 24.3 6.7v19.9h11.8v-20.2c14-.7 25.4-5.7 34.1-14.9zm-45.8-84.5c-9.1-2.7-15.5-6.4-19.3-11-3.8-4.6-5.7-10.3-5.7-17.1 0-6.9 2.2-12.8 6.7-17.8s10.6-8.1 18.3-9.3v55.2zm30.9 72.6c-5.1 5.8-11.5 9.1-19.2 10.1v-60.7c10.7 3.5 17.9 7.4 21.5 11.8 3.6 4.4 5.4 10.2 5.4 17.5-.1 8.4-2.6 15.6-7.7 21.3z"></path>
              </svg>

              <p>
                Avec Omisify vous gagnez de l'argent même lorsque vous dormez.
                Omisify est Gratuit et rémunère toujours ses Partenaires
              </p>
            </div>
            {/* svg-and-p */}
          </div>
          {/* like-i-d */}

          <div
            style={{
              fontSize: "14px",
              paddingLeft: "20px",
              paddingRight: "20px",
              marginBottom: "20px",
              color: "blue",
            }}
            className="omisify"
          >
            <p>Omisify la marque préférée des influenceurs</p>
          </div>
          {/* omisify */}
        </div>
        {/* box-shadow */}
      </div>
      {/* shrink-omisify-free-box-shadow */}

      <div className="home-omisify">
        <div className="display">
          {/* partner */}
          {/*
          <div className="a">
            <img src={partner} alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              width="20px"
              enableBackground="new 0 0 56.787 56.787"
              version="1.1"
              viewBox="0 0 56.787 56.787"
              xmlSpace="preserve"
            >
              <path d="M20.875 23.107c-.178.011-.756.508-.756.508.311.134.935-.519.756-.508zm.078-.102l-.046.028.045-.018.001-.01zM42.363.76a5.807 5.807 0 110 11.614 5.807 5.807 0 010-11.614zM7.503 25.657h1.556v-.748H7.503c-.424 0-.73-.084-.842-.23-.085-.112-.048-.258-.048-.258l.019-4.516h-.748v4.357c-.033.152-.075.517.171.853.262.359.751.542 1.448.542zm49.185 10.612l-.211-1.712c-.834-6.688-.867-6.943-.545-18.729a.748.748 0 00-.728-.768c-.392-.026-.756.314-.769.727-.324 11.896-.289 12.161.557 18.952l.212 1.715c.217 1.643.026 2.781-.533 3.219-.651.502-1.79.056-1.868.024-5.501-1.692-12.354 1.804-12.644 1.949a.747.747 0 10.687 1.325c.045-.021 3.104-1.576 6.576-2.096V52.52h-3.107a1.145 1.145 0 100 2.29h8.826a1.146 1.146 0 100-2.29h-2.863V40.749a8.962 8.962 0 012.021.354c.08.032 1.935.794 3.281-.24 1.031-.792 1.406-2.341 1.108-4.594zm-3.556-3.395c-.129-4.919-1.741-9.636-1.868-14.534-.187-7.134-11.119-7.296-11.207-.337-4.184.712-8.363 1.09-12.617.89-3.861-.181-3.873 5.8-.039 5.979 4.468.209 8.9-.215 13.301-.937.452 2.618.987 5.223 1.157 7.871-9.104 3.18-14.15 10.885-15.438 20.677-.009.067-.011.139-.017.209v-21.68h5.741v-5.125h-20.59c.012-.065.017-.141.021-.235l.009-.188c.026-.433.102-.581.526-.663.107-.02.242-.026.378-.024v.36h5.526c.161.03.321.053.47.053.232 0 .432-.053.55-.212.062-.083.062-.198.061-.309 0-.107-.001-.217.051-.282a.557.557 0 01.343-.172 1.533 1.533 0 00-.187.708h6.259c0-1.204-1.402-2.18-3.129-2.18-.54 0-1.037.103-1.479.27.103 1.031-.867.931-1.242.855a2.194 2.194 0 00-.12.171c-.017-.004-.031-.014-.05-.015a.736.736 0 00-.535.247c-.095.116-.093.266-.093.398.001.081.001.165-.024.198-.066.089-.196.118-.345.126v-.862H12.49v.457a2.213 2.213 0 00-.413.033c-.537.103-.645.35-.674.83l-.009.192a1.234 1.234 0 01-.023.243H0v5.125h3.125v24.858h23.278V53.38c.379 3.83 6.916 3.48 7.492-.904.996-7.575 5.414-12.633 12.842-14.307 3.088.47 6.499-1.285 6.395-5.295zM8.444 9.014l.941 13.417-2.485.174-.941-13.416 2.485-.175z"></path>
            </svg>
            <h3>Partenaire Omisify</h3>
            <p>
              Travaillez à votre propre rythme depuis chez vous en tant que
              Partenaire Omisify
            </p>

            <svg
              onClick={PopupPartner}
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              cursor="pointer"
              width="20px"
              enableBackground="new 0 0 25.93 25.93"
              version="1.1"
              viewBox="0 0 25.93 25.93"
              xmlSpace="preserve"
            >
              <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
            </svg>
          </div>

          <div className="home-omisify-remuneration">
            <p onClick={PopupRemunerationPartner}>
              Transparence sur la rémunération des Partenaires Omisify
            </p>
          </div>
            */}

          {/* videaste */}
          {/* videaste */}
          {/* videaste */}
          {/*
          <div className="a">
            <img src={videaste} alt="" />
            <svg
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M480.6 172h-257L474 132.7c16-3.2 18.5-17.5 16.8-24.4l-17.3-81.1c-2.3-10.6-12.4-17.6-23.1-15.9L28.3 77.5c-8.4 1.4-19.4 9.9-16.8 24.4 0 0 19.3 89.3 19.3 90.4v288.2c0 11.3 9.1 20.4 20.4 20.4h429.4c11.3 0 20.4-9.1 20.4-20.4V192.4c0-11.3-9.1-20.4-20.4-20.4zM55.9 114.5l381.7-59.9 8.8 41.1-381.8 59.9-8.7-41.1zm404.3 345.7H71.6V212.8h388.6v247.4z"></path>
              <path d="M205.5 435.4l137.8-87.7c4.9-2.7 11.9-13.4 0-22.5l-137.8-87.7c-7.4-5-22.5-2.5-23.6 11.3v175.4c.9 16.1 18.1 15.2 23.6 11.2zm6.4-160.4l96.6 61.5-96.6 61.5V275z"></path>
            </svg>
            <h3>Partenaire Omisify Vidéaste</h3>

            <p>
              Travaillez avec Omisify en tant que Partenaire Omisify Vidéaste
            </p>

            <svg
              onClick={PopupVideaste}
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              cursor="pointer"
              width="20px"
              enableBackground="new 0 0 25.93 25.93"
              version="1.1"
              viewBox="0 0 25.93 25.93"
              xmlSpace="preserve"
            >
              <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
            </svg>
          </div>

          <div className="home-omisify-remuneration">
            <p onClick={PopupRemunerationPartner}>
              Transparence sur la rémunération des Partenaires Omisify Vidéaste
            </p>
          </div>
             */}

          {/* influent */}
          {/* influent */}
          {/* influent */}
          {/*
          <div className="a">
            <img src={influentgroup} alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              viewBox="0 0 512 512"
            >
              <path d="M23 23v466h466v-18H41v-82.184l85.854-57.234 70.023 70.022 65.133-260.536L387.28 203.7l67.79-107.97 19.317 11.858 6.102-71.1-60.644 37.616 19.884 12.207-59.01 93.99-130.732-65.366-62.865 251.462-57.98-57.978L41 367.184V23H23z"></path>
            </svg>
            <h3>Partenaire Omisify Influent</h3>
            <p>
              Faites Travaillez vos abonnés à votre place, utilisez votre
              audience à votre avantage, inscrivez-vous gratuitement et gagnez
              de l'argent en tant que Partenaire Omisify Influent
            </p>

            <svg
              onClick={PopupInfluent}
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              cursor="pointer"
              width="20px"
              enableBackground="new 0 0 25.93 25.93"
              version="1.1"
              viewBox="0 0 25.93 25.93"
              xmlSpace="preserve"
            >
              <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
            </svg>
          </div>

          <div className="home-omisify-remuneration">
            <p onClick={PopupRemunerationPartner}>
              Transparence sur la rémunération des Partenaires Omisify Influent
            </p>
          </div>
            */}
        </div>
      </div>

      {/*
      <div className="droit-dauteur-partner-omisify">
        <div className="left">
          <img src={influentdroitdauteur} alt="" />
        </div>

        <div className="right">
          <p>Droit d'Auteur</p>
          <p>
            En plus d'être rémunérer juste pour avoir ajouter le logo de la
            marque Omisify à leur photo ou vidéo, les personnes qui font parties
            de la Nouvelle Génération sont aussi rémunérer pour leur Droit
            d'auteur
          </p>
        </div>
      </div>
      {/* droit-dauteur-partner-omisify */}

      <div className="home-omisify-final">
        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          N'attendez plus, Rejoignez toutes ces personnes qui sont rémunérées
          par Omisify
        </p>
        <p>La Génération Connecté c'est la Nouvelle Génération !</p>

        <NavLink to="/signup">
          <button>Rejoindre la Génération Connecté</button>
        </NavLink>
      </div>

      {/* 
      <p>Inauguration Omisify Francophone - 23 Décembre 2022</p>
      <p>Voir les inaugurations à venir</p>

      <p>Bonus</p>

      <p>Comment fonctionne Omisify</p>
      <p>1</p>
      <p>Installer l'application Omisify</p>
      <p>Installer l'application Web Omisify depuis Vixinol Store</p>

      <p>2</p>
      <p>Inscription et Connexion</p>
      <p>
        Après votre inscription, Suivez le guide détaillé qui est épinglé au
        menu de votre compte
      </p>

      <p>3</p>
      <p>Réception du Bonus de Bienvenue et Début du Travail</p>
      <p>
        Recevez votre Bonus de Bienvenue, télécharger les affiches et débuter le
        travail
      </p>

      <p>
        Besoin d'aide ? Le Service Partenaire d'Omisify est disponible 24h/24
      </p>
      <p>Contacter Le Service Partenaire d'Omisify</p>

      <p>
        Télécharger l'application Omisify et travaillez à partir de n'importe
        quel endroit, Suivez les statistiques détaillés et votre historique de
        travail
      </p>
      <p>
        L'application Omisify fonctionne sur tout les types de mobile, tablettes
        et ordinateur
      </p>

      <p>
        Emporter l'application Omisify lors de vos déplacements et suivez les
        résultats de votre travail en temps réel
      </p>

      <p>Faites comme les autres, Travaillez avec Omisify</p>
      <button>Télécharger l'application Omisify</button>
      */}

      {userId && (
        <>
          <NavbarBottomHome />
        </>
      )}

      {/* popup card Partner */}
      {/* popup card Partner */}
      {/* popup card Partner */}
      {/* popup card Partner */}
      {/* popup card Partner */}
      {/* popup card Partner */}
      {/* popup card Partner */}
      {/* popup card Partner */}
      {/* popup card Partner */}
      {/* popup card Partner */}
      {/* popup card Partner */}
      {/* popup card Partner */}
      {/* popup card Partner */}
      {/* popup card Partner */}
      {popupPartner && (
        <>
          <div className="popup-card-background">
            <div className="card">
              <div className="a">
                <div onClick={PopupPartner} className="back-popup">
                  <BackbtnTwo />
                </div>
                <img onClick={PopupImagePartner} src={partner} alt="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  cursor="pointer"
                  width="20px"
                  enableBackground="new 0 0 56.787 56.787"
                  version="1.1"
                  viewBox="0 0 56.787 56.787"
                  xmlSpace="preserve"
                >
                  <path d="M20.875 23.107c-.178.011-.756.508-.756.508.311.134.935-.519.756-.508zm.078-.102l-.046.028.045-.018.001-.01zM42.363.76a5.807 5.807 0 110 11.614 5.807 5.807 0 010-11.614zM7.503 25.657h1.556v-.748H7.503c-.424 0-.73-.084-.842-.23-.085-.112-.048-.258-.048-.258l.019-4.516h-.748v4.357c-.033.152-.075.517.171.853.262.359.751.542 1.448.542zm49.185 10.612l-.211-1.712c-.834-6.688-.867-6.943-.545-18.729a.748.748 0 00-.728-.768c-.392-.026-.756.314-.769.727-.324 11.896-.289 12.161.557 18.952l.212 1.715c.217 1.643.026 2.781-.533 3.219-.651.502-1.79.056-1.868.024-5.501-1.692-12.354 1.804-12.644 1.949a.747.747 0 10.687 1.325c.045-.021 3.104-1.576 6.576-2.096V52.52h-3.107a1.145 1.145 0 100 2.29h8.826a1.146 1.146 0 100-2.29h-2.863V40.749a8.962 8.962 0 012.021.354c.08.032 1.935.794 3.281-.24 1.031-.792 1.406-2.341 1.108-4.594zm-3.556-3.395c-.129-4.919-1.741-9.636-1.868-14.534-.187-7.134-11.119-7.296-11.207-.337-4.184.712-8.363 1.09-12.617.89-3.861-.181-3.873 5.8-.039 5.979 4.468.209 8.9-.215 13.301-.937.452 2.618.987 5.223 1.157 7.871-9.104 3.18-14.15 10.885-15.438 20.677-.009.067-.011.139-.017.209v-21.68h5.741v-5.125h-20.59c.012-.065.017-.141.021-.235l.009-.188c.026-.433.102-.581.526-.663.107-.02.242-.026.378-.024v.36h5.526c.161.03.321.053.47.053.232 0 .432-.053.55-.212.062-.083.062-.198.061-.309 0-.107-.001-.217.051-.282a.557.557 0 01.343-.172 1.533 1.533 0 00-.187.708h6.259c0-1.204-1.402-2.18-3.129-2.18-.54 0-1.037.103-1.479.27.103 1.031-.867.931-1.242.855a2.194 2.194 0 00-.12.171c-.017-.004-.031-.014-.05-.015a.736.736 0 00-.535.247c-.095.116-.093.266-.093.398.001.081.001.165-.024.198-.066.089-.196.118-.345.126v-.862H12.49v.457a2.213 2.213 0 00-.413.033c-.537.103-.645.35-.674.83l-.009.192a1.234 1.234 0 01-.023.243H0v5.125h3.125v24.858h23.278V53.38c.379 3.83 6.916 3.48 7.492-.904.996-7.575 5.414-12.633 12.842-14.307 3.088.47 6.499-1.285 6.395-5.295zM8.444 9.014l.941 13.417-2.485.174-.941-13.416 2.485-.175z"></path>
                </svg>
                <h3>Partenaire Omisify</h3>
                <p>
                  Travailler avec Omisify en faisant de la publicité pour des
                  entreprises
                </p>
                <p>
                  Travaillez à votre propre rythme depuis le confort de votre
                  maison et gagnez de l'argent avec Omisify
                </p>

                <p>
                  Utilisez votre compte Facebook, votre compte Tik Tok, votre
                  compte Youtube,... pour faire de la publicité pour des
                  entreprises
                </p>
                <p>
                  Inscrivez-vous gratuitement et commencer à travaillez avec
                  Omisify
                </p>

                <NavLink className="navlink" to="/signup">
                  <p
                    style={{
                      color: "blue",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    S'inscrire gratuitement
                  </p>
                </NavLink>

                {/*
                <NavLink to="/">
                  <button>Continuer la lecture</button>
                  </NavLink>
                */}
                <button style={{ width: "100px" }} onClick={Maintenance}>
                  ..
                </button>
              </div>
            </div>
          </div>

          {popupImagePartner && (
            <div onClick={PopupImagePartner}>
              <FilePopupImagePartner />
            </div>
          )}
        </>
      )}

      {/* popup card Videaste */}
      {/* popup card Videaste */}
      {/* popup card Videaste */}
      {/* popup card Videaste */}
      {/* popup card Videaste */}
      {/* popup card Videaste */}
      {/* popup card Videaste */}
      {/* popup card Videaste */}
      {/* popup card Videaste */}
      {popupVideaste && (
        <>
          <div className="popup-card-background">
            <div className="card">
              <div className="a">
                <div onClick={PopupVideaste} className="back-popup">
                  <BackbtnTwo />
                </div>

                <img onClick={PopupImageVideaste} src={videaste} alt="" />
                <svg
                  cursor="pointer"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M480.6 172h-257L474 132.7c16-3.2 18.5-17.5 16.8-24.4l-17.3-81.1c-2.3-10.6-12.4-17.6-23.1-15.9L28.3 77.5c-8.4 1.4-19.4 9.9-16.8 24.4 0 0 19.3 89.3 19.3 90.4v288.2c0 11.3 9.1 20.4 20.4 20.4h429.4c11.3 0 20.4-9.1 20.4-20.4V192.4c0-11.3-9.1-20.4-20.4-20.4zM55.9 114.5l381.7-59.9 8.8 41.1-381.8 59.9-8.7-41.1zm404.3 345.7H71.6V212.8h388.6v247.4z"></path>
                  <path d="M205.5 435.4l137.8-87.7c4.9-2.7 11.9-13.4 0-22.5l-137.8-87.7c-7.4-5-22.5-2.5-23.6 11.3v175.4c.9 16.1 18.1 15.2 23.6 11.2zm6.4-160.4l96.6 61.5-96.6 61.5V275z"></path>
                </svg>
                <h3>Partenaire Omisify Vidéaste</h3>
                <p>
                  Travaillez avec Omisify en tant que Partenaire Omisify
                  Vidéaste
                </p>

                <p>
                  Faites de la publicité pour des entreprises dans vos vidéos et
                  gagnez de l'argent en tant que Partenaire Omisify Vidéaste
                </p>

                {/* 
                <p>
                  Télécharger gratuitement l'application Omisify et commencer à
                  travaillez avec Omisify
                </p>
                */}

                {/* 
                <NavLink className="navlink" to="/">
                  <p
                    style={{
                      color: "blue",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Télécharger l'application Omisify
                  </p>
                </NavLink>
                 */}

                <p
                  onClick={Maintenance}
                  style={{
                    color: "blue",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  ..
                </p>

                {/*
                <NavLink to="/">
                  <button>Continuer la lecture</button>
                  </NavLink>
                */}
                <button style={{ width: "100px" }} onClick={Maintenance}>
                  ..
                </button>
              </div>
            </div>
          </div>

          {popupImageVideaste && (
            <div onClick={PopupImageVideaste}>
              <FilePopupImageVideaste />
            </div>
          )}
        </>
      )}

      {/* popup card Influent */}
      {/* popup card Influent */}
      {/* popup card Influent */}
      {/* popup card Influent */}
      {/* popup card Influent */}
      {/* popup card Influent */}
      {/* popup card Influent */}
      {/* popup card Influent */}
      {popupInfluent && (
        <>
          <div className="popup-card-background">
            <div className="card">
              <div className="a">
                <div onClick={PopupInfluent} className="back-popup">
                  <BackbtnTwo />
                </div>

                <img onClick={PopupImageInfluent} src={influentgroup} alt="" />
                <svg
                  cursor="pointer"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M480.6 172h-257L474 132.7c16-3.2 18.5-17.5 16.8-24.4l-17.3-81.1c-2.3-10.6-12.4-17.6-23.1-15.9L28.3 77.5c-8.4 1.4-19.4 9.9-16.8 24.4 0 0 19.3 89.3 19.3 90.4v288.2c0 11.3 9.1 20.4 20.4 20.4h429.4c11.3 0 20.4-9.1 20.4-20.4V192.4c0-11.3-9.1-20.4-20.4-20.4zM55.9 114.5l381.7-59.9 8.8 41.1-381.8 59.9-8.7-41.1zm404.3 345.7H71.6V212.8h388.6v247.4z"></path>
                  <path d="M205.5 435.4l137.8-87.7c4.9-2.7 11.9-13.4 0-22.5l-137.8-87.7c-7.4-5-22.5-2.5-23.6 11.3v175.4c.9 16.1 18.1 15.2 23.6 11.2zm6.4-160.4l96.6 61.5-96.6 61.5V275z"></path>
                </svg>

                <h3>Partenaire Omisify Influent</h3>
                <p>
                  Faites Travaillez vos abonnés à votre place, utilisez votre
                  audience à votre avantage, inscrivez-vous gratuitement et
                  gagnez de l'argent en tant que Partenaire Omisify Influent
                </p>

                <p>
                  Utilisez votre Page Facebook, votre compte Tik Tok, votre
                  compte Instagram, votre chaine Youtube,... pour faire la
                  publicité pour des entreprises
                </p>

                {/* 

                <p>
                  Télécharger gratuitement l'application Omisify et commencer à
                  travaillez avec Omisify
                </p>
                */}

                <p onClick={Maintenance}>..</p>

                {/* 
                <NavLink className="navlink" to="/">
                  <p
                    style={{
                      color: "blue",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    Télécharger l'application Omisify
                  </p>
                </NavLink>
                */}

                <p
                  onClick={Maintenance}
                  style={{
                    color: "blue",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  ..
                </p>

                {/* 
                <NavLink to="/">
                  <button>Continuer la lecture</button>
                </NavLink>
                */}

                <button style={{ width: "100px" }} onClick={Maintenance}>
                  ..
                </button>
              </div>
            </div>
          </div>

          {popupImageInfluent && (
            <div onClick={PopupImageInfluent}>
              <FilePopupImageInfluent />
            </div>
          )}
        </>
      )}

      {popupRemunerationPartner && (
        <>
          <div className="popup-remuneration-background">
            <div className="home">
              <div className="align-part-d">
                <div onClick={PopupRemunerationPartner} className="p">
                  <Back />
                </div>

                <div style={{ background: "white" }} className="part-d">
                  <div className="title">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      width="30px"
                      fill="red"
                      enableBackground="new 0 0 490.766 490.766"
                      version="1.1"
                      viewBox="0 0 490.766 490.766"
                      xmlSpace="preserve"
                    >
                      <path d="M472.554 319.199c-9.4-.7-28.8 9.8-34.1 12.5-18.9 9.5-45.2 24.4-62.5 36.3-1.2.8-2.8 1.9-4 2.7-7.8 5-16 8.3-25.1 10.3-50.2 10.7-123.3 11.8-123.3 11.8l-4.3.2c-3.2.2-6.1-2.1-6.5-5.2-.5-3.4 2-6.6 5.6-6.9l108.7-10.3c12-1.3 21.5-12.5 20.2-25.1s-12.9-21.8-24.9-20.5l-96.7-1.2c-6.6-.1-17.1-1.7-23.4-3.6-62.3-18.2-97.5-1.2-116.2 6.8-4.2-6.9-12.1-11.4-20.9-10.8l-41.7 2.8c-13.9.9-24.3 12.5-23.4 25.9l6.7 92.6c1 13.4 13 23.5 26.9 22.5l41.7-2.8c8.8-.6 16-6 19.1-13.4l183.2 7.9c20.4 2.2 39.5-.3 57.5-9.7l5.2-2.7 138.5-81c6.8-4 11.6-10.9 11.9-18.5.3-9.3-5-19.6-18.2-20.6zm-423.6 118.9c-7.8 0-14.2-6.1-14.2-13.7s6.4-13.7 14.2-13.7 14.2 6.1 14.2 13.7-6.4 13.7-14.2 13.7zm320.6-87c.2-2.5.2-5.1-.1-7.7-.3-3.3-1.1-6.4-2.1-9.4.1-.2.2-.4.2-.6 14.6-8 43.2-21.8 58.8-27.9 7.8-3.1 15.5-2.9 22.6 1.9-5.6 2-10.8 4.5-15.7 6.9-16.4 8.2-45.3 23.9-59.4 33.8-1.4 1-2.9 2-4.3 3zm41.8-54.9c-11.3 5-33 12.6-43.3 18.3l-7 3.8c-.7.4-1.3.8-1.9 1.3-3.1-3.7-6.8-6.8-10.9-9.3 9.6-5.1 31-12 40.7-15.8 7.8-3.1 15.3-2.9 22.4 1.7zm-155.3-231.6c-29.7 0-53.7 24.1-53.7 53.7s24.1 53.7 53.7 53.7c29.7 0 53.7-24.1 53.7-53.7s-24-53.7-53.7-53.7zm15.4 74.9c-2.3 2.8-5.4 4.8-9 5.7-1.6.4-2.2 1.2-2.2 2.9.1 1.6 0 3.2 0 4.8 0 1.4-.7 2.2-2.1 2.2h-5.1c-1.5 0-2.2-.9-2.2-2.3v-3.5c0-2.6-.1-2.7-2.6-3.1-3.1-.5-6.2-1.2-9.1-2.6-2.3-1.1-2.5-1.7-1.8-4 .5-1.8 1-3.5 1.5-5.3.6-2 1.2-2.3 3-1.3 3.2 1.7 6.6 2.6 10.1 3 2.3.3 4.5.1 6.6-.9 3.9-1.7 4.6-6.3 1.2-9.1-1.1-.9-2.4-1.6-3.8-2.2-3.5-1.5-7.1-2.7-10.3-4.6-5.3-3.2-8.7-7.5-8.3-14 .4-7.3 4.6-11.9 11.3-14.3 2.8-1 2.8-1 2.8-3.9v-2.9c.1-2.2.4-2.5 2.6-2.6h2c4.6 0 4.6 0 4.6 4.6 0 3.3 0 3.3 3.3 3.8 2.5.4 4.9 1.1 7.2 2.1 1.3.6 1.8 1.4 1.4 2.8-.6 2-1.1 4-1.8 6-.6 1.9-1.2 2.1-3 1.3-3.6-1.7-7.4-2.5-11.4-2.3-1 .1-2.1.2-3 .6-3.4 1.5-4 5.3-1.1 7.6 1.5 1.2 3.2 2 4.9 2.8 3 1.3 6.1 2.5 9 4.1 9.4 5.2 11.8 16.7 5.3 24.6zm77.7-21.2c0 8.2-6.7 14.9-14.9 14.9s-14.9-6.7-14.9-14.9 6.7-14.9 14.9-14.9 14.9 6.7 14.9 14.9zm-156.3 0c0 8.2-6.7 14.9-14.9 14.9s-14.9-6.7-14.9-14.9 6.7-14.9 14.9-14.9 14.9 6.7 14.9 14.9zm180.2-87.6h-234c-13.5 0-24.5 11-24.5 24.5v126.2c0 13.5 11 24.5 24.5 24.5h234c13.5 0 24.5-11 24.5-24.5v-126.2c0-13.5-11-24.5-24.5-24.5zm3.6 127.2c-2-.5-4-.8-6.1-.8-13.7 0-24.8 11.1-24.8 24.8 0 1 .1 2.1.2 3.1h-181.7c.3-1.5.4-3 .4-4.6 0-13.7-11.1-24.8-24.8-24.8-1.5 0-2.9.1-4.4.4v-75.4c1.4.3 2.9.4 4.4.4 13.7 0 24.8-11.1 24.8-24.8 0-1.6-.1-3.1-.4-4.6h182.2c-.5 1.9-.8 4-.8 6.1 0 13.7 11.1 24.8 24.8 24.8 2.1 0 4.2-.3 6.1-.8v76.2h.1zm-261.7 75.1c0-5.8 4.7-10.5 10.5-10.5h261.7c5.8 0 10.5 4.7 10.5 10.5s-4.7 10.5-10.5 10.5h-261.8c-5.7 0-10.4-4.7-10.4-10.5zm0 38c0-5.8 4.7-10.5 10.5-10.5h261.7c5.8 0 10.5 4.7 10.5 10.5s-4.7 10.5-10.5 10.5h-261.8c-5.7 0-10.4-4.7-10.4-10.5z"></path>
                    </svg>
                    <p>{t("--remuneration")}</p>
                  </div>

                  <p>
                    Transparence sur la rémunération des Partenaires Omisify
                  </p>

                  <li
                    onClick={PopupComment}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    {t("--1comment")}
                  </li>

                  <li style={{ fontWeight: "bold", cursor: "pointer" }}>
                    {t("--1e10k")}
                  </li>
                  <li
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    {t("--1email")}
                  </li>
                  <li style={{ fontWeight: "bold", cursor: "pointer" }}>
                    {t("--1likec")}
                  </li>
                  <li
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    {t("--1likep")}
                  </li>
                  <li style={{ fontWeight: "bold", cursor: "pointer" }}>
                    {t("--1m10k")}
                  </li>
                  <li
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    {t("--1message")}
                  </li>
                  <li style={{ fontWeight: "bold", cursor: "pointer" }}>
                    {t("--1mwi")}
                  </li>
                  <li
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    {t("--1post")}
                  </li>
                  <li style={{ fontWeight: "bold", cursor: "pointer" }}>
                    {t("--1pwi")}
                  </li>
                  <li
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    {t("--1pwp")}
                  </li>
                  <li>{t("--1euro")}</li>
                  <p>{t("--nb")}</p>
                  <div className="go-down-i">
                    <i>Omisify est la marque préférée des influenceurs</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* popup comment */}
      {/* popup comment */}
      {/* popup comment */}
      {/* popup comment */}
      {/* popup comment */}
      {/* popup comment */}
      {popupComment && (
        <>
          <div onClick={PopupComment}>
            <FilePopupComment />
          </div>
        </>
      )}

      {/* popup maintenance */}
      {/* popup maintenance */}
      {/* popup maintenance */}
      {popupMaintenance && (
        <div onClick={Maintenance}>
          <PopupMaintenance />
        </div>
      )}

      {/* popup conseil */}
      {/* popup conseil */}
      {/* popup conseil */}
      {/* popup conseil */}
      {/* popup conseil */}
      {/* popup conseil */}
      {popupConseil && (
        <>
          <div className="popup-conseil-opacity">
            <div className="a">
              <p>
                Conseils de Brillant de Jésus Christ pour savoir comment devenir
                influenceur à partir de rien
              </p>

              <p>
                Aujourd'hui grace à internet vous avez la possibilité de faire
                ce qui vous passionne et de vivre à 100% de votre passion. Le
                gros avantage d'internet c'est qu'il connecte tout les humains
                entre eux. Aujourd'hui grace a internet des millions de
                personnes peuvent s'interesser a ce que vous avez a dire,
                peuvent s'interesser à votre concept ou à votre talent.
              </p>

              <p>
                Dans cet article vous allez apprendre comment Devenir
                influenceur à partir de rien grace aux Conseils de Brillant de
                Jésus Christ
              </p>

              <p>
                Pour devenir influenceur vous allez devoir travailler dur et il
                n'y a pas d'autres alternatives. Et travailler dur ca ne suffit
                pas, vous aller devoir travailler comme un fou tout les jours
                regulierement sans se décourager car peut importe la durée de la
                nuit, le soleil finira toujours par se lever.
              </p>

              <p>
                Comme une bonne nourriture prend toujours du temps à cuire, Vous
                devez savoir que les bonnes choses prennent toujours du temps
              </p>

              <p>
                Maintenant que votre esprit est prêt à suivre cette voie,
                cliquer sur Continuer pour obtenir tout les Conseils de Brillant
                de Jésus Christ qui vous aideront à atteindre votre but de
                Devenir influenceur
              </p>
              <button>Continuer</button>

              <p>Commencement (Le Choix)</p>
              <p>
                Pour commencer vous devez choisir une niche qui vous intéresse,
                par exemple vous pouvez décider de devenir un influenceur qui
                publie des videos dans laquelle vous déguster des gateaux ou
                encore vous pouvez par exemple décider de devenir un influenceur
                qui publie des vidéos dans laquelle vous essayer des parfums ou
                encore vous pouvez décider de devenir un influenceur qui
                recommande dans ces vidéos les meilleurs sites pour gagner de
                l'argent sur internet
              </p>

              <p>
                une fois que vous avez choisi votre niche, l'étape suivante sera
                de creer votre systeme(Votre systeme pourra etre un Blog, compte
                instagram, chaine youtube ou tout autre compte professionnel sur
                les reseaux sociaux populaires)
              </p>

              <p>Efficacité</p>
              <p>
                C'est plus efficace de commencer par la vidéo, par exemple vous
                créer une chaine Youtube et dans vos vidéos vous dites aux gens
                d'aller s'abonner sur votre compte Facebook, Instagram, Tik Tok
                ou n'importe qu'elle réseaux sociaux mais retener que vous devez
                commencer par la vidéo et inciter les gens à vous suivre sur les
                autres réseaux sociaux, cette méthode est la plus efficace car
                par nature l'etre humain accorde plus d'attention et de
                compassion à une nouvelle personne qui lui parle dans une vidéo
                plutot qu'une simple photo que vous publier sur Facebook et vous
                dites aux gens d'aller s'abonner sur votre chaine Youtube, ca
                c'est inefficace parce qu'au long terme, lorsque votre page
                Facebook atteindra le succès vous aurez du mal à ramener
                beaucoup d'abonnés sur votre chaine Youtube alors qu'à l'inverse
                lorsque votre chaine Youtube atteindra le succès, ca sera plutot
                simple pour vous de ramener beaucoup d'abonnés sur votre page
                Facebook ou compte instagram. Les mêmes vidéos que vous allez
                publier sur votre chaine Youtube vous devez aussi les republiés
                sur vos autres réseaux sociaux
              </p>

              <p>Regularité</p>
              <p>
                Votre systeme créé, l'étape suivante sera de publier du nouveau
                contenu tout les jours de manière régulière
              </p>

              <p>Perséverance</p>
              <p>
                Comme tout le monde, pendant les premiers mois vous n'aurez pas
                de résultats, vous serez pratiquement seul sur votre chaine
                youtube ou sur votre compte instagram, vous allez remarquer que
                vous travaillez beaucoup mais vous n'avez pas de résultats c'est
                à ce moment que nombreux abondonnent mais vous vous ne devez pas
                abondonner car vous etes déjà prévenu, vous devez au contraire
                controler vos émotions et continuer à travailler comme un fou
                tout en vous améliorant progréssivement
              </p>

              <p>
                En attendant votre heure de gloire, vous irez sur les comptes
                des influenceurs qui sont dans le même domaine que vous, ensuite
                vous allez commenter leur nouveau contenu, pas n'importe quelle
                commentaire, vous devez commenter des commentaires digne d'un
                expert, des commentaires digne d'une personne qui sait très bien
                ou elle va, aujourd'hui 95% des personnes consultent les
                commentaires, donc votre commentaire pertinent sera irrésistible
                devant certaine personne et va les inciter à cliquer et à tomber
                sur votre compte instagram ou votre chaine Youtube, n'oublier
                pas de mettre une photo de profil sur votre compte ou sur votre
                chaine. vous devez le faire constament, tout les jours vous
                devez commenter, pas seulement sur le compte d'un seul
                influenceur, vous devez le faire sur les comptes de plusieurs
                influenceurs, vous devez être régulier, même quand vous n'avez
                pas envie de faire vous le faites, même quand vous êtes fatigué
                vous le faites, si vous êtes arrivé jusqu'ici c'est que vous
                avez déjà la mentalité d'un champion, vous avez déjà la
                mentalité d'une personne qui réussi, vous devez continuer avec
                cette régularité sans jamais abondonner, c'est ainsi qu'avec
                votre régularité à poster du nouveau contenu tout les jours et à
                commenter tout les jours vous allez commencer à récolter vos
                premiers abonnés
              </p>

              <p>Soutien</p>
              <p>
                Omisify ne vous abondonne pas, Omisify est avec vous pour vous
                aider vers votre marche vers le succès, vous pourrez bénéficier
                gratuitement du Programme d'Aide Aux Nouveaux
                Influenceurs(PAANI). Le Programme d'Aide aux nouveaux
                influenceurs est un programme dans laquelle les inflenceurs qui
                ont déjà réussi dans le domaine que vous avez choisi vont
                recommander chaque semaine votre Chaine Youtube à leurs abonnés
                et vont vous taguer dans leur publication. Pour être éligible
                aux PAANI, votre chaine doit avoir beaucoup de contenu original
                c'est à dire vous devez publier tout les jours du nouveau
                contenu tout en vous améliorant progressivement. Au niveau du
                menu de votre compte Omisify, aller dans Nouveau Influenceur,
                cliquer sur PAANI et suivez les instructions pour vérifier
                l'éligibilité de votre chaine Youtube au Programme d'Aide Aux
                Nouveaux Influenceurs
              </p>
              <p>Gloire</p>
              <p>
                Il viendra un moment ou il y'aura des personnes qui vont
                decouvrir votre chaine Youtube ou votre compte Instagram et ces
                personnes vont remarqué que votre chaine possedent beaucoup de
                contenu original et ils vont aussi remarqué que vous publier
                tout les jours, a ce moment ces personnes vont commencer a
                revenir tout les jours sur votre chaine, et lorsque l'algorithme
                remarque qu'il y'a des personnes qui reviennent tout les jours
                sur votre chaine, automatiquement votre chaine commencera a
                apparaitre dans les suggestions c'est la ou le nombre de vos
                abonnés va exploser comme par magie et vous pouvez dire j'ai
                réussi mais c'est pas encore fini car vous devez maintenir c'est
                bonnes habitudes qui vous ont permis d'atteindre le succès, vous
                devez continuer à publier régulièrement tout les jours et vous
                allez remarquer qu'en continuant avec vos bonnes habitudes le
                nombre de vos abonnés ne fera qu'augmenter de facon
                exponentielle
              </p>

              <p>
                Maintenant que vous avez réussi, vous pouvez écrire un livre sur
                votre histoire et raconter dans ce livre votre parcours comment
                vous êtes parti de rien jusqu'à atteindre le succès grace à
                l'effet cummulé de vos bonnes habitudes. Vous pouvez choisir de
                vendre le livre sur Amazon ou vous pouvez décider de le publier
                sur Alrani pour permettre à vos abonnés ou n'importe quelle
                autre personne de le télécharger gratuitement. Alrani va vous
                rémunérer sur chaque téléchargements et en plus de cela vous
                serez aussi rémunérer pour vos Droits d'auteur.
              </p>

              <p>Génération Connecté</p>
              <p>
                Dès le début de la création de votre chaine Youtube ou compte
                Instagram vous pouvez rejoindre la Génération Connecté et
                ajouter le logo de la marque Omisify dans vos vidéos ou dans vos
                photos et vous serez rémunérer tout les jours par Omisify. Vous
                pourrez aller encore plus loin en devenant Partenaire Omisify
                Vidéaste ou Partenaire Omisify Influent comme font les autres
                influenceurs
              </p>
              <p>
                Besoin d'aide ? L'Equipe Omisify est à votre disposition pour
                vous aider à ajouter le logo de la marque Omisify à votre photo
                ou vidéo
              </p>
              <p>Contacter l'Equipe Omisify</p>
              <button>Rejoindre la Nouvelle Génération</button>
              <button>Travailler avec Omisify</button>

              <p>Devenez important pour les autres</p>
              <p>
                Aider les autres c'est important car en aidant les autres vous
                vous faites du bien à vous même également. Plus vous publiez du
                nouveau contenu sur votre chaine, plus vous montrer que vous
                êtes une personne qui veut aider les autres, plus il y'aura des
                personnes qui viendront sur votre chaine pour voir tous les
                jours du nouveaux contenus que vous publiez et avec le temps
                certains d'entre eux commenceront à s'abonner car vous allez
                commencer à entrer dans leur coeur et ils vous accorderont de
                l'importance et de la confiance.
              </p>
              <p>A quel moment les gens s'abonnent à votre chaine ?</p>
              <p>
                Les gens s'abonnent à votre chaine lorsqu'ils s'appercoivent
                qu'avec votre contenu ils ont été plus gagnant que perdant, et
                ils vont rapidement s'abonner pour ne pas qu'ils oublient le nom
                de la chaine ou encore pour ne pas rater les nouvelles vidéos
                que vous publierez car l'être humain n'aime pas rater tout ce
                qui est à son avantage (Par exemple vous travaillez à
                l'ambassade, vous dites à une personne venez prendre votre Visa
                lundi à 10h, la personne sera là à 8h. Un autre exemple, vous
                dites à une personne venez à mon bureau à 11h prendre l'argent
                que vous m'avez demander, la personne sera là à 9h. L'être
                humain n'aime pas rater ce qui est à son avantage). Les gens
                s'abonnent de manière progressive, voilà pourquoi vous devez
                vous former sans cesse, vous devez continuer à apprendre sans
                cesse pour ne pas etre obsolete (Prenons un exemple, vous
                réalisez des vidéos dans laquelle vous donner des conseils aux
                gens sur l'entreprenariat, il y'a Sarah et David qui ont vu ces
                vidéos. En remarque que Sarah s'est abonné à votre chaine après
                avoir vu votre vidéo mais David ne s'est pas abonné à votre
                chaine après avoir vu votre vidéo. Il peut y avoir plusieurs
                raisons qui expliquent cela mais toutes ces raisons tournent
                toujours autour d'une raison principale; Avec votre contenu
                Sarah a été plus gagant que perdant (peut être parce que Sarah
                n'a jamais connu ces conseils, elle vient de le découvrir par
                vous et elle se dit c'est incroyable, je ne le savait pas avant)
                et David n'a pas été plus gagant que perdant (peut être parce
                que David connaissait déjà ces conseils et David se dit Rien
                d'original, je connaissait déjà ces conseils et je l'applique au
                quotiden)). Vous voyez, votre contenu n'a pas le même effet chez
                2 personnes différentes mais comment faire pour gagner le coeur
                de David, comment faire pour que David soit aussi votre abonné,
                la solution est que vous devez apporter à David des nouveaux
                conseils qu'ils n'a jamais entendu auparavant afin qu'ils soient
                aussi plus gagant que perdant comme Sarah, pour un début David
                fera parties de ses abonnés qui viennent sur votre chaine qui
                voient vos vidéos et qui ne s'abonnent pas, mais avec le temps,
                avec votre régularité il y'aura toujours un jour ou vous allez
                publier une vidéo ou il y'aura des conseils que David n'a jamais
                entendu auparavant et là vous aurez résolu le problème de David
                et il s'abonnera à votre chaine; mais pour arriver à publier
                cette vidéo qui touchera David il faut que vous apprener tout le
                temps des nouvelles choses, voila pourquoi ca va jamais terminé
                parce qu'il y'aura toujours des abonnés comme David que vous
                allez chercher à conquérir, donc vous savez le secret continuer
                à apprendre sans cesse, si vous arreter d'apprendre vous devenez
                obsolète. Maintenant que vous avez appris Comment les gens
                s'abonnet à votre chaine, il faut que vous sachez que tout les
                conseils qui ont été donné depuis le début s'applique dans tout
                les domaines de la vie, il suffit juste que vous regarder
                attentivement et vous verrez que la meme chose s'applique dans
                tout les domaines de la vie. La vie même se résume à ca [Mon
                peuple périt par manque de connaissance]; [L'effet cummulé de
                mauvaises habitudes vous tire vers le bas (Pauvreté,
                Enfer,...)]; [L'effet cummulé de bonnes habitudes vous tire vers
                le haut (Richesse, Paradis,...)]
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
