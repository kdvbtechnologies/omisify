import A from "./A";
import B from "./B";
import C from "./C";
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
    </div>
  );
}
