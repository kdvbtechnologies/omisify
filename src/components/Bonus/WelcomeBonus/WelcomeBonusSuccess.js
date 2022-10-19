import LoginNav from "../../Auth/LoginNav";

export default function WelcomeBonusSuccess() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <LoginNav />
      <div className="welcome-bonus">
        <div className="title">
          <li>Bonus de Bienvenue</li>
        </div>
        <div className="a">
          <p>
            Le Bonus de Bienvenue de 100 points est offert une seule fois à
            chaque nouveau arivant après avoir entrer le Code de Bienvenue de
            son mentor
          </p>
          <p>Vous avez déjà recu votre Bonus de Bienvenue !</p>
        </div>
        <div className="b">
          <button>Bonus de Bienvenue déjà attribué</button>
        </div>
      </div>
    </div>
  );
}
