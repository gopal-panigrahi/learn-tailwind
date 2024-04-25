import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import EmailSubscribe from "./projects/EmailSubscribe";
import PricingCards from "./projects/PricingCards";
import ProductModal from "./projects/ProductModal";
import ImageGallery from "./projects/ImageGallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-1" element={<EmailSubscribe />} />
        <Route path="/project-2" element={<PricingCards />} />
        <Route path="/project-3" element={<ProductModal />} />
        <Route path="/project-4" element={<ImageGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
