import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../Partenaire Omisify/Loader";

export default function AfterAccessCode() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/${userId}`)
        .then((res) => {
          console.log(res);
          const getaccesscode = res.data.accesscode;
          if (getaccesscode) {
            localStorage.setItem(
              "https://omisify.com/accesscode",
              getaccesscode
            );
            console.log("access-code reussie");
            // window.location = "/validate-access-code"
          } else {
            console.log("access-code error");
            // window.location = "/error-access-code"
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Arial, Helvetica, sans-serif',
  };

  return (
    <div style={family} className="after-access-code">
      <p>Patienter un instant..</p>
      {isLoading && <Loader />}
    </div>
  );
}
