import { useState, useEffect } from "react";
import axios from "axios";

export default function CalculComment() {
  useEffect(() => {
    async function get() {
      await axios
        .get(
          "https://famous-peplum-dove.cyclic.app/api/user/63485c34ed397bb2772262c3"
        )
        .then((res) => {
          console.log(res);
          const getpointtcommentlife = res.data.pointtcommentlife;
          if (getpointtcommentlife) {
            localStorage.setItem(
              "https://omisify.com/pointtcommentlife",
              getpointtcommentlife
            );
          }
        })
        .catch((err) => console.log(err));
    }
    get();
  }, []);

  const [newnumber, setNewnumber] = useState("");
  const oldpointtcommentlife = localStorage.getItem(
    "https://omisify.com/pointtcommentlife"
  );

  const calculpointtcommentlife =
    (parseInt(newnumber) + parseInt(oldpointtcommentlife)) * 0.01;
  console.log(calculpointtcommentlife);

  function Save() {
    localStorage.setItem(
      "https://omisify.com/resultpointtcommentlife",
      calculpointtcommentlife
    );
    console.log("resultat sauvegarder dans le localstorage");
  }

  const userId = localStorage.getItem("https://omisify.com/userId");
  const pointtcommentlife = localStorage.getItem(
    "https://omisify.com/resultpointtcommentlife"
  );

  async function Send() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/${userId}`,
      data: {
        pointtcommentlife,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <p>Ancien total des commentaires : {oldpointtcommentlife}</p>
      <p>Opération</p>
      <p>
        {newnumber} + {oldpointtcommentlife} = {calculpointtcommentlife}
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
