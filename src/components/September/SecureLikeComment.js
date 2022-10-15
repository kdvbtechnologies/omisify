import Auth from "../Auth";
import UpdateLikeComment from "./UpdateLikeComment";

export default function SecureLikeComment() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <UpdateLikeComment /> : <Auth />}</>;
}
