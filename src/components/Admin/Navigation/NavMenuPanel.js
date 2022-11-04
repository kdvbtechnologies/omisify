import { NavLink } from "react-router-dom";

export default function NavMenuPanel() {
  return (
    <>
      <p>Menu</p>
      <NavLink to="/update-point-panel">
        <li>Actualisation des points</li>
      </NavLink>

      <NavLink to="/ads-manager-panel">
        <li>Gestionnaire de publicité</li>
      </NavLink>
    </>
  );
}
