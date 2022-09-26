import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./darkmode.css";
import Politique from "./Pages/Politique";
import Conditions from "./Pages/Conditions";
import Mentions from "./Pages/Mentions";
import Partner from "./components/Partner";
import ContactPartner from "./Pages/ContactPartner";
import SaliouKoffi from "./Pages/Partenaire Omisify/SaliouKoffi";
import SaliouContact from "./Pages/Partenaire Omisify/SaliouContact";
import SaliouPartner from "./Pages/Partenaire Omisify/SaliouPartner";
import SaliouNavigationMenu from "./components/Partenaire Omisify/SaliouNavigationMenu";
import SaliouHistorical from "./Pages/Partenaire Omisify/SaliouHistorical";
import Program from "./components/Program";
import WilfriedMboundja from "./Pages/Partenaire Omisify/WilfriedMboundja";
import WilfriedContact from "./Pages/Partenaire Omisify/WilfriedContact";
import WilfriedPartner from "./Pages/Partenaire Omisify/WilfriedPartner";
import WilfriedHistorical from "./Pages/Partenaire Omisify/WilfriedHistorical";
import WilfriedNavigationMenu from "./components/Partenaire Omisify/WilfriedNavigationMenu";

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
        <Route path="/sialou" element={<SaliouKoffi />} />
        <Route path="/sialou-contact" element={<SaliouContact />} />
        <Route path="/sialou-home" element={<SaliouPartner />} />
        <Route path="/sialou-historical" element={<SaliouHistorical />} />
        <Route path="/sialou-menu" element={<SaliouNavigationMenu />} />
        <Route path="/wilfried" element={<WilfriedMboundja />} />
        <Route path="/wilfried-contact" element={<WilfriedContact />} />
        <Route path="/wilfried-home" element={<WilfriedPartner />} />
        <Route path="/wilfried-historical" element={<WilfriedHistorical />} />
        <Route path="/wilfried-menu" element={<WilfriedNavigationMenu />} />
      </Routes>
    </BrowserRouter>
  );
}
