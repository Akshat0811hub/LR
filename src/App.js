import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import FactoryBuilding from "./pages/FactoryBuilding";
import Warehouse from "./pages/Warehouse";
// Naya page yahan import karein
import IndustrialSheds from "./pages/IndustrialSheds"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/factory-building" element={<FactoryBuilding />} />
        <Route path="/warehouse" element={<Warehouse />} />
        {/* Naya route yahan add karein */}
        <Route path="/industrial-sheds" element={<IndustrialSheds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;