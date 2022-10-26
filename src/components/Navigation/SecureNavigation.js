import AuthSignup from "../AuthSignup";
import PartnerNavMenu from "../Partenaire Omisify/PartnerNavMenu";

export default function SecureNavigation() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <PartnerNavMenu /> : <AuthSignup />}</>;
}
