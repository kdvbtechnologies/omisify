import InitializeNewPointMWI from "./InitializeNewPointMWI";
import UpdateMWI from "./UpdateMWI";

export default function SecureUpdateMWI() {
  const getoldpointtmwioct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtmwioct2022"
  );
  return (
    <>{getoldpointtmwioct2022 ? <UpdateMWI /> : <InitializeNewPointMWI />}</>
  );
}
