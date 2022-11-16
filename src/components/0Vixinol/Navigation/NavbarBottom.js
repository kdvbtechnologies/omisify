import { useState } from "react";

export default function NavbarBottomVI() {
  const [isActiveRecommended, setIsActiveRecommended] = useState(true);
  const [isActiveCategorie, setIsActiveCategorie] = useState(false);
  const [isActiveProfil, setIsActiveProfil] = useState(false);

  function ActiveRecommended() {
    if (!isActiveRecommended) {
      setIsActiveRecommended(true);
      setIsActiveCategorie(false);
      setIsActiveProfil(false);
    }
  }

  function ActiveCategorie() {
    if (!isActiveCategorie) {
      setIsActiveRecommended(false);
      setIsActiveCategorie(true);
      setIsActiveProfil(false);
    }
  }

  function ActiveProfil() {
    if (!isActiveProfil) {
      setIsActiveRecommended(false);
      setIsActiveCategorie(false);
      setIsActiveProfil(true);
    }
  }

  return (
    <>
      <div className="navbar-bottom-vi">
        <div className="a">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28px"
            height="auto"
            viewBox="0 0 24 24"
            onClick={ActiveRecommended}
            className={
              isActiveRecommended ? "active-class-vi" : "no-active-class-vi"
            }
          >
            <g fillRule="evenodd" strokeWidth="1">
              <g fillRule="nonzero">
                <path d="M12 2a8 8 0 014.953 14.283l.049-.039L17 22.245a.75.75 0 01-1.069.68l-3.931-1.843-3.93 1.842a.75.75 0 01-1.069-.679l-.001-6A8 8 0 0112 2zm3.501 15.195l.04-.02A7.967 7.967 0 0112 18a7.974 7.974 0 01-3.168-.652l-.33-.151v3.868l3.18-1.49a.75.75 0 01.637 0l3.182 1.49v-3.87zM12 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm.229 3.142l.912 1.853 2.044.295c.21.03.293.288.142.435l-1.479 1.44.35 2.036a.255.255 0 01-.37.269L12 12.008l-1.827.962a.255.255 0 01-.37-.269l.35-2.035-1.48-1.44a.255.255 0 01.142-.436l2.044-.295.912-1.853a.255.255 0 01.458 0z"></path>
              </g>
            </g>
          </svg>

          <li
            onClick={ActiveRecommended}
            style={{ color: isActiveRecommended ? "white" : "#fed5b3" }}
          >
            Recommandé
          </li>
        </div>

        <div className="a">
          <svg
            onClick={ActiveCategorie}
            className={
              isActiveCategorie ? "active-class-vi" : "no-active-class-vi"
            }
            viewBox="0 0 20 20"
            width="28px"
          >
            <path d="M16.803,18.615h-4.535c-1,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.535C18.616,17.803,17.804,18.615,16.803,18.615zM17.71,12.268c0-0.502-0.405-0.906-0.907-0.906h-4.535c-0.501,0-0.906,0.404-0.906,0.906v4.535c0,0.502,0.405,0.906,0.906,0.906h4.535c0.502,0,0.907-0.404,0.907-0.906V12.268z M16.803,9.546h-4.535c-1,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.534C18.616,8.734,17.804,9.546,16.803,9.546zM17.71,3.198c0-0.501-0.405-0.907-0.907-0.907h-4.535c-0.501,0-0.906,0.406-0.906,0.907v4.534c0,0.501,0.405,0.908,0.906,0.908h4.535c0.502,0,0.907-0.406,0.907-0.908V3.198z M7.733,18.615H3.198c-1.002,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.535C9.547,17.803,8.735,18.615,7.733,18.615zM8.64,12.268c0-0.502-0.406-0.906-0.907-0.906H3.198c-0.501,0-0.907,0.404-0.907,0.906v4.535c0,0.502,0.406,0.906,0.907,0.906h4.535c0.501,0,0.907-0.404,0.907-0.906V12.268z M7.733,9.546H3.198c-1.002,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.534C9.547,8.734,8.735,9.546,7.733,9.546z M8.64,3.198c0-0.501-0.406-0.907-0.907-0.907H3.198c-0.501,0-0.907,0.406-0.907,0.907v4.534c0,0.501,0.406,0.908,0.907,0.908h4.535c0.501,0,0.907-0.406,0.907-0.908V3.198z"></path>
          </svg>

          <li
            onClick={ActiveCategorie}
            style={{ color: isActiveCategorie ? "white" : "#fed5b3" }}
          >
            Catégories
          </li>
        </div>

        <div className="a">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            width="28px"
            onClick={ActiveProfil}
            className={
              isActiveProfil ? "active-class-vi" : "no-active-class-vi"
            }
            enableBackground="new 0 0 402.161 402.161"
            version="1.1"
            viewBox="0 0 402.161 402.161"
            xmlSpace="preserve"
          >
            <path d="M201.08 49.778c-38.794 0-70.355 31.561-70.355 70.355 0 18.828 7.425 40.193 19.862 57.151 14.067 19.181 32 29.745 50.493 29.745 18.494 0 36.426-10.563 50.494-29.745 12.437-16.958 19.862-38.323 19.862-57.151 0-38.794-31.562-70.355-70.356-70.355zm0 142.251c-13.396 0-27.391-8.607-38.397-23.616-10.46-14.262-16.958-32.762-16.958-48.28 0-30.523 24.832-55.355 55.355-55.355s55.355 24.832 55.355 55.355c.001 31.691-26.063 71.896-55.355 71.896z"></path>
            <path d="M201.08 0C109.387 0 34.788 74.598 34.788 166.292c0 91.693 74.598 166.292 166.292 166.292s166.292-74.598 166.292-166.292S292.773 0 201.08 0zm0 317.584c-30.099-.001-58.171-8.839-81.763-24.052.82-22.969 11.218-44.503 28.824-59.454 6.996-5.941 17.212-6.59 25.422-1.615 8.868 5.374 18.127 8.099 27.52 8.099 9.391 0 18.647-2.724 27.511-8.095 8.201-4.97 18.39-4.345 25.353 1.555a81.795 81.795 0 0128.895 59.512c-23.592 15.212-51.664 24.05-81.762 24.05zm95.901-34.366a96.8 96.8 0 00-33.337-60.64c-11.89-10.074-29.1-11.256-42.824-2.939-12.974 7.861-26.506 7.86-39.483-.004-13.74-8.327-30.981-7.116-42.906 3.01-18.31 15.549-30.035 37.115-33.265 60.563-33.789-27.77-55.378-69.868-55.378-116.915C49.788 82.869 117.658 15 201.08 15c83.423 0 151.292 67.869 151.292 151.292 0 47.053-21.594 89.156-55.391 116.926zM302.806 352.372H99.354a7.5 7.5 0 000 15h203.452a7.5 7.5 0 000-15zM302.806 387.161H99.354a7.5 7.5 0 000 15h203.452a7.5 7.5 0 000-15z"></path>
          </svg>
          <li
            onClick={ActiveProfil}
            style={{ color: isActiveProfil ? "white" : "#fed5b3" }}
          >
            Profil
          </li>
        </div>
      </div>
    </>
  );
}
