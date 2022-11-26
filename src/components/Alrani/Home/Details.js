import { useState } from "react";
import PopupDetailsBookMobile from "./PopupDetailsBookMobile";

export default function DetailsBook() {
  const [popupDetails, setPopupDetails] = useState(false);

  function PopupDetails() {
    setPopupDetails(!popupDetails);
    console.log("popup details true");
  }

  return (
    <>
      <div className="details-book-pc">
        <div className="details-book">
          <div className="title">
            <p>Détails</p>
          </div>

          <div className="detail">
            <div className="a">
              <hr />
              <p>Téléchargements</p>
              <hr />
            </div>

            <div className="b">
              <hr />
              <p>1500 téléchargement(s)</p>
              <hr />
            </div>
          </div>

          <div className="detail">
            <div className="a">
              <p>Taille</p>
              <hr />
            </div>

            <div className="b">
              <p>133 KO</p>
              <hr />
            </div>
          </div>

          <div className="detail">
            <div className="a">
              <p>Nombre de pages</p>
              <hr />
            </div>

            <div className="b">
              <p>314 pages</p>
              <hr />
            </div>
          </div>

          <div className="detail">
            <div className="a">
              <p>Editeur</p>
              <hr />
            </div>

            <div className="b">
              <p>Edition inola, LLC</p>
              <hr />
            </div>
          </div>

          <div className="detail">
            <div className="a">
              <p>Type de programme</p>
              <hr />
            </div>

            <div className="b">
              <p>Livre numérique</p>
              <hr />
            </div>
          </div>

          <div className="detail">
            <div className="a">
              <p>Version</p>
              <hr />
            </div>
            <div className="b">
              <p>Version intégrale</p>
              <hr />
            </div>
          </div>

          <div className="detail">
            <div className="a">
              <p>ASIN</p>
              <hr />
            </div>
            <div className="b">
              <p>B09MFV4Y4Z</p>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div onClick={PopupDetails} className="details-book-mobile">
        <div className="details-book">
          <div className="title">
            <p>Détails</p>
          </div>

          <div className="detail">
            <div className="a">
              <hr />
              <p>Téléchargements</p>
              <hr />
            </div>

            <div className="b">
              <hr />
              <p>1500 téléchargement(s)</p>
              <hr />
            </div>
          </div>

          <div className="detail">
            <div className="a">
              <p>Taille</p>
              <hr />
            </div>

            <div className="b">
              <p>133 KO</p>
              <hr />
            </div>
          </div>

          <div className="detail">
            <div className="a">
              <p>Nombre de pages</p>
              <hr />
            </div>

            <div className="b">
              <p>314 pages</p>
              <hr />
            </div>
          </div>
        </div>

        <svg
          onClick={PopupDetails}
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          cursor="pointer"
          width="40px"
          enableBackground="new 0 0 477.175 477.175"
          version="1.1"
          viewBox="0 0 477.175 477.175"
          xmlSpace="preserve"
        >
          <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path>
        </svg>

        {popupDetails && (
          <div onClick={PopupDetails}>
            <PopupDetailsBookMobile />
          </div>
        )}
      </div>
    </>
  );
}
