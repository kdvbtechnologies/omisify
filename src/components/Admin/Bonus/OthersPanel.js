import LoginNav from "../../Auth/LoginNav";
import PanelNav from "../Navigation/PanelNav";
import BestPartnerBonus from "./BestPartnerBonus";
import GenerosityDaysBonus from "./GenerosityDaysBonus";
import axios from "axios";
import { useState } from "react";
import Dev from "../Dev";

export default function OthersPanel() {
  const [userId, setUserId] = useState("");
  const welcomebonus = 100;

  // welcome bonus
  async function AddWelcomeBonus(e) {
    e.preventDefault();
    await axios({
      method: "put",
      url: `${process.env.REACT_APP_OMISIFY_API}/api/user/updateuserinfos/${userId}`,
      data: {
        welcomebonus,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <LoginNav />
      <PanelNav />
      <p>Ajouter le bonus de Bienvenue</p>
      <input
        type="text"
        placeholder="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <button onClick={AddWelcomeBonus}>Ajouter</button>
      <hr />
      <hr />
      <BestPartnerBonus />
      <GenerosityDaysBonus />
      <Dev />
    </>
  );
}
