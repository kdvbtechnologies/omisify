import AddSeptember from "./AddSeptember";
import UpdateSeptember from "./UpdateSeptember";
import Auth from "../Auth";

export default function PartnerUpdate() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  const userId = localStorage.getItem("https://omisify.com/userId");
  const shortname = localStorage.getItem("https://omisify.com/shortname");

  return (
    <div style={family}>
      {userId && shortname ? (
        <>{shortname ? <UpdateSeptember /> : <AddSeptember />}</>
      ) : (
        <Auth />
      )}
    </div>
  );
}
