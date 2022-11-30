import lemonde1 from "../../img/le-monde1.jpg";
import lemonde2 from "../../img/le-monde2.jpg";
import lemonde3 from "../../img/le-monde3.jpg";
import lemonde4 from "../../img/le-monde4.jpg";
import lemonde5 from "../../img/le-monde1.jpg";
import lemonde6 from "../../img/le-monde2.jpg";

export default function BlockImageTablet() {
  const api = [
    {
      imagePopup: `${lemonde1}`,
      imageAlt: "LeMonde capture d'écran 1",
    },

    {
      imagePopup: `${lemonde2}`,
      imageAlt: "LeMonde capture d'écran 2",
    },

    {
      imagePopup: `${lemonde3}`,
      imageAlt: "LeMonde capture d'écran 3",
    },

    {
      imagePopup: `${lemonde4}`,
      imageAlt: "LeMonde capture d'écran 4",
    },

    {
      imagePopup: `${lemonde5}`,
      imageAlt: "LeMonde capture d'écran 5",
    },

    {
      imagePopup: `${lemonde6}`,
      imageAlt: "LeMonde capture d'écran 6",
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
