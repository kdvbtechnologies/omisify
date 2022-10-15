import Auth from "../Auth";
import UpdateLikePublication from "./UpdateLikePublication";

export default function SecureLikePublication() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <UpdateLikePublication /> : <Auth />}</>;
}
