import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Partenaire Omisify/Loader";

export default function WelcomeBonusPanel() {
  const navigate = useNavigate();
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function get() {
      await axios
        .get(`${process.env.REACT_APP_OMISIFY_API}/api/panel/`)
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
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="welcome-bonus-panel">
        <div className="title">
          <p>Demande du Bonus de Bienvenue</p>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {api.map((api) => (
              <>
                <div className="shrink">
                  <div className="a">
                    <div className="name">
                      <p>{api.partnername}</p>
                    </div>

                    <p>Noms court : {api.shortname}</p>
                    <p>Code BM : {api.codewelcomementor}</p>
                    <p>Bonus EP : {api.bestpartnerbonus}</p>

                    <div className="b">
                      <p>Demande d'Affiches</p>
                      <p>PA : {api.askposter}</p>
                    </div>

                    <p>userId : {api.userId}</p>
                  </div>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
