import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import "./darkmode.css";
import Politique from "./Pages/Politique";
import Conditions from "./Pages/Conditions";
import Mentions from "./Pages/Mentions";
import Partner from "./components/Partner";
import ContactPartner from "./Pages/ContactPartner";

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
      </Routes>
    </BrowserRouter>
  );
}
