import AboutHero from "../../components/about/AboutHero/AboutHero";
import InsideHive from "../../components/about/InsideHive/InsideHive";
import WhoBelongs from "../../components/about/WhoBelongs/WhoBelongs";
import LocalRoots from "../../components/about/LocalRoots/LocalRoots";

import Footer from "../../components/common/Footer/Footer";


const AboutPage = () => {
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

      {/* SECTION 01 */}
      <AboutHero />


      {/* SECTION 02 */}
      <InsideHive />


      {/* SECTION 03 */}
      <WhoBelongs />


      {/* SECTION 04 */}
      <LocalRoots />


      {/* FOOTER */}
      <Footer />

    </main>
  );
};


export default AboutPage;