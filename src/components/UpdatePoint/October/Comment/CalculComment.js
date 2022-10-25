import { useState, useEffect } from "react";
import axios from "axios";

export default function CalculComment() {
  const [newnumber, setNewnumber] = useState("");
  const oldtotal = 10;
  const result = parseInt(newnumber) + parseInt(oldtotal);

  useEffect(() => {
    async function get() {
      await axios
        .get(
          "https://famous-peplum-dove.cyclic.app/api/user/634c8ab0f59d4e9994f83884"
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    get();
  }, []);

  function Save() {
    localStorage.setItem("https://omisify.com/resultsave", result);
    console.log("resultat sauvegarder dans le localstorage");
  }
  return (
    <>
      <p>Ancien total des commentaires : {oldtotal}</p>
      <p>Opération</p>
      <p>
        {newnumber} + {oldtotal} = {result}
      </p>
      <p>Nouveau nombre</p>
      <input
        type="text"
        value={newnumber}
        onChange={(e) => setNewnumber(e.target.value)}
        name="newnumber"
      />
      <button onClick={Save}>Sauvegarder</button>
    </>
  );
}
