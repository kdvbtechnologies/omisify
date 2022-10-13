import Auth from "./Auth";
import Partner from "./Partenaire Omisify/Partner";

export default function AfterLoginSuccess() {
  const userId = localStorage.getItem("https://omisify.com/idtotal");
  return <>{userId ? <Partner /> : <Auth />}</>;
}
