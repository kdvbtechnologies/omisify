import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import "./darkmode.css";
import Politique from "./Pages/Politique";
import Conditions from "./Pages/Conditions";
import Mentions from "./Pages/Mentions";
import Partner from "./components/Partner";
import ContactPartner from "./Pages/ContactPartner";
import SaliouKoffi from "./Pages/Partenaire Omisify/SaliouKoffi";
import SaliouContact from "./Pages/Partenaire Omisify/SaliouContact";
import SaliouPartner from "./Pages/Partenaire Omisify/SaliouPartner";
import DeborahKongolo from "./Pages/Partenaire Omisify/DeborahKongolo";
import DeborahContact from "./Pages/Partenaire Omisify/DeborahContact";
import DeborahPartner from "./Pages/Partenaire Omisify/DeborahPartner";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-partner" element={<ContactPartner />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="/politique" element={<Politique />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/saliou" element={<SaliouKoffi />} />
        <Route path="/saliou-contact" element={<SaliouContact />} />
        <Route path="/saliou-partner" element={<SaliouPartner />} />
        <Route path="/deborah" element={<DeborahKongolo />} />
        <Route path="/deborah-contact" element={<DeborahContact />} />
        <Route path="/deborah-partner" element={<DeborahPartner />} />
      </Routes>
    </BrowserRouter>
  );
}
