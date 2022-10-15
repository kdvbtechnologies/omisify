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
  //const idpointtcommentsept2022 = localStorage.getItem("https://omisify.com/idpointtcommentsept2022");

  return (
    <div style={family}>
      {userId ? (
        <>{shortname ? <UpdateSeptember /> : <AddSeptember />}</>
      ) : (
        <Auth />
      )}
    </div>
  );
}
