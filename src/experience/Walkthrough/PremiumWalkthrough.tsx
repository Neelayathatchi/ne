import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  walkthroughScenes,
} from "../../data/walkthroughScenes";

import "./PremiumWalkthrough.css";


gsap.registerPlugin(
  ScrollTrigger
);


const MASTER_WIDTH =
  1672;

const MASTER_HEIGHT =
  941;


const PremiumWalkthrough =
  () => {

    const sectionRef =
      useRef<HTMLElement | null>(
        null
      );

    const visualRef =
      useRef<HTMLDivElement | null>(
        null
      );

    const imageStageRef =
      useRef<HTMLDivElement | null>(
        null
      );


    const [
      scale,
      setScale,
    ] = useState(1);


    const [
      progress,
      setProgress,
    ] = useState(0);


    /* =====================================================
       MASTER SCALE
    ===================================================== */

    useEffect(() => {
      const updateScale =
        () => {

          const nextScale =
            Math.min(
              window.innerWidth /
                MASTER_WIDTH,

              window.innerHeight /
                MASTER_HEIGHT
            );


          setScale(
            nextScale
          );
        };


      updateScale();


      window.addEventListener(
        "resize",
        updateScale
      );


      return () => {
        window.removeEventListener(
          "resize",
          updateScale
        );
      };
    }, []);


    /* =====================================================
       PRELOAD IMAGES
    ===================================================== */

    useEffect(() => {

      walkthroughScenes.forEach(
        (
          scene
        ) => {

          const image =
            new Image();


          image.src =
            scene.image;


          image.decoding =
            "async";

        }
      );

    }, []);


    /* =====================================================
       SCROLL
    ===================================================== */

    useEffect(() => {

      const section =
        sectionRef.current;


      if (!section) {
        return;
      }


      const trigger =
        ScrollTrigger.create({

          trigger:
            section,

          start:
            "top top",

          end:
            "bottom bottom",

          scrub:
            0.8,

          invalidateOnRefresh:
            true,


          onUpdate:
            (
              self
            ) => {

              setProgress(
                Math.min(
                  self.progress,
                  0.999999
                )
              );

            },

        });


      return () => {
        trigger.kill();
      };

    }, []);


    /* =====================================================
       ACTIVE SCENE
    ===================================================== */

    const totalScenes =
      walkthroughScenes.length;


    const rawScene =
      Math.min(
        progress *
          totalScenes,

        totalScenes -
          0.000001
      );


    const activeIndex =
      Math.floor(
        rawScene
      );


    const sceneProgress =
      rawScene -
      activeIndex;


    const activeScene =
      walkthroughScenes[
        activeIndex
      ];


    const sceneNumber =
      String(
        activeIndex +
          1
      ).padStart(
        2,
        "0"
      );


    /* =====================================================
       IMAGE STYLE
    ===================================================== */

    const getImageStyle =
      (
        index:
          number
      ): CSSProperties => {

        if (
          index ===
          activeIndex
        ) {

          if (
            sceneProgress <
            0.72
          ) {

            const t =
              sceneProgress /
              0.72;


            const smooth =
              t *
              t *
              (
                3 -
                2 *
                  t
              );


            return {

              zIndex:
                6,

              opacity:
                1,

              transform: `
                scale(
                  ${
                    1 +
                    smooth *
                      0.07
                  }
                )

                translate3d(
                  0,
                  ${
                    -smooth *
                    3
                  }px,
                  0
                )
              `,

            };

          }


          const t =
            (
              sceneProgress -
              0.72
            ) /
            0.28;


          const smooth =
            t *
            t *
            (
              3 -
              2 *
                t
            );


          return {

            zIndex:
              6,

            opacity:
              1 -
              smooth,

            transform: `
              scale(
                ${
                  1.07 -
                  smooth *
                    0.085
                }
              )

              translate3d(
                0,
                ${
                  -3 -
                  smooth *
                    5
                }px,
                0
              )
            `,

          };
        }


        if (
          index ===
          activeIndex +
            1
        ) {

          const t =
            Math.max(
              0,

              Math.min(
                1,

                (
                  sceneProgress -
                  0.74
                ) /
                0.26
              )
            );


          const smooth =
            t *
            t *
            (
              3 -
              2 *
                t
            );


          return {

            zIndex:
              5,

            opacity:
              smooth,

            transform: `
              scale(
                ${
                  0.985 +
                  smooth *
                    0.015
                }
              )

              translate3d(
                0,
                ${
                  14 -
                  smooth *
                    14
                }px,
                0
              )
            `,

          };
        }


        return {

          zIndex:
            1,

          opacity:
            0,

          transform:
            "scale(.985)",

        };

      };


    /* =====================================================
       POINTER TILT
    ===================================================== */

    useEffect(() => {

      const visual =
        visualRef.current;


      const stage =
        imageStageRef.current;


      if (
        !visual ||
        !stage
      ) {
        return;
      }


      const move =
        (
          event:
            PointerEvent
        ) => {

          if (
            window.innerWidth <
            900
          ) {
            return;
          }


          const rect =
            visual
              .getBoundingClientRect();


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


          gsap.to(
            stage,
            {

              rotateY:
                x *
                1.8,

              rotateX:
                -y *
                1.3,

              x:
                x *
                3,

              y:
                y *
                2,

              transformPerspective:
                1800,

              duration:
                0.7,

              ease:
                "power3.out",

            }
          );
        };


      const leave =
        () => {

          gsap.to(
            stage,
            {

              rotateX: 0,

              rotateY: 0,

              x: 0,

              y: 0,

              duration:
                0.8,

              ease:
                "power3.out",

            }
          );

        };


      visual.addEventListener(
        "pointermove",
        move
      );


      visual.addEventListener(
        "pointerleave",
        leave
      );


      return () => {

        visual.removeEventListener(
          "pointermove",
          move
        );


        visual.removeEventListener(
          "pointerleave",
          leave
        );

      };

    }, []);


    /* =====================================================
       DOTS
    ===================================================== */

    const dots =
      useMemo(
        () =>
          walkthroughScenes.map(
            (
              scene,
              index
            ) => ({

              id:
                scene.id,

              active:
                index ===
                activeIndex,

              passed:
                index <
                activeIndex,

            })
          ),

        [
          activeIndex,
        ]
      );


    /* =====================================================
       EXPLORE
    ===================================================== */

    const handleExplore =
      () => {

        const section =
          sectionRef.current;


        if (!section) {
          return;
        }


        window.scrollTo({

          top:
            section.offsetTop +
            window.innerHeight *
              0.8,

          behavior:
            "smooth",

        });

      };


    return (
      <section
        ref={
          sectionRef
        }
        id="walkthrough"
        className="premiumWalkthrough"
      >

        <div className="premiumWalkthrough__sticky">


          <div className="premiumBackground" />


          <div
            className="premiumMaster"
            style={{
              transform: `
                translate(
                  -50%,
                  -50%
                )
                scale(
                  ${scale}
                )
              `,
            }}
          >

            {/* ===========================================
                NO NAVBAR HERE
                GLOBAL NAVBAR COMES FROM APP.TSX
            ============================================ */}


            <section className="premiumHero">

              {/* LEFT */}

              <div className="premiumLeft">

                <div
                  key={
                    activeScene.id
                  }
                  className="premiumCopy"
                >

                  <div className="premiumEyebrow">

                    <i />


                    <strong>

                      {
                        activeScene
                          .eyebrow
                      }

                    </strong>

                  </div>


                  <h1>

                    {
                      activeScene
                        .titleLines
                        .map(
                          (
                            line,
                            index
                          ) => (

                            <span
                              key={
                                `${activeScene.id}-${index}`
                              }
                              className={
                                index ===
                                activeScene.accentLine
                                  ? "accent"
                                  : ""
                              }
                            >

                              {
                                line
                              }

                            </span>

                          )
                        )
                    }

                  </h1>


                  <p>

                    {
                      activeScene
                        .description
                    }

                  </p>


                  <div className="premiumActions">

                    <button
                      type="button"
                      className="premiumExploreButton"
                      onClick={
                        handleExplore
                      }
                    >

                      Explore the Space

                      <b>
                        ↘
                      </b>

                    </button>


                    <div className="sceneMeta">

                      <strong>

                        {
                          sceneNumber
                        }

                      </strong>

                      <i />

                      <span>

                        {
                          activeScene
                            .label
                        }

                      </span>

                    </div>

                  </div>

                </div>


                <div className="premiumDots">

                  {
                    dots.map(
                      (
                        dot
                      ) => (

                        <span
                          key={
                            dot.id
                          }
                          className={[
                            dot.active
                              ? "active"
                              : "",

                            dot.passed
                              ? "passed"
                              : "",
                          ]
                            .filter(
                              Boolean
                            )
                            .join(
                              " "
                            )}
                        />

                      )
                    )
                  }

                </div>

              </div>


              {/* RIGHT IMAGE */}

              <div
                ref={
                  visualRef
                }
                className="premiumVisual"
              >

                <div
                  ref={
                    imageStageRef
                  }
                  className="premiumImageStage"
                >

                  {
                    walkthroughScenes.map(
                      (
                        scene,
                        index
                      ) => (

                        <div
                          key={
                            scene.id
                          }
                          className="premiumImage"
                          style={
                            getImageStyle(
                              index
                            )
                          }
                        >

                          <img
                            src={
                              scene.image
                            }
                            alt={
                              scene.label
                            }
                            draggable={
                              false
                            }
                            decoding="async"
                            loading={
                              index <
                              2
                                ? "eager"
                                : "lazy"
                            }
                            style={{
                              objectPosition:
                                scene.imagePosition ??
                                "center center",
                            }}
                          />

                        </div>

                      )
                    )
                  }

                </div>


                <span className="premiumCorner" />


                <div className="premiumCount">

                  <strong>
                    {
                      sceneNumber
                    }
                  </strong>

                  <span>
                    / 13
                  </span>

                </div>


                <div className="premiumCaption">

                  <small>
                    INSIDE NERDSHIVE
                  </small>

                  <strong>
                    {
                      activeScene
                        .label
                    }
                  </strong>

                </div>


                <div className="premiumRing">

                  <span>
                    {
                      activeIndex +
                      1
                    }
                  </span>

                </div>

              </div>


              {/* SCROLL */}

              <div className="premiumScroll">

                <span className="premiumMouse">
                  <i />
                </span>


                <div>

                  <small>
                    KEEP SCROLLING
                  </small>

                  <strong>
                    Walk inside the Hive
                  </strong>

                </div>

              </div>


              {/* PROGRESS */}

              <div className="premiumProgress">

                <span
                  style={{
                    transform:
                      `scaleX(${progress})`,
                  }}
                />

              </div>

            </section>

          </div>

        </div>

      </section>
    );
  };


export default PremiumWalkthrough;