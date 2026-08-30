import ServicesHero from "../../components/services/ServicesHero/ServicesHero";

import ServiceHighlights from "../../components/services/ServiceHighlights/ServiceHighlights";

import Footer from "../../components/common/Footer/Footer";


const ServicesPage = () => {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        background: "#ffffff",
        overflow: "visible",
      }}
    >

      <ServicesHero />

      <ServiceHighlights />

      <Footer />

    </main>
  );
};


export default ServicesPage;