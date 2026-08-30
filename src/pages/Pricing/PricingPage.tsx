import PricingShowcase from "../../components/pricing/PricingShowcase/PricingShowcase";

import Footer from "../../components/common/Footer/Footer";


const PricingPage = () => {
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
      <PricingShowcase />

      <Footer />
    </main>
  );
};


export default PricingPage;