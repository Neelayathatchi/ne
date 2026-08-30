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
  BriefcaseBusiness,
  Code2,
  Lightbulb,
  Megaphone,
  Rocket,
  Sparkles,
  UsersRound,
} from "lucide-react";

import "./Community.css";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   TYPES
========================================================= */

type CommunityNode = {
  id: number;
  number: string;
  label: string;
  shortLabel: string;
  text: string;
  icon: React.ElementType;
  className: string;
};


/* =========================================================
   COMMUNITY DATA
========================================================= */

const communityNodes: CommunityNode[] = [
  {
    id: 1,
    number: "01",
    label: "Founders",
    shortLabel: "BUILD",
    text:
      "Build around ambitious people who understand ideas, risk, momentum and the courage it takes to start.",
    icon: Rocket,
    className: "communityNode--1",
  },

  {
    id: 2,
    number: "02",
    label: "Creators",
    shortLabel: "CREATE",
    text:
      "A vibrant environment for designers, storytellers and creators to turn imagination into meaningful work.",
    icon: Megaphone,
    className: "communityNode--2",
  },

  {
    id: 3,
    number: "03",
    label: "Startups",
    shortLabel: "LAUNCH",
    text:
      "Work beside teams turning early ideas into products, services and growing businesses.",
    icon: Lightbulb,
    className: "communityNode--3",
  },

  {
    id: 4,
    number: "04",
    label: "Tech Teams",
    shortLabel: "SHIP",
    text:
      "A focused workspace for engineers, developers and digital teams building what comes next.",
    icon: Code2,
    className: "communityNode--4",
  },

  {
    id: 5,
    number: "05",
    label: "Professionals",
    shortLabel: "CONNECT",
    text:
      "Meet independent professionals building careers, businesses and valuable connections.",
    icon: BriefcaseBusiness,
    className: "communityNode--5",
  },

  {
    id: 6,
    number: "06",
    label: "Growing Teams",
    shortLabel: "GROW",
    text:
      "Give your team the environment, people and momentum needed to move confidently forward.",
    icon: UsersRound,
    className: "communityNode--6",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

const Community = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const networkRef =
    useRef<HTMLDivElement | null>(null);

  const beeRef =
    useRef<HTMLDivElement | null>(null);

  const [
    activeNode,
    setActiveNode,
  ] = useState(1);


  const currentNode =
    useMemo(
      () =>
        communityNodes.find(
          (node) =>
            node.id === activeNode
        ) ??
        communityNodes[0],

      [activeNode]
    );


  /* =========================================================
     GSAP ENTRANCE + SCROLL EFFECTS
  ========================================================= */

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;


    const context =
      gsap.context(() => {

        /* -------------------------------------------------
           EYEBROW
        ------------------------------------------------- */

        gsap.fromTo(
          ".communityEyebrow",
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,

            duration: 0.7,

            ease: "power3.out",

            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          }
        );


        /* -------------------------------------------------
           TITLE
        ------------------------------------------------- */

        gsap.fromTo(
          ".communityTitleLine",
          {
            opacity: 0,
            y: 80,
            rotateX: -18,
            scale: 0.92,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,

            stagger: 0.13,

            duration: 0.95,

            ease:
              "back.out(1.4)",

            scrollTrigger: {
              trigger:
                ".communityTitle",

              start:
                "top 88%",

              once: true,
            },
          }
        );


        /* -------------------------------------------------
           INTRO
        ------------------------------------------------- */

        gsap.fromTo(
          ".communityIntro",
          {
            opacity: 0,
            y: 28,
          },
          {
            opacity: 1,
            y: 0,

            duration: 0.75,

            ease: "power3.out",

            scrollTrigger: {
              trigger:
                ".communityIntro",

              start:
                "top 92%",

              once: true,
            },
          }
        );


        /* -------------------------------------------------
           NETWORK FRAME
        ------------------------------------------------- */

        gsap.fromTo(
          ".communityNetworkFrame",
          {
            opacity: 0,
            scale: 0.96,
            y: 40,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,

            duration: 1,

            ease:
              "power3.out",

            scrollTrigger: {
              trigger:
                ".communityNetwork",

              start:
                "top 83%",

              once: true,
            },
          }
        );


        /* -------------------------------------------------
           CENTER CORE
        ------------------------------------------------- */

        gsap.fromTo(
          ".communityCore",
          {
            opacity: 0,
            scale: 0.38,
            rotate: -18,
          },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,

            duration: 1.05,

            ease:
              "back.out(1.9)",

            scrollTrigger: {
              trigger:
                ".communityNetwork",

              start:
                "top 82%",

              once: true,
            },
          }
        );


        /* -------------------------------------------------
           OUTER NODES
        ------------------------------------------------- */

        gsap.fromTo(
          ".communityNode",
          {
            opacity: 0,
            scale: 0.48,
            y: 55,
            rotate: -5,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,

            stagger: {
              each: 0.09,
              from: "center",
            },

            duration: 0.85,

            ease:
              "back.out(1.65)",

            scrollTrigger: {
              trigger:
                ".communityNetwork",

              start:
                "top 80%",

              once: true,
            },
          }
        );


        /* -------------------------------------------------
           SVG CONNECTION DRAW
        ------------------------------------------------- */

        const paths =
          gsap.utils.toArray<SVGPathElement>(
            ".communityConnectionBase"
          );


        paths.forEach(
          (
            path,
            index
          ) => {

            const length =
              path.getTotalLength();


            gsap.set(
              path,
              {
                strokeDasharray:
                  length,

                strokeDashoffset:
                  length,
              }
            );


            gsap.to(
              path,
              {
                strokeDashoffset:
                  0,

                duration:
                  1.15,

                delay:
                  index *
                  0.07,

                ease:
                  "power2.inOut",

                scrollTrigger: {
                  trigger:
                    ".communityNetwork",

                  start:
                    "top 80%",

                  once: true,
                },
              }
            );

          }
        );


        /* -------------------------------------------------
           BEE ENTRANCE
        ------------------------------------------------- */

        gsap.fromTo(
          ".communityBeeOrbit",
          {
            opacity: 0,
            scale: 0.6,
          },
          {
            opacity: 1,
            scale: 1,

            duration: 1,

            ease:
              "back.out(1.6)",

            scrollTrigger: {
              trigger:
                ".communityNetwork",

              start:
                "top 77%",

              once: true,
            },
          }
        );


        /* -------------------------------------------------
           CHAT BUBBLES
        ------------------------------------------------- */

        gsap.fromTo(
          ".communityBubble",
          {
            opacity: 0,
            scale: 0.4,
            y: 20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,

            stagger: 0.14,

            duration: 0.65,

            ease:
              "back.out(2)",

            scrollTrigger: {
              trigger:
                ".communityNetwork",

              start:
                "top 72%",

              once: true,
            },
          }
        );


        /* -------------------------------------------------
           ACTIVE DETAIL
        ------------------------------------------------- */

        gsap.fromTo(
          ".communityActive",
          {
            opacity: 0,
            y: 35,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,

            duration: 0.8,

            ease:
              "power3.out",

            scrollTrigger: {
              trigger:
                ".communityActive",

              start:
                "top 92%",

              once: true,
            },
          }
        );


        /* -------------------------------------------------
           MINI CARDS
        ------------------------------------------------- */

        gsap.fromTo(
          ".communityMiniCard",
          {
            opacity: 0,
            y: 55,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,

            stagger: 0.11,

            duration: 0.85,

            ease:
              "back.out(1.35)",

            scrollTrigger: {
              trigger:
                ".communityMiniCards",

              start:
                "top 88%",

              once: true,
            },
          }
        );


        /* -------------------------------------------------
           GHOST WORD
        ------------------------------------------------- */

        gsap.to(
          ".communityGhost",
          {
            y: -95,

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
     ACTIVE NODE BOUNCE
  ========================================================= */

  useEffect(() => {
    const element =
      document.querySelector(
        `.communityNode--${activeNode}`
      );


    if (!element) return;


    gsap.fromTo(
      element,
      {
        scale: 1,
      },
      {
        scale: 1.075,

        duration: 0.24,

        yoyo: true,

        repeat: 1,

        ease:
          "power2.out",
      }
    );

  }, [activeNode]);


  /* =========================================================
     NETWORK PARALLAX
  ========================================================= */

  const handleNetworkMove = (
    event:
      MouseEvent<HTMLDivElement>
  ) => {

    const network =
      networkRef.current;


    if (!network) return;


    const rect =
      network.getBoundingClientRect();


    const x =
      event.clientX -
      rect.left;


    const y =
      event.clientY -
      rect.top;


    const px =
      x /
      rect.width -
      0.5;


    const py =
      y /
      rect.height -
      0.5;


    gsap.to(
      ".communityNetworkInner",
      {
        x:
          px *
          17,

        y:
          py *
          12,

        rotateY:
          px *
          2.5,

        rotateX:
          py *
          -2,

        duration:
          0.55,

        ease:
          "power3.out",
      }
    );


    gsap.to(
      ".communityParticle",
      {
        x:
          px *
          -25,

        y:
          py *
          -18,

        duration:
          0.75,

        ease:
          "power3.out",
      }
    );


    if (
      beeRef.current
    ) {

      gsap.to(
        beeRef.current,
        {
          rotate:
            px *
            12,

          duration:
            0.4,

          ease:
            "power3.out",
        }
      );

    }
  };


  const handleNetworkLeave =
    () => {

      gsap.to(
        ".communityNetworkInner",
        {
          x: 0,
          y: 0,

          rotateX: 0,
          rotateY: 0,

          duration: 0.7,

          ease:
            "power3.out",
        }
      );


      gsap.to(
        ".communityParticle",
        {
          x: 0,
          y: 0,

          duration: 0.7,

          ease:
            "power3.out",
        }
      );


      if (
        beeRef.current
      ) {

        gsap.to(
          beeRef.current,
          {
            rotate: 0,

            duration: 0.5,

            ease:
              "power3.out",
          }
        );

      }
    };


  return (
    <section
      ref={sectionRef}
      id="community"
      className="communitySection"
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="communityGhost"
        aria-hidden="true"
      >
        TOGETHER
      </div>


      <div
        className="communityTopDots"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>


      <div className="communityContainer">


        {/* ===================================================
            HEADER
        ==================================================== */}

        <header className="communityHeader">

          <div className="communityEyebrow">

            <span />

            <strong>
              MORE THAN A WORKSPACE
            </strong>

            <span />

          </div>


          <h2 className="communityTitle">

            <span className="communityTitleLine">
              More Than a Desk.
            </span>


            <span className="communityTitleLine communityTitleLine--yellow">
              A Place to Belong.
            </span>

          </h2>


          <p className="communityIntro">
            Great work rarely happens in
            isolation. NerdsHive brings
            founders, creators, professionals
            and growing teams into one
            energetic environment where ideas,
            conversations and opportunities
            can naturally connect.
          </p>

        </header>


        {/* ===================================================
            GIANT INTERACTIVE COMMUNITY NETWORK
        ==================================================== */}

        <div
          ref={networkRef}
          className="communityNetwork"

          onMouseMove={
            handleNetworkMove
          }

          onMouseLeave={
            handleNetworkLeave
          }
        >

          <div className="communityNetworkFrame">

            <span />

            <strong>
              INTERACTIVE COMMUNITY
            </strong>

            <span>
              MOVE YOUR CURSOR
            </span>

          </div>


          <div className="communityNetworkInner">


            {/* ===============================================
                CONNECTION SVG
            ================================================ */}

            <svg
              className="communityLines"

              viewBox="0 0 1220 820"

              preserveAspectRatio="none"

              aria-hidden="true"
            >

              {/* 01 */}

              <path
                className="communityConnectionBase"

                d="
                  M610 410
                  C500 300
                  390 190
                  275 145
                "
              />

              <path
                className={
                  `communityConnectionEnergy ${
                    activeNode === 1
                      ? "communityConnectionEnergy--active"
                      : ""
                  }`
                }

                d="
                  M610 410
                  C500 300
                  390 190
                  275 145
                "
              />


              {/* 02 */}

              <path
                className="communityConnectionBase"

                d="
                  M610 410
                  C720 300
                  830 190
                  945 145
                "
              />

              <path
                className={
                  `communityConnectionEnergy ${
                    activeNode === 2
                      ? "communityConnectionEnergy--active"
                      : ""
                  }`
                }

                d="
                  M610 410
                  C720 300
                  830 190
                  945 145
                "
              />


              {/* 03 */}

              <path
                className="communityConnectionBase"

                d="
                  M610 410
                  C470 405
                  320 395
                  155 385
                "
              />

              <path
                className={
                  `communityConnectionEnergy ${
                    activeNode === 3
                      ? "communityConnectionEnergy--active"
                      : ""
                  }`
                }

                d="
                  M610 410
                  C470 405
                  320 395
                  155 385
                "
              />


              {/* 04 */}

              <path
                className="communityConnectionBase"

                d="
                  M610 410
                  C750 405
                  900 395
                  1065 385
                "
              />

              <path
                className={
                  `communityConnectionEnergy ${
                    activeNode === 4
                      ? "communityConnectionEnergy--active"
                      : ""
                  }`
                }

                d="
                  M610 410
                  C750 405
                  900 395
                  1065 385
                "
              />


              {/* 05 */}

              <path
                className="communityConnectionBase"

                d="
                  M610 410
                  C500 520
                  410 630
                  295 690
                "
              />

              <path
                className={
                  `communityConnectionEnergy ${
                    activeNode === 5
                      ? "communityConnectionEnergy--active"
                      : ""
                  }`
                }

                d="
                  M610 410
                  C500 520
                  410 630
                  295 690
                "
              />


              {/* 06 */}

              <path
                className="communityConnectionBase"

                d="
                  M610 410
                  C720 520
                  810 630
                  925 690
                "
              />

              <path
                className={
                  `communityConnectionEnergy ${
                    activeNode === 6
                      ? "communityConnectionEnergy--active"
                      : ""
                  }`
                }

                d="
                  M610 410
                  C720 520
                  810 630
                  925 690
                "
              />

            </svg>


            {/* ===============================================
                GIANT ORBITS
            ================================================ */}

            <div className="communityOrbit communityOrbit--outer">

              <span />

              <span />

              <span />

            </div>


            <div className="communityOrbit communityOrbit--middle" />


            <div className="communityOrbit communityOrbit--inner" />


            {/* ===============================================
                FLOATING HONEYCOMB PARTICLES
            ================================================ */}

            {Array.from(
              {
                length: 12,
              }
            ).map(
              (
                _,
                index
              ) => (

                <span
                  key={index}

                  className={
                    `communityParticle communityParticle--${index + 1}`
                  }
                />

              )
            )}


            {/* ===============================================
                CENTER COMMUNITY CORE
            ================================================ */}

            <div className="communityCore">

              <span className="communityCorePulse communityCorePulse--1" />

              <span className="communityCorePulse communityCorePulse--2" />

              <span className="communityCorePulse communityCorePulse--3" />


              <div className="communityCoreSpark">

                <Sparkles
                  size={21}
                  strokeWidth={2}
                />

              </div>


              <span className="communityCoreSmall">
                ONE
              </span>


              <strong>
                COMMUNITY
              </strong>


              <small>
                CONNECT • BUILD • GROW
              </small>

            </div>


            {/* ===============================================
                COMMUNITY NODES
            ================================================ */}

            {communityNodes.map(
              (
                node
              ) => {

                const Icon =
                  node.icon;


                const isActive =
                  activeNode ===
                  node.id;


                return (
                  <button
                    key={
                      node.id
                    }

                    type="button"

                    className={
                      `communityNode ${node.className} ${
                        isActive
                          ? "communityNode--active"
                          : ""
                      }`
                    }

                    onMouseEnter={
                      () =>
                        setActiveNode(
                          node.id
                        )
                    }

                    onFocus={
                      () =>
                        setActiveNode(
                          node.id
                        )
                    }

                    onClick={
                      () =>
                        setActiveNode(
                          node.id
                        )
                    }
                  >

                    <span className="communityNodeNumber">
                      {
                        node.number
                      }
                    </span>


                    <div className="communityNodeIcon">

                      <Icon
                        size={35}
                        strokeWidth={1.9}
                      />

                    </div>


                    <span className="communityNodeKicker">
                      {
                        node.shortLabel
                      }
                    </span>


                    <strong>
                      {
                        node.label
                      }
                    </strong>


                    <span className="communityNodeDot" />

                  </button>
                );
              }
            )}


            {/* ===============================================
                LARGE CUTE BEE
            ================================================ */}

            <div
              className="communityBeeOrbit"
              aria-hidden="true"
            >

              <div
                ref={beeRef}
                className="communityBee"
              >

                <div className="communityBeeShadow" />


                <span className="communityBeeWing communityBeeWing--left" />

                <span className="communityBeeWing communityBeeWing--right" />


                <div className="communityBeeBody">

                  <span className="communityBeeStripe communityBeeStripe--1" />

                  <span className="communityBeeStripe communityBeeStripe--2" />

                </div>


                <div className="communityBeeHead">

                  <span className="communityBeeAntenna communityBeeAntenna--left" />

                  <span className="communityBeeAntenna communityBeeAntenna--right" />


                  <span className="communityBeeEye communityBeeEye--left">

                    <i />

                  </span>


                  <span className="communityBeeEye communityBeeEye--right">

                    <i />

                  </span>


                  <span className="communityBeeSmile" />

                </div>

              </div>

            </div>


            {/* ===============================================
                CHAT BUBBLES
            ================================================ */}

            <div className="communityBubble communityBubble--1">
              <span>
                💡
              </span>

              Let's build it!
            </div>


            <div className="communityBubble communityBubble--2">
              <span>
                👋
              </span>

              Hey, great idea!
            </div>


            <div className="communityBubble communityBubble--3">
              <span>
                🚀
              </span>

              Ready to grow?
            </div>


            <div className="communityBubble communityBubble--4">
              <span>
                🤝
              </span>

              Let's connect!
            </div>

          </div>

        </div>


        {/* ===================================================
            ACTIVE NODE DETAIL
        ==================================================== */}

        <div className="communityActive">

          <div className="communityActiveHex">

            <span>
              {
                currentNode.number
              }
            </span>

          </div>


          <div className="communityActiveContent">

            <span>
              ACTIVE COMMUNITY
            </span>


            <strong>
              {
                currentNode.label
              }
            </strong>


            <p>
              {
                currentNode.text
              }
            </p>

          </div>


          <button
            type="button"
            className="communityActiveArrow"
            aria-label="Explore community"
          >

            <ArrowUpRight
              size={22}
              strokeWidth={2.2}
            />

          </button>

        </div>


        {/* ===================================================
            SUPPORT CARDS
        ==================================================== */}

        <div className="communityMiniCards">


          <article className="communityMiniCard">

            <span className="communityMiniNumber">
              01
            </span>


            <div className="communityMiniIcon">
              💬
            </div>


            <strong>
              Conversations
            </strong>


            <p>
              A quick hello can become an idea,
              collaboration or opportunity.
            </p>


            <i />

          </article>


          <article className="communityMiniCard communityMiniCard--yellow">

            <span className="communityMiniNumber">
              02
            </span>


            <div className="communityMiniIcon">
              🤝
            </div>


            <strong>
              Connections
            </strong>


            <p>
              Meet talented people outside your
              usual professional circle.
            </p>


            <i />

          </article>


          <article className="communityMiniCard">

            <span className="communityMiniNumber">
              03
            </span>


            <div className="communityMiniIcon">
              🚀
            </div>


            <strong>
              Momentum
            </strong>


            <p>
              Surround yourself with people who
              are actively building and growing.
            </p>


            <i />

          </article>

        </div>


        {/* ===================================================
            FOOTER
        ==================================================== */}

        <div className="communityFooter">

          <div className="communityFooterCopy">

            <span />

            <p>
              Come for the space.
              <strong>
                {" "}
                Stay for the people.
              </strong>
            </p>

          </div>


          <a
            href="#contact"
            className="communityCTA"
          >

            <span>
              Meet the Community
            </span>


            <b>

              <ArrowUpRight
                size={19}
                strokeWidth={2.3}
              />

            </b>

          </a>

        </div>

      </div>

    </section>
  );
};


export default Community;