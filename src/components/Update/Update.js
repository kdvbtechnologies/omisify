import { useState } from "react";
import LoginNav from "../Auth/LoginNav";
import Loader from "../Partenaire Omisify/Loader";

export default function Update() {
  const [isLoading, setIsLoading] = useState(false);

  async function Download() {
    setIsLoading(true);
    window.location = "/update-success";
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <LoginNav />
      <div className="update">
        <div className="title">
          <p>Mise à jour</p>
        </div>

        <div className="a">
          <p>Cliquer sur Télécharger pour obtenir la dernière mise à jour</p>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <button onClick={Download}>Télécharger</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
