import {
  ArrowRight,
  Armchair,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Hexagon,
  Laptop,
  Presentation,
  Sparkles,
  UsersRound,
  Wifi,
} from "lucide-react";
import { useEffect, useRef } from "react";

import "./InsideHive.css";
import "./InsideHiveCoreCute.css";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  position: string;
};

const features: Feature[] = [
  {
    title: "Focused Work",
    description:
      "Quiet zones, ergonomic seating & zero distractions to help you go deep.",
    icon: <Laptop />,
    position: "focused",
  },
  {
    title: "Vibrant Community",
    description:
      "Connect, collaborate & grow with like-minded creators and founders.",
    icon: <UsersRound />,
    position: "community",
  },
  {
    title: "Growth Support",
    description:
      "Workshops, mentorship & resources to help your ideas scale into impact.",
    icon: <ChartNoAxesCombined />,
    position: "growth",
  },
  {
    title: "Flexible Spaces",
    description:
      "From hot desks to private offices — scale up or down as you need.",
    icon: <Armchair />,
    position: "flexible",
  },
  {
    title: "Meeting Rooms",
    description:
      "Modern rooms with smart tech, whiteboards & seamless booking.",
    icon: <Presentation />,
    position: "meeting",
  },
  {
    title: "Smart Amenities",
    description:
      "Fast internet, lockers, events and useful amenities — all under one roof.",
    icon: <Wifi />,
    position: "amenities",
  },
];

const InsideHive = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("insideHive--visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    const handlePointerMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      section.style.setProperty(
        "--hive-mouse-x",
        `${x * 18}px`
      );

      section.style.setProperty(
        "--hive-mouse-y",
        `${y * 18}px`
      );

      section.style.setProperty(
        "--hive-rotate-x",
        `${y * -3}deg`
      );

      section.style.setProperty(
        "--hive-rotate-y",
        `${x * 4}deg`
      );
    };

    const resetPointer = () => {
      section.style.setProperty(
        "--hive-mouse-x",
        "0px"
      );

      section.style.setProperty(
        "--hive-mouse-y",
        "0px"
      );

      section.style.setProperty(
        "--hive-rotate-x",
        "0deg"
      );

      section.style.setProperty(
        "--hive-rotate-y",
        "0deg"
      );
    };

    section.addEventListener(
      "pointermove",
      handlePointerMove
    );

    section.addEventListener(
      "pointerleave",
      resetPointer
    );

    return () => {
      observer.disconnect();

      section.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      section.removeEventListener(
        "pointerleave",
        resetPointer
      );
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="insideHive"
    >
      {/* ambient decorations */}

      <div className="insideHive__glow insideHive__glow--one" />
      <div className="insideHive__glow insideHive__glow--two" />

      <div className="insideHive__dotGrid insideHive__dotGrid--one" />

      <div className="insideHive__floatingHex insideHive__floatingHex--one">
        <Hexagon />
      </div>

      <div className="insideHive__floatingHex insideHive__floatingHex--two">
        <Hexagon />
      </div>

      {/* heading */}

      <header className="insideHive__header">
        <div className="insideHive__eyebrow">
          <span className="insideHive__eyebrowIcon">
            <Hexagon />
          </span>

          <span>INSIDE THE HIVE</span>
        </div>

        <h2>
          What Makes{" "}
          <span>NerdsHive</span>{" "}
          Different
        </h2>

        <p>
          Thoughtfully designed spaces.
          Genuine connections. Everything you need
          to do your best work.
        </p>

        <div className="insideHive__headingLine">
          <span />
          <i />
          <span />
        </div>
      </header>

      {/* main feature system */}

      <div className="insideHive__stage">
        <div className="insideHive__connector insideHive__connector--leftTop" />
        <div className="insideHive__connector insideHive__connector--leftMiddle" />
        <div className="insideHive__connector insideHive__connector--leftBottom" />

        <div className="insideHive__connector insideHive__connector--rightTop" />
        <div className="insideHive__connector insideHive__connector--rightMiddle" />
        <div className="insideHive__connector insideHive__connector--rightBottom" />

        {features.map((feature, index) => (
          <article
            key={feature.title}
            className={`insideHive__feature insideHive__feature--${feature.position}`}
            style={
              {
                "--feature-delay": `${0.12 + index * 0.08}s`,
              } as React.CSSProperties
            }
          >
            <div className="insideHive__featureIcon">
              {feature.icon}
            </div>

            <div className="insideHive__featureText">
              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>
            </div>

            <button
              className="insideHive__featureArrow"
              type="button"
              aria-label={`Explore ${feature.title}`}
            >
              <ArrowRight />
            </button>

            <span className="insideHive__featureHex">
              <Hexagon />
            </span>
          </article>
        ))}

        {/* centerpiece */}

        <article className="insideHive__coreCard">
          <div className="insideHive__coreShimmer" />

          <div className="insideHive__coreTag">
            <Sparkles />
            <span>OUR CORE</span>
          </div>

          <div className="insideHive__coreTop">
            <div className="insideHive__coreLogoOrbit">
              <span className="insideHive__orbit insideHive__orbit--1" />
              <span className="insideHive__orbit insideHive__orbit--2" />

              <div className="insideHive__coreIcon">
                <BriefcaseBusiness />
              </div>
            </div>
          </div>

          <h3>
            Startup Energy
          </h3>

          <p>
            A high-energy ecosystem that fuels
            creativity, collaboration and momentum
            every single day.
          </p>

          <div className="insideHive__coreBottom">
            <div className="insideHive__people">
              <span>F</span>
              <span>C</span>
              <span>T</span>
            </div>

            <div className="insideHive__peopleCopy">
              <strong>
                Founders & Creators
              </strong>

              <span>
                building together
              </span>
            </div>

            <button
              className="insideHive__coreArrow"
              type="button"
              aria-label="Explore NerdsHive community"
            >
              <ArrowRight />
            </button>
          </div>

          {/* cute bee */}

          <div className="insideHive__bee">
            <span className="insideHive__beeWing insideHive__beeWing--left" />
            <span className="insideHive__beeWing insideHive__beeWing--right" />

            <span className="insideHive__beeBody">
              <i />
              <i />
            </span>

            <span className="insideHive__beeHead">
              <i className="insideHive__eye insideHive__eye--left" />
              <i className="insideHive__eye insideHive__eye--right" />
            </span>

            <span className="insideHive__antenna insideHive__antenna--left" />
            <span className="insideHive__antenna insideHive__antenna--right" />

            <span className="insideHive__beeTrail" />
          </div>

          <span className="insideHive__spark insideHive__spark--1">
            ✦
          </span>

          <span className="insideHive__spark insideHive__spark--2">
            ✦
          </span>

          <span className="insideHive__spark insideHive__spark--3">
            •
          </span>
        </article>
      </div>

      {/* footer phrase */}

      <div className="insideHive__footer">
        <span className="insideHive__footerLine" />

        <div className="insideHive__footerBee">
          🐝
        </div>

        <p>
          More than a workspace.{" "}
          <strong>
            It&apos;s your launchpad.
          </strong>
        </p>

        <span className="insideHive__footerLine" />
      </div>
    </section>
  );
};

export default InsideHive;