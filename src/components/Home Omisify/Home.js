import { useState } from "react";
import { NavLink } from "react-router-dom";
import BackbtnTwo from "../Back/BackbtnTwo";
import influentgroup from "./img/influent-group.jpg";
import partner from "./img/partner.jpg";
import videaste from "./img/videaste.jpg";
import FilePopupImagePartner from "./PopupImagePartner";
import FilePopupImageVideaste from "./PopupImageVideaste";
import FilePopupImageInfluent from "./PopupImageInfluent";
import FilePopupComment from "./PopupComment";
import { useTranslation } from "react-i18next";
import Back from "../Back/Back";
import homeinfluencer from "./img/home-influencer.jpg";

export default function HomeOmisify() {
  const { t } = useTranslation();

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
    console.log("comment true");
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

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${homeinfluencer})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "250px",
        }}
      >
        <p>Omisify est la marque préféré des influenceurs</p>
        <button>Télécharger l'application Omisify</button>
        <button>Travaillez avec Omisify</button>
        <img src={homeinfluencer} />
      </div>

      <p>
        Ajouter le logo de la marque Omisify à votre photo ou vidéo et gagnez de
        l'argent avec Omisify
      </p>
      <p>
        Travaillez avec Omisify en faisant de la publicité pour des entreprises
      </p>

      <p>
        Omisify est favorable pour les influenceurs et pour les non-influenceurs
      </p>

      <p>
        Omisify est gratuit et rémunère toujours ses Partenaires quelque soit le
        pays dans lequel vous vous trouver et quelque soit la situation de votre
        pays
      </p>
      <div className="home-omisify">
        <div className="display">
          {/* partner */}
          {/* partner */}
          {/* partner */}
          <div className="a">
            <img src={partner} alt="image" />
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

          {/* videaste */}
          {/* videaste */}
          {/* videaste */}
          <div className="a">
            <img src={videaste} alt="image" />
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

          {/* influent */}
          {/* influent */}
          {/* influent */}
          <div className="a">
            <img src={influentgroup} alt="image" />
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
        </div>
      </div>

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
                <img onClick={PopupImagePartner} src={partner} alt="image" />
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

                <NavLink className="navlink" to="/">
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

                <NavLink to="/">
                  <button>Continuer la lecture</button>
                </NavLink>
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

                <img onClick={PopupImageVideaste} src={videaste} alt="image" />
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

                <p>
                  Télécharger gratuitement l'application Omisify et commencer à
                  travaillez avec Omisify
                </p>

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

                <NavLink to="/">
                  <button>Continuer la lecture</button>
                </NavLink>
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

                <img
                  onClick={PopupImageInfluent}
                  src={influentgroup}
                  alt="image"
                />
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

                <p>
                  Télécharger gratuitement l'application Omisify et commencer à
                  travaillez avec Omisify
                </p>

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

                <NavLink to="/">
                  <button>Continuer la lecture</button>
                </NavLink>
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
                    <i>{t("--turn")}</i>
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
      {/* popup comment */}
      {popupComment && (
        <>
          <div onClick={PopupComment}>
            <FilePopupComment />
          </div>
        </>
      )}
    </>
  );
}
