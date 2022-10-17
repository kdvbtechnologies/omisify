import Auth from "../Auth";
import Partner from "../Partenaire Omisify/Partner";

export default function AfterLogout() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <Partner /> : <Auth />}</>;
}
