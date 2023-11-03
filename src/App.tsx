import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Products from "./pages/Shop/Products";
import ScrollToTop from "./components/ScrollToTop";
import ShopNav from "./components/Navbar/ShopNav";
import { useState } from "react";
import ShopContextProvider from "./context/shop-context";
import Payment from "./pages/Payment/Payment";

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
      <ShopContextProvider>
        <Router>
          <Navbar openShopNavbar={handleOpenShopNav} />
          {isShopNavActive && <ShopNav onCloseNav={handleCloseShopNav} />}
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/lampWhite"
              element={
                <Products number={1} onOpenShopNav={handleOpenShopNav} />
              }
            />
            <Route
              path="/chair"
              element={
                <Products
                  number={0}
                  chair={true}
                  onOpenShopNav={handleOpenShopNav}
                />
              }
            />
            <Route
              path="/lampMini"
              element={
                <Products
                  number={4}
                  mini={true}
                  onOpenShopNav={handleOpenShopNav}
                />
              }
            />
            <Route
              path="/lampMiniGreen"
              element={
                <Products
                  number={6}
                  mini={true}
                  onOpenShopNav={handleOpenShopNav}
                />
              }
            />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
