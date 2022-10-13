import { useEffect } from "react";
import axios from "axios";

export default function LoginSuccess() {
  const userId = localStorage.getItem("https://omisify.com/userId");

  useEffect(() => {
    axios
      .get(`https://famous-peplum-dove.cyclic.app/api/user/${userId}`)
      .then((res) => {
        const name = res.data.name;
        const partnername = res.data.partnername;
        const shortname = res.data.shortname;
        localStorage.setItem("https://omisify.com/name", name);
        localStorage.setItem("https://omisify.com/partnername", partnername);
        localStorage.setItem("https://omisify.com/shortname", shortname);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  /*
  useEffect(() => {
    axios
      .get(`https://famous-peplum-dove.cyclic.app/api/point/${userId}`)
      .then((res) => {
        //const tsept = res.data.tsept;
        //localStorage.setItem("https://omisify.com/tsept", tsept);
      })
      .catch((err) => console.log(err));
  }, [userId]);*/

  function Success() {
    window.location = "/partner";
  }

  return (
    <>
      <h1>Connexion réussie !</h1>
      <button onClick={Success}>Continuer</button>
    </>
  );
}
