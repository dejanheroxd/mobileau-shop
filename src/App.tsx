import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Products from "./pages/Shop/Products";

function App() {
  return (
    <div className="bg-primaryColor">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lampWhite" element={<Products number={1} />} />
          <Route path="/chair" element={<Products number={0} chair={true} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
