import { useEffect } from "react";
import axios from "axios";

export default function LoginSuccess() {
  const total = 0;

  async function Success() {
    const userId = localStorage.getItem("https://omisify.com/userId");

    await axios({
      method: "post",
      url: "https://famous-peplum-dove.cyclic.app/api/point/add/tseptember",
      data: {
        userId,
        total,
      },
    })
      .then((res) => {
        console.log(res.data.message);
        const idtotal = res.data.message;
        localStorage.setItem("https://omisify.com/idtotal", idtotal);
      })
      .catch((err) => console.log(err));

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

    window.location = "/partner";
  }

  return (
    <>
      <h1>Connexion réussie !</h1>
      <button onClick={Success}>Continuer</button>
    </>
  );
}
