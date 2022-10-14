import Auth from "./Auth";
import SignupSuccess from "./SignupSuccess";

export default function AfterSignup() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  return <>{userId ? <SignupSuccess /> : <Auth />}</>;
}
