import lydia1 from "../../img/lydia1.jpg";
import lydia2 from "../../img/lydia2.jpg";
import lydia3 from "../../img/lydia3.jpg";
import lydia4 from "../../img/lydia4.jpg";

export default function BlockImageComputer() {
  const api = [
    {
      imagePopup: `${lydia1}`,
      imageAlt: "Lydia capture d'écran 1",
    },

    {
      imagePopup: `${lydia2}`,
      imageAlt: "Lydia capture d'écran 2",
    },

    {
      imagePopup: `${lydia3}`,
      imageAlt: "Lydia capture d'écran 3",
    },

    {
      imagePopup: `${lydia4}`,
      imageAlt: "Lydia capture d'écran 4",
    },
  ];

  return (
    <>
      <div className="align-block-image">
        <div className="block-image">
          {api.map((api) => (
            <>
              <div className="images">
                <img src={api.imagePopup} alt={api.imageAlt} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
