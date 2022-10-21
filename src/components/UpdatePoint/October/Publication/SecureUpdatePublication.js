import InitializeNewPointPublication from "./InitializeNewPointPublication";
import UpdatePublication from "./UpdatePublication";

export default function SecureUpdatePublication() {
  const getoldpointtpublicationoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtpublicationoct2022"
  );
  return (
    <>
      {getoldpointtpublicationoct2022 ? (
        <UpdatePublication />
      ) : (
        <InitializeNewPointPublication />
      )}
    </>
  );
}
