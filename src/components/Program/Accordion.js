import { useState } from "react";

export default function Accordion({
  title,
  program,
  programDesc,
  points,
  programLink,
  consignes,
  comment,
  commentG,
  publication,
  publicationG,
  message,
  messageG,
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && (
          <div className="accordion-programs">
            <div className="accordion-program">{program}</div>
            <div className="accordion-program">{programLink}</div>
            <div className="accordion-program">{points}</div>
          </div>
        )}
        {isActive && <div className="accordion-desc">{programDesc}</div>}
        {isActive && (
          <div className="accordion-consignes">
            <div className="accordion-consigne">{consignes}</div>
            <div className="accordion-con">
              <div className="accordion-c">
                <li>{comment}</li>
                <i>{commentG}</i>
              </div>
              <div className="accordion-c">
                <li>{message}</li>
                <i>{messageG}</i>
              </div>
              <div className="accordion-c">
                <li>{publication}</li>
                <i>{publicationG}</i>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
