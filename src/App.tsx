import { useState } from "react";

import Loader from "./components/common/Loader/Loader";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";

import PremiumWalkthrough from "./experience/Walkthrough/PremiumWalkthrough";

import HiveStory from "./components/home/HiveStory/HiveStory";
import Facilities from "./components/home/Facilities/Facilities";
import WhyNerdsHive from "./components/home/WhyNerdsHive/WhyNerdsHive";
import Community from "./components/home/Community/Community";
import HiveDay from "./components/home/HiveDay/HiveDay";

import AboutPage from "./pages/About/AboutPage";
import SpacesPage from "./pages/Spaces/SpacesPage";
import ServicesPage from "./pages/Services/ServicesPage";
import PricingPage from "./pages/Pricing/PricingPage";
import ContactPage from "./pages/Contact/ContactPage";


const HomePage = () => {
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
      <PremiumWalkthrough />

      <HiveStory />

      <Facilities />

      <WhyNerdsHive />

      <Community />

      <HiveDay />

      <Footer />
    </main>
  );
};


function App() {
  const pathname =
    window.location.pathname
      .toLowerCase()
      .replace(/\/+$/, "") || "/";


  const isHomePage =
    pathname === "/";

  const isAboutPage =
    pathname === "/about";

  const isSpacesPage =
    pathname === "/spaces";

  const isServicesPage =
    pathname === "/services";

  const isPricingPage =
    pathname === "/pricing";

  const isContactPage =
    pathname === "/contact";


  const loaderAlreadyPlayed =
    sessionStorage.getItem(
      "nerdshive-home-loader-played"
    ) === "true";


  const [
    loaderFinished,
    setLoaderFinished,
  ] = useState(
    !isHomePage ||
      loaderAlreadyPlayed
  );


  const shouldShowLoader =
    isHomePage &&
    !loaderFinished;


  const handleLoaderComplete = () => {
    sessionStorage.setItem(
      "nerdshive-home-loader-played",
      "true"
    );

    setLoaderFinished(true);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    });
  };


  let currentPage;


  if (isAboutPage) {
    currentPage = (
      <AboutPage />
    );
  }

  else if (isSpacesPage) {
    currentPage = (
      <SpacesPage />
    );
  }

  else if (isServicesPage) {
    currentPage = (
      <ServicesPage />
    );
  }

  else if (isPricingPage) {
    currentPage = (
      <PricingPage />
    );
  }

  else if (isContactPage) {
    currentPage = (
      <ContactPage />
    );
  }

  else {
    currentPage = (
      <HomePage />
    );
  }


  return (
    <>
      <Navbar />

      {currentPage}

      {shouldShowLoader && (
        <Loader
          onComplete={
            handleLoaderComplete
          }
        />
      )}
    </>
  );
}


export default App;