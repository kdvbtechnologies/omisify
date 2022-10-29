import axios from "axios";
import { useState } from "react";
import Loader from "../Partenaire Omisify/Loader";

export default function Dev() {
  const [codedev, setCodedev] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [success, setSuccess] = useState("");

  async function Add(e) {
    setIsLoading(true);
    e.preventDefault();

    const save = localStorage.setItem("https://omisify.com/codedev", codedev);
    console.log(save);

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
      data: {
        codedev,
      },
    })
      .then((res) => {
        console.log(res);

        const getcodedev = localStorage.getItem("https://omisify.com/codedev");

        const name = res.data.name;
        if (name) {
          setSuccess(`Le code d'accès ${getcodedev} a été ajouté à ${name}`);
        }
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  }

  return (
    <>
      <h3>
        Ajouter le code pour accéder au fonctionnalité en cours de développement
      </h3>
      <br />
      <p>Entrer le userId</p>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <br />
      <p>Entrer le code d'accès</p>
      <br />
      <input
        type="number"
        placeholder="Code d'accès"
        value={codedev}
        onChange={(e) => setCodedev(e.target.value)}
      />
      <br />
      <p style={{ color: "blue" }}>{success}</p>
      <br />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button onClick={Add}>Ajouter</button>
        </>
      )}
    </>
  );
}
