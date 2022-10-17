import Auth from "../Auth";
import LogoutConfirm from "./LogoutConfirm";

export default function SecureLogoutConfirm() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <LogoutConfirm /> : <Auth />}</>;
}
