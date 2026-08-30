import {
  MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowUpRight,
  BrainCircuit,
  Clock3,
  Coffee,
  Focus,
  Lightbulb,
  MoonStar,
  Sparkles,
  SunMedium,
  UsersRound,
} from "lucide-react";

import "./HiveDay.css";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   TYPES
========================================================= */

type DayScene = {
  id: number;
  time: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  icon: React.ElementType;
  className: string;
};


/* =========================================================
   SCENE DATA
========================================================= */

const dayScenes: DayScene[] = [
  {
    id: 1,
    time: "09:00 AM",
    eyebrow: "START FRESH",
    title: "Morning",
    accent: "Arrival",
    description:
      "Walk in, settle down and start your day in a workspace designed to help you switch into work mode.",
    image:
      "/images/walkthrough/01-reception.jpg",
    icon: SunMedium,
    className: "hiveDayScene--morning",
  },

  {
    id: 2,
    time: "10:15 AM",
    eyebrow: "FOCUS MODE",
    title: "Deep",
    accent: "Work",
    description:
      "Find your flow with a quiet desk, reliable connectivity and fewer distractions around you.",
    image:
      "/images/walkthrough/03-white-workspace.jpg",
    icon: Focus,
    className: "hiveDayScene--focus",
  },

  {
    id: 3,
    time: "12:30 PM",
    eyebrow: "RESET",
    title: "Coffee",
    accent: "Break",
    description:
      "Step away for a moment, recharge and let an unexpected conversation become your next useful connection.",
    image:
      "/images/walkthrough/13-corridor.jpg",
    icon: Coffee,
    className: "hiveDayScene--coffee",
  },

  {
    id: 4,
    time: "02:00 PM",
    eyebrow: "COLLABORATE",
    title: "Team",
    accent: "Meet",
    description:
      "Bring people together, share ideas clearly and turn discussion into decisions inside a professional meeting space.",
    image:
      "/images/walkthrough/11-meeting-room.jpg",
    icon: UsersRound,
    className: "hiveDayScene--meeting",
  },

  {
    id: 5,
    time: "04:10 PM",
    eyebrow: "CREATE",
    title: "Brainstorm",
    accent: "Together",
    description:
      "Move into a more collaborative rhythm where questions, sketches and small sparks can become bigger ideas.",
    image:
      "/images/walkthrough/12-discussion-room.jpg",
    icon: Lightbulb,
    className: "hiveDayScene--brainstorm",
  },

  {
    id: 6,
    time: "06:15 PM",
    eyebrow: "WRAP WITH MOMENTUM",
    title: "Finish",
    accent: "Strong",
    description:
      "Close the day with progress made, conversations started and a clear sense of what comes next.",
    image:
      "/images/walkthrough/02-coworking-long.jpg",
    icon: MoonStar,
    className: "hiveDayScene--evening",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

const HiveDay = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const stickyRef =
    useRef<HTMLDivElement | null>(null);

  const trackRef =
    useRef<HTMLDivElement | null>(null);

  const beeRef =
    useRef<HTMLDivElement | null>(null);

  const progressFillRef =
    useRef<HTMLDivElement | null>(null);

  const timelineInnerRef =
    useRef<HTMLDivElement | null>(null);

  const [
    activeScene,
    setActiveScene,
  ] = useState(1);


  const currentScene =
    useMemo(
      () =>
        dayScenes.find(
          (scene) =>
            scene.id === activeScene
        ) ?? dayScenes[0],
      [activeScene]
    );


  /* =========================================================
     GSAP
  ========================================================= */

  useEffect(() => {
    const section =
      sectionRef.current;

    const sticky =
      stickyRef.current;

    const track =
      trackRef.current;


    if (
      !section ||
      !sticky ||
      !track
    ) {
      return;
    }


    const ctx =
      gsap.context(() => {

        /* ===================================================
           HEADER REVEAL
        ==================================================== */

        gsap.fromTo(
          ".hiveDayEyebrow",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,

            duration: 0.7,

            ease:
              "power3.out",

            scrollTrigger: {
              trigger:
                ".hiveDayHeader",

              start:
                "top 85%",

              once: true,
            },
          }
        );


        gsap.fromTo(
          ".hiveDayTitleLine",
          {
            opacity: 0,

            y: 70,

            rotateX: -16,

            scale: 0.94,
          },
          {
            opacity: 1,

            y: 0,

            rotateX: 0,

            scale: 1,

            stagger: 0.11,

            duration: 0.9,

            ease:
              "back.out(1.35)",

            scrollTrigger: {
              trigger:
                ".hiveDayTitle",

              start:
                "top 88%",

              once: true,
            },
          }
        );


        gsap.fromTo(
          ".hiveDayIntro",
          {
            opacity: 0,
            y: 22,
          },
          {
            opacity: 1,
            y: 0,

            duration: 0.7,

            ease:
              "power3.out",

            scrollTrigger: {
              trigger:
                ".hiveDayIntro",

              start:
                "top 91%",

              once: true,
            },
          }
        );


        const mm =
          gsap.matchMedia();


        /* ===================================================
           DESKTOP HORIZONTAL EXPERIENCE
        ==================================================== */

        mm.add(
          "(min-width: 901px)",
          () => {
            const stickyElement =
              stickyRef.current;

            const trackElement =
              trackRef.current;


            if (
              !stickyElement ||
              !trackElement
            ) {
              return;
            }


            const getDistance =
              () =>
                Math.max(
                  0,

                  trackElement.scrollWidth -
                    window.innerWidth
                );


            const horizontalTween =
              gsap.to(
                trackElement,
                {
                  x: () =>
                    -getDistance(),

                  ease: "none",

                  scrollTrigger: {
                    trigger:
                      stickyElement,

                    start:
                      "top top",

                    end: () =>
                      `+=${Math.max(
                        getDistance() +
                          window.innerWidth *
                            0.35,

                        2800
                      )}`,

                    pin:
                      stickyElement,

                    pinSpacing:
                      true,

                    scrub:
                      0.85,

                    anticipatePin:
                      1,

                    invalidateOnRefresh:
                      true,


                    onUpdate:
                      (self) => {
                        const progress =
                          self.progress;


                        /* =================================
                           ACTIVE SCENE
                        ================================= */

                        const rawIndex =
                          Math.floor(
                            progress *
                              dayScenes.length
                          );


                        const index =
                          Math.max(
                            0,

                            Math.min(
                              dayScenes.length -
                                1,

                              rawIndex
                            )
                          );


                        setActiveScene(
                          index + 1
                        );


                        /* =================================
                           YELLOW PROGRESS LINE
                        ================================= */

                        if (
                          progressFillRef.current
                        ) {
                          gsap.set(
                            progressFillRef.current,
                            {
                              scaleX:
                                progress,
                            }
                          );
                        }


                        /* =================================
                           TOP TIMELINE ALSO MOVES
                           HORIZONTALLY
                        ================================= */

                        if (
                          timelineInnerRef.current
                        ) {
                          const timelineShift =
                            Math.min(
                              window.innerWidth *
                                0.12,
                              190
                            );


                          gsap.set(
                            timelineInnerRef.current,
                            {
                              x:
                                -progress *
                                timelineShift,
                            }
                          );
                        }


                        /* =================================
                           BEE TRAVELS ALONG LINE
                        ================================= */

                        if (
                          beeRef.current
                        ) {
                          const beeDistance =
                            Math.max(
                              260,

                              Math.min(
                                window.innerWidth -
                                  300,

                                1080
                              )
                            );


                          gsap.to(
                            beeRef.current,
                            {
                              x:
                                progress *
                                beeDistance,

                              y:
                                Math.sin(
                                  progress *
                                    Math.PI *
                                    6
                                ) *
                                7,

                              rotate:
                                Math.sin(
                                  progress *
                                    Math.PI *
                                    8
                                ) *
                                5,

                              duration:
                                0.18,

                              overwrite:
                                "auto",

                              ease:
                                "power2.out",
                            }
                          );
                        }
                      },
                  },
                }
              );


            /* =================================================
               IMAGE PARALLAX
            ================================================= */

            gsap.utils
              .toArray<HTMLElement>(
                ".hiveDaySceneImage"
              )
              .forEach(
                (image) => {

                  gsap.fromTo(
                    image,
                    {
                      xPercent:
                        -3,

                      scale:
                        1.07,
                    },
                    {
                      xPercent:
                        3,

                      scale:
                        1.025,

                      ease:
                        "none",

                      scrollTrigger: {
                        trigger:
                          image,

                        containerAnimation:
                          horizontalTween,

                        start:
                          "left right",

                        end:
                          "right left",

                        scrub:
                          true,
                      },
                    }
                  );

                }
              );


            const timer =
              window.setTimeout(
                () => {
                  ScrollTrigger.refresh();
                },
                180
              );


            return () => {
              window.clearTimeout(
                timer
              );
            };
          }
        );


        /* ===================================================
           MOBILE
        ==================================================== */

        mm.add(
          "(max-width: 900px)",
          () => {

            gsap.utils
              .toArray<HTMLElement>(
                ".hiveDayScene"
              )
              .forEach(
                (
                  card,
                  index
                ) => {

                  gsap.fromTo(
                    card,
                    {
                      opacity: 0,

                      y: 50,

                      scale:
                        0.95,
                    },
                    {
                      opacity: 1,

                      y: 0,

                      scale:
                        1,

                      duration:
                        0.8,

                      ease:
                        "back.out(1.2)",

                      scrollTrigger: {
                        trigger:
                          card,

                        start:
                          "top 88%",

                        once:
                          true,

                        onEnter:
                          () =>
                            setActiveScene(
                              index + 1
                            ),
                      },
                    }
                  );
                }
              );
          }
        );


        /* ===================================================
           PARTICLES
        ==================================================== */

        gsap.to(
          ".hiveDayParticle",
          {
            y: -16,

            duration:
              2.4,

            stagger: {
              each:
                0.15,

              repeat:
                -1,

              yoyo:
                true,
            },

            ease:
              "sine.inOut",
          }
        );

      }, section);


    return () => {
      ctx.revert();
    };
  }, []);


  /* =========================================================
     CARD 3D TILT
  ========================================================= */

  const handleSceneMove = (
    event:
      MouseEvent<HTMLElement>
  ) => {
    const card =
      event.currentTarget;


    const rect =
      card.getBoundingClientRect();


    const px =
      (
        event.clientX -
        rect.left
      ) /
        rect.width -
      0.5;


    const py =
      (
        event.clientY -
        rect.top
      ) /
        rect.height -
      0.5;


    card.style.setProperty(
      "--scene-rx",
      `${py * -3}deg`
    );


    card.style.setProperty(
      "--scene-ry",
      `${px * 4}deg`
    );


    card.style.setProperty(
      "--scene-x",
      `${event.clientX - rect.left}px`
    );


    card.style.setProperty(
      "--scene-y",
      `${event.clientY - rect.top}px`
    );
  };


  const handleSceneLeave = (
    event:
      MouseEvent<HTMLElement>
  ) => {
    const card =
      event.currentTarget;


    card.style.setProperty(
      "--scene-rx",
      "0deg"
    );


    card.style.setProperty(
      "--scene-ry",
      "0deg"
    );
  };


  return (
    <section
      ref={sectionRef}
      id="day-inside-nerdshive"
      className="hiveDaySection"
    >

      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        className="hiveDayGhost"
        aria-hidden="true"
      >
        A DAY
      </div>


      <span className="hiveDayParticle hiveDayParticle--1" />
      <span className="hiveDayParticle hiveDayParticle--2" />
      <span className="hiveDayParticle hiveDayParticle--3" />
      <span className="hiveDayParticle hiveDayParticle--4" />
      <span className="hiveDayParticle hiveDayParticle--5" />
      <span className="hiveDayParticle hiveDayParticle--6" />


      {/* =====================================================
          HEADING
      ====================================================== */}

      <div className="hiveDayContainer">

        <header className="hiveDayHeader">

          <div className="hiveDayEyebrow">

            <span />

            <strong>
              A DAY INSIDE NERDSHIVE
            </strong>

            <span />

          </div>


          <h2 className="hiveDayTitle">

            <span className="hiveDayTitleLine">
              One Space.
            </span>


            <span className="hiveDayTitleLine hiveDayTitleLine--yellow">
              A Full Day of Momentum.
            </span>

          </h2>


          <p className="hiveDayIntro">
            Follow a day through the Hive —
            from the first focused hour to
            conversations, collaboration,
            creativity and a strong finish.
          </p>

        </header>

      </div>


      {/* =====================================================
          STICKY HORIZONTAL EXPERIENCE
      ====================================================== */}

      <div
        ref={stickyRef}
        className="hiveDaySticky"
      >

        {/* ===================================================
            TOP HUD
        ==================================================== */}

        <div className="hiveDayHud">

          <div className="hiveDayHudLeft">

            <Clock3
              size={15}
              strokeWidth={2}
            />

            <span>
              {
                currentScene.time
              }
            </span>

          </div>


          <div className="hiveDayHudCenter">

            YOUR DAY IN THE HIVE

          </div>


          <div className="hiveDayHudRight">

            <span>
              0{
                activeScene
              }
            </span>

            <i>
              /
            </i>

            <span>
              06
            </span>

          </div>

        </div>


        {/* ===================================================
            MOVING TIMELINE
        ==================================================== */}

        <div className="hiveDayTimelineViewport">

          <div
            ref={timelineInnerRef}
            className="hiveDayTimelineInner"
          >

            <div className="hiveDayProgressBase" />


            <div
              ref={progressFillRef}
              className="hiveDayProgressFill"
            />


            <div className="hiveDayProgressDots">

              {dayScenes.map(
                (scene) => (

                  <span
                    key={
                      scene.id
                    }

                    className={
                      activeScene >=
                      scene.id
                        ? "hiveDayProgressDot hiveDayProgressDot--active"
                        : "hiveDayProgressDot"
                    }
                  />

                )
              )}

            </div>

          </div>

        </div>


        {/* ===================================================
            BEE ON TIMELINE
        ==================================================== */}

        <div className="hiveDayBeeRail">

          <div
            ref={beeRef}
            className="hiveDayBee"
            aria-hidden="true"
          >

            <span className="hiveDayBeeWing hiveDayBeeWing--left" />

            <span className="hiveDayBeeWing hiveDayBeeWing--right" />


            <div className="hiveDayBeeBody">

              <i className="hiveDayBeeStripe hiveDayBeeStripe--1" />

              <i className="hiveDayBeeStripe hiveDayBeeStripe--2" />

            </div>


            <div className="hiveDayBeeHead">

              <span className="hiveDayBeeAntenna hiveDayBeeAntenna--left" />

              <span className="hiveDayBeeAntenna hiveDayBeeAntenna--right" />


              <span className="hiveDayBeeEye hiveDayBeeEye--left">
                <i />
              </span>


              <span className="hiveDayBeeEye hiveDayBeeEye--right">
                <i />
              </span>


              <span className="hiveDayBeeSmile" />

            </div>

          </div>

        </div>


        {/* ===================================================
            HORIZONTAL CONTENT
        ==================================================== */}

        <div
          ref={trackRef}
          className="hiveDayTrack"
        >

          {dayScenes.map(
            (scene) => {

              const Icon =
                scene.icon;


              return (
                <article
                  key={
                    scene.id
                  }

                  className={
                    `hiveDayScene ${scene.className}`
                  }

                  onMouseMove={
                    handleSceneMove
                  }

                  onMouseLeave={
                    handleSceneLeave
                  }
                >

                  <div className="hiveDaySceneLight" />


                  {/* IMAGE */}

                  <div className="hiveDaySceneVisual">

                    <img
                      src={
                        scene.image
                      }

                      alt={
                        `${scene.title} ${scene.accent}`
                      }

                      className="hiveDaySceneImage"
                    />


                    <div className="hiveDaySceneShade" />


                    <span className="hiveDaySceneNumber">
                      0{
                        scene.id
                      }
                    </span>


                    {scene.id ===
                      1 && (

                      <div className="hiveDaySun">

                        <SunMedium
                          size={27}
                        />

                      </div>

                    )}


                    {scene.id ===
                      2 && (

                      <div className="hiveDayFocusRing">

                        <span />
                        <span />
                        <span />

                      </div>

                    )}


                    {scene.id ===
                      3 && (

                      <div className="hiveDayCoffee">

                        <Coffee
                          size={27}
                        />

                        <span className="hiveDaySteam hiveDaySteam--1" />
                        <span className="hiveDaySteam hiveDaySteam--2" />
                        <span className="hiveDaySteam hiveDaySteam--3" />

                      </div>

                    )}


                    {scene.id ===
                      4 && (

                      <div className="hiveDayMeetingBubbles">

                        <span>
                          Idea?
                        </span>

                        <span>
                          Yes!
                        </span>

                        <span>
                          Build.
                        </span>

                      </div>

                    )}


                    {scene.id ===
                      5 && (

                      <div className="hiveDayIdea">

                        <BrainCircuit
                          size={30}
                        />

                        <Sparkles
                          className="hiveDayIdeaSpark hiveDayIdeaSpark--1"
                          size={17}
                        />

                        <Sparkles
                          className="hiveDayIdeaSpark hiveDayIdeaSpark--2"
                          size={13}
                        />

                      </div>

                    )}


                    {scene.id ===
                      6 && (

                      <div className="hiveDayFinish">

                        <MoonStar
                          size={25}
                        />

                        <span>
                          DONE ✓
                        </span>

                      </div>

                    )}

                  </div>


                  {/* COPY */}

                  <div className="hiveDaySceneCopy">

                    <div className="hiveDaySceneTop">

                      <span className="hiveDaySceneTime">

                        <Clock3
                          size={14}
                        />

                        {
                          scene.time
                        }

                      </span>


                      <div className="hiveDaySceneIcon">

                        <Icon
                          size={28}
                          strokeWidth={1.9}
                        />

                      </div>

                    </div>


                    <span className="hiveDaySceneEyebrow">

                      {
                        scene.eyebrow
                      }

                    </span>


                    <h3>

                      <span>
                        {
                          scene.title
                        }
                      </span>

                      <strong>
                        {
                          scene.accent
                        }
                      </strong>

                    </h3>


                    <p>
                      {
                        scene.description
                      }
                    </p>


                    <div className="hiveDaySceneBottom">

                      <span>
                        NERDSHIVE DAY
                      </span>


                      <b>
                        0{
                          scene.id
                        }
                      </b>

                    </div>

                  </div>

                </article>
              );
            }
          )}


          {/* =================================================
              FINAL PANEL
          ================================================== */}

          <article className="hiveDayFinal">

            <div className="hiveDayFinalHoney">

              <span />
              <span />
              <span />
              <span />
              <span />

            </div>


            <div className="hiveDayFinalIcon">

              <Sparkles
                size={31}
              />

            </div>


            <span className="hiveDayFinalEyebrow">
              YOUR TURN
            </span>


            <h3>
              Your Day Could
              <strong>
                {" "}
                Look Like This.
              </strong>
            </h3>


            <p>
              Experience the space,
              atmosphere and community
              yourself.
            </p>


            <a
              href="#contact"
              className="hiveDayCTA"
            >

              <span>
                Book a Tour
              </span>


              <b>

                <ArrowUpRight
                  size={19}
                />

              </b>

            </a>


            <div className="hiveDayFinalBee">
              🐝
            </div>

          </article>

        </div>

      </div>

    </section>
  );
};


export default HiveDay;
