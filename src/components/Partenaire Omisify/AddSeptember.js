import { useState } from "react";
import axios from "axios";

export default function AddSeptember() {
  const userId = "6344c8869e261cca2e3cde7b";
  const getidtsept = localStorage.getItem("https://omisify.com/idtsept");
  const [cSeptember, setCSeptember] = useState("");
  const [dSeptember, setDSeptember] = useState("");

  const ancien = 0;
  const total = parseInt(ancien) + parseInt(cSeptember);

  async function AddSeptember(e) {
    e.preventDefault();
    await axios({
      method: "post",
      url: "https://famous-peplum-dove.cyclic.app/api/point/add/september",
      data: {
        userId,
        cSeptember,
        dSeptember,
      },
    })
      .then((res) => {
        console.log(res);
        const idtsept = res.data.message;
        localStorage.setItem("https://omisify.com/idtsept", idtsept);
      })
      .catch((err) => console.log(err));

    await axios({
      method: "post",
      url: "https://famous-peplum-dove.cyclic.app/api/point/add/tseptember",
      data: {
        userId,
        total,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    await axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/user/update/${userId}`,
      data: {
        idtsept: getidtsept,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <p>Entrer le nombre des commentaires</p>
      <input
        type="text"
        placeholder="Nombre des commentaires"
        value={cSeptember}
        onChange={(e) => setCSeptember(e.target.value)}
        name="pcomments"
      />

      <p>Entrer la date d'aujourd'hui</p>
      <input
        type="text"
        placeholder="Date d'aujourd'hui"
        value={dSeptember}
        onChange={(e) => setDSeptember(e.target.value)}
        name="date"
      />
      <button onClick={AddSeptember}>valider</button>
    </>
  );
}
