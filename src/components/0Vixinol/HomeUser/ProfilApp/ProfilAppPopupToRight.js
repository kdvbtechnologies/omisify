import { NavLink } from "react-router-dom";

export default function ProfilAppPopupToRight() {
  return (
    <>
      <div className="profil-app-popup-to-right-background">
        <div className="card">
          <NavLink style={{ textDecoration: "none" }} to="/">
            <p style={{ color: "black" }}>Ajouter aux favoris</p>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/">
            <p style={{ color: "black", paddingTop: "20px" }}>
              Signaler cette application
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
}
