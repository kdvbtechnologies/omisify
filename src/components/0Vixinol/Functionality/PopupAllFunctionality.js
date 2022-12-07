import { NavLink } from "react-router-dom";

export default function PopupAllFunctionality() {
  return (
    <>
      <div className="popup-all-functionality-opacity">
        <div className="align">
          <div className="card">
            <div className="details">
              <p style={{ paddingRight: "5px" }}>Pour bénéficier de toutes</p>

              <p style={{ paddingRight: "5px" }}>les fonctionnalités</p>
              <p style={{ paddingRight: "5px" }}>de Vixinol Store,</p>
              <p style={{ paddingRight: "5px" }}>connectez-vous</p>
              <p style={{ paddingRight: "5px" }}>à votre</p>

              <NavLink style={{ textDecoration: "none" }} to="/">
                <p style={{ color: "aqua", paddingRight: "5px" }}>
                  compte Vixinol Store
                </p>
              </NavLink>
              <p style={{ paddingRight: "5px" }}>ou</p>

              <p>Inscrivez-vous gratuitement !</p>
            </div>
            {/* details */}

            <div className="display">
              <div className="a">
                <NavLink to="/">
                  <button>S'inscrire gratuitement</button>
                </NavLink>
              </div>

              <div className="b">
                <NavLink to="/">
                  <button>Se connecter sur Vixinol Store</button>
                </NavLink>
              </div>
            </div>
            {/* display */}
          </div>
          {/* card */}
        </div>
        {/* align */}
      </div>
      {/*  */}
    </>
  );
}
