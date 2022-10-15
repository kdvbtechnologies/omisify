import Auth from "../Auth";
import UpdateM10k from "./UpdateM10k";

export default function SecureM10k() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <UpdateM10k /> : <Auth />}</>;
}
