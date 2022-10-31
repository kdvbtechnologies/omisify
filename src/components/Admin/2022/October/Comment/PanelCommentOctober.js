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

  const userIdd = localStorage.getItem("https://omisify.com/userId");

  const matches =
    userIdd ===
    api.filter(function (value) {
      return value >= 0;
    });

  console.log("matches : ", matches);

  const userId = "634c8ab0f59d4e9994f83884";

  const output = api.map((x) => x.userId === userId);
  console.log(output);

  if (output) {
    const data = api.filter(function (value) {
      return (value = true);
    });
    console.log("output true : ", data);
  }

  /*
  {api.map((api) =>
    userId(api.userId) ? (
      <>
        <p>{api.userId}</p>
      </>
    ) : (
      <>
        <p>hello</p>
      </>
    )
  )}
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
          {output && <p>{output}</p>}
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
