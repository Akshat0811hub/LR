import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import Hero from "../components/home/Hero";
import ClientLogoStrip from "../components/home/ClientLogoStrip";
import ProductCategory from "../components/home/ProductCategory";
import AboutPreview from "../components/home/AboutPreview";
import WhyPartner from "../components/home/WhyPartner";
import InnovationSlider from "../components/home/InnovationSlider";
import FAQ from "../components/home/FAQ";
import ContactCTA from "../components/home/ContactCTA";

import "../styles/Global.css";

const Home = () => {
  return (
    <>
      <Header />

      <Hero />
      <ClientLogoStrip />
      <ProductCategory />
      <AboutPreview />
      <WhyPartner />
      <InnovationSlider />
      <FAQ />
      <ContactCTA />

      <Footer />
    </>
  );
};

export default Home;