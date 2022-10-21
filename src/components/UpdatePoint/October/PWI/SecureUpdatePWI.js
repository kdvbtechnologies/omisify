import InitializeNewPointPWI from "./InitializeNewPointPWI";
import UpdatePWI from "./UpdatePWI";

export default function SecureUpdatePWI() {
  const getoldpointtpwioct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpwioct2022"
  );

  return (
    <>{getoldpointtpwioct2022 ? <UpdatePWI /> : <InitializeNewPointPWI />}</>
  );
}
