import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  BriefcaseBusiness,
  Coffee,
  Lightbulb,
  Sparkles,
  UsersRound,
  Wifi,
} from "lucide-react";

import "./WhoWeAre.css";

gsap.registerPlugin(ScrollTrigger);


const WhoWeAre = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const illustrationRef =
    useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const section =
      sectionRef.current;

    const illustration =
      illustrationRef.current;


    if (!section || !illustration) {
      return;
    }


    const ctx =
      gsap.context(() => {
        const intro =
          gsap.timeline({
            defaults: {
              ease: "power4.out",
            },
          });


        intro
          .fromTo(
            ".nhWhoEyebrow",
            {
              opacity: 0,
              y: 18,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
            }
          )

          .fromTo(
            ".nhWhoTitleLine > span",
            {
              yPercent: 115,
              rotateX: -15,
            },
            {
              yPercent: 0,
              rotateX: 0,
              stagger: 0.08,
              duration: 0.8,
            },
            "-=0.2"
          )

          .fromTo(
            ".nhWhoDescription",
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.58,
            },
            "-=0.35"
          )

          .fromTo(
            ".nhWhoFeature",
            {
              opacity: 0,
              y: 18,
              scale: 0.92,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.08,
              duration: 0.5,
              ease: "back.out(1.4)",
            },
            "-=0.3"
          )

          .fromTo(
            illustration,
            {
              opacity: 0,
              scale: 0.88,
              y: 40,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.9,
              ease: "back.out(1.15)",
            },
            "-=0.6"
          )

          .fromTo(
            ".nhPerson",
            {
              opacity: 0,
              scale: 0.65,
              y: 25,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.55,
              ease: "back.out(1.8)",
            },
            "-=0.5"
          );


        /* floating people */

        gsap.to(".nhPerson--one", {
          y: -7,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });


        gsap.to(".nhPerson--two", {
          y: 8,
          duration: 3.1,
          repeat: -1,
          yoyo: true,
          delay: 0.25,
          ease: "sine.inOut",
        });


        gsap.to(".nhPerson--three", {
          y: -6,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          delay: 0.45,
          ease: "sine.inOut",
        });


        gsap.to(".nhPerson--four", {
          y: 7,
          duration: 3,
          repeat: -1,
          yoyo: true,
          delay: 0.7,
          ease: "sine.inOut",
        });


        /* idea bulb */

        gsap.to(".nhIdeaBubble", {
          y: -8,
          rotate: 4,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });


        /* coffee steam */

        gsap.to(".nhSteam--one", {
          y: -13,
          opacity: 0,
          duration: 1.4,
          repeat: -1,
          ease: "power1.out",
        });


        gsap.to(".nhSteam--two", {
          y: -15,
          opacity: 0,
          duration: 1.6,
          delay: 0.4,
          repeat: -1,
          ease: "power1.out",
        });


        /* scroll parallax */

        gsap.to(".nhWhoContent", {
          y: -34,

          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });


        gsap.to(".nhWhoIllustration", {
          y: 28,

          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.1,
          },
        });
      }, section);


    /* mouse depth */

    const handleMove =
      (event: MouseEvent) => {
        const rect =
          illustration.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY - rect.top) /
            rect.height -
          0.5;


        gsap.to(illustration, {
          rotateY: x * 5,
          rotateX: y * -4,
          transformPerspective: 1200,
          duration: 0.7,
          ease: "power2.out",
        });


        gsap.to(".nhDesk", {
          x: x * 7,
          y: y * 5,
          duration: 0.7,
        });


        gsap.to(".nhPerson", {
          x: x * -5,
          duration: 0.7,
        });
      };


    const handleLeave =
      () => {
        gsap.to(illustration, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "power3.out",
        });


        gsap.to(
          [
            ".nhDesk",
            ".nhPerson",
          ],
          {
            x: 0,
            y: 0,
            duration: 0.8,
          }
        );
      };


    illustration.addEventListener(
      "mousemove",
      handleMove
    );

    illustration.addEventListener(
      "mouseleave",
      handleLeave
    );


    return () => {
      illustration.removeEventListener(
        "mousemove",
        handleMove
      );

      illustration.removeEventListener(
        "mouseleave",
        handleLeave
      );

      ctx.revert();
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="nhWho"
      id="who-we-are"
    >
      <div className="nhWho__inner">

        {/* ================= LEFT ================= */}

        <div className="nhWhoContent">

          <div className="nhWhoEyebrow">
            <span />

            <strong>
              ABOUT NERDSHIVE
            </strong>
          </div>


          <h1 className="nhWhoTitle">

            <span className="nhWhoTitleLine">
              <span>
                Where Better
              </span>
            </span>

            <span className="nhWhoTitleLine nhWhoTitleLine--yellow">
              <span>
                Work Begins.
              </span>
            </span>

          </h1>


          <p className="nhWhoDescription">
            NerdsHive is a modern
            coworking community in
            Thanjavur created for
            founders, freelancers,
            creators, professionals and
            growing teams.
            We combine thoughtful
            workspaces, professional
            energy and a people-first
            environment where ideas can
            move forward.
          </p>


          <div className="nhWhoFeatures">

            <div className="nhWhoFeature">
              <div>
                <BriefcaseBusiness
                  size={19}
                />
              </div>

              <span>
                Workspace
              </span>
            </div>


            <div className="nhWhoFeature">
              <div>
                <UsersRound
                  size={19}
                />
              </div>

              <span>
                Community
              </span>
            </div>


            <div className="nhWhoFeature">
              <div>
                <Sparkles
                  size={19}
                />
              </div>

              <span>
                Possibility
              </span>
            </div>

          </div>


          <div className="nhWhoBelief">
            <span>01</span>

            <i />

            <p>
              More than a place to sit —
              a place to move forward.
            </p>
          </div>

        </div>


        {/* ================= ILLUSTRATION ================= */}

        <div
          ref={illustrationRef}
          className="nhWhoIllustration"
        >

          <div className="nhIllustrationBackdrop" />


          {/* desk */}

          <div className="nhDesk">

            <div className="nhDesk__top">

              <div className="nhLaptop nhLaptop--one">
                <div />
              </div>


              <div className="nhLaptop nhLaptop--two">
                <div />
              </div>


              <div className="nhNotebook">
                <span />
                <span />
                <span />
              </div>


              <div className="nhCoffee">
                <Coffee size={19} />

                <i className="nhSteam nhSteam--one" />
                <i className="nhSteam nhSteam--two" />
              </div>


              <div className="nhDeskPlant">
                <span />
                <span />
                <span />
                <i />
              </div>

            </div>


            <div className="nhDesk__leg nhDesk__leg--left" />
            <div className="nhDesk__leg nhDesk__leg--right" />

          </div>


          {/* person 1 */}

          <div className="nhPerson nhPerson--one">

            <div className="nhPerson__head">
              <span />
            </div>

            <div className="nhPerson__body" />

            <div className="nhPerson__arm nhPerson__arm--one" />

            <div className="nhPerson__chair" />

          </div>


          {/* person 2 */}

          <div className="nhPerson nhPerson--two">

            <div className="nhPerson__head">
              <span />
            </div>

            <div className="nhPerson__body" />

            <div className="nhPerson__arm nhPerson__arm--two" />

            <div className="nhPerson__chair" />

          </div>


          {/* person 3 */}

          <div className="nhPerson nhPerson--three">

            <div className="nhPerson__head">
              <span />
            </div>

            <div className="nhPerson__body" />

            <div className="nhPerson__arm" />

          </div>


          {/* person 4 */}

          <div className="nhPerson nhPerson--four">

            <div className="nhPerson__head">
              <span />
            </div>

            <div className="nhPerson__body" />

            <div className="nhPerson__arm" />

          </div>


          {/* idea */}

          <div className="nhIdeaBubble">

            <Lightbulb
              size={24}
              strokeWidth={2}
            />

            <span>
              GOOD IDEA!
            </span>

          </div>


          {/* wifi */}

          <div className="nhWifiBubble">
            <Wifi
              size={20}
              strokeWidth={2}
            />

            <span>
              ALWAYS ON
            </span>
          </div>


          {/* decorative sparkle */}

          <div className="nhIllustrationSpark nhIllustrationSpark--one">
            ✦
          </div>

          <div className="nhIllustrationSpark nhIllustrationSpark--two">
            +
          </div>

        </div>

      </div>
    </section>
  );
};


export default WhoWeAre;