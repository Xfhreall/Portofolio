import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BiodataPages from "./pages/BiodataPages";
import ProjectPages from "./pages/ProjectPages";
import HandlingPages from "./pages/HandlingPages";
import LandingPages from "./pages/LandingPages";
import ContactPages from "./pages/ContactPages";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/Portofolio" element={<LandingPages />} /> */}
        <Route path="/Portofolio/" element={<BiodataPages />} />
        <Route path="/Portofolio/project" element={<ProjectPages />} />
        <Route path="/Portofolio/contact" element={<ContactPages />} />
        <Route path="/Portofolio/*" element={<HandlingPages />} />
      </Routes>
    </Router>
  );
};

export default App;
