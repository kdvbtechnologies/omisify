import { useNavigate } from "react-router-dom";
import Footer from "../../../Footer";
import Finish from "../../More/Finish";
import BestMentorBonus from "./BestMentorBonus";
import BestPartnerBonus from "./BestPartnerBonus";
import BigTransparencyBonus from "./BigTransparencyBonus";
import CodeWelcomeBonus from "./CodeWelcomeBonus";
import ConditionOfMetBonus from "./ConditionOfMetBonus";
import GenerosityBonus from "./GenerosityBonus";
import TrustedContactsBonus from "./TrustedContactsBonus";
import WelcomeBonus from "./WelcomeBonus";
import PartnerNavigation from "../../../Partner-Navigation";

export default function HomeBonus() {
  const navigate = useNavigate();

  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <PartnerNavigation />
      <div className="back-btn">
        <button onClick={() => navigate(-1)}>Retour</button>
      </div>

      <div className="home">
        <WelcomeBonus />
        <CodeWelcomeBonus />
        <TrustedContactsBonus />
        <BigTransparencyBonus />
        <BestPartnerBonus />
        <BestMentorBonus />
        <ConditionOfMetBonus />
        <GenerosityBonus />
        <Finish />
      </div>

      <Footer />
    </div>
  );
}
