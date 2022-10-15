import Auth from "../Auth";
import UpdateMWI from "./UpdateMWI";

export default function SecureMWI() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <UpdateMWI /> : <Auth />}</>;
}
