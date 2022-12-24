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
    </>
  );
}
