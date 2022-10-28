import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Partenaire Omisify/Loader";

export default function WelcomeBonusPanel() {
  const navigate = useNavigate();
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR");
    return newDate;
  };

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
        {api.filter((u) => u.id === api?.userId)[0].username}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {api
              .sort((a, b) => b._id - a._id)
              .map((api) => (
                <>
                  <div className="shrink">
                    <div className="a">
                      <div className="name">
                        <p>{api.partnername}</p>
                      </div>

                      <p>Noms : {api.name}</p>
                      <p>Code BM : {api.codewelcomementor}</p>
                      <p>Bonus EP : {api.bestpartnerbonus}</p>

                      <div className="b">
                        <p>Demande d'Affiches</p>
                        <p>PA : {api.askposter}</p>
                      </div>

                      <p>Créé : {dateParser(api.createdAt)}</p>
                      <p>Modifié : {dateParser(api.updatedAt)}</p>
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
