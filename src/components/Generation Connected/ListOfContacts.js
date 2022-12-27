import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ListOfContacts() {
  const api = [
    {
      rank: "1",
      numberWhatsapp: "+225018147569",
      country: "Cote d'Ivoire",
      city: "Abidjan",
      genre: "Homme",
      age: "17 ans",
      name: "Bakita Chris",
    },

    {
      rank: "2",
      numberWhatsapp: "+225016213589",
      country: "Cote d'Ivoire",
      city: "Cocody",
      genre: "Femme",
      age: "23 ans",
      name: "Talini Castri",
    },

    {
      rank: "3",
      numberWhatsapp: "+225016255846",
      country: "Cote d'Ivoire",
      city: "Bingerville",
      genre: "Femme",
      age: "35 ans",
      name: "Sarah Digbeu",
    },
  ];

  const partner =
    "https://res.cloudinary.com/rasivyy/image/upload/v1671415292/omisify/partner_eo1nnu.jpg";

  // popup ajouter contact
  // popup ajouter contact
  // popup ajouter contact
  const [addaWhatsappContact, setAddaWhatsappContact] = useState("");

  const [popupAddaWhatsappContact, setPopupAddaWhatsappContact] = useState("");
  function PopupAddaWhatsappContact() {
    setPopupAddaWhatsappContact(!popupAddaWhatsappContact);
  }

  //popup modifier contact
  //popup modifier contact
  //popup modifier contact
  //popup modifier contact
  const [modifierContactWhatsapp, setModifierContactWhatsapp] = useState("");

  const [popupModifierContactWhatsapp, setPopupModifierContactWhatsapp] =
    useState(false);

  function PopupModifierContactWhatsapp() {
    setPopupModifierContactWhatsapp(!popupModifierContactWhatsapp);
  }

  // popup genre
  const [popupGenre, setPopupGenre] = useState(false);
  function PopupGenre() {
    setPopupGenre(!popupGenre);
  }

  const [homme, sethomme] = useState(true);
  function Homme() {
    sethomme(true);
    setfemme(false);
    settrans(false);
  }

  const [femme, setfemme] = useState(false);
  function Femme() {
    sethomme(false);
    setfemme(true);
    settrans(false);
  }

  const [trans, settrans] = useState(false);
  function Trans() {
    sethomme(false);
    setfemme(false);
    settrans(true);
  }

  // age
  // age
  // age
  // age
  // age
  // age
  // age
  const [popupAge, setPopupAge] = useState(false);
  function PopupAge() {
    setPopupAge(!popupAge);
  }

  const [dixseptans, setdixseptans] = useState(true);
  function Dixseptans() {
    setdixseptans(true);
    setdixhuitans(false);
  }

  const [dixhuitans, setdixhuitans] = useState(false);
  function Dixhuitans() {
    setdixseptans(false);
    setdixhuitans(true);
  }

  // pays
  // pays
  // pays
  // pays
  // pays
  // pays
  // pays
  // pays
  const [popupCountry, setPopupCountry] = useState(false);
  function PopupCountry() {
    setPopupCountry(!popupCountry);
  }

  const [congo, setCongo] = useState(true);
  function Congo() {
    setCongo(true);
    setGuineeE(false);
  }

  const [guineeE, setGuineeE] = useState(false);
  function GuineeE() {
    setCongo(false);
    setGuineeE(true);
  }

  // popup help
  const [popupHelp, setPopupHelp] = useState(false);
  function PopupHelp() {
    setPopupHelp(!popupHelp);
  }

  // popup elements en attente de validation
  const [popupElementsEnAttente, setPopupElementsEnAttente] = useState(false);
  function PopupElementsEnAttente() {
    setPopupElementsEnAttente(!popupElementsEnAttente);
  }

  async function Save() {}

  return (
    <>
      <div className="add-a-contact-and-back-btn">
        <div className="space">
          <div className="left">
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
          </div>
          {/* left */}

          <div className="right">
            <svg
              onClick={PopupHelp}
              style={{ paddingRight: "10px" }}
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

            <svg
              onClick={PopupAddaWhatsappContact}
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              cursor="pointer"
              width="20px"
              enableBackground="new 0 0 489.8 489.8"
              version="1.1"
              viewBox="0 0 489.8 489.8"
              xmlSpace="preserve"
            >
              <path d="M438.2 0H51.6C23.1 0 0 23.2 0 51.6v386.6c0 28.5 23.2 51.6 51.6 51.6h386.6c28.5 0 51.6-23.2 51.6-51.6V51.6c0-28.4-23.2-51.6-51.6-51.6zm27.1 438.2c0 14.9-12.2 27.1-27.1 27.1H51.6c-14.9 0-27.1-12.2-27.1-27.1V51.6c0-14.9 12.2-27.1 27.1-27.1h386.6c14.9 0 27.1 12.2 27.1 27.1v386.6z"></path>
              <path d="M337.4 232.7h-80.3v-80.3c0-6.8-5.5-12.3-12.3-12.3s-12.3 5.5-12.3 12.3v80.3h-80.3c-6.8 0-12.3 5.5-12.3 12.2 0 6.8 5.5 12.3 12.3 12.3h80.3v80.3c0 6.8 5.5 12.3 12.3 12.3s12.3-5.5 12.3-12.3v-80.3h80.3c6.8 0 12.3-5.5 12.3-12.3 0-6.8-5.5-12.2-12.3-12.2z"></path>
            </svg>
          </div>
          {/* right */}
        </div>
        {/* space */}
      </div>
      {/* add-a-contact */}

      <div className="list-of-contacts">
        <NavLink
          style={{ textDecoration: "none" }}
          to="/about-list-of-contacts"
        >
          <div className="display">
            <img src={partner} alt="" />
            <p>Liste de Contacts Whatsapp</p>
          </div>
        </NavLink>
        {/* display */}

        <div className="element-en-attente-list-of-whatsapp-contacts">
          <p onClick={PopupElementsEnAttente} style={{ cursor: "pointer" }}>
            Élément(s) en attente de validation
          </p>
        </div>
        {/* element-en-attente-list-of-contacts-whatsapp */}

        <div className="overflow">
          <table id="table">
            <tr>
              <th>N°</th>
              <th>Nom(s)</th>
              <th>Numéro Whatsapp</th>
              <th>Genre</th>
              <th>Age</th>
              <th>Pays</th>
              <th>Ville</th>
            </tr>

            {api.map((api) => (
              <>
                <tr>
                  <td>{api.rank}</td>
                  <td>{api.name}</td>
                  <td>{api.numberWhatsapp}</td>
                  <td>{api.genre}</td>
                  <td>{api.age}</td>
                  <td>{api.country}</td>
                  <td>
                    {api.city}
                    <svg
                      onClick={PopupModifierContactWhatsapp}
                      style={{ paddingLeft: "10px" }}
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
                  </td>
                </tr>
              </>
            ))}
          </table>
          {/* table */}
        </div>
        {/* overflow */}
      </div>
      {/* list-of-contacts */}

      {/* popup add a whatsapp contact */}
      {/* popup add a whatsapp contact */}
      {/* popup add a whatsapp contact */}
      {/* popup add a whatsapp contact */}
      {/* popup add a whatsapp contact */}
      {/* popup add a whatsapp contact */}
      {/* popup add a whatsapp contact */}
      {popupAddaWhatsappContact && (
        <>
          <div className="add-a-whatsapp-contact-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={PopupAddaWhatsappContact}
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
                <div className="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    width="35px"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M7.253 18.494l.724.423A7.953 7.953 0 0012 20a8 8 0 10-8-8 7.95 7.95 0 001.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 01-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 00.367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 01.378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 01-.21.302 2.378 2.378 0 01-.33.288 3.71 3.71 0 01-.125.09 5.024 5.024 0 01-.383.22 1.99 1.99 0 01-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 01-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 016.9 9.62a2.729 2.729 0 01.564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 01.371-.1z"></path>
                  </svg>
                </div>

                <div className="center">
                  <p
                    style={{
                      fontSize: "17px",
                      paddingBottom: "16px",
                      paddingTop: "5px",
                    }}
                  >
                    Nouveau Contact
                  </p>

                  <input type="text" placeholder="Nom(s)" />

                  <input
                    type="number"
                    name="addaWhatsappContact"
                    placeholder="Numéro Whatsapp"
                    value={addaWhatsappContact}
                    onChange={(e) => setAddaWhatsappContact(e.target.value)}
                  />
                </div>
                {/* center */}

                {/* homme */}
                {/* homme */}
                {homme && (
                  <>
                    <div className="genre">
                      <p onClick={PopupGenre}>Homme</p>
                      <svg
                        onClick={PopupGenre}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}

                {/* femme */}
                {/* femme */}
                {femme && (
                  <>
                    <div className="genre">
                      <p onClick={PopupGenre}>Femme</p>
                      <svg
                        onClick={PopupGenre}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}

                {/* trans */}
                {/* trans */}
                {trans && (
                  <>
                    <div className="genre">
                      <p onClick={PopupGenre}>Trans</p>
                      <svg
                        onClick={PopupGenre}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}
                <div className="hr">
                  <hr />
                </div>

                {/* age */}
                {/* age */}
                {/* age */}

                {/* 17 ans */}
                {/* 17 ans */}
                {dixseptans && (
                  <>
                    <div className="genre">
                      <p onClick={PopupAge}>17 ans</p>
                      <svg
                        onClick={PopupAge}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}

                {/* 18 ans */}
                {/* 18 ans */}
                {dixhuitans && (
                  <>
                    <div className="genre">
                      <p onClick={PopupAge}>18 ans</p>
                      <svg
                        onClick={PopupAge}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}
                <div className="hr">
                  <hr />
                </div>

                {/* pays */}
                {/* pays */}
                {/* pays */}

                {/* congo */}
                {/* congo */}
                {congo && (
                  <>
                    <div className="genre">
                      <p onClick={PopupCountry}>Congo</p>
                      <svg
                        onClick={PopupCountry}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}

                {guineeE && (
                  <>
                    <div className="genre">
                      <p onClick={PopupCountry}>Guinée Equatoriale</p>
                      <svg
                        onClick={PopupCountry}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}
                <div className="hr">
                  <hr />
                </div>

                <div className="center">
                  <input type="text" placeholder="Ville" />
                </div>
                {/* center */}

                <div className="center">
                  <button onClick={Save}>Enregistrer</button>
                </div>
                {/* center */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* add-your-contact-opacity */}
        </>
      )}
      {/* popup add a whatsapp contact */}

      {/* popup modifier le contact whatsapp */}
      {/* popup modifier le contact whatsapp */}
      {/* popup modifier le contact whatsapp */}
      {/* popup modifier le contact whatsapp */}
      {/* popup modifier le contact whatsapp */}
      {/* popup modifier le contact whatsapp */}
      {/* popup modifier le contact whatsapp */}
      {/* popup modifier le contact whatsapp */}
      {/* popup modifier le contact whatsapp */}
      {/* popup modifier le contact whatsapp */}
      {popupModifierContactWhatsapp && (
        <>
          <div className="add-a-whatsapp-contact-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={PopupModifierContactWhatsapp}
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
                <div className="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    width="35px"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M7.253 18.494l.724.423A7.953 7.953 0 0012 20a8 8 0 10-8-8 7.95 7.95 0 001.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 01-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 00.367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 01.378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 01-.21.302 2.378 2.378 0 01-.33.288 3.71 3.71 0 01-.125.09 5.024 5.024 0 01-.383.22 1.99 1.99 0 01-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 01-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 016.9 9.62a2.729 2.729 0 01.564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 01.371-.1z"></path>
                  </svg>
                </div>

                <div className="center">
                  <p
                    style={{
                      fontSize: "17px",
                      paddingBottom: "16px",
                      paddingTop: "5px",
                    }}
                  >
                    Modifications
                  </p>

                  <input type="text" placeholder="Nom(s)" />

                  <input
                    type="number"
                    name="modifierContactWhatsapp"
                    placeholder="Numéro Whatsapp"
                    value={modifierContactWhatsapp}
                    onChange={(e) => setModifierContactWhatsapp(e.target.value)}
                  />
                </div>
                {/* center */}

                {/* homme */}
                {/* homme */}
                {homme && (
                  <>
                    <div className="genre">
                      <p onClick={PopupGenre}>Homme</p>
                      <svg
                        onClick={PopupGenre}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}

                {/* femme */}
                {/* femme */}
                {femme && (
                  <>
                    <div className="genre">
                      <p onClick={PopupGenre}>Femme</p>
                      <svg
                        onClick={PopupGenre}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}

                {/* trans */}
                {/* trans */}
                {trans && (
                  <>
                    <div className="genre">
                      <p onClick={PopupGenre}>Trans</p>
                      <svg
                        onClick={PopupGenre}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}
                <div className="hr">
                  <hr />
                </div>

                {/* age */}
                {/* age */}
                {/* age */}

                {/* 17 ans */}
                {/* 17 ans */}
                {dixseptans && (
                  <>
                    <div className="genre">
                      <p onClick={PopupAge}>17 ans</p>
                      <svg
                        onClick={PopupAge}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}

                {/* 18 ans */}
                {/* 18 ans */}
                {dixhuitans && (
                  <>
                    <div className="genre">
                      <p onClick={PopupAge}>18 ans</p>
                      <svg
                        onClick={PopupAge}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}
                <div className="hr">
                  <hr />
                </div>

                {/* pays */}
                {/* pays */}
                {/* pays */}

                {/* congo */}
                {/* congo */}
                {congo && (
                  <>
                    <div className="genre">
                      <p onClick={PopupCountry}>Congo</p>
                      <svg
                        onClick={PopupCountry}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}

                {guineeE && (
                  <>
                    <div className="genre">
                      <p onClick={PopupCountry}>Guinée Equatoriale</p>
                      <svg
                        onClick={PopupCountry}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        cursor="pointer"
                        width="9px"
                        enableBackground="new 0 0 25.93 25.93"
                        version="1.1"
                        viewBox="0 0 25.93 25.93"
                        xmlSpace="preserve"
                      >
                        <path d="M25.397 4.554h-2.042l-9.974 12.644a.54.54 0 01-.835 0L2.575 4.554H.532a.533.533 0 00-.419.86l12.435 15.762c.104.125.255.2.419.2a.54.54 0 00.416-.2L25.816 5.413a.524.524 0 00.058-.561.524.524 0 00-.477-.298z"></path>
                      </svg>
                    </div>
                  </>
                )}
                <div className="hr">
                  <hr />
                </div>

                <div className="center">
                  <input type="text" placeholder="Ville" />
                </div>
                {/* center */}

                <div className="center">
                  <button onClick={Save}>Enregistrer les modifications</button>
                </div>
                {/* center */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* add-your-contact-opacity */}
        </>
      )}
      {/* popup modifier le contact whatsapp */}

      {/* popup genre */}
      {/* popup genre */}
      {/* popup genre */}
      {/* popup genre */}
      {/* popup genre */}
      {popupGenre && (
        <>
          <div className="popup-genre-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={PopupGenre}
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
                <div className="title">
                  <li>Choisissez le Genre</li>
                </div>
                {/* title */}

                {/* homme */}
                {/* homme */}
                {homme && (
                  <>
                    <div onClick={Homme} className="active">
                      <p>Homme</p>
                    </div>
                  </>
                )}

                {!homme && (
                  <>
                    <div onClick={Homme} className="no-active">
                      <p>Homme</p>
                    </div>
                  </>
                )}

                {/* femme */}
                {/* femme */}
                {femme && (
                  <>
                    <div onClick={Femme} className="active">
                      <p>Femme</p>
                    </div>
                  </>
                )}

                {!femme && (
                  <>
                    <div onClick={Femme} className="no-active">
                      <p>Femme</p>
                    </div>
                  </>
                )}

                {/* Trans */}
                {/* Trans */}
                {trans && (
                  <>
                    <div onClick={Trans} className="active">
                      <p>Trans</p>
                    </div>
                  </>
                )}

                {!trans && (
                  <>
                    <div onClick={Trans} className="no-active">
                      <p>Trans</p>
                    </div>
                  </>
                )}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-genre-opacity */}
        </>
      )}

      {/* popup age */}
      {/* popup age */}
      {/* popup age */}
      {/* popup age */}
      {/* popup age */}
      {/* popup age */}
      {popupAge && (
        <>
          <div className="popup-genre-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={PopupAge}
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
                <div className="title">
                  <li>Choisissez l'age</li>
                </div>
                {/* title */}

                {/* 17 ans */}
                {/* 17 ans */}
                {dixseptans && (
                  <>
                    <div onClick={Dixseptans} className="active">
                      <p>17 ans</p>
                    </div>
                  </>
                )}

                {!dixseptans && (
                  <>
                    <div onClick={Dixseptans} className="no-active">
                      <p>17 ans</p>
                    </div>
                  </>
                )}

                {/* 18 ans */}
                {/* 18 ans */}
                {dixhuitans && (
                  <>
                    <div onClick={Dixhuitans} className="active">
                      <p>18 ans</p>
                    </div>
                  </>
                )}

                {!dixhuitans && (
                  <>
                    <div onClick={Dixhuitans} className="no-active">
                      <p>18 ans</p>
                    </div>
                  </>
                )}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-genre-opacity */}
        </>
      )}

      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {/* popup country */}
      {popupCountry && (
        <>
          <div className="popup-genre-opacity">
            <div className="align">
              <div className="close">
                <p></p>
                <svg
                  onClick={PopupCountry}
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
                <div className="title">
                  <li>Choisissez le Pays</li>
                </div>
                {/* title */}

                {/* Congo */}
                {/* Congo */}
                {congo && (
                  <>
                    <div onClick={Congo} className="active">
                      <p>Congo</p>
                    </div>
                  </>
                )}

                {!congo && (
                  <>
                    <div onClick={Congo} className="no-active">
                      <p>Congo</p>
                    </div>
                  </>
                )}

                {/* Guinée Equatoriale */}
                {/* Guinée Equatoriale */}
                {guineeE && (
                  <>
                    <div onClick={GuineeE} className="active">
                      <p>Guinée Equatoriale</p>
                    </div>
                  </>
                )}

                {!guineeE && (
                  <>
                    <div onClick={GuineeE} className="no-active">
                      <p>Guinée Equatoriale</p>
                    </div>
                  </>
                )}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-genre-opacity */}
        </>
      )}

      {popupHelp && (
        <>
          <div
            onClick={PopupHelp}
            className="popup-help-list-of-contacts-whatsapp-opacity"
          >
            <div className="align">
              <div className="card">
                <div className="display">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur</li>
                  <p style={{ fontWeight: "bold", paddingRight: "5px" }}>
                    Liste de
                  </p>
                  <p style={{ fontWeight: "bold", paddingRight: "5px" }}>
                    Contacts
                  </p>
                  <p style={{ fontWeight: "bold", paddingRight: "5px" }}>
                    Whatsapp
                  </p>
                  <p style={{ paddingRight: "5px" }}>pour aller</p>
                  <p style={{ paddingRight: "5px" }}>dans</p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    A Propos
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    de la
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Liste de
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Contacts
                  </p>
                  <p style={{ textDecoration: "underline" }}>Whatsapp</p>
                </div>
                {/* display */}

                <div className="display-indice-two">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur</li>
                  <p style={{ paddingRight: "5px" }}>l'icone</p>
                  <svg
                    style={{ paddingRight: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    width="20px"
                    enableBackground="new 0 0 489.8 489.8"
                    version="1.1"
                    viewBox="0 0 489.8 489.8"
                    xmlSpace="preserve"
                  >
                    <path d="M438.2 0H51.6C23.1 0 0 23.2 0 51.6v386.6c0 28.5 23.2 51.6 51.6 51.6h386.6c28.5 0 51.6-23.2 51.6-51.6V51.6c0-28.4-23.2-51.6-51.6-51.6zm27.1 438.2c0 14.9-12.2 27.1-27.1 27.1H51.6c-14.9 0-27.1-12.2-27.1-27.1V51.6c0-14.9 12.2-27.1 27.1-27.1h386.6c14.9 0 27.1 12.2 27.1 27.1v386.6z"></path>
                    <path d="M337.4 232.7h-80.3v-80.3c0-6.8-5.5-12.3-12.3-12.3s-12.3 5.5-12.3 12.3v80.3h-80.3c-6.8 0-12.3 5.5-12.3 12.2 0 6.8 5.5 12.3 12.3 12.3h80.3v80.3c0 6.8 5.5 12.3 12.3 12.3s12.3-5.5 12.3-12.3v-80.3h80.3c6.8 0 12.3-5.5 12.3-12.3 0-6.8-5.5-12.2-12.3-12.2z"></path>
                  </svg>
                  <p style={{ paddingRight: "5px" }}>pour</p>
                  <p style={{ paddingRight: "5px" }}>ajouter</p>
                  <p style={{ paddingRight: "5px" }}>un</p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Nouveau
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Contact
                  </p>
                  <p style={{ paddingRight: "5px" }}>à votre</p>
                  <p style={{ paddingRight: "5px" }}>Liste de</p>
                  <p style={{ paddingRight: "5px" }}>Contacts</p>
                  <p>Whatsapp</p>
                </div>
                {/* display-indice-two */}

                {/* display-indice-three*/}
                {/* display-indice-three*/}
                {/* display-indice-three*/}
                <div className="display-indice-three">
                  <li style={{ paddingRight: "5px" }}>Cliquer sur</li>
                  <p style={{ paddingRight: "5px" }}>l'icone</p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ paddingRight: "5px" }}
                    width="20px"
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
                  <p style={{ paddingRight: "5px" }}>pour</p>

                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Modifier
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    un
                  </p>
                  <p
                    style={{ textDecoration: "underline", paddingRight: "5px" }}
                  >
                    Contact
                  </p>
                  <p style={{ paddingRight: "5px" }}>figurant</p>
                  <p style={{ paddingRight: "5px" }}>dans</p>
                  <p style={{ paddingRight: "5px" }}>votre</p>
                  <p style={{ paddingRight: "5px" }}>Liste de</p>
                  <p style={{ paddingRight: "5px" }}>Contacts</p>
                  <p>Whatsapp</p>
                </div>
                {/* display-indice-three */}
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-help-list-of-contacts-whatsapp-opacity */}
        </>
      )}

      {popupElementsEnAttente && (
        <>
          <div
            onClick={PopupElementsEnAttente}
            className="popup-elements-en-attente-opacity"
          >
            <div className="align">
              <div className="card">
                <p>
                  Les Contacts que vous avez enregistrés sont en attente de
                  validation
                </p>
              </div>
              {/* card */}
            </div>
            {/* align */}
          </div>
          {/* popup-elements-en-attente-opacity */}
        </>
      )}
    </>
  );
}
