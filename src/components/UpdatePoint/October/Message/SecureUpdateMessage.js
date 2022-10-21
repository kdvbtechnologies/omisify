import InitializeNewPointMessage from "./InitializeNewPointMessage";
import UpdateMessage from "./UpdateMessage";

export default function SecureUpdateMessage() {
  const getoldpointtmessageoct2022 = localStorage.getItem(
    "https://omisify.com/getoldpointtmessageoct2022"
  );
  return (
    <>
      {getoldpointtmessageoct2022 ? (
        <UpdateMessage />
      ) : (
        <InitializeNewPointMessage />
      )}
    </>
  );
}
