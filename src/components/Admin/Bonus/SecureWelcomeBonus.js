import WelcomeBonus from "../../Bonus/WelcomeBonus";

export default function SecureWelcomeBonus() {
  //const userId = localStorage.getItem("https://omisify.com/userId");
  //const shortname = localStorage.getItem("https://omisify.com/shortname");
  const welcomebonus = localStorage.getItem("https://omisify.com/welcomebonus");
  return <>{welcomebonus ? <WelcomeBonusSuccess /> : <WelcomeBonus />}</>;
}
