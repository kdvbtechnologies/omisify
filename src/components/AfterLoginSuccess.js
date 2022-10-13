import Login from "./Login";
import Partner from "./Partenaire Omisify/Partner";

export default function AfterLoginSuccess() {
  const idtotal = localStorage.getItem("https://omisify.com/idtotal");
  return <>{idtotal ? <Partner /> : <Login />}</>;
}
