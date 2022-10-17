import Auth from "../Auth";
import UpdateSuccess from "./UpdateSuccess";

export default function SecureUpdate() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <UpdateSuccess /> : <Auth />}</>;
}
