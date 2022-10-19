import { NavLink } from "react-router-dom";

export default function InfosUpdateSuccess() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="welcome-bonus">
        <div className="title">
          <p>Modification(s) réussi !</p>
        </div>

        <NavLink to="/infos">
          <button>Terminé</button>
        </NavLink>
      </div>
    </div>
  );
}
