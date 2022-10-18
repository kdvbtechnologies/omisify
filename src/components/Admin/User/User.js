import axios from "axios";
import { useEffect, useState } from "react";
import LoginNav from "../../Auth/LoginNav";
import PanelNav from "../Navigation/PanelNav";

export default function User() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/user/`)
        .then((res) => setApi(res.data))
        .catch((err) => console.log(err));
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
      <div className="panel-main">
        <div className="panel">
          <h3>Listes des Partenaires et leurs infos</h3>
          {api.map((api) => (
            <>
              <p>Noms de naissance : {api.name}</p>
              <p>Noms principal : {api.partnername}</p>
              <p>Noms court : {api.shortname}</p>
              <hr />
              <hr />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
