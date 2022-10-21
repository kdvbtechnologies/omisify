import axios from "axios";
import { useEffect, useState } from "react";
import LoginNav from "../../Auth/LoginNav";
import Loader from "../../Partenaire Omisify/Loader";
import PanelNav from "../Navigation/PanelNav";

export default function WelcomeBonusPanel() {
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState("");
  const welcomebonus = 100;
  const [bestpartnerbonus, setBestpartnerbonus] = useState("");
  const [gaintlife, setGaintlife] = useState("");
  const [pointtlife, setPointtlife] = useState("");

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

  // welcome bonus
  async function AddWelcomeBonus(e) {
    e.preventDefault();
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
      data: {
        welcomebonus,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  // best partner bonus
  async function AddBestPartnerBonus(e) {
    e.preventDefault();
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
      data: {
        bestpartnerbonus,
        pointtlife,
        gaintlife,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <LoginNav />
      <PanelNav />
      <p>Ajouter le bonus de Bienvenue</p>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <button onClick={AddWelcomeBonus}>Ajouter</button>
      <hr />
      <hr />
      <hr />
      <hr />

      <h3>Ajouter le Bonus d'Excellent Partenaire</h3>
      <p>Commencer entrer le userId</p>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <p>Entrer le Bonus d'excellent Partenaire</p>
      <input
        type="text"
        placeholder="Bonus d'excellent Partenaire"
        value={bestpartnerbonus}
        onChange={(e) => setBestpartnerbonus(e.target.value)}
        name="bestpartnerbonus"
      />

      <input
        type="text"
        placeholder="Nouveau Point Total"
        value={pointtlife}
        onChange={(e) => setPointtlife(e.target.value)}
        name="pointtlife"
      />

      <input
        type="text"
        placeholder="Nouveau Gain (dans la vie)"
        value={gaintlife}
        onChange={(e) => setGaintlife(e.target.value)}
        name="gaintlife"
      />

      <button onClick={AddBestPartnerBonus}>
        Ajouter le Bonus d'Excellent Partenaire
      </button>

      <hr />
      <hr />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="panel-main">
            <div className="panel">
              <h3>Code de Bienvenue</h3>
              {api.map((api) => (
                <>
                  <p>userId: {api.userId}</p>
                  <p>Noms du demandeur : {api.partnername}</p>
                  <p>Noms court du demandeur : {api.shortname}</p>
                  <p>Code de Bienvenue du mentor : {api.codewelcomementor}</p>
                  <p>Bonus d'excellent Partenaire : {api.bestpartnerbonus}</p>
                  <p>- - -- - -- - -- - -- - -- - -- - -</p>
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
