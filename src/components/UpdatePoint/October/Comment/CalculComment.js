import { useState } from "react";

export default function CalculComment() {
  const [newnumber, setNewnumber] = useState("");
  const oldtotal = 10;
  const result = parseInt(newnumber) + parseInt(oldtotal);
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
      <button>Sauvegarder</button>
    </>
  );
}
