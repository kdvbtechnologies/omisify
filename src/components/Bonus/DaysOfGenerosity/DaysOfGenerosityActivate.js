import { useNavigate } from "react-router-dom";

export default function WelcomeBonusSuccess() {
  const navigate = useNavigate();

  const generositydays = localStorage.getItem(
    "https://omisify.com/generositydays"
  );

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>
      <div className="welcome-bonus">
        <div className="title">
          <li>Journées de Générosité</li>
        </div>
        <div className="a">
          <p>
            Les Journées de Générosité sont une forme de Bonus qui concernent 2
            jours dans la semaine. Les points que le Partenaire gagnent pendant
            les journées de générosité sont multipliés par 10
          </p>
          <p>Les journées de générosité sont activéés sur votre compte !</p>
          <p>
            les points que vous gagnés chaque {generositydays} sont multipliés
            par 10
          </p>
        </div>
        <div className="b">
          <button>Bonus Activé</button>
        </div>
      </div>
    </div>
  );
}
