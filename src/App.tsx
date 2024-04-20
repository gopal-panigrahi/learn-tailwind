import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import EmailSubscribe from "./projects/EmailSubscribe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-1" element={<EmailSubscribe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
