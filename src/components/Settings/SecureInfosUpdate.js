import Auth from "../Auth";
import InfosUpdate from "./InfosUpdate";

export default function SecureInfosUpdate() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <InfosUpdate /> : <Auth />}</>;
}
