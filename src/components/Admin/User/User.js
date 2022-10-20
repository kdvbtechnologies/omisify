import axios from "axios";
import { useEffect, useState } from "react";
import LoginNav from "../../Auth/LoginNav";
import Loader from "../../Partenaire Omisify/Loader";
import PanelNav from "../Navigation/PanelNav";

export default function User() {
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/`)
        .then((res) => setApi(res.data))
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
          <div className="panel-main">
            <div className="panel">
              <h3>Listes des Partenaires et leurs infos</h3>
              {api.map((api) => (
                <>
                  <p>Noms de naissance : {api.userId}</p>
                  <p>Noms de naissance : {api.name}</p>
                  <p>Noms principal : {api.partnername}</p>
                  <p>Noms court : {api.shortname}</p>
                  <p>Bonus de Bienvenue recu : {api.welcomebonus} point(s)</p>

                  <hr />
                  <hr />
                </>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
