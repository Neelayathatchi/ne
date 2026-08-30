import {
  useEffect,
  useState,
} from "react";

import {
  ArrowRight,
} from "lucide-react";

import "../../../experience/Walkthrough/PremiumWalkthrough.css";


const MASTER_WIDTH = 1672;
const MASTER_HEIGHT = 941;


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
  const [
    scale,
    setScale,
  ] = useState(1);


  /* =======================================================
     EXACT SAME SCALE AS ORIGINAL HOME MASTER
  ======================================================= */

  useEffect(() => {
    const updateScale = () => {
      const nextScale =
        Math.min(
          window.innerWidth /
            MASTER_WIDTH,

          window.innerHeight /
            MASTER_HEIGHT
        );

      setScale(nextScale);
    };


    updateScale();


    window.addEventListener(
      "resize",
      updateScale
    );


    return () => {
      window.removeEventListener(
        "resize",
        updateScale
      );
    };
  }, []);


  /* =======================================================
     CURRENT PAGE
  ======================================================= */

  const pathname =
    window.location.pathname
      .toLowerCase();


  const currentPath =
    pathname !== "/" &&
    pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;


  return (
    <div className="globalOldNavViewport">

      <div
        className="globalOldNavMaster"
        style={{
          transform: `
            translate(
              -50%,
              -50%
            )
            scale(
              ${scale}
            )
          `,
        }}
      >

        <header className="premiumNav">

          {/* BRAND */}

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
            />

          </a>


          {/* LINKS */}

          <nav className="premiumNav__links">

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
                      .filter(Boolean)
                      .join(" ")}
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


          {/* BOOK A TOUR */}

          <a
            href="/contact"
            className="premiumNav__cta"
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


          {/* HONEYCOMB TRAIL */}

          <div
            className="premiumNav__trail"
            aria-hidden="true"
          >

            <span />

            <span />

            <span />

          </div>

        </header>

      </div>

    </div>
  );
};


export default Navbar;