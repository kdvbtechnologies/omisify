import Auth from "../Auth";
import NewPassword from "./NewPassword";

export default function SecureNewPassword() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  return <>{userId ? <NewPassword /> : <Auth />}</>;
}
