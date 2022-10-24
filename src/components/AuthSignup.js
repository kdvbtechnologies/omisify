import { useState } from "react";
import LoginNav from "./Auth/LoginNav";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthSignup() {
  const [signup, setSignup] = useState(true);
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <>
      <LoginNav />
      {signup ? (
        <div style={family} className="login">
          <div>
            <button
              onClick={() => setSignup(true)}
              style={{ color: signup ? "blue" : "white" }}
            >
              Inscription
            </button>
            <button
              onClick={() => setSignup(false)}
              style={{ color: signup ? "white" : "blue" }}
            >
              Connexion
            </button>
            {signup ? <Signup /> : <Login />}
          </div>
        </div>
      ) : (
        <div style={family} className="login">
          <div>
            <button
              onClick={() => setSignup(true)}
              style={{ color: signup ? "blue" : "white" }}
            >
              Inscription
            </button>
            <button
              onClick={() => setSignup(false)}
              style={{ color: signup ? "white" : "blue" }}
            >
              Connexion
            </button>
            {signup ? <Signup /> : <Login />}
          </div>
        </div>
      )}
    </>
  );
}
