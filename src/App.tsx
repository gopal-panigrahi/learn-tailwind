import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import EmailSubscribe from "./projects/EmailSubscribe";
import PricingGrids from "./projects/PricingGrids";
import ProductModal from "./projects/ProductModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-1" element={<EmailSubscribe />} />
        <Route path="/project-2" element={<PricingGrids />} />
        <Route path="/project-3" element={<ProductModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
