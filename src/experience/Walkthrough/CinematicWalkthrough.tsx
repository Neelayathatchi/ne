import {
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Canvas,
} from "@react-three/fiber";

import gsap from "gsap";

import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

import {
  walkthroughScenes,
} from "../../data/walkthroughScenes";

import CinematicScene from "./CinematicScene";

import "./CinematicWalkthrough.css";

gsap.registerPlugin(
  ScrollTrigger
);

const CinematicWalkthrough = () => {
  const sectionRef =
    useRef<HTMLElement | null>(
      null
    );

  const progressRef =
    useRef(0);

  const pointerRef =
    useRef({
      x: 0,
      y: 0,
    });

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const [
    progress,
    setProgress,
  ] = useState(0);

  /*
    ======================================
    SCROLL CONTROLLER
    ======================================
  */

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const trigger =
      ScrollTrigger.create({
        trigger: section,

        start: "top top",

        end: "bottom bottom",

        scrub: 1.2,

        onUpdate: (self) => {
          const p =
            self.progress;

          progressRef.current =
            p;

          setProgress(p);

          const rawIndex =
            Math.round(
              p *
                (walkthroughScenes.length -
                  1)
            );

          const safeIndex =
            Math.max(
              0,
              Math.min(
                walkthroughScenes.length -
                  1,
                rawIndex
              )
            );

          setActiveIndex(
            safeIndex
          );
        },
      });

    return () => {
      trigger.kill();
    };
  }, []);

  /*
    ======================================
    POINTER PARALLAX
    ======================================
  */

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;

    const move = (
      event: PointerEvent
    ) => {
      const rect =
        section.getBoundingClientRect();

      const x =
        (event.clientX -
          rect.left) /
          rect.width *
          2 -
        1;

      const y =
        (event.clientY -
          rect.top) /
          rect.height *
          2 -
        1;

      pointerRef.current.x =
        x;

      pointerRef.current.y =
        -y;
    };

    const leave = () => {
      pointerRef.current.x =
        0;

      pointerRef.current.y =
        0;
    };

    section.addEventListener(
      "pointermove",
      move
    );

    section.addEventListener(
      "pointerleave",
      leave
    );

    return () => {
      section.removeEventListener(
        "pointermove",
        move
      );

      section.removeEventListener(
        "pointerleave",
        leave
      );
    };
  }, []);

  const activeScene =
    walkthroughScenes[
      activeIndex
    ];

  const formattedCurrent =
    String(
      activeIndex + 1
    ).padStart(2, "0");

  const formattedTotal =
    String(
      walkthroughScenes.length
    ).padStart(2, "0");

  return (
    <section
      ref={sectionRef}
      className="cinematic-walkthrough"
      id="gallery"
    >
      {/* ======================================
          STICKY VIEWPORT
      ======================================= */}

      <div className="cinematic-walkthrough__sticky">
        {/* ==================================
            BACKGROUND HIVE GRID
        =================================== */}

        <div
          className="cinematic-hive-bg"
          aria-hidden="true"
        >
          {Array.from({
            length: 26,
          }).map((_, index) => (
            <span
              key={index}
              style={
                {
                  "--i":
                    index,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        {/* ==================================
            THREE WORLD
        =================================== */}

        <div className="cinematic-walkthrough__stage">
          <Canvas
            dpr={[1, 2]}
            camera={{
              position: [
                0,
                0,
                10,
              ],

              fov: 42,

              near: 0.1,

              far: 150,
            }}
            gl={{
              antialias: true,

              alpha: true,

              powerPreference:
                "high-performance",
            }}
          >
            <Suspense
              fallback={null}
            >
              <CinematicScene
                progressRef={
                  progressRef
                }
                pointerRef={
                  pointerRef
                }
              />
            </Suspense>
          </Canvas>
        </div>

        {/* ==================================
            LEFT CONTENT
        =================================== */}

        <div className="cinematic-copy">
          <div
            className="cinematic-copy__eyebrow"
            key={
              `${activeIndex}-eyebrow`
            }
          >
            <span />

            {
              activeScene.eyebrow
            }
          </div>

          <div
            className="cinematic-copy__title"
            key={
              `${activeIndex}-title`
            }
          >
            <h2>
              {
                activeScene.title
              }
            </h2>

            <h3>
              {
                activeScene.highlight
              }
            </h3>
          </div>

          <p
            key={
              `${activeIndex}-description`
            }
          >
            {
              activeScene.description
            }
          </p>

          <div className="cinematic-copy__meta">
            <div>
              <small>
                NOW EXPLORING
              </small>

              <strong>
                {
                  activeScene.shortLabel
                }
              </strong>
            </div>

            <span />

            <b>
              {formattedCurrent}
            </b>
          </div>
        </div>

        {/* ==================================
            VERTICAL SCENE NAV
        =================================== */}

        <div className="cinematic-scene-nav">
          {walkthroughScenes.map(
            (scene, index) => (
              <button
                key={scene.id}
                type="button"
                className={
                  index ===
                  activeIndex
                    ? "is-active"
                    : ""
                }
                aria-label={`Scene ${scene.id}: ${scene.shortLabel}`}
              >
                <span />

                <small>
                  {String(
                    scene.id
                  ).padStart(
                    2,
                    "0"
                  )}
                </small>
              </button>
            )
          )}
        </div>

        {/* ==================================
            TOP CURRENT COUNT
        =================================== */}

        <div className="cinematic-counter">
          <strong>
            {formattedCurrent}
          </strong>

          <span />

          <small>
            {formattedTotal}
          </small>
        </div>

        {/* ==================================
            BOTTOM PROGRESS
        =================================== */}

        <div className="cinematic-progress">
          <div className="cinematic-progress__numbers">
            <span>
              {formattedCurrent}
            </span>

            <small>
              JOURNEY THROUGH
              NERDSHIVE
            </small>

            <span>
              {formattedTotal}
            </span>
          </div>

          <div className="cinematic-progress__track">
            <span
              style={{
                transform: `scaleX(${Math.max(
                  progress,
                  0.008
                )})`,
              }}
            />
          </div>
        </div>

        {/* ==================================
            SCROLL MESSAGE
        =================================== */}

        {activeIndex ===
          0 && (
          <div className="cinematic-scroll-cue">
            <div className="cinematic-scroll-cue__mouse">
              <span />
            </div>

            <div>
              <small>
                SCROLL TO ENTER
              </small>

              <strong>
                Walk through the
                Hive
              </strong>
            </div>
          </div>
        )}

        {/* ==================================
            HUGE BACK NUMBER
        =================================== */}

        <div className="cinematic-ghost-number">
          {formattedCurrent}
        </div>
      </div>
    </section>
  );
};

export default CinematicWalkthrough;