import axios from "axios";
import { useEffect } from "react";

export default function AddSeptember() {
  const total = 0;

  const userId = localStorage.getItem("https://omisify.com/userId");
  useEffect(() => {
    axios
      .get(`https://famous-peplum-dove.cyclic.app/api/user/${userId}`)
      .then((res) => {
        const idtsept = res.data.idtsept;
        const idtoct = res.data.idtoct;
        const idtnov = res.data.idtnov;
        if (idtnov || idtoct || idtnov) {
          localStorage.setItem("https://omisify.com/idtnov", idtnov);
          localStorage.setItem("https://omisify.com/idtsept", idtsept);
          localStorage.setItem("https://omisify.com/idtoct", idtoct);
        }
      })
      .catch((err) => console.log(err));
  }, [userId]);

  const idtsept = localStorage.getItem("https://omisify.com/idtsept");
  const idtoct = localStorage.getItem("https://omisify.com/idtoct");
  const idtnov = localStorage.getItem("https://omisify.com/idtnov");

  if (idtsept || idtoct || idtnov) {
    console.log(idtsept);
    console.log(idtoct);
    console.log(idtnov);
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

  return (
    <>
      <h1>Add September</h1>
    </>
  );
}
