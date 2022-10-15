import Auth from "../Auth";
import UpdateLike from "./UpdateLike";

export default function SecureLike() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <UpdateLike /> : <Auth />}</>;
}
