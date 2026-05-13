import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import FactoryBuilding from "./pages/FactoryBuilding";
import Warehouse from "./pages/Warehouse";
import PremiumMsContainer from "./pages/PremiumMsContainer";
import ExecutiveMsContainer from "./pages/ExecutiveMsContainer";
import LRValueContainer from "./pages/LRValueContainer";
import HingeMsContainer from "./pages/HingeMsContainer";
import PUFContainer from "./pages/PUFContainer";
import PrefabLabour from "./pages/PrefabLabour";
import PrefabSiteOffice from "./pages/PrefabSiteOffice";
// Naya page yahan import karein
import IndustrialSheds from "./pages/IndustrialSheds";
import ColdRoom from "./pages/ColdRoom";
import MsContainer from "./pages/MsContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/factory-building" element={<FactoryBuilding />} />
        <Route
          path="/executive-containers"
          element={<ExecutiveMsContainer />}
        />
        <Route path="/lr-value-containers" element={<LRValueContainer />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/puf-containers" element={<PUFContainer />} />
        <Route path="/home-containers" element={<LRValueContainer />} />
        <Route path="/hinge-containers" element={<HingeMsContainer />} />
        <Route path="/premium-ms-containers" element={<PremiumMsContainer />} />
        <Route path="/labour-accommodation" element={<PrefabLabour />} />
        <Route path="/site-office" element={<PrefabSiteOffice />} />
        {/* Naya route yahan add karein */}
        <Route path="/industrial-sheds" element={<IndustrialSheds />} />
        <Route path="/cold-room" element={<ColdRoom />} />
        <Route path="/ms-containers" element={<MsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
