import { NavLink } from "react-router-dom";

export default function PopupToRight() {
  return (
    <>
      <div className="profil-app-popup-to-right-background">
        <div className="card">
          <NavLink style={{ textDecoration: "none" }} to="/">
            <p style={{ color: "black" }}>Historique</p>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/">
            <p style={{ color: "black", paddingTop: "20px" }}>Paramètres</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
