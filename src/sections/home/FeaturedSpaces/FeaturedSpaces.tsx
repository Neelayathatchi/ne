import {
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";

import {
  ScrollTrigger,
} from "gsap/ScrollTrigger";

import {
  ArrowRight,
} from "lucide-react";

import "./FeaturedSpaces.css";

gsap.registerPlugin(
  ScrollTrigger
);

const spaces = [
  {
    number: "01",
    eyebrow: "SHARED WORKSPACE",
    title: "Work Together.",
    description:
      "A flexible shared environment for focused work and everyday collaboration.",
    image:
      "/images/walkthrough/02-coworking-long.jpg",
  },

  {
    number: "02",
    eyebrow: "PRIVATE SPACE",
    title: "Focus Deeper.",
    description:
      "A quieter personal space when your work needs uninterrupted attention.",
    image:
      "/images/walkthrough/09-single-cabin.jpg",
  },

  {
    number: "03",
    eyebrow: "MEETING SPACE",
    title: "Build Together.",
    description:
      "Bring conversations, decisions and teamwork into one dedicated space.",
    image:
      "/images/walkthrough/11-meeting-room.jpg",
  },
];

const FeaturedSpaces = () => {
  const sectionRef =
    useRef<HTMLElement | null>(
      null
    );

  const [
    active,
    setActive,
  ] = useState(0);

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    const context =
      gsap.context(
        () => {
          gsap.from(
            ".featuredSpaces__eyebrow",
            {
              opacity: 0,

              y: 30,

              scrollTrigger: {
                trigger:
                  section,

                start:
                  "top 74%",
              },
            }
          );

          gsap.from(
            ".featuredSpaces__title span",
            {
              opacity: 0,

              y: 80,

              stagger: 0.12,

              duration: 0.95,

              ease:
                "power4.out",

              scrollTrigger: {
                trigger:
                  section,

                start:
                  "top 70%",
              },
            }
          );

          gsap.from(
            ".featuredSpaces__experience",
            {
              opacity: 0,

              y: 90,

              scale: 0.97,

              duration: 1,

              ease:
                "power3.out",

              scrollTrigger: {
                trigger:
                  ".featuredSpaces__experience",

                start:
                  "top 82%",
              },
            }
          );
        },
        section
      );

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="spaces-preview"
      className="featuredSpaces"
    >

      <div className="featuredSpaces__header">

        <div>

          <div className="featuredSpaces__eyebrow">

            <i />

            <strong>
              SPACES MADE FOR EVERY WORKDAY
            </strong>

          </div>


          <h2 className="featuredSpaces__title">

            <span>
              Find Your
            </span>

            <span>
              Place.
            </span>

          </h2>

        </div>


        <a
          href="/spaces"
          className="featuredSpaces__viewAll"
        >

          Explore All Spaces

          <ArrowRight
            size={18}
          />

        </a>

      </div>


      <div className="featuredSpaces__experience">

        {/* LIST */}

        <div className="featuredSpaces__list">

          {spaces.map(
            (
              space,
              index
            ) => (

              <button
                type="button"
                key={
                  space.number
                }
                className={
                  index === active
                    ? "featuredSpaces__item featuredSpaces__item--active"
                    : "featuredSpaces__item"
                }
                onMouseEnter={() =>
                  setActive(
                    index
                  )
                }
                onFocus={() =>
                  setActive(
                    index
                  )
                }
              >

                <span className="featuredSpaces__itemNumber">
                  {
                    space.number
                  }
                </span>


                <div className="featuredSpaces__itemCopy">

                  <small>
                    {
                      space.eyebrow
                    }
                  </small>

                  <strong>
                    {
                      space.title
                    }
                  </strong>

                  <p>
                    {
                      space.description
                    }
                  </p>

                </div>


                <span className="featuredSpaces__itemArrow">
                  ↗
                </span>

              </button>

            )
          )}

        </div>


        {/* IMAGE */}

        <div className="featuredSpaces__visual">

          {spaces.map(
            (
              space,
              index
            ) => (

              <img
                key={
                  space.image
                }
                src={
                  space.image
                }
                alt={
                  space.title
                }
                className={
                  index === active
                    ? "featuredSpaces__image featuredSpaces__image--active"
                    : "featuredSpaces__image"
                }
              />

            )
          )}


          <div className="featuredSpaces__visualCorner" />


          <div className="featuredSpaces__badge">

            <small>
              NOW VIEWING
            </small>

            <strong>
              {
                spaces[
                  active
                ].title
              }
            </strong>

          </div>


          <div className="featuredSpaces__counter">

            <strong>
              {
                spaces[
                  active
                ].number
              }
            </strong>

            <span>
              / 03
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FeaturedSpaces;