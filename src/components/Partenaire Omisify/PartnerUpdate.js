import AddSeptember from "./AddSeptember";
import UpdateSeptember from "./UpdateSeptember";
import Auth from "../Auth";

export default function PartnerUpdate() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  const idtsept = localStorage.getItem("https://omisify.com/idtsept");
  const userId = localStorage.getItem("https://omisify.com/userId");

  return (
    <div style={family}>
      {userId ? (
        <>{idtsept ? <UpdateSeptember /> : <AddSeptember />}</>
      ) : (
        <Auth />
      )}
    </div>
  );
}
