import { useNavigate } from "react-router-dom";

export default function DaysOfGenerosity() {
  //const userId = localStorage.getItem("https://omisify.com/userId");
  const navigate = useNavigate();

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
          <li>Les Journées de Générosité</li>
        </div>

        <div className="a">
          <p>
            Les Journées de Générosité sont une forme de Bonus qui concernent 2
            jours dans la semaine. Les points que le Partenaire gagnent pendant
            les journées de générosité sont multipliés par 10
          </p>
          <p>Entrer vos jours de générosité</p>
          <input type="text" placeholder="Jours de générosité" />
        </div>
        <button>Sauvegarder</button>
      </div>
    </div>
  );
}
