import AuthSignup from "../AuthSignup";
import NavbarBottomOmisify from "../Home Omisify/NavbarBottomOmisify";
//import PartnerNavMenu from "../Partenaire Omisify/PartnerNavMenu";

export default function SecureNavigation() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <NavbarBottomOmisify /> : <AuthSignup />}</>;
}
