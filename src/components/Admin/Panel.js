import axios from "axios";
import { useEffect, useState } from "react";

export default function Panel() {
  const [api, setApi] = useState([]);

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
  return (
    <>
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
          <p>{api.shortname}</p>
          <p>{api.name}</p>
          <p>{api.codewelcomementor}</p>
        </>
      ))}
    </>
  );
}
