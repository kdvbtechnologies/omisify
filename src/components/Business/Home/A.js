import { NavLink } from "react-router-dom";

export default function A() {
  return (
    <div className="a">
      <p>
        Omisify Business est une plateforme qui vends de la Publicité. Augmentez
        vos ventes et vos bénéfices en utilisant la Publicité des Contacts de
        Confiance d'Omisify Business
      </p>
      <NavLink to="/signup">
        <button>Essayer gratuitement la Publicité</button>
      </NavLink>
    </div>
  );
}
