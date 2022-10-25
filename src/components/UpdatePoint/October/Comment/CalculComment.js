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
          const getpointtcommentlife = res.data.pointtcommentlife;
          if (getpointtcommentlife) {
            localStorage.setItem(
              "https://omisify.com/pointtcommentlife",
              getpointtcommentlife
            );
          }

          const numbercommententeradmin = res.data.numbercommententeradmin;
          if (numbercommententeradmin) {
            localStorage.setItem(
              "https://omisify.com/numbercommententeradmin",
              numbercommententeradmin
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
    localStorage.setItem("https://omisify.com/newnumber", newnumber);

    localStorage.setItem(
      "https://omisify.com/resultpointtcommentlife",
      calculpointtcommentlife
    );
    console.log("resultat sauvegarder dans le localstorage");
  }

  //const userId = localStorage.getItem("https://omisify.com/userId");
  const pointtcommentlife = localStorage.getItem(
    "https://omisify.com/resultpointtcommentlife"
  );

  async function Send() {
    const numbercommententeradmin = localStorage.getItem(
      "https://omisify.com/numbercommententeradmin"
    );

    let getnewnumber = localStorage.getItem("https://omisify.com/newnumber");
    console.log(getnewnumber);

    if (getnewnumber === numbercommententeradmin) {
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updatecomment/634c8ab0f59d4e9994f83884`,
        data: {
          pointtcommentlife,
        },
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      console.log("Validation reussie !");
    } else {
      //window.location = "/partner"
      console.log("Validation impossoble !");
    }
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
