import { useEffect, useState } from "react";
import axios from "axios";

export default function UpdateSeptember() {
  const userId = "6344c8869e261cca2e3cde7b";
  const [cSeptember, setCSeptember] = useState("");
  const [dSeptember, setDSeptember] = useState("");
  const [tsept, settsept] = useState([]);
  const idtsept = "6347554eaea9fa10a5931d7a";

  useEffect(() => {
    axios
      .get(
        `https://famous-peplum-dove.cyclic.app/api/point/all/tseptember/${idtsept}`
      )
      .then((res) => settsept(res.data))
      .catch((err) => console.log(err));
  }, []);

  const ancien = `${tsept.total}`;
  const total = parseInt(ancien) + parseInt(cSeptember);

  // update total sept
  async function UpdateSeptember(e) {
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
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    await axios({
      method: "put",
      url: `https://famous-peplum-dove.cyclic.app/api/point/update/tseptember/${idtsept}`,
      data: {
        userId,
        total,
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
      <button onClick={UpdateSeptember}>Update</button>
    </>
  );
}
