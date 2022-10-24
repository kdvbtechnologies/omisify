import Finish from "../../More/Finish";
import BestMentorBonus from "./BestMentorBonus";
import BestPartnerBonus from "./BestPartnerBonus";
import BigTransparencyBonus from "./BigTransparencyBonus";
import CodeWelcomeBonus from "./CodeWelcomeBonus";
import ConditionOfMetBonus from "./ConditionOfMetBonus";
import GenerosityBonus from "./GenerosityBonus";
import TrustedContactsBonus from "./TrustedContactsBonus";
import WelcomeBonus from "./WelcomeBonus";

export default function Bonus() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div className="home" style={family}>
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
  );
}
