import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./darkmode.css";
import Politique from "./Pages/Politique";
import Conditions from "./Pages/Conditions";
import Mentions from "./Pages/Mentions";
import Home from "./components/Home";
import ContactPartner from "./Pages/ContactPartner";
import Program from "./components/Program";
//import Partner from "./components/Partenaire Omisify/Partner";
import PartnerNavMenu from "./components/Partenaire Omisify/PartnerNavMenu";
import PartnerHome from "./components/Partenaire Omisify/PartnerHome";
import PartnerContact from "./components/Partenaire Omisify/PartnerContact";
import PartnerTrans from "./components/Partenaire Omisify/PartnerTrans";
import PartnerHistorical from "./components/Partenaire Omisify/PartnerHistorical";

import WilfriedMboundja from "./Pages/Partenaire Omisify/WilfriedMboundja";
import WilfriedContact from "./Pages/Partenaire Omisify/WilfriedContact";
import WilfriedHome from "./Pages/Partenaire Omisify/WilfriedHome";
import WilfriedNavMenu from "./components/Partenaire Omisify/WilfriedNavMenu";
import WilfriedAllHisto from "./Pages/Partenaire Omisify/WilfriedAllHisto";
import WilfriedTrans from "./components/Partenaire Omisify/WilfriedTrans";
import WilfriedHistoOne from "./components/Partenaire Omisify/WilfriedHistoOne";
import WilfriedHistoTwo from "./components/Partenaire Omisify/WilfriedHistoTwo";
import WilfriedHistoThree from "./components/Partenaire Omisify/WilfriedHistoThree";
import WilfriedHistoFour from "./components/Partenaire Omisify/WilfriedHistoFour";
import WilfriedHistoFive from "./components/Partenaire Omisify/WilfriedHistoFive";
import WilfriedHistoSix from "./components/Partenaire Omisify/WilfriedHistoSix";

import SimoRandy from "./components/Partenaire Omisify/SimoRandy";
import SimoNavMenu from "./components/Partenaire Omisify/SimoNavMenu";
import SimoContact from "./components/Partenaire Omisify/SimoContact";
import SimoHistorical from "./components/Partenaire Omisify/SimoHistorical";
import SimoTrans from "./components/Partenaire Omisify/SimoTrans";
import SimoHome from "./components/Partenaire Omisify/SimoHome";

