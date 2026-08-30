import {
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import "./WorkspaceGallery.css";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   13 WORKSPACE IMAGES
========================================================= */

const galleryItems = [
  {
    id: 1,
    number: "01",
    title: "Reception",
    subtitle: "Welcome to the Hive",
    image: "/images/walkthrough/01-reception.jpg",
    className: "shellHex--01",
  },

  {
    id: 2,
    number: "02",
    title: "Coworking",
    subtitle: "Work Together",
    image: "/images/walkthrough/02-coworking-long.jpg",
    className: "shellHex--02",
  },

  {
    id: 3,
    number: "03",
    title: "White Workspace",
    subtitle: "Find Your Flow",
    image: "/images/walkthrough/03-white-workspace.jpg",
    className: "shellHex--03",
  },

  {
    id: 4,
    number: "04",
    title: "Creative Workspace",
    subtitle: "Ideas Need Energy",
    image: "/images/walkthrough/04-yellow-workspace.jpg",
    className: "shellHex--04",
  },

  {
    id: 5,
    number: "05",
    title: "Glass Workspace",
    subtitle: "Space to Build",
    image: "/images/walkthrough/05-glass-workspace.jpg",
    className: "shellHex--05",
  },

  {
    id: 6,
    number: "06",
    title: "Private Cabin",
    subtitle: "Your Own Corner",
    image: "/images/walkthrough/06-private-cabin-a.jpg",
    className: "shellHex--06",
  },

  {
    id: 7,
    number: "07",
    title: "Focus Cabin",
    subtitle: "Think Deeply",
    image: "/images/walkthrough/07-private-cabin-b.jpg",
    className: "shellHex--07",
  },

  {
    id: 8,
    number: "08",
    title: "Team Cabin",
    subtitle: "Grow Together",
    image: "/images/walkthrough/08-team-cabin.jpg",
    className: "shellHex--08",
  },

  {
    id: 9,
    number: "09",
    title: "Single Cabin",
    subtitle: "Focus Without Distraction",
    image: "/images/walkthrough/09-single-cabin.jpg",
    className: "shellHex--09",
  },

  {
    id: 10,
    number: "10",
    title: "Double Cabin",
    subtitle: "Small Team. Big Ideas.",
    image: "/images/walkthrough/10-double-cabin.jpg",
    className: "shellHex--10",
  },

  {
    id: 11,
    number: "11",
    title: "Meeting Room",
    subtitle: "Meet. Decide. Build.",
    image: "/images/walkthrough/11-meeting-room.jpg",
    className: "shellHex--11",
  },

  {
    id: 12,
    number: "12",
    title: "Discussion Room",
    subtitle: "Talk. Create.",
    image: "/images/walkthrough/12-discussion-room.jpg",
    className: "shellHex--12",
  },

  {
    id: 13,
    number: "13",
    title: "Corridor",
    subtitle: "Every Path Leads Somewhere",
    image: "/images/walkthrough/13-corridor.jpg",
    className: "shellHex--13",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

const WorkspaceGallery = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const [activeId, setActiveId] =
    useState<number>(1);


  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;


    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".shellGalleryEyebrow",
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,

          duration: 0.65,
          ease: "power3.out",

          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );


      gsap.fromTo(
        ".shellGalleryTitleLine",
        {
          opacity: 0,
          y: 44,
        },
        {
          opacity: 1,
          y: 0,

          stagger: 0.12,
          duration: 0.8,

          ease: "power3.out",

          scrollTrigger: {
            trigger:
              ".shellGalleryTitle",

            start:
              "top 88%",

            once: true,
          },
        }
      );


      gsap.fromTo(
        ".shellGalleryIntro",
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,

          duration: 0.7,

          ease: "power3.out",

          scrollTrigger: {
            trigger:
              ".shellGalleryIntro",

            start:
              "top 90%",

            once: true,
          },
        }
      );


      gsap.fromTo(
        ".shellHex",
        {
          opacity: 0,
          y: 35,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,

          stagger: {
            each: 0.055,
            from: "start",
          },

          duration: 0.75,

          ease:
            "back.out(1.2)",

          scrollTrigger: {
            trigger:
              ".shellGalleryHive",

            start:
              "top 84%",

            once: true,
          },
        }
      );


      gsap.fromTo(
        ".shellGalleryActive",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,

          duration: 0.7,

          ease: "power3.out",

          scrollTrigger: {
            trigger:
              ".shellGalleryActive",

            start:
              "top 94%",

            once: true,
          },
        }
      );


      gsap.fromTo(
        ".shellGalleryFooter",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,

          duration: 0.7,

          ease: "power3.out",

          scrollTrigger: {
            trigger:
              ".shellGalleryFooter",

            start:
              "top 95%",

            once: true,
          },
        }
      );

    }, section);


    return () => {
      ctx.revert();
    };
  }, []);


  /* =========================================================
     IMAGE PARALLAX
  ========================================================= */

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>
  ) => {
    const card =
      event.currentTarget;

    const rect =
      card.getBoundingClientRect();


    const x =
      event.clientX -
      rect.left;

    const y =
      event.clientY -
      rect.top;


    const px =
      x / rect.width -
      0.5;

    const py =
      y / rect.height -
      0.5;


    card.style.setProperty(
      "--shell-x",
      `${px * -7}px`
    );


    card.style.setProperty(
      "--shell-y",
      `${py * -7}px`
    );
  };


  const handleMouseLeave = (
    event: MouseEvent<HTMLElement>
  ) => {
    event.currentTarget.style.setProperty(
      "--shell-x",
      "0px"
    );

    event.currentTarget.style.setProperty(
      "--shell-y",
      "0px"
    );
  };


  const activeItem =
    galleryItems.find(
      (item) =>
        item.id === activeId
    ) ?? galleryItems[0];


  return (
    <section
      ref={sectionRef}
      id="spaces-preview"
      className="shellGallerySection"
    >

      <div
        className="shellGalleryDots shellGalleryDots--left"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>


      <div
        className="shellGalleryDots shellGalleryDots--right"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>


      <div className="shellGalleryContainer">


        {/* ===================================================
            HEADER
        ==================================================== */}

        <header className="shellGalleryHeader">

          <div className="shellGalleryEyebrow">

            <span />

            <strong>
              INSIDE THE HIVE
            </strong>

            <span />

          </div>


          <h2 className="shellGalleryTitle">

            <span className="shellGalleryTitleLine">
              Spaces That
            </span>


            <span className="shellGalleryTitleLine shellGalleryTitleLine--yellow">
              Work for You.
            </span>

          </h2>


          <p className="shellGalleryIntro">
            Explore thirteen real NerdsHive
            spaces designed for focus,
            collaboration, meetings and
            everyday growth.
          </p>

        </header>


        {/* ===================================================
            7 + 6 HEXAGON GALLERY
        ==================================================== */}

        <div className="shellGalleryStage">

          <div className="shellGalleryHive">

            {galleryItems.map((item) => {

              const isActive =
                activeId ===
                item.id;


              return (
                <article
                  key={item.id}

                  className={
                    `shellHex ${item.className} ${
                      isActive
                        ? "shellHex--active"
                        : ""
                    }`
                  }

                  onMouseEnter={() =>
                    setActiveId(item.id)
                  }

                  onMouseMove={
                    handleMouseMove
                  }

                  onMouseLeave={
                    handleMouseLeave
                  }
                >

                  <div className="shellHexBorder">

                    <div className="shellHexClip">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="shellHexImage"

                        loading={
                          item.id === 1
                            ? "eager"
                            : "lazy"
                        }
                      />


                      <div className="shellHexShade" />


                      <span className="shellHexNumber">
                        {item.number}
                      </span>


                      <div className="shellHexText">

                        <span>
                          {item.subtitle}
                        </span>


                        <strong>
                          {item.title}
                        </strong>

                      </div>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>


          {/* =================================================
              ACTIVE INFO
          ================================================== */}

          <div className="shellGalleryActive">

            <div className="shellGalleryActiveHex">
              {activeItem.number}
            </div>


            <div className="shellGalleryActiveCopy">

              <span>
                {activeItem.subtitle}
              </span>


              <strong>
                {activeItem.title}
              </strong>

            </div>


            <div className="shellGalleryActiveArrow">

              <ArrowUpRight
                size={20}
                strokeWidth={2.2}
              />

            </div>

          </div>

        </div>


        {/* ===================================================
            FOOTER
        ==================================================== */}

        <div className="shellGalleryFooter">

          <div className="shellGalleryFooterCopy">

            <span />

            <p>
              Find the space that
              <strong>
                {" "}
                fits your flow.
              </strong>
            </p>

          </div>


          <a
            href="#contact"
            className="shellGalleryCTA"
          >

            <span>
              Explore Spaces
            </span>


            <b>

              <ArrowUpRight
                size={18}
                strokeWidth={2.3}
              />

            </b>

          </a>

        </div>

      </div>

    </section>
  );
};


export default WorkspaceGallery;