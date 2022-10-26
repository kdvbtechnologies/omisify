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
          <div className="panel-main">
            <div className="panel">
              <h3>Listes des Partenaires et leurs infos</h3>
              {api.map((api) => (
                <>
                  <p>userId : {api._id}</p>
                  <p>Noms de naissance : {api.name}</p>
                  <p>Noms principal : {api.partnername}</p>
                  <p>Noms court : {api.shortname}</p>
                  <p>Code CB : {api.codewelcome}</p>
                  <p>Bonus B : {api.welcomebonus} point(s)</p>
                  <p>Bonus EP : {api.bestpartnerbonus}</p>
                  <p>Bonus JG : {api.generositydaysbonus} point(s)</p>
                  <p>Journées de générosité : {api.generositydays} point(s)</p>
                  <p>Méthode de Paiement préféré : {api.paymentmethod}</p>
                  <p>...</p>
                  <p>Commentaires : {api.pointtcommentlife} point(s)</p>
                  <p>E10k : {api.pointte10klife} point(s)</p>
                  <p>E-mail : {api.pointtemaillife} point(s)</p>
                  <p>Likes C :{api.pointtlikescommentlife} point(s)</p>
                  <p>Likes P : {api.pointtlikespublicationlife} point(s)</p>

                  <p>M10k : {api.pointtm10klife} point(s)</p>
                  <p>Messages : {api.pointtmessagelife} point(s)</p>
                  <p>MWI : {api.pointtmwilife} point(s)</p>

                  <p>Publications : {api.pointtpublicationlife} point(s)</p>
                  <p>PWI : {api.pointtpwilife} point(s)</p>

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
                  <p>Numéro Telegram : {api.pointtelegram}</p>
                  <p>Numéro Whatsapp : {api.pointwhatsapp}</p>
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
