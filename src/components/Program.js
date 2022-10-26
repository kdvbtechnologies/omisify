import { NavLink } from "react-router-dom";
import Accordion from "./Program/Accordion";
import { accordionData } from "./Program/content";

export default function Program() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <>
      <div className="back-btn">
        <NavLink to="/secure-menu">
          <button>Retour</button>
        </NavLink>
      </div>
      <div style={family} className="program">
        <div className="accordion">
          {accordionData.map(
            ({
              title,
              program,
              programLink,
              points,
              programDesc,
              consignes,
              comment,
              commentG,
              message,
              messageG,
              publication,
              publicationG,
            }) => (
              <Accordion
                title={title}
                program={program}
                programLink={programLink}
                points={points}
                programDesc={programDesc}
                consignes={consignes}
                comment={comment}
                commentG={commentG}
                message={message}
                messageG={messageG}
                publication={publication}
                publicationG={publicationG}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
