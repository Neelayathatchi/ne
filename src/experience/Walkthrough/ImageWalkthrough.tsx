import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { walkthroughScenes } from "../../data/walkthroughScenes";

import "./ImageWalkthrough.css";

gsap.registerPlugin(ScrollTrigger);

const ImageWalkthrough = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    const sceneElements = gsap.utils.toArray<HTMLElement>(
      ".walkthrough__scene"
    );

    const imageElements = gsap.utils.toArray<HTMLImageElement>(
      ".walkthrough__image"
    );

    const contentElements = gsap.utils.toArray<HTMLElement>(
      ".walkthrough__content"
    );

    const hexElements = gsap.utils.toArray<HTMLElement>(
      ".walkthrough__floating-hex"
    );

    let cleanupMouse: (() => void) | undefined;

    const ctx = gsap.context(() => {
      // -----------------------------------------
      // INITIAL STATES
      // -----------------------------------------

      sceneElements.forEach((scene, index) => {
        gsap.set(scene, {
          opacity: index === 0 ? 1 : 0,
          zIndex: index === 0 ? 10 : 1,
        });
      });

      imageElements.forEach((image, index) => {
        gsap.set(image, {
          scale: index === 0 ? 1.08 : 1.18,
          rotationX: 0,
          rotationY: 0,
          x: 0,
          y: 0,
        });
      });

      contentElements.forEach((content, index) => {
        gsap.set(content, {
          opacity: index === 0 ? 1 : 0,
          y: index === 0 ? 0 : 45,
        });
      });

      // -----------------------------------------
      // MAIN PINNED WALKTHROUGH
      // -----------------------------------------

      const master = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${walkthroughScenes.length * 900}`,
          scrub: 1.1,
          pin: stage,
          anticipatePin: 1,

          onUpdate: (self) => {
            const nextIndex = Math.min(
              walkthroughScenes.length - 1,
              Math.floor(self.progress * walkthroughScenes.length)
            );

            setActiveScene(nextIndex);
          },
        },
      });

      walkthroughScenes.forEach((_, index) => {
        const scene = sceneElements[index];
        const image = imageElements[index];
        const content = contentElements[index];

        if (!scene || !image || !content) return;

        const position = index;

        // -----------------------------------------
        // FIRST SCENE
        // -----------------------------------------

        if (index === 0) {
          master
            .to(
              image,
              {
                scale: 1.24,
                xPercent: -2,
                ease: "none",
                duration: 0.65,
              },
              position
            )
            .to(
              content,
              {
                opacity: 0,
                y: -50,
                ease: "none",
                duration: 0.35,
              },
              position + 0.25
            );

          return;
        }

        const previousScene = sceneElements[index - 1];
        const previousImage = imageElements[index - 1];

        // -----------------------------------------
        // NEW SCENE ENTER
        // -----------------------------------------

        master
          .set(
            scene,
            {
              zIndex: 12,
            },
            position
          )

          .fromTo(
            scene,
            {
              opacity: 0,
              clipPath: "inset(50% 50% 50% 50% round 80px)",
            },
            {
              opacity: 1,
              clipPath: "inset(0% 0% 0% 0% round 0px)",
              duration: 0.42,
              ease: "power3.out",
            },
            position
          )

          // -----------------------------------------
          // IMAGE CAMERA / DEPTH ENTER
          // -----------------------------------------

          .fromTo(
            image,
            {
              scale: 1.24,
              z: -180,
              rotationY: index % 2 === 0 ? 2.5 : -2.5,
            },
            {
              scale: 1.06,
              z: 0,
              rotationY: 0,
              duration: 0.55,
              ease: "power2.out",
            },
            position
          )

          // -----------------------------------------
          // CONTENT REVEAL
          // -----------------------------------------

          .fromTo(
            content,
            {
              opacity: 0,
              y: 70,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.35,
              ease: "power3.out",
            },
            position + 0.12
          )

          // -----------------------------------------
          // SLOW CAMERA PUSH
          // -----------------------------------------

          .to(
            image,
            {
              scale: 1.18,
              xPercent: index % 2 === 0 ? 2.5 : -2.5,
              yPercent: -1.5,
              duration: 0.55,
              ease: "none",
            },
            position + 0.35
          )

          // -----------------------------------------
          // TEXT EXIT
          // -----------------------------------------

          .to(
            content,
            {
              opacity: 0,
              y: -45,
              duration: 0.2,
              ease: "none",
            },
            position + 0.72
          );

        // -----------------------------------------
        // PREVIOUS SCENE EXIT
        // -----------------------------------------

        if (previousScene && previousImage) {
          master.to(
            previousScene,
            {
              opacity: 0,
              duration: 0.28,
              ease: "none",
            },
            position
          );

          master.to(
            previousImage,
            {
              scale: 1.4,
              filter: "blur(4px)",
              duration: 0.3,
              ease: "none",
            },
            position
          );
        }
      });

      // -----------------------------------------
      // FLOATING HONEYCOMBS
      // -----------------------------------------

      hexElements.forEach((hex, index) => {
        gsap.to(hex, {
          y: index % 2 === 0 ? -80 : 80,
          rotation: index % 2 === 0 ? 25 : -25,

          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      });

      // -----------------------------------------
      // MOUSE 3D DEPTH
      // -----------------------------------------

      const handleMouseMove = (event: MouseEvent) => {
        if (window.innerWidth < 900) return;

        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;

        const visibleImage = imageElements.find((img) => {
          const parent = img.closest(
            ".walkthrough__scene"
          ) as HTMLElement | null;

          if (!parent) return false;

          const opacity = Number(
            getComputedStyle(parent).opacity
          );

          return opacity > 0.5;
        });

        if (!visibleImage) return;

        gsap.to(visibleImage, {
          rotationY: x * 1.5,
          rotationX: y * -1.2,
          x: x * 8,
          y: y * 6,
          duration: 1.2,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      cleanupMouse = () => {
        window.removeEventListener(
          "mousemove",
          handleMouseMove
        );
      };
    }, section);

    return () => {
      cleanupMouse?.();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="walkthrough"
    >
      <div
        ref={stageRef}
        className="walkthrough__stage"
      >
        {/* -----------------------------------
            TOP MINI STATUS
        ----------------------------------- */}

        <div className="walkthrough__topbar">
          <div className="walkthrough__brand">
            <img
              src="/images/logo/nerdshive-logo.png"
              alt="NerdsHive"
            />

            <div>
              <span>Explore</span>
              <strong>The Hive</strong>
            </div>
          </div>

          <div className="walkthrough__counter">
            <span>
              {String(activeScene + 1).padStart(2, "0")}
            </span>

            <div className="walkthrough__counter-line" />

            <span>
              {String(walkthroughScenes.length).padStart(
                2,
                "0"
              )}
            </span>
          </div>
        </div>

        {/* -----------------------------------
            13 WALKTHROUGH SCENES
        ----------------------------------- */}

        <div className="walkthrough__scenes">
          {walkthroughScenes.map((scene, index) => (
            <article
              key={scene.id}
              className={`walkthrough__scene ${
                scene.align === "right"
                  ? "walkthrough__scene--right"
                  : ""
              }`}
            >
              <div className="walkthrough__image-wrap">
                <img
                  src={scene.image}
                  alt={scene.eyebrow}
                  className="walkthrough__image"
                  loading={
                    index < 2 ? "eager" : "lazy"
                  }
                />

                <div className="walkthrough__image-overlay" />
              </div>

              <div className="walkthrough__content">
                <div className="walkthrough__content-card">
                  <span className="walkthrough__eyebrow">
                    {scene.eyebrow}
                  </span>

                  <h2>
                    {scene.title}

                    <br />

                    {scene.highlight && (
                      <span>{scene.highlight}</span>
                    )}
                  </h2>

                  <p>{scene.description}</p>

                  <div className="walkthrough__scene-number">
                    SPACE{" "}
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* -----------------------------------
            FLOATING HONEYCOMBS
        ----------------------------------- */}

        <div
          className="walkthrough__decor"
          aria-hidden="true"
        >
          <span className="walkthrough__floating-hex walkthrough__floating-hex--1" />

          <span className="walkthrough__floating-hex walkthrough__floating-hex--2" />

          <span className="walkthrough__floating-hex walkthrough__floating-hex--3" />

          <span className="walkthrough__floating-hex walkthrough__floating-hex--4" />
        </div>

        {/* -----------------------------------
            PROGRESS INDICATOR
        ----------------------------------- */}

        <div className="walkthrough__progress">
          {walkthroughScenes.map((scene, index) => (
            <span
              key={scene.id}
              className={
                index <= activeScene
                  ? "walkthrough__progress-dot walkthrough__progress-dot--active"
                  : "walkthrough__progress-dot"
              }
            />
          ))}
        </div>

        {/* -----------------------------------
            SCROLL LABEL
        ----------------------------------- */}

        <div className="walkthrough__scroll-label">
          <span className="walkthrough__mouse">
            <i />
          </span>

          <div>
            <small>Scroll</small>
            <strong>
              Walk through the Hive
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWalkthrough;