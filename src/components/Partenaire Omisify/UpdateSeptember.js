import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

export default function UpdateSeptember() {
  const userId = localStorage.getItem("https://omisify.com/userId");
  const [cSeptember, setCSeptember] = useState("");
  const [dSeptember, setDSeptember] = useState("");
  const [tsept, settsept] = useState([]);
  const idtsept = localStorage.getItem("https://omisify.com/idtsept");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get(
          `https://famous-peplum-dove.cyclic.app/api/point/all/tseptember/${idtsept}`
        )
        .then((res) => settsept(res.data))
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, [idtsept]);

  const ancien = `${tsept.total}`;
  const total = parseInt(ancien) + parseInt(cSeptember);

  // add point
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

    // update total
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
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}
