import axios from "axios";
import { useEffect, useState } from "react";
import LoginNav from "../../../../Auth/LoginNav";
import Loader from "../../../../Partenaire Omisify/Loader";
import PanelNav from "../../../Navigation/PanelNav";

export default function PanelmessageOctober() {
  const [isLoading, setIsLoading] = useState(true);
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/panel/october/message/`)
        .then((res) => {
          console.log(res);
          setApi(res.data);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    }
    get();
  }, []);

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
          {api.map((api) => (
            <>
              <h3>Nombres de messages: {api.messagerecent}</h3>
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
