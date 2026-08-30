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
  Lightbulb,
  Building2,
  UsersRound,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import "./OurStory.css";


gsap.registerPlugin(
  ScrollTrigger
);


/* =========================================================
   STORY DATA
========================================================= */

const storySteps = [
  {
    id: 1,

    number: "01",

    title: "IDEA",

    label:
      "It began with a thought.",

    description:
      "What if work could feel focused, social and full of possibility at the same time? NerdsHive started with the belief that a better environment can inspire better work.",

    icon: Lightbulb,
  },

  {
    id: 2,

    number: "02",

    title: "SPACE",

    label:
      "The idea needed a home.",

    description:
      "We shaped a workspace where people can settle in, think clearly and work comfortably — without losing the energy that comes from being around other ambitious people.",

    icon: Building2,
  },

  {
    id: 3,

    number: "03",

    title: "COMMUNITY",

    label:
      "People brought the hive alive.",

    description:
      "Founders met creators. Freelancers met teams. Simple conversations started turning into ideas, introductions, collaborations and new opportunities.",

    icon: UsersRound,
  },

  {
    id: 4,

    number: "04",

    title: "GROWTH",

    label:
      "Connection became momentum.",

    description:
      "NerdsHive continues to grow around one simple belief — when the right people share the right space, bigger ideas and stronger businesses can emerge.",

    icon: TrendingUp,
  },
];


/* =========================================================
   OUR STORY
========================================================= */

