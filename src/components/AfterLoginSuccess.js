import Auth from "./Auth";
import Partner from "./Partenaire Omisify/Partner";

export default function AfterLoginSuccess() {
  const idtotal = localStorage.getItem("https://omisify.com/idtotal");
  return <>{idtotal ? <Partner /> : <Auth />}</>;
}
