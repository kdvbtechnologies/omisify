import Auth from "../Auth";
import UpdateComment from "./UpdateComment";

export default function SecureComment() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <UpdateComment /> : <Auth />}</>;
}
