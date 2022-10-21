import InitializeNewPointLikesPublication from "./InitializeNewPointLikesPublication";
import UpdateLikesPublication from "./UpdateLikesPublication";

export default function SecureUpdateLikesPublication() {
  const getoldpointtlikespublicationoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtlikespublicationoct2022"
  );
  return (
    <>
      {getoldpointtlikespublicationoct2022 ? (
        <UpdateLikesPublication />
      ) : (
        <InitializeNewPointLikesPublication />
      )}
    </>
  );
}
