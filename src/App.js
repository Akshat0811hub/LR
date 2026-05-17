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
import PrefabSandwichPanels from "./pages/PrefabSandwichPanels";
import PrefabDryWall from "./pages/PrefabDryWall";
import PrefabStaffCanteens from "./pages/PrefabStaffCanteens";
import PrefabMushroom from "./pages/PrefabMushroom";
import PrefabIndustrialEnclosures from "./pages/PrefabIndustrialEnclosures";
import IndustrialSheds from "./pages/IndustrialSheds";
import ColdRoom from "./pages/ColdRoom";
import MsContainer from "./pages/MsContainer";
import ControlPanelRoomPage from "./pages/ControlPanelRoomPage";
import CleanRoomPage from "./pages/CleanRoomPage";
import PrefabRailwayShelters from "./pages/PrefabRailwayShelters";
import PufSandwich from "./pages/pufsandwich";
import WallPufPanels from "./pages/WallPufPanels";
import RoofPufPanels from "./pages/RoofPufPanels";

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
        <Route path="/prefab-staff-canteens" element={<PrefabStaffCanteens />} />
        <Route path="/prefab-dry-wall" element={<PrefabDryWall />} />
        <Route path="/prefab-mushroom" element={<PrefabMushroom />} />
        <Route path="/prefab-industrial-enclosures" element={<PrefabIndustrialEnclosures />} />
        <Route path="/industrial-sheds" element={<IndustrialSheds />} />
        <Route path="/cold-room" element={<ColdRoom />} />
        <Route path="/ms-containers" element={<MsContainer />} />
        <Route path="/control-rooms" element={<ControlPanelRoomPage />} />
        <Route path="/clean-rooms" element={<CleanRoomPage />} />
        <Route path="/prefab-railway-shelters" element={<PrefabRailwayShelters />} />
        <Route path="/prefab-sandwich-panels" element={<PrefabSandwichPanels />} />
        <Route path="/puf-sandwich-panels" element={<PufSandwich />} />
        <Route path="/wall-puf-panels" element={<WallPufPanels />} />
        <Route path="/roof-puf-panels" element={<RoofPufPanels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
