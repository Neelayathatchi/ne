import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Clock3,
  Coffee,
  Crown,
  DoorOpen,
  Gauge,
  Layers3,
  Monitor,
  Presentation,
  Rocket,
  Sparkles,
  Target,
  UserRound,
  UsersRound,
  WandSparkles,
  Zap,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type {
  CSSProperties,
  ReactNode,
} from "react";

import "./WorkspaceMatcher.css";


type Choice = {
  id: string;
  label: string;
  short: string;
  icon: ReactNode;
};


type MatchResult = {
  title: string;
  eyebrow: string;
  description: string;
  score: number;
  capacity: string;
  vibe: string;
  accent: string;
  soft: string;
  icon: ReactNode;
  benefits: string[];
};


const peopleChoices: Choice[] = [
  {
    id: "solo",
    label: "Solo",
    short: "Just me",
    icon: <UserRound />,
  },
  {
    id: "team",
    label: "Team",
    short: "We build together",
    icon: <UsersRound />,
  },
];


const modeChoices: Choice[] = [
  {
    id: "focus",
    label: "Focus",
    short: "Deep work",
    icon: <Target />,
  },
  {
    id: "meet",
    label: "Meet",
    short: "Discuss & decide",
    icon: <Presentation />,
  },
  {
    id: "create",
    label: "Create",
    short: "Think & build",
    icon: <WandSparkles />,
  },
];


const durationChoices: Choice[] = [
  {
    id: "hours",
    label: "Few Hours",
    short: "Quick productive session",
    icon: <Clock3 />,
  },
  {
    id: "day",
    label: "Full Day",
    short: "Settle in and flow",
    icon: <Coffee />,
  },
  {
    id: "monthly",
    label: "Monthly",
    short: "Make the hive your base",
    icon: <Crown />,
  },
];