import AkouaDjenebou from "./Pages/Partenaire Omisify/AkouaDjenebou";
import AkouaHome from "./Pages/Partenaire Omisify/AkouaHome";
import AkouaNavMenu from "./components/Partenaire Omisify/AkouaNavMenu";
import AkouaTrans from "./components/Partenaire Omisify/AkouaTrans";
import AkouaContactAction from "./components/Partenaire Omisify/AkouaContactAction";
import AkouaAllHisto from "./components/Partenaire Omisify/AkouaAllHisto";
import AkouaHistoOne from "./components/Partenaire Omisify/AkouaHistoOne";
import AkouaHistoTwo from "./components/Partenaire Omisify/AkouaHistoTwo";
import AkouaHistoThree from "./components/Partenaire Omisify/AkouaHistoThree";
import AkouaHistoFour from "./components/Partenaire Omisify/AkouaHistoFour";
import AkouaHistoFive from "./components/Partenaire Omisify/AkouaHistoFive";
import AkouaHistoSix from "./components/Partenaire Omisify/AkouaHistoSix";
import AkouaHistoSeven from "./components/Partenaire Omisify/AkouaHistoSeven";
import AkouaHistoEight from "./components/Partenaire Omisify/AkouaHistoEight";
import AkouaHistoNine from "./components/Partenaire Omisify/AkouaHistoNine";
import AkouaHistoTen from "./components/Partenaire Omisify/AkouaHistoTen";
import AkouaHistoEleven from "./components/Partenaire Omisify/AkouaHistoEleven";
import AkouaHistoTwelve from "./components/Partenaire Omisify/AkouaHistoTwelve";
import AkouaHistoThirty from "./components/Partenaire Omisify/AkouaHistoThirty";
import AkouaHistoFourteen from "./components/Partenaire Omisify/AkouaHistoFourteen";
import AkouaHistoFifteen from "./components/Partenaire Omisify/AkouaHistoFifteen";
import AkouaHistoSixteen from "./components/Partenaire Omisify/AkouaHistoSixteen";
import AkouaHistoSeventeen from "./components/Partenaire Omisify/AkouaHistoSeventeen";
import AkouaHistoEighteen from "./components/Partenaire Omisify/AkouaHistoEighteen";
import AkouaHistoNineteen from "./components/Partenaire Omisify/AkouaHistoNineteen";
import AkouaHistoTwenty from "./components/Partenaire Omisify/AkouaHistoTwenty";
import AkouaStats from "./components/Partenaire Omisify/AkouaStats";
import Stats from "./components/Partenaire Omisify/Stats";
import PartnerUpdate from "./components/Partenaire Omisify/PartnerUpdate";
import PartnerSettings from "./components/Partenaire Omisify/PartnerSettings";
import Auth from "./components/Auth";
import AfterLogin from "./components/AfterLogin";
import AfterLoginSuccess from "./components/AfterLoginSuccess";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<ContactPartner />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="/politique" element={<Politique />} />
        <Route path="/wilfried" element={<WilfriedMboundja />} />
        <Route path="/wilfried-contact" element={<WilfriedContact />} />
        <Route path="/wilfried-home" element={<WilfriedHome />} />
        <Route path="/wilfried-trans" element={<WilfriedTrans />} />
        <Route path="/wilfried-histo-one" element={<WilfriedHistoOne />} />
        <Route path="/wilfried-histo-two" element={<WilfriedHistoTwo />} />
        <Route path="/wilfried-histo-three" element={<WilfriedHistoThree />} />
        <Route path="/wilfried-histo-four" element={<WilfriedHistoFour />} />
        <Route path="/wilfried-histo-five" element={<WilfriedHistoFive />} />
        <Route path="/wilfried-histo-six" element={<WilfriedHistoSix />} />
        <Route path="/wilfried-all-histo" element={<WilfriedAllHisto />} />
        <Route path="/wilfried-menu" element={<WilfriedNavMenu />} />

        <Route path="/akoua" element={<AkouaDjenebou />} />
        <Route path="/akoua-home" element={<AkouaHome />} />
        <Route path="/akoua-menu" element={<AkouaNavMenu />} />
        <Route path="/akoua-trans" element={<AkouaTrans />} />
        <Route path="/akoua-contact" element={<AkouaContactAction />} />
        <Route path="/akoua-all-histo" element={<AkouaAllHisto />} />
        <Route path="/akoua-histo-one" element={<AkouaHistoOne />} />
        <Route path="/akoua-histo-two" element={<AkouaHistoTwo />} />
        <Route path="/akoua-histo-three" element={<AkouaHistoThree />} />
        <Route path="/akoua-histo-four" element={<AkouaHistoFour />} />
        <Route path="/akoua-histo-five" element={<AkouaHistoFive />} />
        <Route path="/akoua-histo-six" element={<AkouaHistoSix />} />
        <Route path="/akoua-histo-seven" element={<AkouaHistoSeven />} />
        <Route path="/akoua-histo-eight" element={<AkouaHistoEight />} />
        <Route path="/akoua-histo-nine" element={<AkouaHistoNine />} />
        <Route path="/akoua-histo-ten" element={<AkouaHistoTen />} />
        <Route path="/akoua-histo-eleven" element={<AkouaHistoEleven />} />
        <Route path="/akoua-histo-twelve" element={<AkouaHistoTwelve />} />
        <Route path="/akoua-histo-thirty" element={<AkouaHistoThirty />} />
        <Route path="/akoua-histo-fourteen" element={<AkouaHistoFourteen />} />
        <Route path="/akoua-histo-fifteen" element={<AkouaHistoFifteen />} />
        <Route path="/akoua-histo-sixteen" element={<AkouaHistoSixteen />} />
        <Route path="/akoua-histo-eighteen" element={<AkouaHistoEighteen />} />
        <Route path="/akoua-histo-nineteen" element={<AkouaHistoNineteen />} />
        <Route path="/akoua-histo-twenty" element={<AkouaHistoTwenty />} />
        <Route
          path="/akoua-histo-seventeen"
          element={<AkouaHistoSeventeen />}
        />
        <Route path="/akoua-stats" element={<AkouaStats />} />

        <Route path="/partner-home" element={<PartnerHome />} />
        <Route path="/partner-menu" element={<PartnerNavMenu />} />
        <Route path="/partner-contact" element={<PartnerContact />} />
        <Route path="/partner-trans" element={<PartnerTrans />} />
        <Route path="/partner-historical" element={<PartnerHistorical />} />
        <Route path="/update" element={<PartnerUpdate />} />
        <Route path="/settings" element={<PartnerSettings />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/after-login" element={<AfterLogin />} />
        <Route path="/partner" element={<AfterLoginSuccess />} />

        <Route path="/simo" element={<SimoRandy />} />
        <Route path="/simo-menu" element={<SimoNavMenu />} />
        <Route path="/simo-historical" element={<SimoHistorical />} />
        <Route path="/simo-contact" element={<SimoContact />} />
        <Route path="/simo-trans" element={<SimoTrans />} />
        <Route path="/simo-home" element={<SimoHome />} />
      </Routes>
    </BrowserRouter>
  );
}
