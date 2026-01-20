import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import UseCases from "../components/landing/UseCases";
import Pricing from "../components/landing/Pricing";
import FAQs from "../components/landing/FAQs";
import Footer from "../components/common/Footer";

function Landing() {
  return (
    <>
      <Hero />
      <Features />
      <UseCases />
      <Pricing />
      <FAQs />
      <Footer /> 
    </>
  );
}

export default Landing;
