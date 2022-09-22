import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import "./darkmode.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
