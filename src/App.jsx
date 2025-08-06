import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import GeneratorMaintenance from "./pages/GeneratorMaintenance";
import Home from "./pages/Home";
import Operations from "./pages/Operations";
import Services from "./pages/Services";
import SingleService from "./pages/SingleService";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<SingleService />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;