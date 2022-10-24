import Home from "../Home/Home";
import AfterLoginSuccess from "../AfterLoginSuccess";

export default function SecureLogin() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const partnername = localStorage.getItem("https://omisify.com/partnername");
  const shortname = localStorage.getItem("https://omisify.com/shortname");

  return (
    <>{userId && shortname && partnername ? <AfterLoginSuccess /> : <Home />}</>
  );
}
