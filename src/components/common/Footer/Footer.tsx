import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import "./Footer.css";


const Footer = () => {
  const currentYear =
    new Date().getFullYear();


  return (
    <footer
      className="nerdsFooter"
      id="contact"
    >

      {/* =====================================================
          TOP DECORATION
      ====================================================== */}

      <div
        className="nerdsFooterHoney nerdsFooterHoney--one"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>


      <div
        className="nerdsFooterHoney nerdsFooterHoney--two"
        aria-hidden="true"
      >
        <span />
        <span />
      </div>


      {/* =====================================================
          CUTE MINI BEE
      ====================================================== */}

      <div
        className="nerdsFooterBee"
        aria-hidden="true"
      >
        <span className="nerdsFooterBeeWing nerdsFooterBeeWing--left" />

        <span className="nerdsFooterBeeWing nerdsFooterBeeWing--right" />

        <div className="nerdsFooterBeeBody">
          <i />
          <i />
        </div>

        <div className="nerdsFooterBeeHead">
          <b />
          <b />

          <span />
        </div>
      </div>


      <div className="nerdsFooterContainer">

        {/* ===================================================
            MAIN GRID
        ==================================================== */}

        <div className="nerdsFooterGrid">

          {/* =================================================
              BRAND
          ================================================== */}

          <div className="nerdsFooterBrand">

            <a
              href="#walkthrough"
              className="nerdsFooterLogoWrap"
              aria-label="NerdsHive home"
            >
              <img
                src="/images/logo/nerdshive-logo.png"
                alt="NerdsHive"
                className="nerdsFooterLogo"
              />
            </a>


            <p className="nerdsFooterDescription">
              Thanjavur&apos;s collaborative
              coworking space for creators,
              founders, startups, professionals
              and growing teams.
            </p>


            <strong className="nerdsFooterTagline">
              Collaborate Locally.
              <span>
                {" "}
                Impact Globally.
              </span>
            </strong>


            <a
              href="#day-inside-nerdshive"
              className="nerdsFooterTour"
            >
              <span>
                Book a Tour
              </span>

              <b>
                <ArrowUpRight
                  size={17}
                  strokeWidth={2.3}
                />
              </b>
            </a>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div className="nerdsFooterColumn">

            <h3>
              Quick Links
            </h3>


            <nav
              className="nerdsFooterLinks"
              aria-label="Footer navigation"
            >

              <a href="#walkthrough">
                <span>
                  Home
                </span>

                <ArrowUpRight
                  size={14}
                />
              </a>


              <a href="/about">
                <span>
                  About
                </span>

                <ArrowUpRight
                  size={14}
                />
              </a>


              <a href="/spaces">
                <span>
                  Spaces
                </span>

                <ArrowUpRight
                  size={14}
                />
              </a>


              <a href="/services">
                <span>
                  Services
                </span>

                <ArrowUpRight
                  size={14}
                />
              </a>


              <a href="/pricing">
                <span>
                  Pricing
                </span>

                <ArrowUpRight
                  size={14}
                />
              </a>


              <a href="/contact">
                <span>
                  Contact
                </span>

                <ArrowUpRight
                  size={14}
                />
              </a>

            </nav>

          </div>


          {/* =================================================
              SERVICES
          ================================================== */}

          <div className="nerdsFooterColumn">

            <h3>
              Our Services
            </h3>


            <div className="nerdsFooterLinks">

              <a href="/spaces">
                <span>
                  Co-working Space
                </span>

                <ArrowUpRight
                  size={14}
                />
              </a>


              <a href="/spaces">
                <span>
                  Private Cabins
                </span>

                <ArrowUpRight
                  size={14}
                />
              </a>


              <a href="/spaces">
                <span>
                  Meeting Rooms
                </span>

                <ArrowUpRight
                  size={14}
                />
              </a>


              <a href="/services">
                <span>
                  Virtual Office
                </span>

                <ArrowUpRight
                  size={14}
                />
              </a>


              <a href="/services">
                <span>
                  Custom Office Setup
                </span>

                <ArrowUpRight
                  size={14}
                />
              </a>


              <a href="/services">
                <span>
                  Cybersecurity Services
                </span>

                <ArrowUpRight
                  size={14}
                />
              </a>

            </div>

          </div>


          {/* =================================================
              CONTACT
          ================================================== */}

          <div className="nerdsFooterColumn nerdsFooterContact">

            <h3>
              Contact Info
            </h3>


            <a
              className="nerdsFooterContactItem nerdsFooterContactItem--address"
              href="https://maps.google.com/?q=Vetri+E-Square+Muthamilarignar+Kalaignar+Mu+Karunanidhi+Arangam+New+Bus+Stand+Thanjavur"
              target="_blank"
              rel="noreferrer"
            >

              <span className="nerdsFooterContactIcon">
                <MapPin
                  size={21}
                  strokeWidth={2}
                />
              </span>


              <span>
                Vetri E-Square,
                Muthamilarignar Kalaignar
                Mu Karunanidhi Arangam,
                New Bus Stand, Vallam Quarry Road,
                Thanjavur – 613 005
              </span>

            </a>


            <a
              className="nerdsFooterContactItem"
              href="tel:+918681008888"
            >

              <span className="nerdsFooterContactIcon">
                <Phone
                  size={19}
                  strokeWidth={2}
                />
              </span>

              <span>
                +91 86810 08888
              </span>

            </a>


            <a
              className="nerdsFooterContactItem"
              href="mailto:hello@nerdshive.in"
            >

              <span className="nerdsFooterContactIcon">
                <Mail
                  size={19}
                  strokeWidth={2}
                />
              </span>

              <span>
                hello@nerdshive.in
              </span>

            </a>

          </div>

        </div>


        {/* ===================================================
            DIVIDER
        ==================================================== */}

        <div className="nerdsFooterDivider">

          <span />

          <i />

          <span />

        </div>


        {/* ===================================================
            BOTTOM
        ==================================================== */}

        <div className="nerdsFooterBottom">

          <nav className="nerdsFooterLegal">

            <a href="/terms">
              Terms of Service
            </a>

            <a href="/privacy">
              Privacy Policy
            </a>

            <a href="/faq">
              FAQ
            </a>

            <a href="/franchise">
              Franchise
            </a>

          </nav>


          <p>
            © {currentYear} NerdsHive.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};


export default Footer;