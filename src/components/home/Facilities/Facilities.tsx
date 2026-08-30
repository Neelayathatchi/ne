import {
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";

import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

import {
  Wifi,
  Zap,
  UsersRound,
  Snowflake,
  Camera,
  Coffee,
  Printer,
  Sparkles,
  ShieldCheck,
  Network,
  ChevronUp,
} from "lucide-react";

import "./Facilities.css";


gsap.registerPlugin(
  ScrollTrigger
);


/* =========================================================
   FACILITY DATA
========================================================= */

const facilities = [
  {
    id: 1,
    title: "High-Speed WiFi",
    shortTitle: "WiFi",
    description:
      "Ultra-fast internet connectivity for seamless work, meetings and collaboration.",
    Icon: Wifi,
  },

  {
    id: 2,
    title: "Power Backup",
    shortTitle: "Power",
    description:
      "Reliable uninterrupted power support to help your work continue without disruption.",
    Icon: Zap,
  },

  {
    id: 3,
    title: "Meeting Rooms",
    shortTitle: "Meet",
    description:
      "Professional spaces designed for client meetings, discussions and team collaboration.",
    Icon: UsersRound,
  },

  {
    id: 4,
    title: "Air-Conditioned",
    shortTitle: "Comfort",
    description:
      "A climate-controlled workspace created for productive and comfortable working hours.",
    Icon: Snowflake,
  },

  {
    id: 5,
    title: "Security Cameras",
    shortTitle: "Secure",
    description:
      "Monitored workspace security designed to create a safer professional environment.",
    Icon: Camera,
  },

  {
    id: 6,
    title: "Pantry Services",
    shortTitle: "Refresh",
    description:
      "A convenient pantry area with refreshments for quick breaks during your workday.",
    Icon: Coffee,
  },

  {
    id: 7,
    title: "Printing & Scanning",
    shortTitle: "Print",
    description:
      "Easy access to printing and scanning facilities for everyday professional requirements.",
    Icon: Printer,
  },

  {
    id: 8,
    title: "Daily Cleaning",
    shortTitle: "Clean",
    description:
      "Regular housekeeping helps maintain a clean, organised and professional workspace.",
    Icon: Sparkles,
  },

  {
    id: 9,
    title: "Cybersecurity Services",
    shortTitle: "Protect",
    description:
      "Added digital-security support for members who need a safer technology environment.",
    Icon: ShieldCheck,
  },

  {
    id: 10,
    title: "Networking Opportunities",
    shortTitle: "Connect",
    description:
      "Connect with entrepreneurs, startups, professionals and growing businesses inside the Hive.",
    Icon: Network,
  },
];


/* =========================================================
   COMPONENT
========================================================= */

const Facilities = () => {
  const sectionRef =
    useRef<HTMLElement | null>(
      null
    );

  const [
    openedCard,
    setOpenedCard,
  ] = useState<number | null>(
    null
  );


  /* =========================================================
     SCROLL ANIMATIONS
  ========================================================= */

  useEffect(() => {
    const section =
      sectionRef.current;


    if (!section) {
      return;
    }


    const ctx =
      gsap.context(
        () => {

          /* -----------------------------------------------
             EYEBROW
          ----------------------------------------------- */

          gsap.from(
            ".facilitiesEyebrow",
            {
              opacity: 0,

              y: 28,

              duration: 0.7,

              ease:
                "power3.out",

              scrollTrigger: {
                trigger: section,

                start:
                  "top 80%",
              },
            }
          );


          /* -----------------------------------------------
             TITLE
          ----------------------------------------------- */

          gsap.from(
            ".facilitiesTitleWord",
            {
              opacity: 0,

              y: 55,

              scale: 0.86,

              stagger: 0.1,

              duration: 0.8,

              ease:
                "back.out(1.5)",

              scrollTrigger: {
                trigger:
                  ".facilitiesTitle",

                start:
                  "top 84%",
              },
            }
          );


          /* -----------------------------------------------
             DESCRIPTION
          ----------------------------------------------- */

          gsap.from(
            ".facilitiesIntro",
            {
              opacity: 0,

              y: 24,

              duration: 0.75,

              delay: 0.15,

              ease:
                "power3.out",

              scrollTrigger: {
                trigger:
                  ".facilitiesIntro",

                start:
                  "top 88%",
              },
            }
          );


          /* -----------------------------------------------
             CARDS
          ----------------------------------------------- */

          gsap.from(
            ".facilityCard",
            {
              opacity: 0,

              y: 70,

              scale: 0.9,

              rotateX: 8,

              transformOrigin:
                "bottom center",

              stagger: {
                each: 0.08,

                from: "start",
              },

              duration: 0.8,

              ease:
                "back.out(1.3)",

              scrollTrigger: {
                trigger:
                  ".facilitiesGrid",

                start:
                  "top 84%",
              },
            }
          );


          /* -----------------------------------------------
             BOTTOM LINE
          ----------------------------------------------- */

          gsap.from(
            ".facilitiesBottomLine",
            {
              scaleX: 0,

              transformOrigin:
                "left center",

              duration: 1.2,

              ease:
                "power3.inOut",

              scrollTrigger: {
                trigger:
                  ".facilitiesGrid",

                start:
                  "bottom 92%",
              },
            }
          );

        },

        section
      );


    return () => {
      ctx.revert();
    };
  }, []);


  /* =========================================================
     MOBILE / CLICK TOGGLE
  ========================================================= */

  const handleCardClick =
    (
      id: number
    ) => {
      setOpenedCard(
        (
          current
        ) =>
          current === id
            ? null
            : id
      );
    };


  return (
    <section
      ref={sectionRef}
      id="facilities"
      className="facilitiesSection"
    >

      {/* =====================================================
          SMALL TOP DECORATION
      ====================================================== */}

      <div
        className="facilitiesDots facilitiesDots--left"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>


      <div
        className="facilitiesDots facilitiesDots--right"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>


      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="facilitiesContainer">


        {/* ===================================================
            HEADER
        ==================================================== */}

        <header className="facilitiesHeader">

          <div className="facilitiesEyebrow">

            <span className="facilitiesEyebrowHex" />

            <strong>
              BUILT FOR BETTER WORK
            </strong>

            <span className="facilitiesEyebrowHex" />

          </div>


          <h2 className="facilitiesTitle">

            <span className="facilitiesTitleWord">
              World-Class
            </span>

            {" "}

            <span className="facilitiesTitleWord facilitiesTitleWord--yellow">
              Facilities
            </span>

          </h2>


          <p className="facilitiesIntro">
            Everything you need to work
            productively, comfortably and
            confidently inside the Hive.
          </p>

        </header>


        {/* ===================================================
            GRID
        ==================================================== */}

        <div className="facilitiesGrid">

          {facilities.map(
            (
              facility,
              index
            ) => {

              const Icon =
                facility.Icon;

              const isOpen =
                openedCard ===
                facility.id;


              return (
                <article
                  key={
                    facility.id
                  }

                  className={
                    `facilityCard ${
                      isOpen
                        ? "facilityCard--open"
                        : ""
                    }`
                  }

                  onClick={
                    () =>
                      handleCardClick(
                        facility.id
                      )
                  }

                  tabIndex={0}

                  role="button"

                  aria-expanded={
                    isOpen
                  }

                  onKeyDown={
                    (
                      event
                    ) => {

                      if (
                        event.key ===
                          "Enter" ||
                        event.key ===
                          " "
                      ) {
                        event.preventDefault();

                        handleCardClick(
                          facility.id
                        );
                      }

                    }
                  }
                >


                  {/* =========================================
                      INNER CONTENT
                  ========================================== */}

                  <div className="facilityCardInner">

                    <span className="facilityCardNumber">

                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}

                    </span>


                    <div className="facilityInnerIcon">

                      <Icon
                        size={31}
                        strokeWidth={1.8}
                      />

                    </div>


                    <h3>
                      {facility.title}
                    </h3>


                    <p>
                      {
                        facility.description
                      }
                    </p>


                    <div className="facilityCardStatus">

                      <span>
                        INCLUDED
                      </span>

                      <i />

                    </div>

                  </div>


                  {/* =========================================
                      SLIDING COVER
                  ========================================== */}

                  <div className="facilityCardCover">

                    <div className="facilityCoverPattern">

                      <span />

                      <span />

                      <span />

                    </div>


                    <div className="facilityCoverIcon">

                      <Icon
                        size={43}
                        strokeWidth={1.85}
                      />

                    </div>


                    <strong>
                      {
                        facility.shortTitle
                      }
                    </strong>


                    <span className="facilityCoverHint">
                      SLIDE TO DISCOVER
                    </span>


                    <div className="facilityCoverArrow">

                      <ChevronUp
                        size={18}
                        strokeWidth={2.2}
                      />

                    </div>

                  </div>

                </article>
              );
            }
          )}

        </div>


        {/* ===================================================
            FOOT DECOR
        ==================================================== */}

        <div className="facilitiesFooterDetail">

          <span className="facilitiesBottomLine" />

          <div>

            <span />

            <strong>
              EVERYTHING IN ONE HIVE
            </strong>

          </div>

          <span className="facilitiesBottomLine" />

        </div>

      </div>

    </section>
  );
};


export default Facilities;