import Auth from "./Auth";
import LoginSuccess from "./LoginSuccess";

export default function AfterLogin() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");
  return <>{userId && shortname ? <LoginSuccess /> : <Auth />}</>;
}
