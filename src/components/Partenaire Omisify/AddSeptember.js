import axios from "axios";
import { useEffect } from "react";

export default function AddSeptember() {
  const total = 0;

  const userId = localStorage.getItem("https://omisify.com/userId");
  useEffect(() => {
    axios
      .get(`https://famous-peplum-dove.cyclic.app/api/user/${userId}`)
      .then((res) => {
        console.log(res);
        const idtsept = res.data.idtsept2022;

        if (idtsept) {
          localStorage.setItem("https://omisify.com/idtsept", idtsept);
        }

        const idtseptt = localStorage.getItem("https://omisify.com/idtsept");

        if (idtseptt) {
          console.log(idtsept);
        } else {
          axios({
            method: "post",
            url: "https://famous-peplum-dove.cyclic.app/api/point/add/tseptember",
            data: {
              userId,
              total,
            },
          })
            .then((res) => {
              console.log(res.data.message);
              const idtsept = res.data.message;
              localStorage.setItem("https://omisify.com/idtsept", idtsept);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }, [userId]);

  function Next() {
    // update total id
    const idtsept2022 = localStorage.getItem("https://omisify.com/idtsept");
    axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
      data: {
        idtsept2022,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  }

  return (
    <>
      <button onClick={Next}>Continuer</button>
    </>
  );
}
