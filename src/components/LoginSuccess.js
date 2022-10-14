import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Partenaire Omisify/Loader";

export default function LoginSuccess() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  //const shortname = localStorage.getItem("https://omisify.com/shortname");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get(`https://famous-peplum-dove.cyclic.app/api/user/${userId}`)
        .then((res) => {
          const name = res.data.name;
          const partnername = res.data.partnername;
          const shortname = res.data.shortname;
          const idtsept = res.data.idtsept;
          const idtoct = res.data.idtoct;
          const idtnov = res.data.idtnov;
          localStorage.setItem("https://omisify.com/name", name);
          localStorage.setItem("https://omisify.com/partnername", partnername);
          localStorage.setItem("https://omisify.com/shortname", shortname);

          if (idtnov || idtoct || idtnov) {
            localStorage.setItem("https://omisify.com/idtnov", idtnov);
            localStorage.setItem("https://omisify.com/idtsept", idtsept);
            localStorage.setItem("https://omisify.com/idtoct", idtoct);
          }
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [userId]);

  function Success() {
    window.location = "/partner";
  }

  return (
    <>
      <div className="login-success">
        <h1>Connexion réussie !</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="button">
              <button onClick={Success}>Continuer</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
