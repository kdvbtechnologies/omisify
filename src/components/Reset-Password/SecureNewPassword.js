import Auth from "../Auth";
import ResetPassword from "./ResetPassword";

export default function SecureNewPassword() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  return <>{userId ? <ResetPassword /> : <Auth />}</>;
}
