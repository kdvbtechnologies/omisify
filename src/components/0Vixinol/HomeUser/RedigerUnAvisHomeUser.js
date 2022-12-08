import { useState } from "react";
import omisifyred from "../img/omisify-red.jpg";

export default function RedigerUnAvisHomeUser() {
  const api = [
    {
      nameOfApp: "Omisify",
      imageOfApp: `${omisifyred}`,
      altOfImageOfApp: "image de l'application",
    },

    {
      nameOfApp: "Alrani",
      imageOfApp: `${omisifyred}`,
      altOfImageOfApp: "image de l'application",
    },

    {
      nameOfApp: "Lydia - La Super App pour gérer votre argent",
      imageOfApp: `${omisifyred}`,
      altOfImageOfApp: "image de l'application",
    },

    {
      nameOfApp: "Jamelfase",
      imageOfApp: `${omisifyred}`,
      altOfImageOfApp: "image de l'application",
    },
  ];

  const [popupNotice, setPopupNotice] = useState(false);

  function PopupNotice() {
    setPopupNotice(!popupNotice);
    setStarsApp(true);
    setFiveStars(false);
    setFourStars(false);
    setThreeStars(false);
    setTwoStars(false);
    setOneStar(false);
  }

  // stars app
  // stars app
  // stars app
  const [starsApp, setStarsApp] = useState(true);

  function StarsApp() {
    setStarsApp(true);
  }
  console.log(StarsApp);

  // five stars
  // five stars
  // five stars
  const [fiveStars, setFiveStars] = useState(false);

  function FiveStars() {
    setStarsApp(false);
    setFiveStars(true);
    setFourStars(false);
    setThreeStars(false);
    setTwoStars(false);
    setOneStar(false);
  }

  // four stars
  // four stars
  // four stars
  const [fourStars, setFourStars] = useState(false);

  function FourStars() {
    setStarsApp(false);
    setFiveStars(false);
    setFourStars(true);
    setThreeStars(false);
    setTwoStars(false);
    setOneStar(false);
  }

  // three stars
  // three stars
  // three stars
  const [threeStars, setThreeStars] = useState(false);

  function ThreeStars() {
    setStarsApp(false);
    setFiveStars(false);
    setFourStars(false);
    setThreeStars(true);
    setTwoStars(false);
    setOneStar(false);
  }

  // two stars
  // two stars
  // two stars
  const [twoStars, setTwoStars] = useState(false);

  function TwoStars() {
    setStarsApp(false);
    setFiveStars(false);
    setFourStars(false);
    setThreeStars(false);
    setTwoStars(true);
    setOneStar(false);
  }

  // one star
  // one star
  // one star
  const [oneStar, setOneStar] = useState(false);

  function OneStar() {
    setStarsApp(false);
    setFiveStars(false);
    setFourStars(false);
    setThreeStars(false);
    setTwoStars(false);
    setOneStar(true);
  }

  return (
    <>
      <div className="rediger-un-avis-home-user">
        <div className="title">
          <p>Donnez-nous votre avis</p>
        </div>

        <div className="overflow">
          {api.map((api) => (
            <>
              <div className="column">
                <div className="display">
                  <div className="images">
                    <img
                      onClick={PopupNotice}
                      src={api.imageOfApp}
                      alt={api.altOfImageOfApp}
                    />
                  </div>
                  {/* images */}

                  <div className="a">
                    <div className="nameOfApp">
                      <p onClick={PopupNotice}>{api.nameOfApp}</p>
                    </div>
                    {/* nameOfApp */}

                    <p>Avis Public</p>
                  </div>
                  {/* a */}
                </div>
                {/* display */}

                <div className="stars">
                  <svg
                    onClick={PopupNotice}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    width="20px"
                    fill="#a6a6a6"
                    enableBackground="new 0 0 487.222 487.222"
                    version="1.1"
                    viewBox="0 0 487.222 487.222"
                    xmlSpace="preserve"
                  >
                    <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                  </svg>
                  {/* 1 */}

                  <svg
                    onClick={PopupNotice}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    width="20px"
                    fill="#a6a6a6"
                    enableBackground="new 0 0 487.222 487.222"
                    version="1.1"
                    viewBox="0 0 487.222 487.222"
                    xmlSpace="preserve"
                  >
                    <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                  </svg>
                  {/* 2 */}

                  <svg
                    onClick={PopupNotice}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    width="20px"
                    fill="#a6a6a6"
                    enableBackground="new 0 0 487.222 487.222"
                    version="1.1"
                    viewBox="0 0 487.222 487.222"
                    xmlSpace="preserve"
                  >
                    <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                  </svg>
                  {/* 3 */}

                  <svg
                    onClick={PopupNotice}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    width="20px"
                    fill="#a6a6a6"
                    enableBackground="new 0 0 487.222 487.222"
                    version="1.1"
                    viewBox="0 0 487.222 487.222"
                    xmlSpace="preserve"
                  >
                    <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                  </svg>
                  {/* 4 */}

                  <svg
                    onClick={PopupNotice}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    cursor="pointer"
                    width="20px"
                    fill="#a6a6a6"
                    enableBackground="new 0 0 487.222 487.222"
                    version="1.1"
                    viewBox="0 0 487.222 487.222"
                    xmlSpace="preserve"
                  >
                    <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                  </svg>
                  {/* 5 */}
                </div>
                {/* stars */}

                <div className="b">
                  <p onClick={PopupNotice}>Rédiger un avis</p>
                </div>
              </div>
              {/* column */}
            </>
          ))}
        </div>
        {/* overflow */}
      </div>
      {/* rediger-un-avis-home-user */}

      {popupNotice && (
        <>
          <div className="popup-notice-background">
            <div className="align">
              <div className="card">
                <div className="close">
                  <p>Avis</p>

                  <svg
                    onClick={PopupNotice}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    cursor="pointer"
                    className="infos-of-dev-close-btn"
                    enableBackground="new 0 0 484.271 484.271"
                    version="1.1"
                    viewBox="0 0 484.271 484.271"
                    xmlSpace="preserve"
                  >
                    <path d="M39.938 0v49.923H0v434.348h434.348v-69.892h49.923V0H39.938zm379.41 469.271H15V64.923h404.348v404.348zm49.923-69.892h-34.923V49.923H54.938V15h414.333v384.379z"></path>
                    <path d="M90.234 355.359c0 4.692 1.817 9.093 5.117 12.393l21.167 21.166c3.3 3.301 7.7 5.118 12.393 5.118s9.093-1.817 12.393-5.117l75.87-75.871 75.87 75.871c3.301 3.3 7.701 5.117 12.393 5.117s9.093-1.817 12.392-5.117l21.169-21.167c6.833-6.833 6.833-17.952 0-24.785l-75.871-75.87 75.871-75.871c6.832-6.834 6.832-17.951 0-24.784l-21.168-21.168c-6.832-6.83-17.95-6.833-24.784 0l-75.871 75.871-75.87-75.871c-6.833-6.831-17.95-6.834-24.785.001l-21.166 21.167c-3.301 3.3-5.118 7.7-5.118 12.393 0 4.691 1.817 9.092 5.117 12.393l75.871 75.87-75.87 75.87c-3.302 3.299-5.12 7.699-5.12 12.391zm15.725-1.785l86.477-86.478-86.477-86.478c-.631-.63-.725-1.389-.725-1.785s.094-1.155.725-1.786l21.167-21.167c.967-.969 2.604-.969 3.57 0l86.478 86.477 86.477-86.477c.969-.97 2.604-.968 3.571 0l21.168 21.168c.968.968.968 2.604 0 3.57l-86.477 86.478 86.477 86.478c.969.968.969 2.603.001 3.57l-21.169 21.168c-.63.63-1.389.724-1.785.724s-1.155-.094-1.785-.725l-86.478-86.477-86.478 86.478c-.63.63-1.389.724-1.785.724s-1.155-.094-1.785-.725l-21.168-21.167c-.63-.63-.724-1.389-.724-1.785s.094-1.155.725-1.785z"></path>
                  </svg>
                </div>
                {/* close */}

                <p>Donner votre avis sur l'application Omisify</p>
                <div className="a">
                  <textarea
                    name="notice"
                    placeholder="Rédiger votre avis ici..."
                  ></textarea>
                </div>
                {/* a */}

                <div className="note-a-app">
                  <p>Noter l'application Omisify</p>
                </div>
                {/* note-a-app */}

                {/* stars app */}
                {/* stars app */}
                {/* stars app */}
                {/* stars app */}
                {/* stars app */}
                {/* stars app */}
                {/* stars app */}
                {/* stars app */}
                {/* stars app */}
                {/* stars app */}
                {starsApp && (
                  <>
                    <div className="stars-app">
                      {/* 1 */}
                      <svg
                        onClick={OneStar}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>

                      {/* 2 */}
                      <svg
                        onClick={TwoStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>

                      {/* 3 */}
                      <svg
                        onClick={ThreeStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>

                      {/* 4 */}
                      <svg
                        onClick={FourStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>

                      {/* 5 */}
                      <svg
                        onClick={FiveStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>
                    </div>
                    {/* stars app */}
                  </>
                )}

                {/* Five stars */}
                {/* Five stars */}
                {/* Five stars */}
                {/* Five stars */}
                {/* Five stars */}
                {/* Five stars */}
                {/* Five stars */}
                {fiveStars && (
                  <>
                    <div className="stars-app">
                      {/* 1 */}
                      <svg
                        onClick={OneStar}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 2 */}
                      <svg
                        onClick={TwoStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 3 */}
                      <svg
                        onClick={ThreeStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 4 */}
                      <svg
                        onClick={FourStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 5 */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>
                    </div>
                    {/* Five stars */}
                  </>
                )}

                {/* Four stars */}
                {/* Four stars */}
                {/* Four stars */}
                {/* Four stars */}
                {/* Four stars */}
                {/* Four stars */}
                {/* Four stars */}
                {/* Four stars */}
                {/* Four stars */}
                {/* Four stars */}
                {fourStars && (
                  <>
                    <div className="stars-app">
                      {/* 1 */}
                      <svg
                        onClick={OneStar}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 2 */}
                      <svg
                        onClick={TwoStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 3 */}
                      <svg
                        onClick={ThreeStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 4 */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 5 */}
                      <svg
                        onClick={FiveStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>
                    </div>
                    {/* Four stars */}
                  </>
                )}

                {/* Three stars */}
                {/* Three stars */}
                {/* Three stars */}
                {/* Three stars */}
                {/* Three stars */}
                {/* Three stars */}
                {/* Three stars */}
                {/* Three stars */}
                {/* Three stars */}
                {/* Three stars */}
                {threeStars && (
                  <>
                    <div className="stars-app">
                      {/* 1 */}
                      <svg
                        onClick={OneStar}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 2 */}
                      <svg
                        onClick={TwoStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 3 */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 4 */}
                      <svg
                        onClick={FourStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>

                      {/* 5 */}
                      <svg
                        onClick={FiveStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>
                    </div>
                    {/* Three stars */}
                  </>
                )}

                {/* Two stars */}
                {/* Two stars */}
                {/* Two stars */}
                {/* Two stars */}
                {/* Two stars */}
                {/* Two stars */}
                {/* Two stars */}
                {/* Two stars */}
                {/* Two stars */}
                {/* Two stars */}
                {/* Two stars */}
                {/* Two stars */}
                {twoStars && (
                  <>
                    <div className="stars-app">
                      {/* 1 */}
                      <svg
                        onClick={OneStar}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 2 */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 3 */}
                      <svg
                        onClick={ThreeStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>

                      {/* 4 */}
                      <svg
                        onClick={FourStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>

                      {/* 5 */}
                      <svg
                        onClick={FiveStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>
                    </div>
                    {/* Two stars */}
                  </>
                )}

                {/* one star */}
                {/* one star */}
                {/* one star */}
                {/* one star */}
                {/* one star */}
                {/* one star */}
                {/* one star */}
                {/* one star */}
                {/* one star */}
                {oneStar && (
                  <>
                    <div className="stars-app">
                      {/* 1 */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#fcff07"
                        enableBackground="new 0 0 55.867 55.867"
                        version="1.1"
                        viewBox="0 0 55.867 55.867"
                        xmlSpace="preserve"
                      >
                        <path d="M55.818 21.578a1.002 1.002 0 00-.808-.681l-18.09-2.629-8.09-16.392a.998.998 0 00-1.792 0l-8.091 16.393-18.09 2.629a1.002 1.002 0 00-.555 1.705l13.091 12.76-3.091 18.018c-.064.375.09.754.397.978a.992.992 0 001.053.076l16.182-8.506 16.18 8.506a1 1 0 001.451-1.054l-3.09-18.017 13.091-12.761c.272-.267.37-.664.252-1.025z"></path>
                      </svg>

                      {/* 2 */}
                      <svg
                        onClick={TwoStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>

                      {/* 3 */}
                      <svg
                        onClick={ThreeStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>

                      {/* 4 */}
                      <svg
                        onClick={FourStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>

                      {/* 5 */}
                      <svg
                        onClick={FiveStars}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="20px"
                        fill="#a6a6a6"
                        enableBackground="new 0 0 487.222 487.222"
                        version="1.1"
                        viewBox="0 0 487.222 487.222"
                        xmlSpace="preserve"
                      >
                        <path d="M486.554 186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5s-9.8 2.9-12.1 7.6l-67.5 137.9-152 22.6c-5.1.8-9.3 4.3-10.9 9.2s-.2 10.3 3.5 13.8l110.3 106.9-25.5 151.4c-.9 5.1 1.2 10.2 5.4 13.2 2.3 1.7 5.1 2.6 7.9 2.6 2.2 0 4.3-.5 6.3-1.6l135.7-71.9 136.1 71.1c2 1 4.1 1.5 6.2 1.5 7.4 0 13.5-6.1 13.5-13.5 0-1.1-.1-2.1-.4-3.1l-26.3-150.5 109.6-107.5c3.9-3.6 5.2-9 3.6-13.9zm-137 107.1c-3.2 3.1-4.6 7.6-3.8 12l22.9 131.3-118.2-61.7c-3.9-2.1-8.6-2-12.6 0l-117.8 62.4 22.1-131.5c.7-4.4-.7-8.8-3.9-11.9l-95.6-92.8 131.9-19.6c4.4-.7 8.2-3.4 10.1-7.4l58.6-119.7 59.4 119.4c2 4 5.8 6.7 10.2 7.4l132 18.8-95.3 93.3z"></path>
                      </svg>
                    </div>
                    {/* one star */}
                  </>
                )}

                <div className="align-btn-publish-notice">
                  <button>Publier</button>
                </div>
                {/* align-btn-publish-notice */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-notice-background */}
        </>
      )}
    </>
  );
}
