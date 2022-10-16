import ResetPassword from "./ResetPassword";
import ResetSuccess from "./ResetSuccess";

export default function AfterNewPassword() {
  const name = localStorage.getItem("https://omisify.com/name");
  return <>{name ? <ResetSuccess /> : <ResetPassword />}</>;
}
