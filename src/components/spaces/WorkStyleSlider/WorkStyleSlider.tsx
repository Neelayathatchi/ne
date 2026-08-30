import {
  ArrowRight,
  BriefcaseBusiness,
  Coffee,
  Focus,
  Lightbulb,
  LockKeyhole,
  MessageSquareText,
  MousePointer2,
  Sparkles,
  UsersRound,
  Wifi,
  Zap,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  CSSProperties,
  ReactNode,
} from "react";

import "./WorkStyleSlider.css";


type WorkMode = {
  id: string;
  number: string;

  title: string;
  description: string;

  bestFor: string;
  recommended: string;

  icon: ReactNode;

  positionClass: string;
};


const workModes: WorkMode[] = [
  {
    id: "focus",
    number: "01",

    title: "Focus",

    description:
      "Quiet, distraction-aware spaces designed for deep work and uninterrupted productivity.",

    bestFor:
      "Solo Professionals",

    recommended:
      "Dedicated Desk",

    icon:
      <Focus />,

    positionClass:
      "workStyleSlider__orbitCard--top",
  },

  {
    id: "collaborate",
    number: "02",

    title: "Collaborate",

    description:
      "Flexible spaces where growing teams can think, discuss and build together.",

    bestFor:
      "Teams & Startups",

    recommended:
      "Team Space",

    icon:
      <UsersRound />,

    positionClass:
      "workStyleSlider__orbitCard--leftTop",
  },

  {
    id: "meet",
    number: "03",

    title: "Meet",

    description:
      "Professional rooms for client discussions, reviews, interviews and team decisions.",

    bestFor:
      "Teams & Clients",

    recommended:
      "Meeting Room",

    icon:
      <MessageSquareText />,

    positionClass:
      "workStyleSlider__orbitCard--rightTop",
  },

  {
    id: "private",
    number: "04",

    title: "Private",

    description:
      "A dedicated environment for confidential conversations and focused execution.",

    bestFor:
      "Founders & Leaders",

    recommended:
      "Private Cabin",

    icon:
      <LockKeyhole />,

    positionClass:
      "workStyleSlider__orbitCard--leftBottom",
  },

  {
    id: "create",
    number: "05",

    title: "Create",

    description:
      "A flexible setting for designers, creators and builders turning ideas into momentum.",

    bestFor:
      "Creators & Makers",

    recommended:
      "Discussion Room",

    icon:
      <Lightbulb />,

    positionClass:
      "workStyleSlider__orbitCard--rightBottom",
  },

  {
    id: "flexible",
    number: "06",

    title: "Flexible",

    description:
      "Drop in, plug in and work your way with a setup that adapts to your schedule.",

    bestFor:
      "Freelancers",

    recommended:
      "Hot Desk",

    icon:
      <Zap />,

    positionClass:
      "workStyleSlider__orbitCard--bottom",
  },
];


