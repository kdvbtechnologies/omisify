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

  const [addaWhatsappContact, setAddaWhatsappContact] = useState("");

  const [popupAddaWhatsappContact, setPopupAddaWhatsappContact] = useState("");
  function PopupAddaWhatsappContact() {
    setPopupAddaWhatsappContact(!popupAddaWhatsappContact);
  }

  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");

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
                  <td>{api.city}</td>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  width="35px"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M7.253 18.494l.724.423A7.953 7.953 0 0012 20a8 8 0 10-8-8 7.95 7.95 0 001.084 4.024l.422.724-.653 2.401 2.4-.655zM2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308c.134-.01.269-.01.403-.004.054.004.108.01.162.016.159.018.334.115.393.249.298.676.588 1.357.868 2.04.062.152.025.347-.093.537a4.38 4.38 0 01-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268.12.116.237.235.363.346.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11.062.026.126.049.191.066a.35.35 0 00.367-.13c.724-.877.79-.934.796-.934v.002a.482.482 0 01.378-.127c.06.004.121.015.177.04.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265.004.067.01.175-.013.373-.032.259-.11.57-.188.733a1.155 1.155 0 01-.21.302 2.378 2.378 0 01-.33.288 3.71 3.71 0 01-.125.09 5.024 5.024 0 01-.383.22 1.99 1.99 0 01-.833.23c-.185.01-.37.024-.556.014-.008 0-.568-.087-.568-.087a9.448 9.448 0 01-3.84-2.046c-.226-.199-.435-.413-.649-.626-.89-.885-1.562-1.84-1.97-2.742A3.47 3.47 0 016.9 9.62a2.729 2.729 0 01.564-1.68c.073-.094.142-.192.261-.305.127-.12.207-.184.294-.228a.961.961 0 01.371-.1z"></path>
                </svg>

                <p>Nouveau Contact</p>

                <input type="text" placeholder="Nom(s)" />

                <input
                  type="number"
                  name="addaWhatsappContact"
                  placeholder="Numéro Whatsapp"
                  value={addaWhatsappContact}
                  onChange={(e) => setAddaWhatsappContact(e.target.value)}
                />

                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  name="genre"
                  id="genre"
                >
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                  <option value="Trans">Trans</option>
                </select>

                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  name="country"
                  id="country"
                >
                  <option value="Guinée Equatoriale">
                    Guinée Equatoriale Equatoriale
                  </option>
                  <option value="Congo">Congo</option>
                  <option value="France">France</option>
                </select>

                <input type="text" placeholder="Ville" />

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
