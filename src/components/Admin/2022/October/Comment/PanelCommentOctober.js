import axios from "axios";
import { useEffect, useState } from "react";
import LoginNav from "../../../../Auth/LoginNav";
import Loader from "../../../../Partenaire Omisify/Loader";
import PanelNav from "../../../Navigation/PanelNav";

export default function PanelCommentOctober() {
  const [isLoading, setIsLoading] = useState(true);
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/panel/october/comment/`)
        .then((res) => {
          console.log(res);
          setApi(res.data);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, []);

  //const userId = localStorage.getItem("https://omisify.com/userId");

  //const userId = "634c8ab0f59d4e9994f83884";
  const userId = "634af1b7b994639ed35b178e";

  const byday = "2022-10-20T17:36:48.500Z";

  const data = api.filter(
    (name) => name.userId === userId && name.createdAt.includes(byday)
  );
  console.log(data);

  /*
// ici c'est par jour et tout les resultats du jour s'affichera 
   //pour tout les utilisateur
  const byday = "2022-10-20T17:36:48.500Z";

   const data = api.filter((name) => name.createdAt.includes(byday));
  console.log(data);


  // pour un seul utilisateur
  const byday = "2022-10-20T17:36:48.500Z";

   const data = api.filter((name) => name.userId === userId && name.createdAt.includes(byday));
  console.log(data);
*/

  /*

  // ici c'est pour le mois et par jour
   // pour tout les utilisateur
  const date = "2022-10";

  const data = api.filter((name) => name.createdAt.includes(date));
  console.log(data);


  // pour un seul utilisateur
   const date = "2022-10";

  const data = api.filter((name) => name.userId === userId && name.createdAt.includes(date));
  console.log(data);
*/
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <LoginNav />
      <PanelNav />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {api
            .filter((user) => user.userId === userId)
            .map((name) => (
              <>
                <h3>{name.name}</h3>
                <p>{name.time}</p>
              </>
            ))}

          <hr />

          {api.map((api) => (
            <>
              <h3>Nombres de commentaires: {api.commentrecent}</h3>
              <p>Noms Principal: {api.partnername}</p>
              <p>Heure: {api.time}</p>
              <p>Date: {api.date}</p>
            </>
          ))}
        </>
      )}
    </div>
  );
}
