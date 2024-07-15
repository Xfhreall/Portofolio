import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Biodata from "./pages/Bio";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Unknwon from "./pages/Unknown";
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Biodata />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Unknwon />} />
      </Routes>
      {/* <Biodata /> */}
    </Router>
  );
};

export default App;
