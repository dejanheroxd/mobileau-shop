import Navbar from "../../components/Navbar/Navbar";
import DescriptionSectionAbout from "./DescriptionSectionAbout";
import HeroSectionAbout from "./HeroSectionAbout";

export default function About() {
  return (
    <div className="bg-primaryColor pt-16 sm:px-8">
      <HeroSectionAbout />
      <DescriptionSectionAbout />
    </div>
  );
}
