import {
  ArrowRight,
} from "lucide-react";

import "../../../experience/Walkthrough/PremiumWalkthrough.css";


const WHATSAPP_NUMBER =
  "918681008888";

const TOUR_MESSAGE =
  "Hello NerdsHive 👋\n\nI would like to book a tour and visit your workspace. Please share the available timings.";


const TOUR_WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    TOUR_MESSAGE
  )}`;


const navItems = [
  {
    label: "Home",
    href: "/",
    path: "/",
  },

  {
    label: "About",
    href: "/about",
    path: "/about",
  },

  {
    label: "Spaces",
    href: "/spaces",
    path: "/spaces",
  },

  {
    label: "Services",
    href: "/services",
    path: "/services",
  },

  {
    label: "Pricing",
    href: "/pricing",
    path: "/pricing",
  },

  {
    label: "Contact",
    href: "/contact",
    path: "/contact",
  },
];


const Navbar = () => {
  const pathname =
    window.location.pathname
      .toLowerCase();


  const currentPath =
    pathname !== "/" &&
    pathname.endsWith("/")
      ? pathname.slice(
          0,
          -1
        )
      : pathname;


  return (
    <header className="premiumNav globalPremiumNav">

      {/* ===============================================
          BRAND
      ================================================ */}

      <a
        href="/"
        className="premiumNav__brand"
        aria-label="NerdsHive Home"
      >

        <span className="premiumNav__brandHex premiumNav__brandHex--one" />

        <span className="premiumNav__brandHex premiumNav__brandHex--two" />


        <img
          src="/images/logo/nerdshive-logo.png"
          alt="NerdsHive"
          className="premiumNav__logo"
          draggable="false"
        />

      </a>


      {/* ===============================================
          NAVIGATION LINKS
      ================================================ */}

      <nav
        className="premiumNav__links"
        aria-label="Main navigation"
      >

        {navItems.map(
          (
            item
          ) => {

            const active =
              currentPath ===
              item.path;


            return (
              <a
                key={
                  item.label
                }
                href={
                  item.href
                }
                className={[
                  "premiumNav__link",

                  active
                    ? "premiumNav__link--active"
                    : "",
                ]
                  .filter(
                    Boolean
                  )
                  .join(
                    " "
                  )}
                aria-current={
                  active
                    ? "page"
                    : undefined
                }
              >

                <span>
                  {item.label}
                </span>

                <i />

              </a>
            );
          }
        )}

      </nav>


      {/* ===============================================
          BOOK A TOUR → WHATSAPP
      ================================================ */}

      <a
        href={TOUR_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="premiumNav__cta"
        aria-label="Book a NerdsHive tour via WhatsApp"
      >

        <span className="premiumNav__ctaText">
          Book a Tour
        </span>


        <span className="premiumNav__ctaArrow">

          <ArrowRight
            size={17}
            strokeWidth={2.3}
          />

        </span>


        {/* ANIMATED BEE */}

        <span
          className="premiumNavBee"
          aria-hidden="true"
        >

          <span className="premiumNavBee__wing premiumNavBee__wing--left" />

          <span className="premiumNavBee__wing premiumNavBee__wing--right" />


          <span className="premiumNavBee__body">

            <i />

            <i />

          </span>

        </span>

      </a>


      {/* ===============================================
          DECORATIVE TRAIL
      ================================================ */}

      <div
        className="premiumNav__trail"
        aria-hidden="true"
      >

        <span />

        <span />

        <span />

      </div>

    </header>
  );
};


export default Navbar;