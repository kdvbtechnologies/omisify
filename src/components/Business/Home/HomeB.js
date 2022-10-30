import { NavLink } from "react-router-dom";
import A from "./A";
import B from "./B";
import C from "./C";
import FooterB from "./Footer/FooterB";
import NavbarB from "./Navigation/NavbarB";

export default function HomeB() {
  const family = {
    fontFamily:
      ' "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif ',
  };

  return (
    <div style={family} className="homeb">
      <NavbarB />
      <A />
      <B />
      <C />
      <div className="see-more-b">
        <NavLink to="/prices">
          <button>Voir plus</button>
        </NavLink>
      </div>
      <FooterB />
    </div>
  );
}
