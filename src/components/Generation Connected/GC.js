import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function GC() {
  const [list, setList] = useState(false);
  function PopupList() {
    setList(!list);
  }

  const [popupBefore, setPopupBefore] = useState(false);
  function PopupBefore() {
    setPopupBefore(!popupBefore);
  }

  const userId = localStorage.getItem("https://omisify.com/userId");
  const [yourWhatsappNumber, setYourWhatsappNumber] = useState("");
  const nbreDePointsListesDeContact = "10";
  const nbreDePersonnesListesDeContact = "1";

  async function Save() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
      data: {
        nbreDePointsListesDeContact,
        nbreDePersonnesListesDeContact,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const [popupAddWhatsappNumber, setPopupAddWhatsappNumber] = useState("");
  function PopupAddWhatsappNumber() {
    setPopupAddWhatsappNumber(!popupAddWhatsappNumber);
  }

  return (
    <>
      <div className="new-title-settings">
        <div className="display">
          <NavLink to="/partner">
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
          {/* left */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            fill="red"
            style={{ paddingRight: "10px" }}
            x="0"
            y="0"
            enableBackground="new 0 0 503.2 503.2"
            version="1.1"
            viewBox="0 0 503.2 503.2"
            xmlSpace="preserve"
          >
            <path d="M404.601 299.199c-26.105 0-49.776 10.221-67.415 26.785L272.001 277.1v-74.664c46.335-8.071 81.6-48.389 81.6-97.036 0-54.454-44.146-98.6-98.6-98.6-54.455 0-98.601 44.146-98.601 98.6 0 48.647 35.265 88.965 81.6 97.036v74.439l-70.101 50.286c-12.886-12.642-29.267-21.732-47.58-25.643C52.014 286.939-7.69 343.168.81 410.617c5.536 43.949 41.024 79.432 84.973 84.974 67.449 8.5 123.678-51.204 109.099-119.518-1.584-7.432-4.06-14.531-7.242-21.229l67.137-48.164 61.981 46.484c-6.827 13.417-10.757 28.554-10.757 44.636 0 54.454 44.146 98.6 98.6 98.6s98.6-44.146 98.6-98.6c-.001-54.455-44.146-98.601-98.6-98.601zm-306 34.014c16.395 0 29.689 13.294 29.689 29.689s-13.294 29.688-29.689 29.688-29.689-13.294-29.689-29.688c0-16.402 13.294-29.689 29.689-29.689zm44.2 115.587H54.4v-13.328c0-18.217 12.784-34.272 31.008-34.272h26.391c18.217 0 31.001 16.056 31.001 34.272V448.8zm112.2-407.987c16.395 0 29.688 13.294 29.688 29.688 0 16.395-13.294 29.689-29.688 29.689-16.395 0-29.689-13.294-29.689-29.689 0-16.4 13.294-29.688 29.689-29.688zm-44.2 115.586v-13.328c0-18.217 12.784-34.272 31.008-34.272H268.2c18.218 0 31.001 16.055 31.001 34.272v13.328h-88.4zm193.8 176.814c16.395 0 29.688 13.294 29.688 29.689s-13.294 29.688-29.688 29.688-29.688-13.294-29.688-29.688c-.001-16.402 13.293-29.689 29.688-29.689zm44.2 115.587h-88.4v-13.328c0-18.217 12.784-34.272 31.008-34.272H417.8c18.217 0 31.001 16.056 31.001 34.272V448.8z"></path>
          </svg>
          <p>GC</p>
          {/* right */}
        </div>
        {/* display */}
      </div>
      {/* title settings */}

      <div className="others">
        <div className="a">
          <div className="hr">
            <hr />
          </div>

          <NavLink className="navlink" to="/generation-connected">
            <p>Génération Connecté</p>
          </NavLink>
          <div className="hr">
            <hr />
          </div>

          <p onClick={PopupList} style={{ cursor: "pointer" }}>
            Liste de Contacts
          </p>
          <div className="hr">
            <hr />
          </div>
          {/* hr */}
        </div>
        {/* a */}
      </div>
      {/* others */}

      {list && (
        <>
          <div onClick={PopupList} className="popup-list-opacity">
            <div className="align">
              <div className="card">
                <div className="display">
                  <svg
                    onClick={PopupBefore}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    width="20px"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M7.253 18.494l.724.423A7.953 7.953 0 0012 20a8 8 0 10-8-8 7.95 7.95 0 001.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 01-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 00.367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 01.378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 01-.21.302 2.378 2.378 0 01-.33.288 3.71 3.71 0 01-.125.09 5.024 5.024 0 01-.383.22 1.99 1.99 0 01-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 01-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 016.9 9.62a2.729 2.729 0 01.564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 01.371-.1z"></path>
                  </svg>
                  <p onClick={PopupBefore}>Whatsapp</p>
                </div>
                {/* display */}

                <div className="hr">
                  <hr />
                </div>

                <div className="display">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="20px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.249-3.277"
                    ></path>
                  </svg>
                  <p>Telegram</p>
                </div>
                {/* display */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-list-opacity */}
        </>
      )}

      {/* popup before list of contact */}
      {/* popup before list of contact */}
      {/* popup before list of contact */}
      {popupBefore && (
        <>
          <div className="popup-before-list-of-contact-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={PopupBefore}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  cursor="pointer"
                  version="1.1"
                  viewBox="0 0 40 40"
                  xmlSpace="preserve"
                >
                  <path d="M21.414 20L33.207 8.207a.999.999 0 10-1.414-1.414L20 18.586 8.207 6.793a.999.999 0 10-1.414 1.414L18.586 20 6.793 31.793a.999.999 0 101.414 1.414L20 21.414l11.793 11.793a.997.997 0 001.414 0 .999.999 0 000-1.414L21.414 20z"></path>
                </svg>
              </div>
              {/* close */}

              <div className="card">
                <p>
                  Ajouter votre numéro Whatsapp avant d'accéder à votre Liste de
                  Contacts Whatsapp
                </p>
                <button onClick={PopupAddWhatsappNumber}>Ajouter</button>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-before-list-of-contact-opacity */}
        </>
      )}

      {/* popup add your whatsapp number */}
      {/* popup add your whatsapp number */}
      {/* popup add your whatsapp number */}
      {popupAddWhatsappNumber && (
        <>
          <div className="add-your-contact-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={PopupAddWhatsappNumber}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  cursor="pointer"
                  version="1.1"
                  viewBox="0 0 40 40"
                  xmlSpace="preserve"
                >
                  <path d="M21.414 20L33.207 8.207a.999.999 0 10-1.414-1.414L20 18.586 8.207 6.793a.999.999 0 10-1.414 1.414L18.586 20 6.793 31.793a.999.999 0 101.414 1.414L20 21.414l11.793 11.793a.997.997 0 001.414 0 .999.999 0 000-1.414L21.414 20z"></path>
                </svg>
              </div>
              {/* close */}

              <div className="card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  width="35px"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M7.253 18.494l.724.423A7.953 7.953 0 0012 20a8 8 0 10-8-8 7.95 7.95 0 001.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 01-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 00.367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 01.378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 01-.21.302 2.378 2.378 0 01-.33.288 3.71 3.71 0 01-.125.09 5.024 5.024 0 01-.383.22 1.99 1.99 0 01-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 01-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 016.9 9.62a2.729 2.729 0 01.564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 01.371-.1z"></path>
                </svg>

                <p>Ajouter votre numéro Whatsapp</p>

                <input
                  type="number"
                  name="yourWhatsappNumber"
                  value={yourWhatsappNumber}
                  onChange={(e) => setYourWhatsappNumber(e.target.value)}
                />
                <button onClick={Save}>Enregistrer</button>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* add-your-contact-opacity */}
        </>
      )}
    </>
  );
}
