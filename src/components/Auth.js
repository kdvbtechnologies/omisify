import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth() {
  const [signup, setSignup] = useState(true);
  return (
    <>
      <button
        onClick={() => setSignup(true)}
        style={{ color: signup ? "blue" : "black" }}
      >
        Connexion
      </button>
      <button
        onClick={() => setSignup(false)}
        style={{ color: signup ? "black" : "blue" }}
      >
        Inscription
      </button>
      {signup ? <Login /> : <Signup />}
    </>
  );
}
