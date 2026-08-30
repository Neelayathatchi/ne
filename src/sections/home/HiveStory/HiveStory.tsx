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
   HIVE CELL DATA
========================================================= */

const hiveCells = [
  {
    id: 1,
    label: "FOUNDERS",
    className: "hiveStoryCell--1",
  },

  {
    id: 2,
    label: "CREATORS",
    className: "hiveStoryCell--2",
  },

  {
    id: 3,
    label: "STARTUPS",
    className: "hiveStoryCell--3",
  },

  {
    id: 4,
    label: "TEAMS",
    className: "hiveStoryCell--4",
  },

  {
    id: 5,
    label: "IDEAS",
    className: "hiveStoryCell--5",
  },

  {
    id: 6,
    label: "BUILDERS",
    className: "hiveStoryCell--6",
  },

  {
    id: 7,
    label: "BUSINESSES",
    className: "hiveStoryCell--7",
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
     SCROLL ANIMATION
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

          /* -----------------------------------------------
             LEFT TEXT REVEAL
          ----------------------------------------------- */

          gsap.from(
            ".hiveStoryEyebrow",
            {
              opacity: 0,

              y: 26,

              duration: 0.75,

              ease: "power3.out",

              scrollTrigger: {
                trigger: section,

                start: "top 80%",
              },
            }
          );


          gsap.from(
            ".hiveStoryTitleLine",
            {
              opacity: 0,

              y: 80,

              rotateX: 13,

              transformOrigin:
                "bottom",

              stagger: 0.13,

              duration: 0.95,

              ease: "power4.out",

              scrollTrigger: {
                trigger:
                  ".hiveStoryTitle",

                start:
                  "top 82%",
              },
            }
          );


          gsap.from(
            [
              ".hiveStoryBody",
              ".hiveStoryStats",
              ".hiveStoryCTA",
            ],
            {
              opacity: 0,

              y: 32,

              stagger: 0.12,

              duration: 0.8,

              ease: "power3.out",

              scrollTrigger: {
                trigger:
                  ".hiveStoryBody",

                start:
                  "top 86%",
              },
            }
          );


          /* -----------------------------------------------
             NETWORK
          ----------------------------------------------- */

          gsap.from(
            ".hiveStoryNetwork",
            {
              opacity: 0,

              scale: 0.9,

              duration: 1,

              ease: "power4.out",

              scrollTrigger: {
                trigger: network,

                start: "top 84%",
              },
            }
          );


          /* -----------------------------------------------
             CENTER CORE
          ----------------------------------------------- */

          gsap.from(
            ".hiveStoryCore",
            {
              opacity: 0,

              scale: 0.4,

              rotate: -14,

              duration: 0.95,

              ease:
                "back.out(1.6)",

              scrollTrigger: {
                trigger: network,

                start: "top 80%",
              },
            }
          );


          /* -----------------------------------------------
             HIVE CELLS
          ----------------------------------------------- */

          const cells =
            gsap.utils.toArray<HTMLElement>(
              ".hiveStoryCell"
            );


          const positions = [
            {
              x: -130,
              y: -100,
            },

            {
              x: 0,
              y: -145,
            },

            {
              x: 135,
              y: -100,
            },

            {
              x: 165,
              y: 0,
            },

            {
              x: 125,
              y: 130,
            },

            {
              x: -120,
              y: 135,
            },

            {
              x: -155,
              y: 0,
            },
          ];


          cells.forEach(
            (
              cell,
              index
            ) => {

              const pos =
                positions[index];


              gsap.from(
                cell,
                {
                  opacity: 0,

                  x: pos.x,

                  y: pos.y,

                  scale: 0.7,

                  rotate:
                    index % 2 === 0
                      ? -14
                      : 14,

                  duration: 1,

                  delay:
                    index *
                    0.07,

                  ease:
                    "back.out(1.4)",

                  scrollTrigger: {
                    trigger: network,

                    start:
                      "top 78%",
                  },
                }
              );
            }
          );


          /* -----------------------------------------------
             SVG LINES
          ----------------------------------------------- */

          gsap.fromTo(
            ".hiveStoryLine",

            {
              strokeDasharray: 520,

              strokeDashoffset: 520,

              opacity: 0,
            },

            {
              strokeDashoffset: 0,

              opacity: 1,

              duration: 1.3,

              stagger: 0.08,

              ease: "power2.out",

              scrollTrigger: {
                trigger: network,

                start:
                  "top 78%",
              },
            }
          );


          /* -----------------------------------------------
             GHOST WORD PARALLAX
          ----------------------------------------------- */

          gsap.to(
            ".hiveStoryGhost--left",
            {
              y: -40,

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
          BACKGROUND DECOR
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
          MAIN CONTAINER
      ====================================================== */}

      <div className="hiveStoryContainer">


        {/* ===================================================
            LEFT CONTENT
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
            where ideas, collaboration and
            meaningful work move forward together.
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
            RIGHT HIVE NETWORK
        ==================================================== */}

        <div
          ref={networkRef}
          className="hiveStoryNetwork"
        >

          {/* RINGS */}

          <div className="hiveStoryNetwork__halo hiveStoryNetwork__halo--1" />

          <div className="hiveStoryNetwork__halo hiveStoryNetwork__halo--2" />


          {/* CONNECTIONS */}

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


          {/* CENTER */}

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


          {/* CELLS */}

          {hiveCells.map(
            (
              cell,
              index
            ) => (
              <div
                key={cell.id}
                className={`hiveStoryCell ${cell.className}`}
                style={{
                  animationDelay:
                    `${index * -0.45}s`,
                }}
              >

                <span className="hiveStoryCell__number">
                  {String(
                    cell.id
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>


                <strong>
                  {cell.label}
                </strong>


                <i />

              </div>
            )
          )}


          {/* =================================================
              CUTE ORBITING BEE
          ================================================== */}

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


          {/* SMALL DECOR */}

          <div className="hiveStoryMiniHive">

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