import { NavLink } from "react-router-dom";
import NavbarAl from "../Navigation/Navbar";

export default function HomeAl() {
  const api = [
    {
      imagebook:
        "https://res.cloudinary.com/rasivyy/image/upload/v1668836770/alrani/book1_vv3bkg.jpg",
      titlebook: "La Semaine de 4 heures",
      authorbook: "Tim Feriss",
    },

    {
      imagebook:
        "https://res.cloudinary.com/rasivyy/image/upload/v1668836770/alrani/book2_bvwki6.jpg",
      titlebook: "L'autoroute du millionnaire",
      authorbook: "MJ Demarco",
    },

    {
      imagebook:
        "https://res.cloudinary.com/rasivyy/image/upload/v1668836770/alrani/book3_ztcce1.jpg",
      titlebook: "Tout le monde n'a pas eu la chance de rater ses études",
      authorbook: "Olivier Roland",
    },
  ];

  return (
    <>
      <NavbarAl />
      <div className="home-al">
        {api.map((api) => (
          <div className="book">
            <NavLink className="navlink" to="/book">
              <img src={api.imagebook} alt="image" />

              <div className="title">
                <p>{api.titlebook}</p>
              </div>

              <div className="author">
                <p>{api.authorbook}</p>
              </div>

              <div className="b">
                <p>Saison 4</p>
                <p>Episode 1</p>
              </div>
            </NavLink>

            <div className="buttona">
              <button>Télécharger</button>
            </div>

            {/* 
            <div className="buttonb">
              <button>Télécharger</button>
            </div>
            */}
          </div>
        ))}
      </div>
    </>
  );
}
