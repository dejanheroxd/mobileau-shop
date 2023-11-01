import HeroSection from "./HeroSection";
import FirstProductsSection from "./FirstProductsSection";
import PicturesSection from "./PicturesSection";
import SecondProductSection from "./SecondProductSection";
import Footer from "../../components/footer/Footer";

export default function home() {
  return (
    <div className="bg-primaryColor">
      <HeroSection />
      <FirstProductsSection />
      <PicturesSection />
      <SecondProductSection />
      <Footer />
    </div>
  );
}
