import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";

import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

import {
  ArrowRight,
} from "lucide-react";

import "./HiveStory.css";


gsap.registerPlugin(
  ScrollTrigger
);


/* =========================================================
   HIVE DATA
========================================================= */

const hiveCells = [
  {
    id: 1,
    label: "FOUNDERS",
    className:
      "hiveStoryCell--1",
  },

  {
    id: 2,
    label: "CREATORS",
    className:
      "hiveStoryCell--2",
  },

  {
    id: 3,
    label: "STARTUPS",
    className:
      "hiveStoryCell--3",
  },

  {
    id: 4,
    label: "TEAMS",
    className:
      "hiveStoryCell--4",
  },

  {
    id: 5,
    label: "IDEAS",
    className:
      "hiveStoryCell--5",
  },

  {
    id: 6,
    label: "BUILDERS",
    className:
      "hiveStoryCell--6",
  },

  {
    id: 7,
    label: "BUSINESSES",
    className:
      "hiveStoryCell--7",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

const HiveStory = () => {
  const sectionRef =
    useRef<HTMLElement | null>(
      null
    );

  const networkRef =
    useRef<HTMLDivElement | null>(
      null
    );


  /* =========================================================
     ADVANCED SCROLL ANIMATION
  ========================================================= */

  useEffect(() => {
    const section =
      sectionRef.current;

    const network =
      networkRef.current;


    if (
      !section ||
      !network
    ) {
      return;
    }


    const ctx =
      gsap.context(
        () => {

          /* =================================================
             LEFT EYEBROW
          ================================================= */

          gsap.from(
            ".hiveStoryEyebrow",
            {
              opacity: 0,

              y: 30,

              scale: 0.96,

              duration: 0.75,

              ease:
                "power3.out",

              scrollTrigger: {
                trigger: section,

                start:
                  "top 80%",
              },
            }
          );


          /* =================================================
             BIG TITLE JUMP
          ================================================= */

          gsap.from(
            ".hiveStoryTitleLine",
            {
              opacity: 0,

              y: 100,

              scale: 0.82,

              rotateX: 15,

              transformOrigin:
                "bottom left",

              stagger: 0.14,

              duration: 0.95,

              ease:
                "back.out(1.35)",

              scrollTrigger: {
                trigger:
                  ".hiveStoryTitle",

                start:
                  "top 84%",
              },
            }
          );


          /* =================================================
             PARAGRAPH + STATS + CTA
          ================================================= */

          gsap.from(
            [
              ".hiveStoryBody",
              ".hiveStoryStats",
              ".hiveStoryCTA",
            ],
            {
              opacity: 0,

              y: 38,

              stagger: 0.14,

              duration: 0.8,

              ease:
                "power3.out",

              scrollTrigger: {
                trigger:
                  ".hiveStoryBody",

                start:
                  "top 88%",
              },
            }
          );


          /* =================================================
             NETWORK APPEAR
          ================================================= */

          gsap.from(
            network,
            {
              opacity: 0,

              scale: 0.88,

              rotate: -2,

              duration: 1.05,

              ease:
                "power4.out",

              scrollTrigger: {
                trigger: network,

                start:
                  "top 84%",
              },
            }
          );


          /* =================================================
             CENTER HIVE ASSEMBLE
          ================================================= */

          gsap.from(
            ".hiveStoryCore",
            {
              opacity: 0,

              scale: 0.25,

              rotate: -18,

              duration: 1,

              ease:
                "back.out(1.7)",

              scrollTrigger: {
                trigger: network,

                start:
                  "top 82%",
              },
            }
          );


          /* =================================================
             CENTER WORDS JUMP
          ================================================= */

          gsap.from(
            [
              ".hiveStoryCore__eyebrow",
              ".hiveStoryCore strong",
              ".hiveStoryCore small",
            ],
            {
              opacity: 0,

              y: -35,

              scale: 0.65,

              stagger: 0.16,

              delay: 0.45,

              duration: 0.72,

              ease:
                "back.out(2)",

              scrollTrigger: {
                trigger: network,

                start:
                  "top 82%",
              },
            }
          );


          /* =================================================
             OUTER CUBES ASSEMBLE
          ================================================= */

          const cells =
            gsap.utils.toArray<HTMLElement>(
              ".hiveStoryCell"
            );


          const directions = [
            {
              x: -165,
              y: -120,
            },

            {
              x: 0,
              y: -175,
            },

            {
              x: 165,
              y: -120,
            },

            {
              x: 195,
              y: 0,
            },

            {
              x: 145,
              y: 155,
            },

            {
              x: -140,
              y: 160,
            },

            {
              x: -190,
              y: 0,
            },
          ];


          cells.forEach(
            (
              cell,
              index
            ) => {
              const direction =
                directions[index];


              gsap.from(
                cell,
                {
                  opacity: 0,

                  x:
                    direction.x,

                  y:
                    direction.y,

                  scale: 0.55,

                  rotate:
                    index % 2 === 0
                      ? -17
                      : 17,

                  duration: 1.05,

                  delay:
                    index *
                    0.07,

                  ease:
                    "back.out(1.55)",

                  scrollTrigger: {
                    trigger: network,

                    start:
                      "top 80%",
                  },
                }
              );
            }
          );


          /* =================================================
             WORDS INSIDE EVERY CUBE
             JUMP ONE BY ONE
          ================================================= */

          const cellContents =
            gsap.utils.toArray<HTMLElement>(
              ".hiveStoryCellContent"
            );


          cellContents.forEach(
            (
              content,
              index
            ) => {
              const items =
                content.querySelectorAll(
                  ".hiveStoryCell__number, .hiveStoryCell__label, .hiveStoryCell__line"
                );


              gsap.from(
                items,
                {
                  opacity: 0,

                  y: -34,

                  scale: 0.55,

                  rotate:
                    -5,

                  stagger: 0.1,

                  delay:
                    0.5 +
                    index *
                      0.07,

                  duration: 0.65,

                  ease:
                    "back.out(2.1)",

                  scrollTrigger: {
                    trigger: network,

                    start:
                      "top 80%",
                  },
                }
              );
            }
          );


          /* =================================================
             CONNECTION LINES DRAW
          ================================================= */

          gsap.fromTo(
            ".hiveStoryLine",

            {
              strokeDasharray:
                520,

              strokeDashoffset:
                520,

              opacity: 0,
            },

            {
              strokeDashoffset:
                0,

              opacity: 1,

              duration: 1.35,

              stagger: 0.07,

              delay: 0.15,

              ease:
                "power2.out",

              scrollTrigger: {
                trigger: network,

                start:
                  "top 80%",
              },
            }
          );


          /* =================================================
             RINGS SCALE IN
          ================================================= */

          gsap.from(
            ".hiveStoryNetwork__halo",
            {
              opacity: 0,

              scale: 0.65,

              stagger: 0.14,

              duration: 1.25,

              ease:
                "power3.out",

              scrollTrigger: {
                trigger: network,

                start:
                  "top 82%",
              },
            }
          );


          /* =================================================
             GHOST WORD PARALLAX
          ================================================= */

          gsap.to(
            ".hiveStoryGhost--left",
            {
              y: -45,

              scrollTrigger: {
                trigger: section,

                start:
                  "top bottom",

                end:
                  "bottom top",

                scrub: 1.1,
              },
            }
          );


          gsap.to(
            ".hiveStoryGhost--right",
            {
              y: 45,

              scrollTrigger: {
                trigger: section,

                start:
                  "top bottom",

                end:
                  "bottom top",

                scrub: 1.1,
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


  return (
    <section
      ref={sectionRef}
      id="home-story"
      className="hiveStory"
    >

      {/* =====================================================
          BACKGROUND GHOST WORDS
      ====================================================== */}

      <div
        className="hiveStoryGhost hiveStoryGhost--left"
        aria-hidden="true"
      >
        BUILD
      </div>


      <div
        className="hiveStoryGhost hiveStoryGhost--right"
        aria-hidden="true"
      >
        GROW
      </div>


      {/* =====================================================
          SMALL TOP DECOR
      ====================================================== */}

      <div
        className="hiveStoryTopDots"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
        <span />
      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="hiveStoryContainer">


        {/* ===================================================
            LEFT
        ==================================================== */}

        <div className="hiveStoryCopy">


          <div className="hiveStoryEyebrow">

            <span />

            <strong>
              MORE THAN A WORKSPACE
            </strong>

          </div>


          <h2 className="hiveStoryTitle">

            <span className="hiveStoryTitleLine">
              Many
            </span>


            <span className="hiveStoryTitleLine">
              Businesses.
            </span>


            <span className="hiveStoryTitleLine hiveStoryTitleLine--accent">
              One Hive.
            </span>

          </h2>


          <p className="hiveStoryBody">
            NerdsHive brings ambitious people,
            growing businesses and creative teams
            into one professional environment
            where work, ideas and meaningful
            connections can move forward together.
          </p>


          <div className="hiveStoryStats">

            <div>

              <strong>
                ONE
              </strong>

              <span>
                Connected Environment
              </span>

            </div>


            <i />


            <div>

              <strong>
                MANY
              </strong>

              <span>
                Ways to Work & Grow
              </span>

            </div>

          </div>


          <a
            href="#spaces-preview"
            className="hiveStoryCTA"
          >

            <span>
              Discover the Hive
            </span>


            <b>

              <ArrowRight
                size={18}
                strokeWidth={2.4}
              />

            </b>

          </a>

        </div>


        {/* ===================================================
            RIGHT HIVE SYSTEM
        ==================================================== */}

        <div
          ref={networkRef}
          className="hiveStoryNetwork"
        >


          {/* ===============================================
              YELLOW RINGS
          ================================================ */}

          <div className="hiveStoryNetwork__halo hiveStoryNetwork__halo--outer" />

          <div className="hiveStoryNetwork__halo hiveStoryNetwork__halo--middle" />

          <div className="hiveStoryNetwork__halo hiveStoryNetwork__halo--inner" />


          {/* ===============================================
              CONNECTION LINES
          ================================================ */}

          <svg
            className="hiveStoryLines"
            viewBox="0 0 700 700"
            aria-hidden="true"
          >

            <path
              className="hiveStoryLine"
              d="M350 350 L155 155"
            />

            <path
              className="hiveStoryLine"
              d="M350 350 L350 80"
            />

            <path
              className="hiveStoryLine"
              d="M350 350 L545 155"
            />

            <path
              className="hiveStoryLine"
              d="M350 350 L605 350"
            />

            <path
              className="hiveStoryLine"
              d="M350 350 L520 570"
            />

            <path
              className="hiveStoryLine"
              d="M350 350 L190 585"
            />

            <path
              className="hiveStoryLine"
              d="M350 350 L85 365"
            />

          </svg>


          {/* ===============================================
              CENTER HIVE
          ================================================ */}

          <div className="hiveStoryCore">

            <span className="hiveStoryCore__eyebrow">
              ONE
            </span>


            <strong>
              HIVE
            </strong>


            <small>
              CONNECT • CREATE • GROW
            </small>


            <span className="hiveStoryCore__pulse hiveStoryCore__pulse--1" />

            <span className="hiveStoryCore__pulse hiveStoryCore__pulse--2" />

          </div>


          {/* ===============================================
              ALL YELLOW CUBES
          ================================================ */}

          {hiveCells.map(
            (
              cell,
              index
            ) => (
              <div
                key={
                  cell.id
                }

                className={
                  `hiveStoryCell ${cell.className}`
                }

                style={{
                  animationDelay:
                    `${index * -0.5}s`,
                }}
              >

                <div className="hiveStoryCellContent">

                  <span className="hiveStoryCell__number">

                    {String(
                      cell.id
                    ).padStart(
                      2,
                      "0"
                    )}

                  </span>


                  <strong className="hiveStoryCell__label">
                    {cell.label}
                  </strong>


                  <i className="hiveStoryCell__line" />

                </div>

              </div>
            )
          )}


          {/* ===============================================
              ORBITING BEE
          ================================================ */}

          <div
            className="hiveStoryBeeOrbit"
            aria-hidden="true"
          >

            <div className="hiveStoryBee">

              <span className="hiveStoryBee__wing hiveStoryBee__wing--left" />

              <span className="hiveStoryBee__wing hiveStoryBee__wing--right" />


              <span className="hiveStoryBee__body">

                <i />

                <i />

              </span>


              <span className="hiveStoryBee__head">

                <b />

                <b />

              </span>

            </div>

          </div>


          {/* ===============================================
              MINI HONEY DECOR
          ================================================ */}

          <div
            className="hiveStoryMiniHive"
            aria-hidden="true"
          >

            <span />

            <span />

            <span />

          </div>

        </div>

      </div>

    </section>
  );
};


export default HiveStory;