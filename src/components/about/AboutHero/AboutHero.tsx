import { useEffect, useRef } from "react";
import {
  Lightbulb,
  House,
  UsersRound,
  Rocket,
  Boxes,
} from "lucide-react";

import "./AboutHero.css";


const AboutHero = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);


  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;


    /* -----------------------------------------
       ENTRY REVEAL
    ----------------------------------------- */

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            section.classList.add(
              "aboutHiveHero--visible"
            );

            observer.disconnect();
          }
        },
        {
          threshold: 0.15,
        }
      );

    observer.observe(section);


    /* -----------------------------------------
       MOUSE PARALLAX
    ----------------------------------------- */

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      const rect =
        section.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width;

      const y =
        (event.clientY - rect.top) /
        rect.height;

      const moveX =
        (x - 0.5) * 18;

      const moveY =
        (y - 0.5) * 18;

      section.style.setProperty(
        "--mouse-x",
        `${moveX}px`
      );

      section.style.setProperty(
        "--mouse-y",
        `${moveY}px`
      );
    };


    const handleMouseLeave = () => {
      section.style.setProperty(
        "--mouse-x",
        "0px"
      );

      section.style.setProperty(
        "--mouse-y",
        "0px"
      );
    };


    section.addEventListener(
      "mousemove",
      handleMouseMove
    );

    section.addEventListener(
      "mouseleave",
      handleMouseLeave
    );


    return () => {
      observer.disconnect();

      section.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      section.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="aboutHiveHero"
    >

      {/* =====================================
          BACKGROUND DECORATION
      ====================================== */}

      <div
        className="
          aboutHiveHero__decor
          aboutHiveHero__decor--one
        "
      />

      <div
        className="
          aboutHiveHero__decor
          aboutHiveHero__decor--two
        "
      />

      <div
        className="
          aboutHiveHero__decor
          aboutHiveHero__decor--three
        "
      />


      <div
        className="
          aboutHiveHero__miniHex
          aboutHiveHero__miniHex--one
        "
      />

      <div
        className="
          aboutHiveHero__miniHex
          aboutHiveHero__miniHex--two
        "
      />

      <div
        className="
          aboutHiveHero__miniHex
          aboutHiveHero__miniHex--three
        "
      />


      {/* =====================================
          MAIN CANVAS
      ====================================== */}

      <div className="aboutHiveHero__canvas">


        {/* =====================================
            LEFT STORY
        ====================================== */}

        <div className="aboutHiveHero__story">

          <div className="aboutHiveHero__brand">
            <div className="aboutHiveHero__brandIcon">
              <Boxes size={20} />
            </div>

            <span>
              NERDS
              <strong>HIVE</strong>
            </span>
          </div>


          <div className="aboutHiveHero__eyebrow">
            <span>
              OUR STORY
            </span>

            <i />
          </div>


          <h1 className="aboutHiveHero__title">
            From idea
            <br />
            to{" "}
            <span>
              hive.
            </span>
          </h1>


          <div className="aboutHiveHero__titleLine" />


          <p className="aboutHiveHero__intro">
            Every great hive begins
            with a tiny{" "}
            <strong className="amberText">
              idea
            </strong>{" "}
            and grows stronger with the
            right{" "}
            <strong>
              space
            </strong>
            , the right{" "}
            <strong>
              people
            </strong>{" "}
            and a bigger vision for the{" "}
            <strong className="amberText">
              future.
            </strong>
          </p>


          <div className="aboutHiveHero__storyNote">
            <div className="aboutHiveHero__storyNoteIcon">
              <Boxes size={20} />
            </div>

            <p>
              Four moments that shaped
              NerdsHive into what it is
              today.
            </p>
          </div>

        </div>


        {/* =====================================
            PATH WORLD
        ====================================== */}

        <div className="aboutHiveHero__journey">


          {/* =====================================
              SVG S PATH
          ====================================== */}

          <svg
            className="aboutHiveHero__pathSvg"
            viewBox="0 0 1180 760"
            preserveAspectRatio="none"
            aria-hidden="true"
          >

            <defs>

              <filter
                id="journeyGlow"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feGaussianBlur
                  stdDeviation="4"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

            </defs>


            <path
              className="aboutHiveHero__pathShadow"
              d="
                M 35 215
                C 140 70,
                  290 80,
                  390 185
                S 620 390,
                  760 235
                S 980 120,
                  1120 245
                S 1000 500,
                  845 520
                S 585 400,
                  440 520
                S 220 665,
                  95 570
              "
            />


            <path
              className="aboutHiveHero__path"
              d="
                M 35 215
                C 140 70,
                  290 80,
                  390 185
                S 620 390,
                  760 235
                S 980 120,
                  1120 245
                S 1000 500,
                  845 520
                S 585 400,
                  440 520
                S 220 665,
                  95 570
              "
            />

          </svg>


          {/* =====================================
              MOVING BEE
          ====================================== */}

          <div className="aboutHiveHero__beeRunner">

            <div className="aboutHiveHero__bee">

              <span className="aboutHiveHero__beeWing aboutHiveHero__beeWing--left" />

              <span className="aboutHiveHero__beeWing aboutHiveHero__beeWing--right" />

              <span className="aboutHiveHero__beeBody">
                <i />
                <i />
              </span>

              <span className="aboutHiveHero__beeHead">

                <i className="beeEye beeEye--left" />

                <i className="beeEye beeEye--right" />

                <i className="beeSmile" />

              </span>

              <span className="aboutHiveHero__antenna aboutHiveHero__antenna--left" />

              <span className="aboutHiveHero__antenna aboutHiveHero__antenna--right" />

            </div>

          </div>


          {/* =====================================
              START
          ====================================== */}

          <div className="aboutHiveHero__start">
            <span className="aboutHiveHero__startDot" />
            <strong>START</strong>
          </div>


          {/* =====================================
              CARD 01
          ====================================== */}

          <article
            className="
              aboutHiveHero__card
              aboutHiveHero__card--idea
            "
          >

            <div
              className="
                aboutHiveHero__number
                aboutHiveHero__number--amber
              "
            >
              01
            </div>


            <div className="aboutHiveHero__cardCopy">

              <h3>
                IDEA
              </h3>

              <span className="aboutHiveHero__cardLine" />

              <p>
                It began with
                <br />
                a{" "}
                <strong>
                  belief.
                </strong>
              </p>

            </div>


            <div className="aboutHiveHero__cardIcon">
              <Lightbulb />
            </div>


            <span className="aboutHiveHero__node aboutHiveHero__node--idea" />

          </article>


          {/* =====================================
              CARD 02
          ====================================== */}

          <article
            className="
              aboutHiveHero__card
              aboutHiveHero__card--space
            "
          >

            <div
              className="
                aboutHiveHero__number
                aboutHiveHero__number--brown
              "
            >
              02
            </div>


            <div className="aboutHiveHero__cardCopy">

              <h3>
                SPACE
              </h3>

              <span className="aboutHiveHero__cardLine aboutHiveHero__cardLine--brown" />

              <p>
                The idea found
                <br />
                a{" "}
                <strong>
                  home.
                </strong>
              </p>

            </div>


            <div className="aboutHiveHero__cardIcon aboutHiveHero__cardIcon--brown">
              <House />
            </div>


            <span className="aboutHiveHero__node aboutHiveHero__node--space" />

          </article>


          {/* =====================================
              CARD 03
          ====================================== */}

          <article
            className="
              aboutHiveHero__card
              aboutHiveHero__card--community
            "
          >

            <div
              className="
                aboutHiveHero__number
                aboutHiveHero__number--brownSoft
              "
            >
              03
            </div>


            <div className="aboutHiveHero__cardCopy">

              <h3>
                COMMUNITY
              </h3>

              <span className="aboutHiveHero__cardLine aboutHiveHero__cardLine--brown" />

              <p>
                People made
                <br />
                it{" "}
                <strong>
                  grow.
                </strong>
              </p>

            </div>


            <div className="aboutHiveHero__cardIcon aboutHiveHero__cardIcon--brown">
              <UsersRound />
            </div>


            <span className="aboutHiveHero__node aboutHiveHero__node--community" />

          </article>


          {/* =====================================
              CARD 04
          ====================================== */}

          <article
            className="
              aboutHiveHero__card
              aboutHiveHero__card--future
            "
          >

            <div
              className="
                aboutHiveHero__number
                aboutHiveHero__number--amber
              "
            >
              04
            </div>


            <div className="aboutHiveHero__cardCopy">

              <h3>
                FUTURE
              </h3>

              <span className="aboutHiveHero__cardLine" />

              <p>
                Bigger{" "}
                <strong>
                  possibilities
                </strong>
                <br />
                ahead.
              </p>

            </div>


            <div className="aboutHiveHero__cardIcon">
              <Rocket />
            </div>


            <span className="aboutHiveHero__node aboutHiveHero__node--future" />

          </article>


          {/* =====================================
              CENTER HIVE CORE
          ====================================== */}

          <div className="aboutHiveHero__core">

            <div className="aboutHiveHero__coreRing aboutHiveHero__coreRing--one" />

            <div className="aboutHiveHero__coreRing aboutHiveHero__coreRing--two" />

            <div className="aboutHiveHero__coreRing aboutHiveHero__coreRing--three" />


            <div className="aboutHiveHero__coreHex">

              <Boxes />

            </div>


            <span className="aboutHiveHero__coreDot aboutHiveHero__coreDot--one" />

            <span className="aboutHiveHero__coreDot aboutHiveHero__coreDot--two" />

            <span className="aboutHiveHero__coreDot aboutHiveHero__coreDot--three" />

          </div>


          {/* =====================================
              END
          ====================================== */}

          <div className="aboutHiveHero__end">
            <span className="aboutHiveHero__endDot" />

            <strong>
              NEXT
            </strong>
          </div>


          {/* =====================================
              FLOATING DETAILS
          ====================================== */}

          <span className="aboutHiveHero__spark aboutHiveHero__spark--one">
            ✦
          </span>

          <span className="aboutHiveHero__spark aboutHiveHero__spark--two">
            +
          </span>

          <span className="aboutHiveHero__spark aboutHiveHero__spark--three">
            ✦
          </span>

          <span className="aboutHiveHero__spark aboutHiveHero__spark--four">
            +
          </span>

        </div>

      </div>


      {/* =====================================
          BOTTOM LABEL
      ====================================== */}

      <div className="aboutHiveHero__footerLabel">

        <span>
          01
        </span>

        <i />

        <strong>
          IDEA
        </strong>

        <i />

        <strong>
          SPACE
        </strong>

        <i />

        <strong>
          COMMUNITY
        </strong>

        <i />

        <strong>
          FUTURE
        </strong>

      </div>

    </section>
  );
};


export default AboutHero;