import { useState, useEffect } from "react";
import axios from "axios";

export default function CalculComment() {
  useEffect(() => {
    async function get() {
      await axios
        .get(
          "https://famous-peplum-dove.cyclic.app/api/user/634c8ab0f59d4e9994f83884"
        )
        .then((res) => {
          console.log(res);
          const pointtcommentlife = res.data.pointtcommentlife;
          if (pointtcommentlife) {
            localStorage.setItem(
              "https://omisify.com/pointtcommentlife",
              pointtcommentlife
            );
          }
        })
        .catch((err) => console.log(err));
    }
    get();
  }, []);

  const [newnumber, setNewnumber] = useState("");
  const pointtcommentlife = localStorage.getItem(
    "https://omisify.com/pointtcommentlife"
  );
  const result = parseInt(newnumber) + parseInt(pointtcommentlife);

  function Save() {
    localStorage.setItem("https://omisify.com/resultsave", result);
    console.log("resultat sauvegarder dans le localstorage");
  }

  const userId = localStorage.getItem("https://omisify.com/userId");

  async function Send() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
      data: {
        pointtcommentlife,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <p>Ancien total des commentaires : {pointtcommentlife}</p>
      <p>Opération</p>
      <p>
        {newnumber} + {pointtcommentlife} = {result}
      </p>
      <p>Nouveau nombre</p>
      <input
        type="text"
        value={newnumber}
        onChange={(e) => setNewnumber(e.target.value)}
        name="newnumber"
      />
      <button onClick={Save}>Sauvegarder</button>
      <p>
        Cliquer sur le bouton Envoyer pour envoyer les résultats des
        commentaires
      </p>
      <button onClick={Send}>Envoyer</button>
    </>
  );
}
