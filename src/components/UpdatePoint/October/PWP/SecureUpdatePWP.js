import InitializeNewPointPWP from "./InitializeNewPointPWP";
import UpdatePWP from "./UpdatePWP";

export default function SecureUpdatePWP() {
  const getoldpointtpwpoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpwpoct2022"
  );
  return (
    <>{getoldpointtpwpoct2022 ? <UpdatePWP /> : <InitializeNewPointPWP />}</>
  );
}
