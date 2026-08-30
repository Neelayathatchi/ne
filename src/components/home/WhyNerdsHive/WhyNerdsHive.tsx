import {
  MouseEvent,
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowUpRight,
  Building2,
  Network,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import "./WhyNerdsHive.css";


gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   FEATURE DATA
========================================================= */

const reasons = [
  {
    id: "01",
    kicker: "SPACE",
    title: "Flexible Workspaces",
    text:
      "Choose the environment that matches your day — from focused cabins to collaborative spaces.",
    icon: Building2,
    className: "whyHiveCard--one",
  },

  {
    id: "02",
    kicker: "PEOPLE",
    title: "A Growing Community",
    text:
      "Work around founders, creators, professionals and teams who are building meaningful things.",
    icon: Users,
    className: "whyHiveCard--two",
  },

  {
    id: "03",
    kicker: "CONNECTION",
    title: "Ideas Meet Opportunity",
    text:
      "A workspace designed to make conversations, collaborations and professional connections easier.",
    icon: Network,
    className: "whyHiveCard--three",
  },

  {
    id: "04",
    kicker: "MOMENTUM",
    title: "Built for Growth",
    text:
      "Reliable facilities, focused environments and a professional ecosystem that helps work move forward.",
    icon: Zap,
    className: "whyHiveCard--four",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

const WhyNerdsHive = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const beeRef =
    useRef<HTMLDivElement | null>(null);


  /* =========================================================
     GSAP SCROLL ANIMATION
  ========================================================= */

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;


    const context =
      gsap.context(() => {

        /* -----------------------------------------------
           EYEBROW
        ----------------------------------------------- */

        gsap.fromTo(
          ".whyHiveEyebrow",
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,

            duration: 0.7,

            ease:
              "power3.out",

            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          }
        );


        /* -----------------------------------------------
           TITLE
        ----------------------------------------------- */

        gsap.fromTo(
          ".whyHiveTitleLine",
          {
            opacity: 0,
            y: 70,
            rotateX: -18,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,

            stagger: 0.12,

            duration: 0.9,

            ease:
              "back.out(1.3)",

            scrollTrigger: {
              trigger:
                ".whyHiveTitle",

              start:
                "top 86%",

              once: true,
            },
          }
        );


        /* -----------------------------------------------
           BODY COPY
        ----------------------------------------------- */

        gsap.fromTo(
          ".whyHiveIntro",
          {
            opacity: 0,
            y: 28,
          },
          {
            opacity: 1,
            y: 0,

            duration: 0.75,

            ease:
              "power3.out",

            scrollTrigger: {
              trigger:
                ".whyHiveIntro",

              start:
                "top 90%",

              once: true,
            },
          }
        );


        /* -----------------------------------------------
           BIG BEE
        ----------------------------------------------- */

        gsap.fromTo(
          ".whyHiveBee",
          {
            opacity: 0,
            scale: 0.55,
            x: 140,
            rotate: 18,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            rotate: 0,

            duration: 1.1,

            ease:
              "back.out(1.8)",

            scrollTrigger: {
              trigger:
                ".whyHiveVisual",

              start:
                "top 82%",

              once: true,
            },
          }
        );


        /* -----------------------------------------------
           HONEY CELLS
        ----------------------------------------------- */

        gsap.fromTo(
          ".whyHiveHoneyCell",
          {
            opacity: 0,
            scale: 0,
            rotate: -25,
          },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,

            stagger: {
              each: 0.08,
              from: "center",
            },

            duration: 0.65,

            ease:
              "back.out(1.8)",

            scrollTrigger: {
              trigger:
                ".whyHiveVisual",

              start:
                "top 80%",

              once: true,
            },
          }
        );


        /* -----------------------------------------------
           FEATURE CARDS
        ----------------------------------------------- */

        gsap.fromTo(
          ".whyHiveCard",
          {
            opacity: 0,
            y: 65,
            scale: 0.92,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,

            stagger: 0.1,

            duration: 0.8,

            ease:
              "back.out(1.25)",

            scrollTrigger: {
              trigger:
                ".whyHiveCards",

              start:
                "top 84%",

              once: true,
            },
          }
        );


        /* -----------------------------------------------
           CTA
        ----------------------------------------------- */

        gsap.fromTo(
          ".whyHiveCTA",
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,

            duration: 0.75,

            ease:
              "power3.out",

            scrollTrigger: {
              trigger:
                ".whyHiveCTA",

              start:
                "top 94%",

              once: true,
            },
          }
        );


        /* -----------------------------------------------
           BACKGROUND GHOST TEXT
        ----------------------------------------------- */

        gsap.to(
          ".whyHiveGhost",
          {
            y: -65,

            ease: "none",

            scrollTrigger: {
              trigger: section,

              start:
                "top bottom",

              end:
                "bottom top",

              scrub: 1.2,
            },
          }
        );

      }, section);


    return () => {
      context.revert();
    };
  }, []);


  /* =========================================================
     CARD 3D TILT
  ========================================================= */

  const handleCardMove = (
    event: MouseEvent<HTMLElement>
  ) => {
    const card =
      event.currentTarget;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left;

    const y =
      event.clientY -
      rect.top;

    const px =
      x / rect.width -
      0.5;

    const py =
      y / rect.height -
      0.5;


    card.style.setProperty(
      "--card-rx",
      `${py * -5}deg`
    );

    card.style.setProperty(
      "--card-ry",
      `${px * 6}deg`
    );

    card.style.setProperty(
      "--glow-x",
      `${x}px`
    );

    card.style.setProperty(
      "--glow-y",
      `${y}px`
    );
  };


  const handleCardLeave = (
    event: MouseEvent<HTMLElement>
  ) => {
    const card =
      event.currentTarget;

    card.style.setProperty(
      "--card-rx",
      "0deg"
    );

    card.style.setProperty(
      "--card-ry",
      "0deg"
    );
  };


  /* =========================================================
     BEE POINTER REACTION
  ========================================================= */

  const handleVisualMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    if (!beeRef.current) return;

    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left;

    const y =
      event.clientY -
      rect.top;

    const px =
      x / rect.width -
      0.5;

    const py =
      y / rect.height -
      0.5;


    gsap.to(
      beeRef.current,
      {
        x:
          px *
          22,

        y:
          py *
          16,

        rotate:
          px *
          5,

        duration: 0.5,

        ease:
          "power3.out",
      }
    );
  };


  const handleVisualLeave = () => {
    if (!beeRef.current) return;

    gsap.to(
      beeRef.current,
      {
        x: 0,
        y: 0,
        rotate: 0,

        duration: 0.6,

        ease:
          "power3.out",
      }
    );
  };


  return (
    <section
      ref={sectionRef}
      id="why-nerdshive"
      className="whyHiveSection"
    >

      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        className="whyHiveGhost"
        aria-hidden="true"
      >
        WHY
      </div>


      <div
        className="whyHiveDots whyHiveDots--top"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>


      <div
        className="whyHiveDots whyHiveDots--bottom"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>


      <div className="whyHiveContainer">


        {/* ===================================================
            TOP AREA
        ==================================================== */}

        <div className="whyHiveTop">


          {/* =================================================
              LEFT COPY
          ================================================== */}

          <div className="whyHiveCopy">

            <div className="whyHiveEyebrow">

              <span />

              <strong>
                WHY NERDSHIVE?
              </strong>

              <span />

            </div>


            <h2 className="whyHiveTitle">

              <span className="whyHiveTitleLine">
                Work Better.
              </span>

              <span className="whyHiveTitleLine whyHiveTitleLine--yellow">
                Grow Together.
              </span>

            </h2>


            <p className="whyHiveIntro">
              NerdsHive brings flexible
              workspaces, professional
              facilities and an ambitious
              community together in one place
              — so your everyday work has the
              environment it deserves.
            </p>


            <a
              href="#contact"
              className="whyHiveCTA"
            >

              <span>
                Find Your Space
              </span>


              <b>

                <ArrowUpRight
                  size={19}
                  strokeWidth={2.3}
                />

              </b>

            </a>

          </div>


          {/* =================================================
              BIG BEE VISUAL
          ================================================== */}

          <div
            className="whyHiveVisual"
            onMouseMove={
              handleVisualMove
            }
            onMouseLeave={
              handleVisualLeave
            }
          >

            {/* ===============================================
                HONEY CELLS
            ================================================ */}

            <span className="whyHiveHoneyCell whyHiveHoneyCell--1" />
            <span className="whyHiveHoneyCell whyHiveHoneyCell--2" />
            <span className="whyHiveHoneyCell whyHiveHoneyCell--3" />
            <span className="whyHiveHoneyCell whyHiveHoneyCell--4" />
            <span className="whyHiveHoneyCell whyHiveHoneyCell--5" />
            <span className="whyHiveHoneyCell whyHiveHoneyCell--6" />
            <span className="whyHiveHoneyCell whyHiveHoneyCell--7" />


            {/* ===============================================
                ORBIT
            ================================================ */}

            <div className="whyHiveBeeOrbit">

              <span />

            </div>


            {/* ===============================================
                BIG CUTE BEE
            ================================================ */}

            <div
              ref={beeRef}
              className="whyHiveBee"
            >

              <div className="whyHiveBeeShadow" />


              {/* LEFT WING */}

              <div className="whyHiveBeeWing whyHiveBeeWing--left">

                <span />

              </div>


              {/* RIGHT WING */}

              <div className="whyHiveBeeWing whyHiveBeeWing--right">

                <span />

              </div>


              {/* BODY */}

              <div className="whyHiveBeeBody">


                {/* ANTENNA */}

                <span className="whyHiveAntenna whyHiveAntenna--left" />
                <span className="whyHiveAntenna whyHiveAntenna--right" />


                {/* FACE */}

                <div className="whyHiveBeeFace">

                  <span className="whyHiveBeeEye whyHiveBeeEye--left">
                    <i />
                  </span>

                  <span className="whyHiveBeeEye whyHiveBeeEye--right">
                    <i />
                  </span>

                  <span className="whyHiveBeeSmile" />

                </div>


                {/* STRIPES */}

                <span className="whyHiveBeeStripe whyHiveBeeStripe--1" />
                <span className="whyHiveBeeStripe whyHiveBeeStripe--2" />


                {/* TAIL */}

                <span className="whyHiveBeeTail" />

              </div>


              {/* LITTLE SPARK */}

              <div className="whyHiveBeeSpark">

                <Sparkles
                  size={22}
                  strokeWidth={2}
                />

              </div>

            </div>


            {/* ===============================================
                SMALL LABEL
            ================================================ */}

            <div className="whyHiveBeeLabel">

              <span>
                ONE
              </span>

              <strong>
                HIVE
              </strong>

            </div>

          </div>

        </div>


        {/* ===================================================
            FEATURE CARDS
        ==================================================== */}

        <div className="whyHiveCards">

          {reasons.map(
            (
              reason
            ) => {

              const Icon =
                reason.icon;


              return (
                <article
                  key={
                    reason.id
                  }

                  className={
                    `whyHiveCard ${reason.className}`
                  }

                  onMouseMove={
                    handleCardMove
                  }

                  onMouseLeave={
                    handleCardLeave
                  }
                >

                  {/* =========================================
                      HOVER LIGHT
                  ========================================== */}

                  <div className="whyHiveCardLight" />


                  {/* =========================================
                      TOP
                  ========================================== */}

                  <div className="whyHiveCardTop">

                    <span className="whyHiveCardNumber">
                      {
                        reason.id
                      }
                    </span>


                    <div className="whyHiveCardIcon">

                      <Icon
                        size={29}
                        strokeWidth={1.8}
                      />

                    </div>

                  </div>


                  {/* =========================================
                      CONTENT
                  ========================================== */}

                  <div className="whyHiveCardBody">

                    <span className="whyHiveCardKicker">
                      {
                        reason.kicker
                      }
                    </span>


                    <h3>
                      {
                        reason.title
                      }
                    </h3>


                    <p>
                      {
                        reason.text
                      }
                    </p>

                  </div>


                  {/* =========================================
                      BOTTOM
                  ========================================== */}

                  <div className="whyHiveCardBottom">

                    <span>
                      DISCOVER
                    </span>


                    <b>

                      <ArrowUpRight
                        size={17}
                        strokeWidth={2.2}
                      />

                    </b>

                  </div>


                  <span className="whyHiveCardEdge" />

                </article>
              );
            }
          )}

        </div>


        {/* ===================================================
            BOTTOM STATEMENT
        ==================================================== */}

        <div className="whyHiveBottom">

          <span />

          <strong>
            SPACE
          </strong>

          <i />

          <strong>
            PEOPLE
          </strong>

          <i />

          <strong>
            IDEAS
          </strong>

          <i />

          <strong>
            GROWTH
          </strong>

          <span />

        </div>

      </div>

    </section>
  );
};


export default WhyNerdsHive;