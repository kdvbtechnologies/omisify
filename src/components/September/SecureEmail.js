import Auth from "../Auth";
import UpdateEmail from "./UpdateEmail";

export default function SecureEmail() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <UpdateEmail /> : <Auth />}</>;
}
