import axios from "axios";
import { useEffect, useState } from "react";
import LoginNav from "../Auth/LoginNav";

export default function Panel() {
  const [api, setApi] = useState([]);
  const welcomebonus = 100;

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/panel/`)
        .then((res) => {
          console.log(res);
          setApi(res.data);
        })
        .catch((err) => console.log(err));
    }
    get();
  }, []);

  const userId = `${api.userId}`;
  const codewelcomementor = `${api.codewelcomementor}`;

  async function Validate() {
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/update/${userId}`,
      data: {
        codewelcomementor,
        welcomebonus,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <LoginNav />
      {api.map((api) => (
        <>
          <p>Panneau d'administration</p>
          <p>User :</p>
          <p>Nombre de commentaires : {api.commentrecent}</p>
          <p>Nombre total de commentaires : {api.numbertcommentlife}</p>
          <p>Point total depuis le début : {api.pointtlife}</p>
          <p>Gain : {api.gaintlife}</p>
        </>
      ))}
      {api.map((api) => (
        <>
          <p>Code de Bienvenue</p>
          <p>Noms du demandeur : {api.partnername}</p>
          <p>Noms court du demandeur : {api.shortname}</p>
          <p>Code de Bienvenue du mentor : {api.codewelcomementor}</p>
          <button onClick={Validate}>Valider</button>
        </>
      ))}
    </>
  );
}
