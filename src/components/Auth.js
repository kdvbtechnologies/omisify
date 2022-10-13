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
        Login
      </button>
      <button
        onClick={() => setSignup(false)}
        style={{ color: signup ? "black" : "blue" }}
      >
        Signup
      </button>
      {signup ? <Login /> : <Signup />}
    </>
  );
}
