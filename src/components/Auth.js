import { useState } from "react";
import LoginNav from "./Auth/LoginNav";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth() {
  const [signup, setSignup] = useState(true);
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <>
      <LoginNav />
      <div style={family} className="login">
        <div>
          <button
            onClick={() => setSignup(true)}
            style={{ color: signup ? "blue" : "white" }}
          >
            Connexion
          </button>
          <button
            onClick={() => setSignup(false)}
            style={{ color: signup ? "white" : "blue" }}
          >
            Inscription
          </button>
          {signup ? <Login /> : <Signup />}
        </div>
      </div>
    </>
  );
}
