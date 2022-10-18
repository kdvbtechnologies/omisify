import { useState } from "react";
import Loader from "../Partenaire Omisify/Loader";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const navigate = useNavigate();
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
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>

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
