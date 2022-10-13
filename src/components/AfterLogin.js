import Auth from "./Auth";
import LoginSuccess from "./LoginSuccess";

export default function AfterLogin() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  return <>{userId ? <LoginSuccess /> : <Auth />}</>;
}
