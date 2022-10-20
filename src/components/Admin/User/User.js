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
                  <p>userId : {api._id}</p>
                  <p>Noms de naissance : {api.name}</p>
                  <p>Noms principal : {api.partnername}</p>
                  <p>Noms court : {api.shortname}</p>
                  <p>Code de Bienvenue : {api.codewelcome}</p>
                  <p>Bonus de Bienvenue recu : {api.welcomebonus} point(s)</p>
                  <p>Journées de générosité : {api.generositydays}</p>
                  <p>Méthode de Paiement préféré : {api.paymentmethod}</p>
                  <p>...</p>
                  <p>Commentaires : {api.numbertcommentlife} point(s)</p>
                  <p>
                    Likes (commentaire) :{api.numbertlikecommentlife} point(s)
                  </p>
                  <p>
                    Likes (publication) : {api.numbertlikepublicationlife}{" "}
                    point(s)
                  </p>
                  <p>Publications : {api.numbertpublicationlife} point(s)</p>
                  <p>PWI : {api.numbertpwilife} point(s)</p>
                  <p>Messages : {api.numbertmessagelife} point(s)</p>
                  <p>MWI : {api.numbertmwilife} point(s)</p>
                  <p>E-mail : {api.numbertemaillife} point(s)</p>
                  <p>Total des Points : {api.pointtlife} point(s)</p>
                  <p>Gains : {api.gaintlife}€</p>
                  <p>---</p>
                  <p>---</p>
                  <p>Genre : {api.genre}</p>
                  <p>Age : {api.age}</p>
                  <p>Pays actuel : {api.country}</p>
                  <p>Pays de naissance : {api.birthcountry}</p>
                  <p>Date de naissance : {api.dateofbirth}</p>
                  <p>Email : {api.email}</p>
                  <p>Groupe Telegram : {api.grouptelegram}</p>
                  <p>Groupe Whatsapp : {api.groupwhatsapp}</p>
                  <p>Numéro Telegram : {api.numbertelegram}</p>
                  <p>Numéro Whatsapp : {api.numberwhatsapp}</p>
                  <p>Dernière actualisation des points : {api.date}</p>
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
