import Auth from "../Auth";
import UpdateMessage from "./UpdateMessage";

export default function SecureMessage() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <UpdateMessage /> : <Auth />}</>;
}
