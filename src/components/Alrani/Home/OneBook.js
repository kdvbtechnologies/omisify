import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Back from "../Back/Back";
import NavbarAl from "../Navigation/Navbar";
import DetailsBook from "./Details";
import NoteOfBook from "./NoteOfBook";
import StarsBook from "./StarsBook";

export default function OneBook() {
  const navigate = useNavigate();
  const [seeMore, setSeeMore] = useState(true);
  const [popup, setPopup] = useState(false);
  const [popup1, setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);

  function PopupMainImage() {
    setPopup(!popup);
  }

  function PopupImage1() {
    setPopup1(!popup1);
  }

  function PopupImage2() {
    setPopup2(!popup2);
  }

  function SeeMore() {
    setSeeMore(!seeMore);
  }

  const desc =
    "George S. Clason révèle ses secrets pour créer, accroître et préserver la richesse. Ce livre a été publié pour la première fois en 1926 et a déjà rencontré des millions d'adeptes enthousiastes. De nos jours, dans presque 100 ans, il ne perd pas son actualité !";
  const descVerify = desc.slice(0, 180);

  return (
    <>
      <NavbarAl />
      <div onClick={() => navigate(-1)}>
        <Back />
      </div>

      <div className="one-book">
        <div className="images">
          <img
            onClick={PopupMainImage}
            src="https://res.cloudinary.com/rasivyy/image/upload/v1668836770/alrani/book1_vv3bkg.jpg"
            alt="image"
          />

          <div className="image">
            <img
              onClick={PopupImage1}
              src="https://res.cloudinary.com/rasivyy/image/upload/v1668836770/alrani/book1_vv3bkg.jpg"
              alt="image"
            />

            <img
              onClick={PopupImage2}
              src="https://res.cloudinary.com/rasivyy/image/upload/v1668896912/alrani/book1-1_nmbwp3.jpg"
              alt="image"
            />
          </div>
        </div>

        <div className="a">
          <div className="title">
            <p>La Semaine de 4 heures</p>
          </div>

          <NavLink className="navlink" to="/profil-author">
            <div className="author">
              <p>Tim Feriss</p>
            </div>
          </NavLink>

          <div className="b">
            <p>Saison 4</p>
            <p>Episode 1</p>
          </div>

          <div className="buttona">
            <button>Télécharger</button>
          </div>

          {/*
          <div className="buttonb">
            <button>Télécharger</button>
          </div>
          */}
        </div>
      </div>
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}
      {/* mobile */}

      {/*

{seeMore ? (
    <>
    </>
) : (
    <>
    </>
)}

*/}

      {seeMore ? (
        <>
          <div className="mobile-one-book">
            <div className="desc-book">
              {/* description */}
              <div className="desc">
                <p>Description</p>
              </div>
              {/* intro */}
              <div className="intro">
                <p>
                  Best-seller classique L'homme le plus riche de Babylone pour
                  développer une excellente discipline financière !
                </p>
              </div>
              {/* 1er paragraphe */}
              <div className="paragraph">
                {desc.length > 180 ? (
                  <p>{descVerify}...</p>
                ) : (
                  <p>{descVerify}</p>
                )}

                {seeMore && (
                  <div className="see-more-al-mobile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      cursor="pointer"
                      width="20px"
                      fill="#00cc00"
                      onClick={SeeMore}
                      enableBackground="new 0 0 490 490"
                      version="1.1"
                      viewBox="0 0 490 490"
                      xmlSpace="preserve"
                    >
                      <path d="M0 .769l245 488.462L490 .769 245 151.055 0 .769zM245 455.12L37.724 41.839 245 169.006 452.276 41.839 245 455.12z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mobile-one-book">
            <div className="desc-book">
              {/* description */}
              {/* description */}
              {/* description */}
              <div className="desc">
                <p>Description</p>
              </div>
              {/* intro */}
              {/* intro */}
              {/* intro */}
              <div className="intro">
                <p>
                  Best-seller classique L'homme le plus riche de Babylone pour
                  développer une excellente discipline financière !
                </p>
              </div>
              {/* 1er paragraphe */}
              {/* 1er paragraphe */}
              {/* 1er paragraphe */}
              <div className="paragraph">
                <p>
                  George S. Clason révèle ses secrets pour créer, accroître et
                  préserver la richesse. Ce livre a été publié pour la première
                  fois en 1926 et a déjà rencontré des millions d'adeptes
                  enthousiastes. De nos jours, dans presque 100 ans, il ne perd
                  pas son actualité !
                </p>
              </div>
              {/* 2e paragraphe */}
              {/* 2e paragraphe */}
              {/* 2e paragraphe */}
              <div className="paragraph">
                <p>
                  Babylone était la ville la plus riche de l'Antiquité parce que
                  ses habitants attachaient de l'importance à la valeur de la
                  monnaie et suivaient des principes économiques rationnels en
                  matière de création de richesses, d'épargne et
                  d'investissement afin d'atteindre l'abondance financière.
                </p>
              </div>
              {/* 3e paragraphe */}
              {/* 3e paragraphe */}
              {/* 3e paragraphe */}
              <div className="paragraph">
                <p>
                  La série de paraboles se déroulant dans l'ancienne Babylone
                  transmet les 7 principes universels et immuables pour nous
                  montrer comment gérer l'argent, satisfaire les désirs et
                  acquérir l'indépendance et le succès dont d'autres gens ne
                  font que rêver.
                </p>
              </div>
              {/* phrase d'appel avant les points forts */}
              {/* phrase d'appel avant les points forts */}
              {/* phrase d'appel avant les points forts */}
              <div className="before-strong-point">
                <p>Après avoir écouté ce livre audio vous aurez appris :</p>
              </div>
              {/* 1er point fort */}
              {/* 1er point fort */}
              {/* 1er point fort */}
              <div className="strong-point">
                <li>
                  Comment contrôler vos dépenses et faire fructifier votre
                  argent ;
                </li>
              </div>
              {/* 2e point fort */}
              {/* 2e point fort */}
              {/* 2e point fort */}
              <div className="strong-point">
                <li>
                  Quels sont les secrets de la gestion de l'argent qui vous
                  aideront à empêcher vos trésors de se perdre ;
                </li>
              </div>
              {/* 3e point fort */}
              {/* 3e point fort */}
              {/* 3e point fort */}
              <div className="strong-point">
                <li>
                  Pourquoi votre propriété doit être un investissement rentable
                  ;
                </li>
              </div>
              {/* 4e point fort */}
              {/* 4e point fort */}
              {/* 4e point fort */}
              <div className="strong-point">
                <li>Comment assurer un revenu pour l'avenir ;</li>
              </div>
              {/* 5e point fort */}
              {/* 5e point fort */}
              {/* 5e point fort */}
              <div className="strong-point">
                <li>Devenir riche par l'action</li>
              </div>
              {/* phrase d'appel apres les points forts */}
              {/* phrase d'appel apres les points forts */}
              {/* phrase d'appel apres les points forts */}
              <div className="after-strong-point">
                <p>Et encore plus !</p>
              </div>
              {/* mot de la fin */}
              {/* mot de la fin */}
              {/* mot de la fin */}
              <div className="last-word">
                <p>
                  Trouvez tous les secrets pour garder votre argent et en faire
                  plus dans un seul livre audio !
                </p>
              </div>
            </div>
          </div>
          {!seeMore && (
            <div className="see-more-al-mobile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                cursor="pointer"
                width="20px"
                fill="#00cc00"
                onClick={SeeMore}
                enableBackground="new 0 0 490 490"
                version="1.1"
                viewBox="0 0 490 490"
                xmlSpace="preserve"
              >
                <path d="M490 488.678L244.992 1.322 0 488.678l244.992-149.971L490 488.678zM244.992 35.376l207.25 412.259-207.25-126.85-207.234 126.85L244.992 35.376z"></path>
              </svg>
            </div>
          )}
        </>
      )}

      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {/* pc */}
      {seeMore ? (
        <>
          <div className="pc-one-book">
            <div className="desc-book">
              {/* description */}
              <div className="desc">
                <p>Description</p>
              </div>
              {/* intro */}
              <div className="intro">
                <p>
                  Best-seller classique L'homme le plus riche de Babylone pour
                  développer une excellente discipline financière !
                </p>
              </div>
              {/* 1er paragraphe */}
              <div className="paragraph">
                {desc.length > 180 ? (
                  <p>{descVerify}...</p>
                ) : (
                  <p>{descVerify}</p>
                )}

                {seeMore && (
                  <div className="see-more-al-pc">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      cursor="pointer"
                      width="20px"
                      fill="#00cc00"
                      onClick={SeeMore}
                      enableBackground="new 0 0 490 490"
                      version="1.1"
                      viewBox="0 0 490 490"
                      xmlSpace="preserve"
                    >
                      <path d="M0 .769l245 488.462L490 .769 245 151.055 0 .769zM245 455.12L37.724 41.839 245 169.006 452.276 41.839 245 455.12z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="pc-one-book">
            <div className="desc-book">
              {/* description */}
              {/* description */}
              {/* description */}
              <div className="desc">
                <p>Description</p>
              </div>
              {/* intro */}
              {/* intro */}
              {/* intro */}
              <div className="intro">
                <p>
                  Best-seller classique L'homme le plus riche de Babylone pour
                  développer une excellente discipline financière !
                </p>
              </div>
              {/* 1er paragraphe */}
              {/* 1er paragraphe */}
              {/* 1er paragraphe */}
              <div className="paragraph">
                <p>
                  George S. Clason révèle ses secrets pour créer, accroître et
                  préserver la richesse. Ce livre a été publié pour la première
                  fois en 1926 et a déjà rencontré des millions d'adeptes
                  enthousiastes. De nos jours, dans presque 100 ans, il ne perd
                  pas son actualité !
                </p>
              </div>
              {/* 2e paragraphe */}
              {/* 2e paragraphe */}
              {/* 2e paragraphe */}
              <div className="paragraph">
                <p>
                  Babylone était la ville la plus riche de l'Antiquité parce que
                  ses habitants attachaient de l'importance à la valeur de la
                  monnaie et suivaient des principes économiques rationnels en
                  matière de création de richesses, d'épargne et
                  d'investissement afin d'atteindre l'abondance financière.
                </p>
              </div>
              {/* 3e paragraphe */}
              {/* 3e paragraphe */}
              {/* 3e paragraphe */}
              <div className="paragraph">
                <p>
                  La série de paraboles se déroulant dans l'ancienne Babylone
                  transmet les 7 principes universels et immuables pour nous
                  montrer comment gérer l'argent, satisfaire les désirs et
                  acquérir l'indépendance et le succès dont d'autres gens ne
                  font que rêver.
                </p>
              </div>
              {/* phrase d'appel avant les points forts */}
              {/* phrase d'appel avant les points forts */}
              {/* phrase d'appel avant les points forts */}
              <div className="before-strong-point">
                <p>Après avoir écouté ce livre audio vous aurez appris :</p>
              </div>
              {/* 1er point fort */}
              {/* 1er point fort */}
              {/* 1er point fort */}
              <div className="strong-point">
                <li>
                  Comment contrôler vos dépenses et faire fructifier votre
                  argent ;
                </li>
              </div>
              {/* 2e point fort */}
              {/* 2e point fort */}
              {/* 2e point fort */}
              <div className="strong-point">
                <li>
                  Quels sont les secrets de la gestion de l'argent qui vous
                  aideront à empêcher vos trésors de se perdre ;
                </li>
              </div>
              {/* 3e point fort */}
              {/* 3e point fort */}
              {/* 3e point fort */}
              <div className="strong-point">
                <li>
                  Pourquoi votre propriété doit être un investissement rentable
                  ;
                </li>
              </div>
              {/* 4e point fort */}
              {/* 4e point fort */}
              {/* 4e point fort */}
              <div className="strong-point">
                <li>Comment assurer un revenu pour l'avenir ;</li>
              </div>
              {/* 5e point fort */}
              {/* 5e point fort */}
              {/* 5e point fort */}
              <div className="strong-point">
                <li>Devenir riche par l'action</li>
              </div>
              {/* phrase d'appel apres les points forts */}
              {/* phrase d'appel apres les points forts */}
              {/* phrase d'appel apres les points forts */}
              <div className="after-strong-point">
                <p>Et encore plus !</p>
              </div>
              {/* mot de la fin */}
              {/* mot de la fin */}
              {/* mot de la fin */}
              <div className="last-word">
                <p>
                  Trouvez tous les secrets pour garder votre argent et en faire
                  plus dans un seul livre audio !
                </p>
              </div>
            </div>
          </div>
          {!seeMore && (
            <div className="see-more-al-pc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                cursor="pointer"
                width="20px"
                fill="#00cc00"
                onClick={SeeMore}
                enableBackground="new 0 0 490 490"
                version="1.1"
                viewBox="0 0 490 490"
                xmlSpace="preserve"
              >
                <path d="M490 488.678L244.992 1.322 0 488.678l244.992-149.971L490 488.678zM244.992 35.376l207.25 412.259-207.25-126.85-207.234 126.85L244.992 35.376z"></path>
              </svg>
            </div>
          )}
        </>
      )}

      <div className="one-book-part-two">
        <div className="hr">
          <hr />
        </div>

        <div className="display">
          <div className="language">
            <div className="a">
              <p>Auteur</p>
            </div>

            <div className="a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                cursor="pointer"
                width="20px"
                enableBackground="new 0 0 964.07 964.07"
                version="1.1"
                viewBox="0 0 964.07 964.07"
                xmlSpace="preserve"
              >
                <path d="M850.662 877.56l-10.226 1.831c-230.868 41.379-273.337 48.484-278.103 49.037-11.37 1.319-19.864.651-25.976-2.042-3.818-1.682-5.886-3.724-6.438-4.623.268-1.597 2.299-5.405 3.539-7.73 1.207-2.263 2.574-4.826 3.772-7.558 7.945-18.13 2.386-36.521-14.51-47.999-12.599-8.557-29.304-12.03-49.666-10.325-12.155 1.019-225.218 36.738-342.253 56.437l-57.445 45.175c133.968-22.612 389.193-65.433 402.622-66.735 11.996-1.007 21.355.517 27.074 4.4 3.321 2.257 2.994 3.003 2.12 4.997-.656 1.497-1.599 3.264-2.596 5.135-3.835 7.189-9.087 17.034-7.348 29.229 1.907 13.374 11.753 24.901 27.014 31.626 8.58 3.78 18.427 5.654 29.846 5.654 4.508 0 9.261-.292 14.276-.874 9.183-1.065 103.471-17.67 280.244-49.354 5.821-1.043 9.403-1.686 10.169-1.821 9.516-1.688 15.861-10.772 14.172-20.289s-10.766-15.861-20.287-14.171zM231.14 707.501L82.479 863.005a133.826 133.826 0 00-33.419 61.338l211.087-166.001c66.081 29.303 118.866 38.637 159.32 38.637 71.073 0 104.065-28.826 104.065-28.826-66.164-34.43-75.592-98.686-75.592-98.686 50.675 21.424 156.235 46.678 156.235 46.678 140.186-93.563 213.45-296.138 213.45-296.138-14.515 3.99-28.395 5.652-41.475 5.652-65.795 0-111-42.13-111-42.13l183.144-39.885C909.186 218.71 915.01 0 915.01 0L358.176 495.258A412.49 412.49 0 00231.14 707.501z"></path>
              </svg>
            </div>

            <div className="a">
              <p>Tim Ferris</p>
            </div>
          </div>

          <div className="language">
            <div className="a">
              <p>Langue</p>
            </div>

            <div className="a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                cursor="pointer"
                width="20px"
                height="auto"
                viewBox="0 0 512 512"
              >
                <path d="M478.33 433.6l-90-218a22 22 0 00-40.67 0l-90 218a22 22 0 1040.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 00458 464a22 22 0 0020.32-30.4zM334.83 362L368 281.65 401.17 362zM267.84 342.92a22 22 0 00-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 000-44H214V70a22 22 0 00-44 0v20H54a22 22 0 000 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 00-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1021.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0030.75-4.9z"></path>
              </svg>
            </div>

            <div className="a">
              <p>Français</p>
            </div>
          </div>

          <div className="language">
            <div className="a">
              <p>Date de sortie</p>
            </div>

            <div className="a">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                cursor="pointer"
                width="20px"
                height="auto"
                viewBox="0 0 36 36"
              >
                <path
                  d="M32 13.22V30H4V8h3V6H3.75A1.78 1.78 0 002 7.81v22.38A1.78 1.78 0 003.75 32h28.5A1.78 1.78 0 0034 30.19V12.34a7.45 7.45 0 01-2 .88z"
                  className="clr-i-outline--badged clr-i-outline-path-1--badged"
                ></path>
                <path
                  d="M8 14H10V16H8z"
                  className="clr-i-outline--badged clr-i-outline-path-2--badged"
                ></path>
                <path
                  d="M14 14H16V16H14z"
                  className="clr-i-outline--badged clr-i-outline-path-3--badged"
                ></path>
                <path
                  d="M20 14H22V16H20z"
                  className="clr-i-outline--badged clr-i-outline-path-4--badged"
                ></path>
                <path
                  d="M26 14H28V16H26z"
                  className="clr-i-outline--badged clr-i-outline-path-5--badged"
                ></path>
                <path
                  d="M8 19H10V21H8z"
                  className="clr-i-outline--badged clr-i-outline-path-6--badged"
                ></path>
                <path
                  d="M14 19H16V21H14z"
                  className="clr-i-outline--badged clr-i-outline-path-7--badged"
                ></path>
                <path
                  d="M20 19H22V21H20z"
                  className="clr-i-outline--badged clr-i-outline-path-8--badged"
                ></path>
                <path
                  d="M26 19H28V21H26z"
                  className="clr-i-outline--badged clr-i-outline-path-9--badged"
                ></path>
                <path
                  d="M8 24H10V26H8z"
                  className="clr-i-outline--badged clr-i-outline-path-10--badged"
                ></path>
                <path
                  d="M14 24H16V26H14z"
                  className="clr-i-outline--badged clr-i-outline-path-11--badged"
                ></path>
                <path
                  d="M20 24H22V26H20z"
                  className="clr-i-outline--badged clr-i-outline-path-12--badged"
                ></path>
                <path
                  d="M26 24H28V26H26z"
                  className="clr-i-outline--badged clr-i-outline-path-13--badged"
                ></path>
                <path
                  d="M10 10a1 1 0 001-1V3a1 1 0 00-2 0v6a1 1 0 001 1z"
                  className="clr-i-outline--badged clr-i-outline-path-14--badged"
                ></path>
                <path
                  d="M22.5 6H13v2h9.78a7.49 7.49 0 01-.28-2z"
                  className="clr-i-outline--badged clr-i-outline-path-15--badged"
                ></path>
                <circle
                  cx="30"
                  cy="6"
                  r="5"
                  className="clr-i-outline--badged clr-i-outline-path-16--badged clr-i-badge"
                ></circle>
                <path fill="none" d="M0 0H36V36H0z"></path>
              </svg>
            </div>

            <div className="a">
              <p>10 Novembre 2023</p>
            </div>
          </div>
        </div>

        <div className="hr">
          <hr />
        </div>

        <DetailsBook />
        <NoteOfBook />
        <StarsBook />
      </div>

      {popup && (
        <>
          <div onClick={PopupMainImage} className="popup-background-al">
            <div className="popup-card">
              <img
                src="https://res.cloudinary.com/rasivyy/image/upload/v1668836770/alrani/book1_vv3bkg.jpg"
                alt="image"
              />
            </div>
          </div>
        </>
      )}

      {popup1 && (
        <>
          <div onClick={PopupImage1} className="popup-background-al">
            <div className="popup-card">
              <img
                src="https://res.cloudinary.com/rasivyy/image/upload/v1668836770/alrani/book1_vv3bkg.jpg"
                alt="image"
              />
            </div>
          </div>
        </>
      )}

      {popup2 && (
        <>
          <div onClick={PopupImage2} className="popup-background-al">
            <div className="popup-card">
              <img
                src="https://res.cloudinary.com/rasivyy/image/upload/v1668896912/alrani/book1-1_nmbwp3.jpg"
                alt="image"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
