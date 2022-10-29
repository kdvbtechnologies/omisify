import AccessCode from "./AccessCode";
import AccessCodeSuccess from "./AccessCodeSuccess";

export default function SecureAccessCode() {
  const accesscode = localStorage.getItem("https://omisify.com/accesscode");
  return <>{accesscode ? <AccessCodeSuccess /> : <AccessCode />}</>;
}
