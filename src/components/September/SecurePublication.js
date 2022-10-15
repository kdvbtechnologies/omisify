import Auth from "../Auth";
import UpdatePublication from "./UpdatePublication";

export default function SecurePublication() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <UpdatePublication /> : <Auth />}</>;
}
