import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";

import {
  ArrowUpRight,
  X,
} from "lucide-react";

import gsap from "gsap";

import {
  workModes,
  type WorkMode,
} from "../../data/workModes";

import "./WorkModeHive.css";


type BeeFlight = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
};


const WorkModeHive = () => {
  const [
    activeMode,
    setActiveMode,
  ] = useState<WorkMode | null>(null);

  const [
    openingMode,
    setOpeningMode,
  ] = useState<WorkMode | null>(null);

  const [
    beeFlight,
    setBeeFlight,
  ] = useState<BeeFlight | null>(null);

  const [
    isBeeFlying,
    setIsBeeFlying,
  ] = useState(false);


  const beeRef =
    useRef<HTMLDivElement | null>(null);

  const panelRef =
    useRef<HTMLDivElement | null>(null);

  const overlayRef =
    useRef<HTMLDivElement | null>(null);


  /* =========================================================
     OPEN CARD
  ========================================================= */

  const handleOpen = (
    event: MouseEvent<HTMLButtonElement>,
    mode: WorkMode
  ) => {
    if (
      isBeeFlying ||
      activeMode ||
      openingMode
    ) {
      return;
    }

    const card =
      event.currentTarget;

    const rect =
      card.getBoundingClientRect();


    const startX =
      rect.left +
      rect.width * 0.84;

    const startY =
      rect.top +
      42;


    const endX =
      window.innerWidth / 2;

    const endY =
      Math.min(
        window.innerHeight * 0.33,
        300
      );


    setOpeningMode(mode);

    setIsBeeFlying(true);

    setBeeFlight({
      startX,
      startY,
      endX,
      endY,
    });
  };


  /* =========================================================
     BEE FLY ANIMATION
  ========================================================= */

  useEffect(() => {
    if (
      !beeFlight ||
      !beeRef.current ||
      !openingMode
    ) {
      return;
    }

    const bee =
      beeRef.current;


    gsap.killTweensOf(bee);


    gsap.set(bee, {
      x: beeFlight.startX,
      y: beeFlight.startY,
      opacity: 0,
      scale: 0.45,
      rotation: -12,
    });


    const middleX =
      (
        beeFlight.startX +
        beeFlight.endX
      ) / 2;

    const middleY =
      Math.min(
        beeFlight.startY,
        beeFlight.endY
      ) - 110;


    const timeline =
      gsap.timeline({
        onComplete: () => {
          setActiveMode(
            openingMode
          );

          setOpeningMode(null);

          setIsBeeFlying(false);

          setBeeFlight(null);
        },
      });


    timeline

      .to(bee, {
        opacity: 1,
        scale: 0.95,
        duration: 0.16,
        ease: "power2.out",
      })

      .to(bee, {
        x:
          beeFlight.startX +
          35,

        y:
          beeFlight.startY -
          52,

        rotation: 16,

        duration: 0.25,

        ease:
          "power1.out",
      })

      .to(bee, {
        x:
          middleX -
          45,

        y:
          middleY,

        rotation: -11,

        duration: 0.36,

        ease:
          "power1.inOut",
      })

      .to(bee, {
        x:
          beeFlight.endX -
          25,

        y:
          beeFlight.endY,

        rotation: 8,

        scale: 1.05,

        duration: 0.4,

        ease:
          "power2.inOut",
      })

      .to(bee, {
        opacity: 0,
        scale: 0.1,

        duration: 0.16,

        ease:
          "back.in(2)",
      });

  }, [
    beeFlight,
    openingMode,
  ]);


  /* =========================================================
     OPEN DETAIL MODAL
  ========================================================= */

  useEffect(() => {
    if (
      !activeMode ||
      !panelRef.current ||
      !overlayRef.current
    ) {
      return;
    }


    const panel =
      panelRef.current;

    const overlay =
      overlayRef.current;


    gsap.killTweensOf([
      panel,
      overlay,
    ]);


    gsap.fromTo(
      overlay,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        duration: 0.28,

        ease:
          "power2.out",
      }
    );


    gsap.fromTo(
      panel,
      {
        opacity: 0,

        y: 60,

        scale: 0.9,
      },
      {
        opacity: 1,

        y: 0,

        scale: 1,

        duration: 0.52,

        ease:
          "power4.out",
      }
    );


    document.body.style.overflow =
      "hidden";


    return () => {
      document.body.style.overflow =
        "";
    };
  }, [activeMode]);


  /* =========================================================
     CLOSE DETAIL MODAL
  ========================================================= */

  const handleClose = () => {
    if (
      !panelRef.current ||
      !overlayRef.current
    ) {
      setActiveMode(null);

      return;
    }


    const panel =
      panelRef.current;

    const overlay =
      overlayRef.current;


    gsap.killTweensOf([
      panel,
      overlay,
    ]);


    gsap.to(panel, {
      opacity: 0,

      y: 42,

      scale: 0.93,

      duration: 0.26,

      ease:
        "power3.in",
    });


    gsap.to(overlay, {
      opacity: 0,

      duration: 0.26,

      ease:
        "power2.in",

      onComplete: () => {
        setActiveMode(null);
      },
    });
  };


  /* =========================================================
     ESC KEY
  ========================================================= */

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (
        event.key === "Escape" &&
        activeMode
      ) {
        handleClose();
      }
    };


    window.addEventListener(
      "keydown",
      handleEscape
    );


    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [activeMode]);


  return (
    <section
      className="workHive"
      id="work-modes"
    >
      {/* =====================================================
          INTRO
      ====================================================== */}

      <div className="workHive__intro">

        <span className="workHive__eyebrow">
          <span className="workHive__eyebrowLine" />

          Find your rhythm

          <span className="workHive__eyebrowDot" />
        </span>


        <h2 className="workHive__title">
          Your way

          <span>
            {" "}
            to work.
          </span>
        </h2>


        <p className="workHive__subtitle">
          Every space supports a different rhythm.
          Choose the way you want to work and
          discover a setup designed around your
          day, your team and your ideas.
        </p>

      </div>


      {/* =====================================================
          WORK MODE GRID
      ====================================================== */}

      <div className="workHive__grid">

        {workModes.map(
          (
            mode,
            index
          ) => {
            const Icon =
              mode.icon;

            const isOpening =
              openingMode?.id ===
              mode.id;


            return (
              <button
                key={mode.id}

                type="button"

                className={`workCard ${
                  isOpening
                    ? "workCard--opening"
                    : ""
                }`}

                onClick={(
                  event
                ) =>
                  handleOpen(
                    event,
                    mode
                  )
                }

                style={
                  {
                    "--card-index":
                      index,
                  } as CSSProperties
                }
              >

                <div className="workCard__grain" />


                {/* BEE EYE */}

                <div
                  className="workCard__beeWindow"
                  aria-hidden="true"
                >

                  <div className="workCard__eye">
                    <span />
                  </div>


                  <div className="workCard__beeMini">

                    <span className="workCard__miniWing workCard__miniWing--left" />

                    <span className="workCard__miniWing workCard__miniWing--right" />

                    <span className="workCard__miniBody" />

                  </div>

                </div>


                {/* CARD ICON */}

                <div className="workCard__icon">

                  <Icon
                    size={31}
                    strokeWidth={1.8}
                  />

                </div>


                {/* COPY */}

                <div className="workCard__copy">

                  <span className="workCard__number">
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>


                  <h3>
                    {mode.title}
                  </h3>


                  <p>
                    {
                      mode.shortDescription
                    }
                  </p>

                </div>


                {/* BOTTOM */}

                <div className="workCard__discover">

                  <span>
                    Meet this space
                  </span>


                  <div className="workCard__discoverCircle">

                    <ArrowUpRight
                      size={17}
                    />

                  </div>

                </div>


                <div className="workCard__bottomLine" />

              </button>
            );
          }
        )}

      </div>


      {/* =====================================================
          FLYING BEE
      ====================================================== */}

      {isBeeFlying && (

        <div
          className="flyingBee"

          ref={beeRef}

          aria-hidden="true"
        >

          <span className="flyingBee__trail flyingBee__trail--one" />

          <span className="flyingBee__trail flyingBee__trail--two" />


          <div className="flyingBee__wing flyingBee__wing--left" />

          <div className="flyingBee__wing flyingBee__wing--right" />


          <div className="flyingBee__body">

            <span className="flyingBee__stripe flyingBee__stripe--one" />

            <span className="flyingBee__stripe flyingBee__stripe--two" />


            <div className="flyingBee__face">

              <span className="flyingBee__eye flyingBee__eye--left" />

              <span className="flyingBee__eye flyingBee__eye--right" />

              <span className="flyingBee__smile" />

            </div>

          </div>


          <span className="flyingBee__antenna flyingBee__antenna--left" />

          <span className="flyingBee__antenna flyingBee__antenna--right" />

        </div>

      )}


      {/* =====================================================
          DETAIL MODAL
      ====================================================== */}

      {activeMode && (

        <div
          className="workDetailOverlay"

          ref={overlayRef}

          role="presentation"

          onMouseDown={(
            event
          ) => {
            if (
              event.currentTarget ===
              event.target
            ) {
              handleClose();
            }
          }}
        >

          <div
            className="workDetail workDetail--clean"

            ref={panelRef}

            role="dialog"

            aria-modal="true"

            aria-label={`${activeMode.title} workspace details`}
          >

            {/* CLOSE */}

            <button
              type="button"

              className="workDetail__close"

              onClick={
                handleClose
              }

              aria-label="Close workspace details"
            >
              <X size={20} />
            </button>


            <div className="workDetail__shell">

              {/* =================================================
                  TOP STRIP
              ================================================= */}

              <div className="workDetail__topStrip">

                <span>
                  NERDSHIVE / WORK MODE
                </span>


                <div
                  className="workDetail__topBee"
                  aria-hidden="true"
                >

                  <span className="workDetail__topBeeWing workDetail__topBeeWing--left" />

                  <span className="workDetail__topBeeWing workDetail__topBeeWing--right" />

                  <span className="workDetail__topBeeBody" />

                </div>

              </div>


              {/* =================================================
                  HERO
              ================================================= */}

              <div className="workDetail__hero">

                <span className="workDetail__kicker">
                  {
                    activeMode.kicker
                  }
                </span>


                <h3>
                  {
                    activeMode.title
                  }
                </h3>


                <p className="workDetail__heroText">
                  {
                    activeMode.description
                  }
                </p>

              </div>


              {/* =================================================
                  SUMMARY CARDS
              ================================================= */}

              <div className="workDetail__summaryRow">

                <div className="workDetail__summaryCard">

                  <span>
                    Best For
                  </span>

                  <strong>
                    {
                      activeMode.bestFor
                    }
                  </strong>

                </div>


                <div className="workDetail__summaryCard">

                  <span>
                    Capacity
                  </span>

                  <strong>
                    {
                      activeMode.capacity
                    }
                  </strong>

                </div>


                <div className="workDetail__summaryCard">

                  <span>
                    Vibe
                  </span>

                  <strong>
                    {
                      activeMode.vibe
                    }
                  </strong>

                </div>


                <div className="workDetail__summaryCard">

                  <span>
                    Privacy
                  </span>

                  <strong>
                    {
                      activeMode.privacy
                    }
                  </strong>

                </div>

              </div>


              {/* =================================================
                  MAIN DETAILS
              ================================================= */}

              <div className="workDetail__mainGrid">

                {/* SPACE DETAILS */}

                <div className="workDetail__sectionCard">

                  <h4 className="workDetail__sectionTitle">
                    Space Details
                  </h4>


                  <div className="workDetail__facts">

                    <div className="workDetail__fact">

                      <span>
                        Space Type
                      </span>

                      <strong>
                        {
                          activeMode.space
                        }
                      </strong>

                    </div>


                    <div className="workDetail__fact">

                      <span>
                        Best For
                      </span>

                      <strong>
                        {
                          activeMode.bestFor
                        }
                      </strong>

                    </div>


                    <div className="workDetail__fact">

                      <span>
                        Capacity
                      </span>

                      <strong>
                        {
                          activeMode.capacity
                        }
                      </strong>

                    </div>


                    <div className="workDetail__fact">

                      <span>
                        Vibe
                      </span>

                      <strong>
                        {
                          activeMode.vibe
                        }
                      </strong>

                    </div>


                    <div className="workDetail__fact">

                      <span>
                        Privacy
                      </span>

                      <strong>
                        {
                          activeMode.privacy
                        }
                      </strong>

                    </div>

                  </div>

                </div>


                {/* FEATURES */}

                <div className="workDetail__sectionCard">

                  <h4 className="workDetail__sectionTitle">
                    What You Get
                  </h4>


                  <div className="workDetail__featureGrid">

                    {activeMode.features.map(
                      (
                        feature,
                        index
                      ) => (

                        <div
                          className="workDetail__feature"

                          key={
                            feature
                          }
                        >

                          <span>
                            {String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>


                          <p>
                            {
                              feature
                            }
                          </p>

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>


              {/* =================================================
                  CTA
              ================================================= */}

              <a
                className="workDetail__cta"

                href="#spaces"
              >

                <span>

                  Explore this space

                  <small>
                    Discover how this
                    setup fits your
                    work style
                  </small>

                </span>


                <span className="workDetail__ctaIcon">

                  <ArrowUpRight
                    size={20}
                  />

                </span>

              </a>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};


export default WorkModeHive;