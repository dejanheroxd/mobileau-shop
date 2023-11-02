import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Products from "./pages/Shop/Products";
import ScrollToTop from "./components/ScrollToTop";
import ShopNav from "./components/Navbar/ShopNav";
import { useState } from "react";

function App() {
  const [isShopNavActive, setIsShopNavActive] = useState(false);
  function handleCloseShopNav() {
    setIsShopNavActive(false);
  }

  function handleOpenShopNav() {
    setIsShopNavActive(true);
  }

  return (
    <div className="bg-primaryColor">
      <Router>
        <Navbar openShopNavbar={handleOpenShopNav} />
        {isShopNavActive && <ShopNav onCloseNav={handleCloseShopNav} />}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lampWhite" element={<Products number={1} />} />
          <Route path="/chair" element={<Products number={0} chair={true} />} />
          <Route
            path="/lampMini"
            element={<Products number={4} mini={true} />}
          />
          <Route
            path="/lampMiniGreen"
            element={<Products number={6} mini={true} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
