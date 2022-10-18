import Auth from "./Auth";
import Partner from "./Partenaire Omisify/Partner";

export default function AfterLoginSuccess() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  const name = localStorage.getItem("https://omisify.com/name");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  return (
    <>{userId && shortname && partnername && name ? <Partner /> : <Auth />}</>
  );
}
