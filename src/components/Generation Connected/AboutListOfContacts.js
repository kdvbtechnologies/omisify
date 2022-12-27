import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AboutListOfContacts() {
  const navigate = useNavigate();
  const partner =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671415292/omisify/partner_eo1nnu.jpg";

  // popup Ecrire description
  const [popupEcrireDescription, setPopupEcrireDescription] = useState(false);

  function PopupEcrireDescription() {
    setPopupEcrireDescription(!popupEcrireDescription);
  }

  // popup modifier description
  const [popupModifierDescription, setPopupModifierDescription] =
    useState(false);

  function PopupModifierDescription() {
    setPopupModifierDescription(!popupModifierDescription);
  }

  return (
    <>
      <div className="about-list-of-contacts">
        <div className="align">
          <div className="cover">
            <img src={partner} alt="" />
          </div>
          {/* cover */}

          <div className="width">
            <div className="a">
              <svg
                onClick={() => navigate(-1)}
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

              <div className="width">
                <p>A propos de la Liste de Contacts Whatsapp </p>
              </div>
              {/* width */}
            </div>
            {/* a */}

            <div className="b">
              <div className="space">
                <p></p>
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
              {/* space */}

              <div className="c">
                <p style={{ fontSize: "16px" }}>
                  Dites quelques choses à propos de votre Liste de Contacts
                  Whatsapp..
                </p>
                <svg
                  onClick={PopupEcrireDescription}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  cursor="pointer"
                  viewBox="0 0 32 32"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h32v32H0z"></path>
                    <path
                      fill="#666666"
                      fillRule="nonzero"
                      d="M18 2v2H4v24h24V14.022h2V30H2V2zm8.364-.61l4.243 4.243-12.601 12.6-6.697 2.386 2.535-6.71zm0 2.829l-10.8 10.8-.856 2.266 2.203-.785L27.78 5.633z"
                    ></path>
                  </g>
                </svg>
              </div>
              {/* c */}

              <div className="c">
                <p style={{ fontSize: "16px" }}>
                  C'est la liste de tout mes Contacts Whatsapp
                </p>
                <svg
                  onClick={PopupModifierDescription}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  cursor="pointer"
                  viewBox="0 0 32 32"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h32v32H0z"></path>
                    <path
                      fill="#666666"
                      fillRule="nonzero"
                      d="M18 2v2H4v24h24V14.022h2V30H2V2zm8.364-.61l4.243 4.243-12.601 12.6-6.697 2.386 2.535-6.71zm0 2.829l-10.8 10.8-.856 2.266 2.203-.785L27.78 5.633z"
                    ></path>
                  </g>
                </svg>
              </div>
              {/* c */}

              <div className="d">
                <div style={{ paddingBottom: "15px" }} className="display">
                  <svg
                    style={{ paddingRight: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    width="20px"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M7.253 18.494l.724.423A7.953 7.953 0 0012 20a8 8 0 10-8-8 7.95 7.95 0 001.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 01-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 00.367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 01.378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 01-.21.302 2.378 2.378 0 01-.33.288 3.71 3.71 0 01-.125.09 5.024 5.024 0 01-.383.22 1.99 1.99 0 01-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 01-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 016.9 9.62a2.729 2.729 0 01.564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 01.371-.1z"></path>
                  </svg>
                  <div className="width">
                    <p style={{ fontSize: "15px", paddingRight: "5px" }}>
                      Nombre de Contacts Whatsapp
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>3</p>
                  </div>
                  {/* width */}
                </div>
                {/* display */}

                <div className="display">
                  <svg
                    style={{ paddingRight: "5px" }}
                    width="20px"
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M473.6 256.6c0-99.3-67.1-185.9-163.3-210.6-9.2-2.4-18.6 3.2-20.9 12.4-2.4 9.2 3.2 18.6 12.4 20.9C382.7 100 439.2 173 439.2 256.6c0 73.7-43.9 139-109.6 167.7l15.9-37c3.7-8.7-.3-18.8-9-22.6-8.7-3.7-18.8.3-22.6 9l-31 72.2c-3.7 8.7.3 18.8 9 22.6l72.2 31c10.8 3.8 19.8-2.5 22.6-9 3.7-8.7-.3-18.8-9-22.6l-31.4-13.5c76.5-34.6 127.3-111.4 127.3-197.8zM210.4 433.9C129.5 413.1 73 340.2 73 256.6c0-72.7 42.7-137.2 106.9-166.5L165 124.7c-3.7 8.7.1 19.2 9 22.6 10.4 3.9 19.2-.8 22.6-9l31-72.3c3-7 2.9-17.5-9-22.6l-72.2-31c-8.7-3.7-18.8.3-22.6 9-3.7 8.7.3 18.8 9 22.6l33.6 14.4C89.6 93.1 38.6 170 38.6 256.6c0 99.3 67.2 185.8 163.3 210.6 11.6 3 18.9-4.6 20.9-12.4 2.3-9.2-3.2-18.5-12.4-20.9z"></path>
                    <path d="M296.6 321.4c8.8-9.2 13.2-20.8 13.2-34.6 0-6.3-1.1-12.1-3.2-17.5s-5.1-10-9-14c-3.9-3.9-9-7.2-15.2-10-3.3-1.4-9.9-3.4-20-5.9V182c6.5 1.3 11.6 4.1 15.4 8.3 3.7 4.2 6.2 10.2 7.4 18l20.6-3.1c-1.8-12.6-7-22.6-15.7-29.8-6.8-5.7-16-9.1-27.6-10.2v-9.5h-11.8v9.5c-13.2 1.3-23.2 5-29.9 10.9-10.1 8.8-15.1 20.3-15.1 34.5 0 8 1.7 15.1 5.2 21.4 3.4 6.3 8.3 11.2 14.7 14.7 8.6 4.8 17 8 25.2 9.5v63.5c-7.8-.8-14.6-4.8-20.2-11.9-3.9-5-6.7-12.9-8.2-23.6l-20.1 3.8c.7 10.3 3.4 19.1 7.9 26.3 4.5 7.2 9.9 12.4 16.2 15.6 6.2 3.2 14.4 5.4 24.3 6.7v19.9h11.8v-20.2c14-.7 25.4-5.7 34.1-14.9zm-45.8-84.5c-9.1-2.7-15.5-6.4-19.3-11-3.8-4.6-5.7-10.3-5.7-17.1 0-6.9 2.2-12.8 6.7-17.8s10.6-8.1 18.3-9.3v55.2zm30.9 72.6c-5.1 5.8-11.5 9.1-19.2 10.1v-60.7c10.7 3.5 17.9 7.4 21.5 11.8 3.6 4.4 5.4 10.2 5.4 17.5-.1 8.4-2.6 15.6-7.7 21.3z"></path>
                  </svg>
                  <div className="width">
                    <p
                      style={{
                        fontSize: "17px",
                        paddingRight: "5px",
                      }}
                    >
                      Valeur de la Liste de Contacts Whatsapp
                    </p>
                    <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                      0.0025
                    </p>
                  </div>
                  {/* width */}
                </div>
                {/* display */}
              </div>
              {/* d */}
            </div>
            {/* b */}
          </div>
          {/* width */}
        </div>
        {/* align */}
      </div>
      {/* about-list-of-contacts */}

      {/* popup-ecrire-description */}
      {/* popup-ecrire-description */}
      {/* popup-ecrire-description */}
      {/* popup-ecrire-description */}
      {/* popup-ecrire-description */}
      {/* popup-ecrire-description */}
      {popupEcrireDescription && (
        <>
          <div className="popup-ecrire-description-opacity">
            <div className="align">
              <div className="card">
                <div className="title">
                  <p>Description</p>
                  <svg
                    onClick={PopupEcrireDescription}
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
                {/* title */}

                <p>Écriver la description de votre Liste de Contact Whatsapp</p>

                <textarea
                  name="description"
                  placeholder="Dites quelques chose.."
                ></textarea>

                <button>Enregistrer</button>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-ecrire-description */}
        </>
      )}

      {/* popup-modifier-description */}
      {/* popup-modifier-description */}
      {/* popup-modifier-description */}
      {/* popup-modifier-description */}
      {/* popup-modifier-description */}
      {/* popup-modifier-description */}
      {popupModifierDescription && (
        <>
          <div className="popup-ecrire-description-opacity">
            <div className="align">
              <div className="card">
                <div className="title">
                  <p>Modification</p>
                  <svg
                    onClick={PopupModifierDescription}
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
                {/* title */}

                <p>
                  Modifier la Description de votre Liste de Contact Whatsapp
                </p>

                <textarea name="description"></textarea>

                <button>Enregistrer</button>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-modifier-description */}
        </>
      )}
    </>
  );
}
