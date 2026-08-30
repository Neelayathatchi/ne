import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  BriefcaseBusiness,
  Coffee,
  Lightbulb,
  Sparkles,
  UsersRound,
  Zap,
} from "lucide-react";

import "./AboutIntro.css";


gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   FLOATING DETAILS
========================================================= */

const floatingItems = [
  {
    className:
      "whoFloat whoFloat--one",

    text:
      "FOUNDERS",

    icon:
      BriefcaseBusiness,
  },

  {
    className:
      "whoFloat whoFloat--two",

    text:
      "CREATORS",

    icon:
      Lightbulb,
  },

  {
    className:
      "whoFloat whoFloat--three",

    text:
      "TEAMS",

    icon:
      UsersRound,
  },

  {
    className:
      "whoFloat whoFloat--four",

    text:
      "ENERGY",

    icon:
      Zap,
  },

  {
    className:
      "whoFloat whoFloat--five",

    text:
      "GOOD COFFEE",

    icon:
      Coffee,
  },
];


const AboutIntro = () => {
  const sectionRef =
    useRef<HTMLElement | null>(
      null
    );


  const stageRef =
    useRef<HTMLDivElement | null>(
      null
    );


  const cursorRef =
    useRef<HTMLDivElement | null>(
      null
    );


  useEffect(() => {
    const section =
      sectionRef.current;

    const stage =
      stageRef.current;

    const cursor =
      cursorRef.current;


    if (
      !section ||
      !stage ||
      !cursor
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
                  "power4.out",
              },
            });


          intro
            .fromTo(
              ".whoEyebrow",
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
              ".whoTitleLine > span",
              {
                yPercent: 120,
                rotateX: -18,
              },
              {
                yPercent: 0,
                rotateX: 0,

                duration: 0.85,

                stagger: 0.08,

                ease:
                  "back.out(1.2)",
              },
              "-=0.22"
            )

            .fromTo(
              ".whoIntroCopy",
              {
                opacity: 0,
                y: 22,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.58,
              },
              "-=0.38"
            )

            .fromTo(
              ".whoLivingLine",
              {
                opacity: 0,
                scale: 0.94,
                y: 16,
              },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.65,
                ease:
                  "back.out(1.4)",
              },
              "-=0.32"
            )

            .fromTo(
              ".whoFloat",
              {
                opacity: 0,
                scale: 0.75,
                y: 20,
              },
              {
                opacity: 1,
                scale: 1,
                y: 0,

                duration: 0.55,

                stagger: 0.08,

                ease:
                  "back.out(1.75)",
              },
              "-=0.45"
            )

            .fromTo(
              ".whoRibbon",
              {
                scaleX: 0,
              },
              {
                scaleX: 1,
                duration: 0.8,
                ease:
                  "power3.inOut",
              },
              "-=0.4"
            );


          /* ===============================================
             FLOAT MOTION
          ================================================ */

          gsap.to(
            ".whoFloat--one",
            {
              y: -10,
              rotate: -2,

              duration: 2.8,

              repeat: -1,

              yoyo: true,

              ease:
                "sine.inOut",
            }
          );


          gsap.to(
            ".whoFloat--two",
            {
              y: 11,
              rotate: 2,

              duration: 3.2,

              repeat: -1,

              yoyo: true,

              delay: 0.25,

              ease:
                "sine.inOut",
            }
          );


          gsap.to(
            ".whoFloat--three",
            {
              y: -8,
              rotate: 1,

              duration: 2.6,

              repeat: -1,

              yoyo: true,

              delay: 0.45,

              ease:
                "sine.inOut",
            }
          );


          gsap.to(
            ".whoFloat--four",
            {
              y: 9,
              rotate: -2,

              duration: 3,

              repeat: -1,

              yoyo: true,

              delay: 0.65,

              ease:
                "sine.inOut",
            }
          );


          gsap.to(
            ".whoFloat--five",
            {
              y: -7,
              rotate: 2,

              duration: 2.7,

              repeat: -1,

              yoyo: true,

              delay: 0.8,

              ease:
                "sine.inOut",
            }
          );


          /* ===============================================
             SPARKLE ROTATION
          ================================================ */

          gsap.to(
            ".whoSparkle",
            {
              rotate: 360,

              duration: 8,

              repeat: -1,

              ease: "none",
            }
          );


          /* ===============================================
             SCROLL TYPOGRAPHY
          ================================================ */

          gsap.to(
            ".whoTitleLine--one",
            {
              x: -35,

              scrollTrigger: {
                trigger: section,

                start:
                  "top top",

                end:
                  "bottom top",

                scrub: 1,
              },
            }
          );


          gsap.to(
            ".whoTitleLine--two",
            {
              x: 38,

              scrollTrigger: {
                trigger: section,

                start:
                  "top top",

                end:
                  "bottom top",

                scrub: 1,
              },
            }
          );


          gsap.to(
            ".whoIntroCopy",
            {
              y: -28,

              scrollTrigger: {
                trigger: section,

                start:
                  "top top",

                end:
                  "bottom top",

                scrub: 1,
              },
            }
          );


          /* ===============================================
             RIBBON SCROLL
          ================================================ */

          gsap.to(
            ".whoRibbonTrack",
            {
              xPercent: -18,

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

        },
        section
      );


    /* =======================================================
       MOUSE REACTION
    ======================================================= */

    const handleMove =
      (
        event: MouseEvent
      ) => {

        const rect =
          stage.getBoundingClientRect();


        const x =
          (
            event.clientX -
            rect.left
          ) /
          rect.width -
          0.5;


        const y =
          (
            event.clientY -
            rect.top
          ) /
          rect.height -
          0.5;


        gsap.to(
          ".whoFloat--one",
          {
            x:
              x * 13,

            duration:
              0.6,

            ease:
              "power2.out",
          }
        );


        gsap.to(
          ".whoFloat--two",
          {
            x:
              x * -16,

            duration:
              0.65,

            ease:
              "power2.out",
          }
        );


        gsap.to(
          ".whoFloat--three",
          {
            x:
              x * 11,

            duration:
              0.6,

            ease:
              "power2.out",
          }
        );


        gsap.to(
          ".whoFloat--four",
          {
            x:
              x * -12,

            duration:
              0.65,

            ease:
              "power2.out",
          }
        );


        gsap.to(
          ".whoLivingLine",
          {
            rotateX:
              y * -2,

            rotateY:
              x * 3,

            transformPerspective:
              1100,

            duration:
              0.7,

            ease:
              "power2.out",
          }
        );

      };


    const resetStage =
      () => {

        gsap.to(
          ".whoLivingLine",
          {
            rotateX: 0,
            rotateY: 0,

            duration:
              0.7,

            ease:
              "power3.out",
          }
        );

      };


    /* =======================================================
       CUSTOM CURSOR DOT
    ======================================================= */

    const cursorMove =
      (
        event: MouseEvent
      ) => {

        const rect =
          section.getBoundingClientRect();


        gsap.to(
          cursor,
          {
            x:
              event.clientX -
              rect.left,

            y:
              event.clientY -
              rect.top,

            opacity: 1,

            duration:
              0.25,

            ease:
              "power2.out",
          }
        );

      };


    const cursorLeave =
      () => {

        gsap.to(
          cursor,
          {
            opacity: 0,

            duration:
              0.25,
          }
        );

      };


    stage.addEventListener(
      "mousemove",
      handleMove
    );


    stage.addEventListener(
      "mouseleave",
      resetStage
    );


    section.addEventListener(
      "mousemove",
      cursorMove
    );


    section.addEventListener(
      "mouseleave",
      cursorLeave
    );


    return () => {

      stage.removeEventListener(
        "mousemove",
        handleMove
      );


      stage.removeEventListener(
        "mouseleave",
        resetStage
      );


      section.removeEventListener(
        "mousemove",
        cursorMove
      );


      section.removeEventListener(
        "mouseleave",
        cursorLeave
      );


      ctx.revert();

    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="whoSection"
      id="who-we-are"
    >

      {/* =====================================================
          CURSOR DETAIL
      ====================================================== */}

      <div
        ref={cursorRef}
        className="whoCursor"
        aria-hidden="true"
      />


      {/* =====================================================
          FULL CONTENT AREA
      ====================================================== */}

      <div
        ref={stageRef}
        className="whoStage"
      >

        {/* ===================================================
            EYEBROW
        ==================================================== */}

        <div className="whoEyebrow">

          <span />

          <strong>
            ABOUT NERDSHIVE
          </strong>

        </div>


        {/* ===================================================
            MAIN HEADING
        ==================================================== */}

        <h1 className="whoTitle">

          <span className="whoTitleLine whoTitleLine--one">

            <span>
              We’re a coworking
            </span>

          </span>


          <span className="whoTitleLine whoTitleLine--two">

            <span>
              community built for people
            </span>

          </span>


          <span className="whoTitleLine whoTitleLine--three">

            <span>
              who want to do
              <em>
                {" "}meaningful work.
              </em>
            </span>

          </span>

        </h1>


        {/* ===================================================
            INTRO COPY
        ==================================================== */}

        <p className="whoIntroCopy">
          NerdsHive is a modern workspace in
          Thanjavur for founders, freelancers,
          creators, professionals and growing teams
          who need more than just a desk. We bring
          together thoughtful spaces, professional
          energy and a community that helps people
          focus, connect and grow.
        </p>


        {/* ===================================================
            LIVING SENTENCE
        ==================================================== */}

        <div className="whoLivingLine">

          <div className="whoLivingLine__spark">

            <Sparkles
              className="whoSparkle"
              size={23}
              strokeWidth={1.9}
            />

          </div>


          <span>
            A better place to
          </span>


          <strong>
            work
          </strong>


          <i>
            +
          </i>


          <strong>
            belong
          </strong>


          <i>
            +
          </i>


          <strong>
            grow
          </strong>


          <div className="whoLivingLine__tail">
            ✦
          </div>

        </div>


        {/* ===================================================
            FLOATING DETAILS
        ==================================================== */}

        {floatingItems.map(
          (
            item
          ) => {

            const Icon =
              item.icon;


            return (
              <div
                key={
                  item.text
                }
                className={
                  item.className
                }
              >

                <div className="whoFloat__icon">

                  <Icon
                    size={18}
                    strokeWidth={2}
                  />

                </div>


                <span>
                  {
                    item.text
                  }
                </span>

              </div>
            );
          }
        )}


        {/* ===================================================
            COLOR DOODLES
        ==================================================== */}

        <div
          className="whoDoodle whoDoodle--yellow"
          aria-hidden="true"
        >
          ✦
        </div>


        <div
          className="whoDoodle whoDoodle--brown"
          aria-hidden="true"
        >
          ↗
        </div>


        <div
          className="whoDoodle whoDoodle--black"
          aria-hidden="true"
        >
          +
        </div>


        {/* ===================================================
            SMALL BEE DETAIL
        ==================================================== */}

        <div
          className="whoTinyBee"
          aria-hidden="true"
        >

          <span className="whoTinyBee__wing whoTinyBee__wing--one" />

          <span className="whoTinyBee__wing whoTinyBee__wing--two" />


          <span className="whoTinyBee__body">

            <i />

            <i />

          </span>

        </div>

      </div>


      {/* =====================================================
          KINETIC RIBBON
      ====================================================== */}

      <div className="whoRibbon">

        <div className="whoRibbonTrack">

          <span>
            WORK
          </span>

          <i>
            ✦
          </i>

          <span>
            BELONG
          </span>

          <i>
            ✦
          </i>

          <span>
            BUILD
          </span>

          <i>
            ✦
          </i>

          <span>
            CONNECT
          </span>

          <i>
            ✦
          </i>

          <span>
            GROW
          </span>

          <i>
            ✦
          </i>

          <span>
            WORK
          </span>

          <i>
            ✦
          </i>

          <span>
            BELONG
          </span>

          <i>
            ✦
          </i>

          <span>
            BUILD
          </span>

          <i>
            ✦
          </i>

          <span>
            CONNECT
          </span>

          <i>
            ✦
          </i>

          <span>
            GROW
          </span>

        </div>

      </div>

    </section>
  );
};


export default AboutIntro;

