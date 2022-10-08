import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./darkmode.css";
import Politique from "./Pages/Politique";
import Conditions from "./Pages/Conditions";
import Mentions from "./Pages/Mentions";
import Partner from "./components/Partner";
import ContactPartner from "./Pages/ContactPartner";
import Program from "./components/Program";

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

import KisaDjata from "./Pages/Partenaire Omisify/KisaDjata";
import KisaHome from "./Pages/Partenaire Omisify/KisaHome";
import KisaNavMenu from "./components/Partenaire Omisify/KisaNavMenu";
import KisaTrans from "./components/Partenaire Omisify/KisaTrans";
import KisaContactAction from "./components/Partenaire Omisify/KisaContactAction";
import KisaHistoricalAction from "./components/Partenaire Omisify/KisaHistoricalAction";

import KarimZenab from "./Pages/Partenaire Omisify/KarimZenab";
import KarimHome from "./Pages/Partenaire Omisify/KarimHome";
import KarimNavMenu from "./components/Partenaire Omisify/KarimNavMenu";
import KarimTrans from "./components/Partenaire Omisify/KarimTrans";
import KarimContactAction from "./components/Partenaire Omisify/KarimContactAction";
import KarimHistoricalAction from "./components/Partenaire Omisify/KarimHistoricalAction";

import GbetindeEpiphane from "./Pages/Partenaire Omisify/GbetindeEpiphane";
import GbetindeHome from "./Pages/Partenaire Omisify/GbetindeHome";
import GbetindeNavMenu from "./components/Partenaire Omisify/GbetindeNavMenu";
import GbetindeTrans from "./components/Partenaire Omisify/GbetindeTrans";
import GbetindeContactAction from "./components/Partenaire Omisify/GbetindeContactAction";
import GbetindeAllHistorical from "./components/Partenaire Omisify/GbetindeAllHistorical";
import GbetindeHistoOne from "./components/Partenaire Omisify/GbetindeHistoOne";

import YetcheAldo from "./Pages/Partenaire Omisify/YetcheAldo";
import YetcheNavMenu from "./components/Partenaire Omisify/YetcheNavMenu";
import YetcheHome from "./components/Partenaire Omisify/YetcheHome";
import YetcheContact from "./components/Partenaire Omisify/YetcheContact";
import YetcheTrans from "./components/Partenaire Omisify/YetcheTrans";
import YetcheHistorical from "./components/Partenaire Omisify/YetcheHistorical";

import ClaudiaEsperanceAction from "./components/Partenaire Omisify/ClaudiaEsperanceAction";
import ClaudiaHome from "./components/Partenaire Omisify/ClaudiaHome";
import ClaudiaNavMenu from "./components/Partenaire Omisify/ClaudiaNavMenu";
import ClaudiaAllHisto from "./components/Partenaire Omisify/ClaudiaAllHisto";
import ClaudiaTrans from "./components/Partenaire Omisify/ClaudiaTrans";
import ClaudiaContact from "./components/Partenaire Omisify/ClaudiaContact";
import ClaudiaHistoOne from "./components/Partenaire Omisify/ClaudiaHistoOne";

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
import AkouaStats from "./components/Partenaire Omisify/AkouaStats";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Partner />} />
        <Route path="/" element={<Partner />} />
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
        <Route path="/wilfried-all-histo" element={<WilfriedAllHisto />} />
        <Route path="/wilfried-menu" element={<WilfriedNavMenu />} />

        <Route path="/karim" element={<KarimZenab />} />
        <Route path="/karim-home" element={<KarimHome />} />
        <Route path="/karim-menu" element={<KarimNavMenu />} />
        <Route path="/karim-historical" element={<KarimHistoricalAction />} />
        <Route path="/karim-trans" element={<KarimTrans />} />
        <Route path="/karim-contact" element={<KarimContactAction />} />

        <Route path="/kisa" element={<KisaDjata />} />
        <Route path="/kisa-home" element={<KisaHome />} />
        <Route path="/kisa-menu" element={<KisaNavMenu />} />
        <Route path="/kisa-historical" element={<KisaHistoricalAction />} />
        <Route path="/kisa-trans" element={<KisaTrans />} />
        <Route path="/kisa-contact" element={<KisaContactAction />} />

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
        <Route path="/akoua-stats" element={<AkouaStats />} />

        <Route path="/gbetinde" element={<GbetindeEpiphane />} />
        <Route path="/gbetinde-home" element={<GbetindeHome />} />
        <Route path="/gbetinde-menu" element={<GbetindeNavMenu />} />
        <Route
          path="/gbetinde-all-historical"
          element={<GbetindeAllHistorical />}
        />
        <Route path="/gbetinde-contact" element={<GbetindeContactAction />} />
        <Route path="/gbetinde-trans" element={<GbetindeTrans />} />
        <Route path="/gbetinde-histo-one" element={<GbetindeHistoOne />} />

        <Route path="/yetche" element={<YetcheAldo />} />
        <Route path="/yetche-home" element={<YetcheHome />} />
        <Route path="/yetche-menu" element={<YetcheNavMenu />} />
        <Route path="/yetche-contact" element={<YetcheContact />} />
        <Route path="/yetche-trans" element={<YetcheTrans />} />
        <Route path="/yetche-historical" element={<YetcheHistorical />} />

        <Route path="/claudia" element={<ClaudiaEsperanceAction />} />
        <Route path="/claudia-menu" element={<ClaudiaNavMenu />} />
        <Route path="/claudia-home" element={<ClaudiaHome />} />
        <Route path="/claudia-contact" element={<ClaudiaContact />} />
        <Route path="/claudia-all-histo" element={<ClaudiaAllHisto />} />
        <Route path="/claudia-trans" element={<ClaudiaTrans />} />
        <Route path="/claudia-histo-one" element={<ClaudiaHistoOne />} />

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