const OurStory = () => {
  const sectionRef =
    useRef<HTMLElement | null>(
      null
    );


  const pathRef =
    useRef<SVGPathElement | null>(
      null
    );


  const beeRef =
    useRef<HTMLDivElement | null>(
      null
    );


  const [
    activeStep,
    setActiveStep,
  ] = useState(0);


  /* =======================================================
     GSAP
  ======================================================= */

  useEffect(() => {
    const section =
      sectionRef.current;


    const path =
      pathRef.current;


    const bee =
      beeRef.current;


    if (
      !section ||
      !path ||
      !bee
    ) {
      return;
    }


    const ctx =
      gsap.context(
        () => {

          /* ===============================================
             INTRO
          ================================================ */

          const intro =
            gsap.timeline({
              defaults: {
                ease:
                  "power3.out",
              },
            });


          intro
            .fromTo(
              ".compactStoryEyebrow",
              {
                opacity: 0,
                y: 18,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.55,
              }
            )

            .fromTo(
              ".compactStoryTitleWord",
              {
                opacity: 0,
                y: 65,
                rotateX: -18,
              },
              {
                opacity: 1,
                y: 0,
                rotateX: 0,

                duration: 0.78,

                stagger: 0.08,

                ease:
                  "back.out(1.25)",
              },
              "-=0.2"
            )

            .fromTo(
              ".compactStoryLead",
              {
                opacity: 0,
                y: 22,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
              },
              "-=0.36"
            );


          /* ===============================================
             PATH SETUP
          ================================================ */

          const pathLength =
            path.getTotalLength();


          gsap.set(
            path,
            {
              strokeDasharray:
                pathLength,

              strokeDashoffset:
                pathLength,
            }
          );


          /* ===============================================
             STORY SCROLL
          ================================================ */

          ScrollTrigger.create({

            trigger:
              section,

            start:
              "top top",

            end:
              "bottom bottom",

            scrub:
              0.7,

            invalidateOnRefresh:
              true,


            onUpdate:
              (
                self
              ) => {

                const progress =
                  self.progress;


                const index =
                  Math.min(
                    storySteps.length -
                      1,

                    Math.floor(
                      progress *
                        storySteps.length
                    )
                  );


                setActiveStep(
                  index
                );


                /* =========================================
                   DRAW PATH
                ========================================== */

                gsap.set(
                  path,
                  {
                    strokeDashoffset:
                      pathLength *
                      (
                        1 -
                        progress
                      ),
                  }
                );


                /* =========================================
                   BEE POSITION
                ========================================== */

                const point =
                  path.getPointAtLength(
                    pathLength *
                      progress
                  );


                const nextPoint =
                  path.getPointAtLength(
                    Math.min(
                      pathLength,

                      pathLength *
                        progress +
                        3
                    )
                  );


                const angle =
                  Math.atan2(
                    nextPoint.y -
                      point.y,

                    nextPoint.x -
                      point.x
                  ) *
                  (
                    180 /
                    Math.PI
                  );


                gsap.set(
                  bee,
                  {
                    x:
                      point.x -
                      31,

                    y:
                      point.y -
                      25,

                    rotate:
                      angle *
                      0.12,
                  }
                );

              },

          });


          /* ===============================================
             BACKGROUND PARALLAX
          ================================================ */

          gsap.to(
            ".compactStoryGhost",
            {
              x:
                160,

              scrollTrigger: {
                trigger:
                  section,

                start:
                  "top top",

                end:
                  "bottom bottom",

                scrub:
                  1,
              },
            }
          );


          gsap.to(
            ".compactStoryBlob--yellow",
            {
              y:
                -100,

              x:
                60,

              scrollTrigger: {
                trigger:
                  section,

                start:
                  "top top",

                end:
                  "bottom bottom",

                scrub:
                  1.2,
              },
            }
          );


          gsap.to(
            ".compactStoryBlob--brown",
            {
              y:
                90,

              x:
                -70,

              scrollTrigger: {
                trigger:
                  section,

                start:
                  "top top",

                end:
                  "bottom bottom",

                scrub:
                  1.3,
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


  const currentStep =
    storySteps[
      activeStep
    ];


  const CurrentIcon =
    currentStep.icon;


  /* =======================================================
     OUTPUT
  ======================================================= */

  return (
    <section
      ref={
        sectionRef
      }
      className="compactStorySection"
      id="our-story"
    >

      {/* ===================================================
          STICKY EXPERIENCE
      ==================================================== */}

      <div className="compactStorySticky">


        {/* ===============================================
            BACKGROUND
        ================================================ */}

        <div
          className="compactStoryGhost"
          aria-hidden="true"
        >
          STORY
        </div>


        <span className="compactStoryBlob compactStoryBlob--yellow" />

        <span className="compactStoryBlob compactStoryBlob--brown" />


        {/* ===============================================
            CONTENT
        ================================================ */}

        <div className="compactStoryContent">


          {/* =============================================
              HEADING
          ============================================== */}

          <div className="compactStoryIntro">

            <div className="compactStoryEyebrow">

              <span />

              <strong>
                ABOUT NERDSHIVE
              </strong>

            </div>


            <h1 className="compactStoryTitle">

              <span className="compactStoryTitleWord">
                One idea.
              </span>


              <span className="compactStoryTitleWord compactStoryTitleWord--yellow">
                Four turning points.
              </span>

            </h1>


            <p className="compactStoryLead">
              NerdsHive was built around a
              simple belief — the right space,
              the right people and the right
              environment can create real
              momentum.
            </p>

          </div>


          {/* =============================================
              DIAGRAM AREA
          ============================================== */}

          <div className="compactStoryJourney">


            {/* ===========================================
                ROUTE
            ============================================ */}

            <svg
              className="compactStoryRoute"
              viewBox="0 0 1260 220"
              preserveAspectRatio="none"
              aria-hidden="true"
            >

              <path
                className="compactStoryRouteBase"
                d="
                  M 95 112
                  C 235 30,
                    325 30,
                    430 112

                  C 530 194,
                    650 194,
                    735 112

                  C 830 28,
                    940 28,
                    1040 112

                  C 1120 175,
                    1170 155,
                    1210 112
                "
              />


              <path
                ref={
                  pathRef
                }
                className="compactStoryRouteActive"
                d="
                  M 95 112
                  C 235 30,
                    325 30,
                    430 112

                  C 530 194,
                    650 194,
                    735 112

                  C 830 28,
                    940 28,
                    1040 112

                  C 1120 175,
                    1170 155,
                    1210 112
                "
              />

            </svg>


            {/* ===========================================
                BEE
            ============================================ */}

            <div
              ref={
                beeRef
              }
              className="compactStoryBee"
              aria-hidden="true"
            >

              <span className="compactStoryBeeWing compactStoryBeeWing--left" />

              <span className="compactStoryBeeWing compactStoryBeeWing--right" />


              <span className="compactStoryBeeBody">

                <i />

                <i />

              </span>


              <span className="compactStoryBeeFace">

                <b />

                <b />

                <i />

              </span>

            </div>


            {/* ===========================================
                FOUR BIG POINT BOXES
            ============================================ */}

            <div className="compactStoryCards">

              {storySteps.map(
                (
                  step,
                  index
                ) => {

                  const Icon =
                    step.icon;


                  const active =
                    index ===
                    activeStep;


                  const passed =
                    index <
                    activeStep;


                  return (
                    <article
                      key={
                        step.id
                      }
                      className={[
                        "compactStoryCard",

                        `compactStoryCard--${index + 1}`,

                        active
                          ? "compactStoryCard--active"
                          : "",

                        passed
                          ? "compactStoryCard--passed"
                          : "",
                      ]
                        .filter(
                          Boolean
                        )
                        .join(
                          " "
                        )}
                    >

                      <div className="compactStoryCardTop">

                        <div className="compactStoryCardIcon">

                          <Icon
                            size={31}
                            strokeWidth={1.9}
                          />

                        </div>


                        <span className="compactStoryCardNumber">

                          {
                            step.number
                          }

                        </span>

                      </div>


                      <div className="compactStoryCardCopy">

                        <small>
                          TURNING POINT
                        </small>


                        <h2>
                          {
                            step.title
                          }
                        </h2>


                        <p>
                          {
                            step.label
                          }
                        </p>

                      </div>


                      <span className="compactStoryCardHex" />

                    </article>
                  );
                }
              )}

            </div>

          </div>


          {/* =============================================
              EXPLANATION AREA
          ============================================== */}

          <div
            key={
              currentStep.id
            }
            className="compactStoryExplanation"
          >

            {/* LEFT CURRENT ICON */}

            <div className="compactStoryExplanationIcon">

              <CurrentIcon
                size={34}
                strokeWidth={1.8}
              />

            </div>


            {/* COPY */}

            <div className="compactStoryExplanationCopy">

              <div className="compactStoryExplanationLabel">

                <span>
                  {
                    currentStep.number
                  }
                </span>


                <small>
                  {
                    currentStep.title
                  }
                </small>

              </div>


              <h3>

                {
                  currentStep.label
                }

              </h3>


              <p>

                {
                  currentStep.description
                }

              </p>

            </div>


            {/* DECOR */}

            <div className="compactStoryExplanationArt">

              <span />

              <span />

              <span />


              <Sparkles
                size={22}
              />

            </div>

          </div>


          {/* =============================================
              SMALL PROGRESS
          ============================================== */}

          <div className="compactStoryProgress">

            {storySteps.map(
              (
                step,
                index
              ) => (
                <div
                  key={
                    step.id
                  }
                  className={
                    index <=
                    activeStep
                      ? "active"
                      : ""
                  }
                >

                  <span />

                  <small>
                    {
                      step.title
                    }
                  </small>

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
};


export default OurStory;