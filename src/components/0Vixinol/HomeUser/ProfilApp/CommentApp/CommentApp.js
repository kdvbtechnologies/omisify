import { NavLink } from "react-router-dom";
import StarsFiveApp from "./StarsFiveApp";

export default function CommentApp() {
  const api = [
    {
      nameofuser: "Kamone Sigolidi",
      countryofuser: "France",
      commentofuser:
        "C'est un livre très intéressant, je pensais qu'il serait indigeste à lire mais je suis finalement surprise par la facilité de lecture.",
      datecomment: "10/12/2023",
    },

    {
      nameofuser: "Justine Solax",
      countryofuser: "Belgique",
      commentofuser: "Je déteste lire mais j’ai dévoré ce livre ! Il est extra",
      datecomment: "29/12/2023",
    },

    {
      nameofuser: "Kamone Sigolidi",
      countryofuser: "France",
      commentofuser:
        "C'est un livre très intéressant, je pensais qu'il serait indigeste à lire mais je suis finalement surprise par la facilité de lecture.",
      datecomment: "10/12/2023",
    },

    {
      nameofuser: "Justine Solax",
      countryofuser: "Belgique",
      commentofuser: "Je déteste lire mais j’ai dévoré ce livre ! Il est extra",
      datecomment: "29/12/2023",
    },

    {
      nameofuser: "Kamone Sigolidi",
      countryofuser: "France",
      commentofuser:
        "C'est un livre très intéressant, je pensais qu'il serait indigeste à lire mais je suis finalement surprise par la facilité de lecture.",
      datecomment: "10/12/2023",
    },

    {
      nameofuser: "Justine Solax",
      countryofuser: "Belgique",
      commentofuser: "Je déteste lire mais j’ai dévoré ce livre ! Il est extra",
      datecomment: "29/12/2023",
    },
  ];

  const lengthNameofuser = api.map((api) => api.nameofuser.slice(0, 15));
  console.log(lengthNameofuser);

  return (
    <>
      {api.length < 5 && (
        <>
          {api.map((api) => (
            <>
              <div className="comment-app">
                <div className="a">
                  <div className="photo-profil">
                    <p>{api.nameofuser.slice(0, 1)}</p>
                  </div>
                </div>

                <div className="b">
                  <div className="name">
                    <p>{api.nameofuser}</p>
                  </div>
                  <div className="country">
                    <p>{api.countryofuser}</p>
                  </div>
                </div>
              </div>

              <StarsFiveApp />

              <div className="comment-app-desc">
                <div className="paragraph">
                  <p>{api.commentofuser}</p>
                </div>

                <div className="date">
                  <p>{api.datecomment}</p>
                </div>
              </div>
            </>
          ))}
        </>
      )}

      {api.length > 5 && (
        <>
          {api.slice(0, 5).map((api) => (
            <>
              <div className="comment-app">
                <div className="a">
                  <div className="photo-profil">
                    <p>{api.nameofuser.slice(0, 1)}</p>
                  </div>
                </div>

                <div className="b">
                  <div className="name">
                    <p>{api.nameofuser.slice(0, 15)}</p>
                  </div>

                  <div className="country">
                    <p>{api.countryofuser}</p>
                  </div>
                </div>
              </div>

              <StarsFiveApp />

              <div className="comment-app-desc">
                <div className="paragraph">
                  <p>{api.commentofuser}</p>
                </div>

                <div className="date">
                  <p>{api.datecomment}</p>
                </div>
              </div>
            </>
          ))}

          <NavLink to="/all-comment-app" style={{ textDecoration: "none" }}>
            <p
              style={{
                color: "blue",
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "5px",
                paddingBottom: "50px",
              }}
            >
              Voir plus d'avis
            </p>
          </NavLink>
        </>
      )}
    </>
  );
}
