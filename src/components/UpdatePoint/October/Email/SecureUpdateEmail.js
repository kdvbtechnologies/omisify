import InitializeNewPointEmail from "./InitializeNewPointEmail";
import UpdateEmail from "./UpdateEmail";

export default function SecureUpdateEmail() {
  const getoldpointtemailoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtemailoct2022"
  );
  return (
    <>
      {getoldpointtemailoct2022 ? <UpdateEmail /> : <InitializeNewPointEmail />}
    </>
  );
}
