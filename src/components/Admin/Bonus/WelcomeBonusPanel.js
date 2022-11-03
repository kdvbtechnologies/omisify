import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Partenaire Omisify/Loader";

export default function WelcomeBonusPanel() {
  const navigate = useNavigate();
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
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
  /*
         src={api.filter((u) => u.id === api?.userId)[5].userId}
         
         const recommendedPosts = posts.filter(({ _id }) => _id !== post._id) 

                        .sort((a, b) => b._id - a._id)


  */

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
            {api
              .sort((a, b) => a._id - b._id)
              .map((api) => (
                <>
                  <div className="shrink">
                    <div className="a">
                      <div className="name">
                        <p>{api.partnername}</p>
                      </div>

                      <p>Pays : {api.countryip}</p>
                      <p>Ville : {api.cityip}</p>
                      <p>Adresse IP : {api.userip}</p>
                      <p>Infos : {api.page}</p>
                      <p>Date: {api.date}</p>
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