const WorkStyleSlider = () => {
  const sectionRef =
    useRef<HTMLElement | null>(
      null
    );

  const stageRef =
    useRef<HTMLDivElement | null>(
      null
    );


  const [
    activeMode,
    setActiveMode,
  ] =
    useState<string | null>(
      null
    );


  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }


    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            section.classList.add(
              "workStyleSlider--visible"
            );

            observer.disconnect();
          }
        },
        {
          threshold: 0.08,
        }
      );


    observer.observe(
      section
    );


    return () => {
      observer.disconnect();
    };
  }, []);


  useEffect(() => {
    const stage =
      stageRef.current;

    if (!stage) {
      return;
    }


    const handlePointerMove = (
      event: PointerEvent
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


      stage.style.setProperty(
        "--stage-x",
        `${x * 10}px`
      );


      stage.style.setProperty(
        "--stage-y",
        `${y * 8}px`
      );
    };


    const reset = () => {
      stage.style.setProperty(
        "--stage-x",
        "0px"
      );

      stage.style.setProperty(
        "--stage-y",
        "0px"
      );
    };


    stage.addEventListener(
      "pointermove",
      handlePointerMove
    );


    stage.addEventListener(
      "pointerleave",
      reset
    );


    return () => {
      stage.removeEventListener(
        "pointermove",
        handlePointerMove
      );


      stage.removeEventListener(
        "pointerleave",
        reset
      );
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="workStyleSlider"
    >

      <div className="workStyleSlider__main">

        {/* =================================================
            LEFT
        ================================================= */}

        <div className="workStyleSlider__content">

          <div className="workStyleSlider__eyebrow workStyleSlider__jump">

            <Sparkles />

            <span>
              YOUR WORK MODE
            </span>

          </div>


          <h2 className="workStyleSlider__jump">

            Work your way,

            <strong>
              all in one Hive.
            </strong>

          </h2>


          <p className="workStyleSlider__introText workStyleSlider__jump">
            Different days need different environments.
            Choose the rhythm that fits your work and
            discover the NerdsHive space built around it.
          </p>


          {/* STATS */}

          <div className="workStyleSlider__stats">

            <div className="workStyleSlider__stat">

              <span>
                <UsersRound />
              </span>

              <div>
                <strong>
                  6
                </strong>

                <small>
                  Work Modes
                </small>
              </div>

            </div>


            <i />


            <div className="workStyleSlider__stat">

              <span>
                <BriefcaseBusiness />
              </span>

              <div>
                <strong>
                  6+
                </strong>

                <small>
                  Space Styles
                </small>
              </div>

            </div>


            <i />


            <div className="workStyleSlider__stat">

              <span>
                <Zap />
              </span>

              <div>
                <strong>
                  One
                </strong>

                <small>
                  Flexible Hive
                </small>
              </div>

            </div>

          </div>


          {/* ACTIONS */}

          <div className="workStyleSlider__actions">

            <button
              type="button"
              className="workStyleSlider__primaryAction"
            >

              <span>
                Explore Work Modes
              </span>

              <i>
                <ArrowRight />
              </i>

            </button>


            <button
              type="button"
              className="workStyleSlider__secondaryAction"
            >

              <span>
                <MousePointer2 />
              </span>

              Touch a mode

            </button>

          </div>


          {/* BEE */}

          <div className="workStyleSlider__bigBee">

            <span className="workStyleSlider__bigBeeWing workStyleSlider__bigBeeWing--left" />

            <span className="workStyleSlider__bigBeeWing workStyleSlider__bigBeeWing--right" />

            <span className="workStyleSlider__bigBeeBody">
              <i />
              <i />
            </span>

            <span className="workStyleSlider__bigBeeHead">
              <i />
              <i />
            </span>

          </div>


          <span className="workStyleSlider__beePath" />

        </div>


        {/* =================================================
            RIGHT ORBIT EXPERIENCE
        ================================================= */}

        <div
          ref={stageRef}
          className="workStyleSlider__stage"
        >

          <div className="workStyleSlider__orbit workStyleSlider__orbit--outer" />

          <div className="workStyleSlider__orbit workStyleSlider__orbit--inner" />


          {/* path dots */}

          <span className="workStyleSlider__dot workStyleSlider__dot--1" />

          <span className="workStyleSlider__dot workStyleSlider__dot--2" />

          <span className="workStyleSlider__dot workStyleSlider__dot--3" />

          <span className="workStyleSlider__dot workStyleSlider__dot--4" />


          {/* CENTER HIVE */}

          <div className="workStyleSlider__core">

            <span className="workStyleSlider__corePulse workStyleSlider__corePulse--one" />

            <span className="workStyleSlider__corePulse workStyleSlider__corePulse--two" />


            <div className="workStyleSlider__coreInner">

              <div className="workStyleSlider__coreBee">

                <span className="workStyleSlider__coreBeeWing workStyleSlider__coreBeeWing--left" />

                <span className="workStyleSlider__coreBeeWing workStyleSlider__coreBeeWing--right" />

                <span className="workStyleSlider__coreBeeBody">
                  <i />
                  <i />
                </span>

                <span className="workStyleSlider__coreBeeFace">
                  <i />
                  <i />
                </span>

              </div>


              <h3>
                Nerds<span>Hive</span>
              </h3>


              <p>
                Work. Create. Grow.
              </p>

            </div>

          </div>


          {/* ORBIT CARDS */}

          {workModes.map(
            (
              mode,
              index
            ) => {
              const active =
                activeMode ===
                mode.id;


              return (
                <article
                  key={
                    mode.id
                  }
                  className={`
                    workStyleSlider__orbitCard
                    ${mode.positionClass}
                    ${
                      active
                        ? "workStyleSlider__orbitCard--active"
                        : ""
                    }
                  `}
                  style={
                    {
                      "--mode-index":
                        index,
                    } as CSSProperties
                  }
                >

                  <button
                    type="button"
                    className="workStyleSlider__orbitCardButton"
                    onClick={() =>
                      setActiveMode(
                        active
                          ? null
                          : mode.id
                      )
                    }
                  >

                    <span className="workStyleSlider__modeNumber">
                      {
                        mode.number
                      }
                    </span>


                    <span className="workStyleSlider__modeIcon">
                      {
                        mode.icon
                      }
                    </span>


                    <h4>
                      {
                        mode.title
                      }
                    </h4>


                    <p>
                      {
                        mode.description
                      }
                    </p>


                    <span className="workStyleSlider__modeArrow">
                      <ArrowRight />
                    </span>

                  </button>


                  {/* hover / click detail */}

                  <div className="workStyleSlider__modeDetail">

                    <div>
                      <small>
                        BEST FOR
                      </small>

                      <strong>
                        {
                          mode.bestFor
                        }
                      </strong>
                    </div>


                    <div>
                      <small>
                        RECOMMENDED
                      </small>

                      <strong>
                        {
                          mode.recommended
                        }
                      </strong>
                    </div>

                  </div>

                </article>
              );
            }
          )}


          {/* orbit bee */}

          <div className="workStyleSlider__orbitBee">

            <span className="workStyleSlider__orbitBeeWing workStyleSlider__orbitBeeWing--left" />

            <span className="workStyleSlider__orbitBeeWing workStyleSlider__orbitBeeWing--right" />

            <span className="workStyleSlider__orbitBeeBody">
              <i />
              <i />
            </span>

          </div>

        </div>

      </div>


      {/* =================================================
          BOTTOM STRIP
      ================================================= */}

      <div className="workStyleSlider__benefitBar">

        <div>

          <span>
            <Zap />
          </span>

          <p>
            <strong>
              Flexible Work
            </strong>

            <small>
              Choose what fits your day.
            </small>
          </p>

        </div>


        <i />


        <div>

          <span>
            <Wifi />
          </span>

          <p>
            <strong>
              Stay Connected
            </strong>

            <small>
              Fast, reliable work environment.
            </small>
          </p>

        </div>


        <i />


        <div>

          <span>
            <Coffee />
          </span>

          <p>
            <strong>
              Work Comfortably
            </strong>

            <small>
              Focus without the friction.
            </small>
          </p>

        </div>


        <i />


        <div>

          <span>
            <UsersRound />
          </span>

          <p>
            <strong>
              Community Energy
            </strong>

            <small>
              Connect, collaborate and grow.
            </small>
          </p>

        </div>

      </div>

    </section>
  );
};


export default WorkStyleSlider;