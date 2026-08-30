import {
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import ThreeDScene from "./ThreeDScene";
import { walkthroughScenes } from "../../data/walkthroughScenes";

import "./ThreeDWalkthrough.css";

const ThreeDWalkthrough = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const progressRef = useRef(0);

  const [activeScene, setActiveScene] =
    useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;

        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        const scrollable =
          section.offsetHeight -
          window.innerHeight;

        const travelled =
          Math.min(
            Math.max(-rect.top, 0),
            scrollable
          );

        const progress =
          scrollable > 0
            ? travelled / scrollable
            : 0;

        progressRef.current = progress;

        const sceneIndex = Math.min(
          walkthroughScenes.length - 1,
          Math.round(
            progress *
              (walkthroughScenes.length - 1)
          )
        );

        setActiveScene(sceneIndex);
      });
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateProgress
    );

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, []);

  const current =
    walkthroughScenes[activeScene];

  return (
    <section
      ref={sectionRef}
      className="three-walkthrough"
    >
      <div className="three-walkthrough__sticky">
        {/* 3D CANVAS */}
        <div className="three-walkthrough__canvas">
          <Canvas
            dpr={[1, 2]}
            camera={{
              position: [0, 0, 8],
              fov: 50,
              near: 0.1,
              far: 300,
            }}
            gl={{
              antialias: true,
              alpha: false,
              powerPreference:
                "high-performance",
            }}
          >
            <color
              attach="background"
              args={["#FFFFFF"]}
            />

            <Suspense fallback={null}>
              <ThreeDScene
                progressRef={progressRef}
              />

              <Environment preset="studio" />
            </Suspense>
          </Canvas>
        </div>

        {/* WHITE TOP LABEL */}
        <div className="three-walkthrough__top">
          <div className="three-walkthrough__pill">
            <span className="three-walkthrough__bee">
              ◆
            </span>

            <div>
              <small>
                You are inside
              </small>

              <strong>
                NerdsHive
              </strong>
            </div>
          </div>

          <div className="three-walkthrough__count">
            <strong>
              {String(
                activeScene + 1
              ).padStart(2, "0")}
            </strong>

            <span />

            <small>
              {String(
                walkthroughScenes.length
              ).padStart(2, "0")}
            </small>
          </div>
        </div>

        {/* CONTENT */}
        <div
          className={`three-walkthrough__content ${
            current.align === "right"
              ? "three-walkthrough__content--right"
              : ""
          }`}
          key={current.id}
        >
          <span className="three-walkthrough__eyebrow">
            {current.eyebrow}
          </span>

          <h2>
            {current.title}

            {current.highlight && (
              <>
                <br />

                <span>
                  {current.highlight}
                </span>
              </>
            )}
          </h2>

          <p>
            {current.description}
          </p>

          <div className="three-walkthrough__space-pill">
            SPACE{" "}
            {String(
              activeScene + 1
            ).padStart(2, "0")}
          </div>
        </div>

        {/* PROGRESS */}
        <div className="three-walkthrough__progress">
          {walkthroughScenes.map(
            (scene, index) => (
              <span
                key={scene.id}
                className={
                  index <= activeScene
                    ? "active"
                    : ""
                }
              />
            )
          )}
        </div>

        {/* SCROLL INDICATOR */}
        <div className="three-walkthrough__scroll">
          <div className="three-walkthrough__mouse">
            <i />
          </div>

          <div>
            <small>
              Keep scrolling
            </small>

            <strong>
              Walk through the Hive
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDWalkthrough;