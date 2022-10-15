import Auth from "../Auth";
import UpdatePWI from "./UpdatePWI";

export default function SecurePWI() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <UpdatePWI /> : <Auth />}</>;
}