const WorkspaceMatcher = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const resultRef =
    useRef<HTMLDivElement | null>(null);


  const [
    people,
    setPeople,
  ] = useState("solo");

  const [
    mode,
    setMode,
  ] = useState("focus");

  const [
    duration,
    setDuration,
  ] = useState("day");


  const result: MatchResult =
    useMemo(() => {
      if (
        people === "team" &&
        mode === "meet"
      ) {
        return {
          title: "Meeting Room",
          eyebrow:
            "BEST MATCH FOR YOUR TEAM",
          description:
            "A professional room built for presentations, strategy sessions, client discussions and fast decisions.",
          score: 97,
          capacity: "4–12 People",
          vibe:
            "Present · Align · Decide",
          accent: "#FFBF00",
          soft: "#FFF4C7",
          icon: <Presentation />,
          benefits: [
            "Presentation Ready",
            "Team Collaboration",
            "Professional Setting",
          ],
        };
      }


      if (
        people === "team" &&
        mode === "create"
      ) {
        return {
          title: "Team Space",
          eyebrow:
            "BUILT FOR TEAM MOMENTUM",
          description:
            "A collaborative workspace where your team can brainstorm, build, review and move together.",
          score: 96,
          capacity: "4–10 People",
          vibe:
            "Build · Create · Scale",
          accent: "#E4A800",
          soft: "#FFF8DB",
          icon: <UsersRound />,
          benefits: [
            "Flexible Team Setup",
            "Collaboration Ready",
            "Growth Friendly",
          ],
        };
      }


      if (
        people === "team" &&
        mode === "focus"
      ) {
        return {
          title: "Private Cabin",
          eyebrow:
            "FOCUSED TEAM BASE",
          description:
            "A private workspace that gives your team quiet focus, secure conversations and a consistent work base.",
          score: 94,
          capacity: "2–6 People",
          vibe:
            "Private · Focus · Execute",
          accent: "#701F0E",
          soft: "#F7EDEA",
          icon: <DoorOpen />,
          benefits: [
            "Private Environment",
            "Dedicated Setup",
            "Secure Discussions",
          ],
        };
      }


      if (
        people === "solo" &&
        mode === "meet"
      ) {
        return {
          title: "Discussion Room",
          eyebrow:
            "SPACE TO TALK & CONNECT",
          description:
            "A comfortable professional environment for interviews, calls, reviews and meaningful conversations.",
          score: 91,
          capacity: "2–6 People",
          vibe:
            "Talk · Review · Solve",
          accent: "#C88900",
          soft: "#FFF4D8",
          icon: <BriefcaseBusiness />,
          benefits: [
            "Quiet Conversations",
            "Flexible Sessions",
            "Client Friendly",
          ],
        };
      }


      if (
        people === "solo" &&
        mode === "create"
      ) {
        return {
          title: "Dedicated Desk",
          eyebrow:
            "YOUR CREATIVE BASE",
          description:
            "A consistent personal workspace that gives you the rhythm and ownership needed to keep creating.",
          score:
            duration === "monthly"
              ? 98
              : 93,
          capacity: "1 Person",
          vibe:
            "Own · Create · Grow",
          accent: "#B17C00",
          soft: "#FFF5D5",
          icon: <Monitor />,
          benefits: [
            "Reserved Workspace",
            "Daily Consistency",
            "Long-term Comfort",
          ],
        };
      }


      if (
        duration === "monthly"
      ) {
        return {
          title: "Dedicated Desk",
          eyebrow:
            "MAKE THE HIVE YOUR BASE",
          description:
            "A permanent personal workspace for professionals who want routine, consistency and a place that feels like their own.",
          score: 98,
          capacity: "1 Person",
          vibe:
            "Own · Focus · Grow",
          accent: "#701F0E",
          soft: "#F8EFEC",
          icon: <Monitor />,
          benefits: [
            "Reserved Desk",
            "Personal Rhythm",
            "Long-term Comfort",
          ],
        };
      }


      return {
        title: "Hot Desk",
        eyebrow:
          "YOUR FLEXIBLE HIVE MATCH",
        description:
          "A flexible desk built for focused work, productive drop-ins and days when you simply want to plug in and move.",
        score:
          duration === "hours"
            ? 99
            : 95,
        capacity: "1 Person",
        vibe:
          "Focus · Flex · Flow",
        accent: "#FFBF00",
        soft: "#FFF4C7",
        icon: <Zap />,
        benefits: [
          "Fast Setup",
          "Flexible Access",
          "Community Energy",
        ],
      };
    }, [
      people,
      mode,
      duration,
    ]);


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
              "workspaceMatcher--visible"
            );

            observer.disconnect();
          }
        },
        {
          threshold: 0.08,
        }
      );


    observer.observe(section);


    return () =>
      observer.disconnect();
  }, []);


  useEffect(() => {
    const resultPanel =
      resultRef.current;

    if (!resultPanel) {
      return;
    }


    resultPanel.classList.remove(
      "workspaceMatcher__result--changing"
    );


    requestAnimationFrame(() => {
      resultPanel.classList.add(
        "workspaceMatcher__result--changing"
      );
    });


    const timer =
      window.setTimeout(() => {
        resultPanel.classList.remove(
          "workspaceMatcher__result--changing"
        );
      }, 650);


    return () =>
      window.clearTimeout(timer);
  }, [result]);


  const renderChoiceGroup = (
    choices: Choice[],
    active: string,
    onChange:
      (value: string) => void
  ) => {
    return (
      <div className="workspaceMatcher__choices">
        {choices.map(
          (
            choice,
            index
          ) => {
            const selected =
              active ===
              choice.id;


            return (
              <button
                key={
                  choice.id
                }
                type="button"
                onClick={() =>
                  onChange(
                    choice.id
                  )
                }
                className={`
                  workspaceMatcher__choice
                  ${
                    selected
                      ? "workspaceMatcher__choice--active"
                      : ""
                  }
                `}
                style={
                  {
                    "--choice-index":
                      index,
                  } as CSSProperties
                }
              >
                <span className="workspaceMatcher__choiceIcon">
                  {
                    choice.icon
                  }
                </span>


                <span className="workspaceMatcher__choiceCopy">
                  <strong>
                    {
                      choice.label
                    }
                  </strong>

                  <small>
                    {
                      choice.short
                    }
                  </small>
                </span>


                <span className="workspaceMatcher__choiceCheck">
                  <Check />
                </span>
              </button>
            );
          }
        )}
      </div>
    );
  };


  return (
    <section
      ref={sectionRef}
      className="workspaceMatcher"
    >

      {/* =====================================
          HEADER
      ====================================== */}

      <header className="workspaceMatcher__header">

        <div className="workspaceMatcher__eyebrow">
          <Sparkles />

          <span>
            HIVE MATCH
          </span>

          <i />

          <small>
            INTERACTIVE
          </small>
        </div>


        <h2>
          Build your
          <span>
            perfect workday.
          </span>
        </h2>


        <p>
          Tell the hive how you
          work. We’ll match your
          rhythm with the right
          NerdsHive space.
        </p>

      </header>


      {/* =====================================
          EXPERIENCE
      ====================================== */}

      <div className="workspaceMatcher__experience">


        {/* ===================================
            CONFIGURATOR
        ==================================== */}

        <div className="workspaceMatcher__configurator">


          <div className="workspaceMatcher__configHeader">

            <div>
              <span>
                YOUR WORKSTYLE
              </span>

              <strong>
                3 quick choices
              </strong>
            </div>


            <div className="workspaceMatcher__stepCounter">
              <span>
                01
              </span>

              <i />

              <span>
                02
              </span>

              <i />

              <span>
                03
              </span>
            </div>

          </div>


          {/* STEP 1 */}

          <div className="workspaceMatcher__question">

            <div className="workspaceMatcher__questionNumber">
              01
            </div>


            <div className="workspaceMatcher__questionHeading">

              <span>
                WHO’S WORKING?
              </span>

              <h3>
                How do you
                arrive at the hive?
              </h3>

            </div>


            {renderChoiceGroup(
              peopleChoices,
              people,
              setPeople
            )}

          </div>


          <div className="workspaceMatcher__journeyLine">
            <span />
          </div>


          {/* STEP 2 */}

          <div className="workspaceMatcher__question">

            <div className="workspaceMatcher__questionNumber">
              02
            </div>


            <div className="workspaceMatcher__questionHeading">

              <span>
                WORK MODE
              </span>

              <h3>
                What needs to
                happen today?
              </h3>

            </div>


            {renderChoiceGroup(
              modeChoices,
              mode,
              setMode
            )}

          </div>


          <div className="workspaceMatcher__journeyLine">
            <span />
          </div>


          {/* STEP 3 */}

          <div className="workspaceMatcher__question">

            <div className="workspaceMatcher__questionNumber">
              03
            </div>


            <div className="workspaceMatcher__questionHeading">

              <span>
                YOUR RHYTHM
              </span>

              <h3>
                How long will
                you call it home?
              </h3>

            </div>


            {renderChoiceGroup(
              durationChoices,
              duration,
              setDuration
            )}

          </div>

        </div>


        {/* ===================================
            RESULT PANEL
        ==================================== */}

        <div
          ref={resultRef}
          className="workspaceMatcher__result"
          style={
            {
              "--match-accent":
                result.accent,

              "--match-soft":
                result.soft,

              "--score":
                result.score,
            } as CSSProperties
          }
        >

          {/* PREMIUM TOP */}

          <div className="workspaceMatcher__resultTop">

            <div className="workspaceMatcher__matchStatus">

              <span>
                LIVE MATCH
              </span>

              <i />

              UPDATED
            </div>


            <div className="workspaceMatcher__resultNumber">
              <Layers3 />
              01 MATCH
            </div>

          </div>


          {/* SCORE */}

          <div className="workspaceMatcher__scoreArea">

            <div className="workspaceMatcher__scoreRing">

              <svg
                viewBox="0 0 140 140"
                aria-hidden="true"
              >
                <circle
                  className="workspaceMatcher__scoreTrack"
                  cx="70"
                  cy="70"
                  r="59"
                />

                <circle
                  className="workspaceMatcher__scoreProgress"
                  cx="70"
                  cy="70"
                  r="59"
                />
              </svg>


              <div className="workspaceMatcher__scoreCenter">

                <strong>
                  {
                    result.score
                  }
                  <small>
                    %
                  </small>
                </strong>

                <span>
                  MATCH
                </span>

              </div>

            </div>


            <div className="workspaceMatcher__scoreCopy">

              <span>
                {
                  result.eyebrow
                }
              </span>


              <h3>
                {
                  result.title
                }
              </h3>


              <p>
                {
                  result.description
                }
              </p>

            </div>

          </div>


          {/* RESULT ICON */}

          <div className="workspaceMatcher__spaceEmblem">

            <span className="workspaceMatcher__emblemOrbit workspaceMatcher__emblemOrbit--one" />

            <span className="workspaceMatcher__emblemOrbit workspaceMatcher__emblemOrbit--two" />


            <div
              key={
                result.title
              }
              className="workspaceMatcher__emblemCore"
            >
              {
                result.icon
              }
            </div>

          </div>


          {/* META */}

          <div className="workspaceMatcher__resultMeta">

            <div>
              <UserRound />

              <span>
                CAPACITY

                <strong>
                  {
                    result.capacity
                  }
                </strong>
              </span>
            </div>


            <div>
              <Gauge />

              <span>
                WORK VIBE

                <strong>
                  {
                    result.vibe
                  }
                </strong>
              </span>
            </div>

          </div>


          {/* BENEFITS */}

          <div className="workspaceMatcher__benefits">

            {result.benefits.map(
              (
                benefit,
                index
              ) => (
                <span
                  key={
                    benefit
                  }
                  style={
                    {
                      "--benefit-index":
                        index,
                    } as CSSProperties
                  }
                >
                  <Check />

                  {
                    benefit
                  }
                </span>
              )
            )}

          </div>


          {/* CTA */}

          <div className="workspaceMatcher__cta">

            <button
              type="button"
            >
              <span>
                Explore My Match
              </span>


              <i>
                <ArrowRight />
              </i>
            </button>


            <small>
              Your workspace can
              change anytime.
            </small>

          </div>


          {/* DECORATIVE HIVE PATH */}

          <div className="workspaceMatcher__hivePath">

            <span className="workspaceMatcher__pathNode workspaceMatcher__pathNode--1" />

            <span className="workspaceMatcher__pathNode workspaceMatcher__pathNode--2" />

            <span className="workspaceMatcher__pathNode workspaceMatcher__pathNode--3" />

            <span className="workspaceMatcher__pathNode workspaceMatcher__pathNode--4" />

            <div className="workspaceMatcher__pathBee">
              <span />
              <i />
              <i />
            </div>

          </div>


          {/* CORNER */}

          <div className="workspaceMatcher__resultCorner">
            <Rocket />
          </div>

        </div>

      </div>

    </section>
  );
};


export default WorkspaceMatcher;