import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PartnerUpdate() {
  const navigate = useNavigate();
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  const userId = "6344c8869e261cca2e3cde7b";

  // september
  const [cSeptember, setCSeptember] = useState("");
  const [dSeptember, setDSeptember] = useState("");
  const [tsept, settsept] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://famous-peplum-dove.cyclic.app/api/point/all/tseptember/634675a1e6427358b4b58e64`
      )
      .then((res) => settsept(res.data))
      .catch((err) => console.log(err));
  }, []);

  const ancien = `${tsept.total}`;
  localStorage.setItem("total", ancien);
  localStorage.setItem("cSeptember", cSeptember);
  const getStoragecSeptember = `${localStorage.getItem("cSeptember")}`;
  const getStorageTotalSept = `${localStorage.getItem("total")}`;

  const total = getStorageTotalSept + getStoragecSeptember;
  console.log(total);

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
      .then((res) => console.log(res))
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
  }

  // update total sept
  async function UpdateSeptember(e) {
    e.preventDefault();
    await axios({
      method: "post",
      url: "https://famous-peplum-dove.cyclic.app/api/point/add/september/",
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
      url: "https://famous-peplum-dove.cyclic.app/api/point/update/tseptember/634675a1e6427358b4b58e64",
      data: {
        userId,
        total,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  // october
  const [cOctober, setCOctober] = useState("");
  const [dOctober, setDOctober] = useState("");

  async function AddOctober(e) {
    e.preventDefault();
    await axios({
      method: "post",
      url: "https://famous-peplum-dove.cyclic.app/api/point/add/october",
      data: {
        userId,
        cOctober,
        dOctober,
        total,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="stats-big-title">
        <p>Actualiser mes points</p>
      </div>
      <p>
        Entrer la date à laquelle vous avez faite la publication ou envoyer le
        message
      </p>
      <input type="text" placeholder="Date" />
      <p>Entrer le nombre des messages</p>
      <input type="text" placeholder="Nombre des messages" />

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
      <button onClick={UpdateSeptember}>Update</button>
      <p>{total} =</p>
      <p>
        {getStorageTotalSept} + {getStoragecSeptember}
      </p>

      <button onClick={total}>calculer</button>

      <p>partie Octobre</p>
      <p>Entrer le nombre des commentaires</p>
      <input
        type="text"
        placeholder="Nombre des commentaires"
        value={cOctober}
        onChange={(e) => setCOctober(e.target.value)}
        name="pcomments"
      />

      <p>Entrer la date d'aujourd'hui</p>
      <input
        type="text"
        placeholder="Date d'aujourd'hui"
        value={dOctober}
        onChange={(e) => setDOctober(e.target.value)}
        name="date"
      />
      <button onClick={AddOctober}>valider</button>
    </div>
  );
}
