import { useNavigate } from "react-router-dom";

export default function WelcomeBonusSuccess() {
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
          <li>Bonus de Bienvenue</li>
        </div>
        <div className="a">
          <p>
            Le Bonus de Bienvenue de 100 points est offert une seule fois à
            chaque nouveau arivant après avoir entrer le Code de Bienvenue de
            son Mentor
          </p>
          <p>Vous avez déjà reçu votre Bonus de Bienvenue !</p>
        </div>
        <div className="b">
          <button>Bonus B attribué</button>
        </div>
      </div>
    </div>
  );
}
