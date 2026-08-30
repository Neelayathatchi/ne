import {
  Archive,
  Armchair,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Coffee,
  DoorOpen,
  LockKeyhole,
  MessageCircle,
  Monitor,
  Presentation,
  Printer,
  Sparkles,
  UserRound,
  UsersRound,
  Wifi,
  Zap,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type {
  CSSProperties,
} from "react";

import "./SpaceExplorer.css";


type SpaceData = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  capacity: string;
  bestFor: string;
  workMode: string;
  icon: React.ReactNode;
  gallery: string[];
};


const spaces: SpaceData[] = [
  {
    id: "hot-desk",
    number: "01",
    title: "Hot Desk",
    subtitle: "Drop in. Plug in. Focus.",
    description:
      "A flexible seat for focused work, quick tasks and productive flow.",
    capacity: "1 Person",
    bestFor: "Freelancers, Remote Professionals",
    workMode: "Focus · Flex · Flow",
    icon: <Armchair />,
    gallery: [
      "/images/walkthrough/02-coworking-long.jpg",
      "/images/walkthrough/03-white-workspace.jpg",
      "/images/walkthrough/04-yellow-workspace.jpg",
      "/images/walkthrough/05-glass-workspace.jpg",
      "/images/walkthrough/13-corridor.jpg",
    ],
  },

  {
    id: "dedicated-desk",
    number: "02",
    title: "Dedicated Desk",
    subtitle: "Your desk. Your rhythm.",
    description:
      "A dedicated workspace that stays ready for your everyday work rhythm.",
    capacity: "1 Person",
    bestFor: "Professionals, Creators",
    workMode: "Own · Focus · Grow",
    icon: <Monitor />,
    gallery: [
      "/images/walkthrough/03-white-workspace.jpg",
      "/images/walkthrough/04-yellow-workspace.jpg",
      "/images/walkthrough/05-glass-workspace.jpg",
      "/images/walkthrough/02-coworking-long.jpg",
      "/images/walkthrough/13-corridor.jpg",
    ],
  },

  {
    id: "private-cabin",
    number: "03",
    title: "Private Cabin",
    subtitle: "Privacy meets productivity.",
    description:
      "A private setting for deep work, calls and focused execution.",
    capacity: "1–4 People",
    bestFor: "Founders, Small Teams",
    workMode: "Private · Secure · Focus",
    icon: <DoorOpen />,
    gallery: [
      "/images/walkthrough/06-private-cabin-a.jpg",
      "/images/walkthrough/07-private-cabin-b.jpg",
      "/images/walkthrough/09-single-cabin.jpg",
      "/images/walkthrough/10-double-cabin.jpg",
      "/images/walkthrough/13-corridor.jpg",
    ],
  },

  {
    id: "team-space",
    number: "04",
    title: "Team Space",
    subtitle: "Built for teams that build.",
    description:
      "A collaborative workspace where growing teams can move, build and scale together.",
    capacity: "4–10 People",
    bestFor: "Startups, Project Teams",
    workMode: "Build · Collaborate · Scale",
    icon: <UsersRound />,
    gallery: [
      "/images/walkthrough/08-team-cabin.jpg",
      "/images/walkthrough/10-double-cabin.jpg",
      "/images/walkthrough/05-glass-workspace.jpg",
      "/images/walkthrough/02-coworking-long.jpg",
      "/images/walkthrough/13-corridor.jpg",
    ],
  },

  {
    id: "meeting-room",
    number: "05",
    title: "Meeting Room",
    subtitle: "Present. Pitch. Win.",
    description:
      "A professional meeting environment for presentations, strategy and client conversations.",
    capacity: "4–12 People",
    bestFor: "Clients, Teams, Presentations",
    workMode: "Meet · Present · Decide",
    icon: <Presentation />,
    gallery: [
      "/images/walkthrough/11-meeting-room.jpg",
      "/images/walkthrough/12-discussion-room.jpg",
      "/images/walkthrough/05-glass-workspace.jpg",
      "/images/walkthrough/08-team-cabin.jpg",
      "/images/walkthrough/13-corridor.jpg",
    ],
  },

  {
    id: "discussion-room",
    number: "06",
    title: "Discussion Room",
    subtitle: "Talk. Brainstorm. Solve.",
    description:
      "A relaxed collaborative room for conversations, reviews and creative problem solving.",
    capacity: "2–6 People",
    bestFor: "Creators, Interviews, Teams",
    workMode: "Think · Talk · Create",
    icon: <MessageCircle />,
    gallery: [
      "/images/walkthrough/12-discussion-room.jpg",
      "/images/walkthrough/11-meeting-room.jpg",
      "/images/walkthrough/08-team-cabin.jpg",
      "/images/walkthrough/05-glass-workspace.jpg",
      "/images/walkthrough/13-corridor.jpg",
    ],
  },
];


const amenities = [
  {
    title: "Ergonomic Chairs",
    icon: <Armchair />,
  },
  {
    title: "Printing Zone",
    icon: <Printer />,
  },
  {
    title: "Locker Storage",
    icon: <Archive />,
  },
  {
    title: "Café Access",
    icon: <Coffee />,
  },
  {
    title: "Relax Corner",
    icon: <UserRound />,
  },
  {
    title: "Events & Workshops",
    icon: <CalendarDays />,
  },
];


const SpaceExplorer = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const visualRef =
    useRef<HTMLDivElement | null>(null);


  const [activeIndex, setActiveIndex] =
    useState(0);

  const [galleryIndex, setGalleryIndex] =
    useState(0);


  const activeSpace =
    useMemo(
      () => spaces[activeIndex],
      [activeIndex]
    );


  const activeImage =
    activeSpace.gallery[galleryIndex];


  const selectSpace = (
    index: number
  ) => {
    setActiveIndex(index);
    setGalleryIndex(0);
  };


  const goPrevious = () => {
    selectSpace(
      activeIndex === 0
        ? spaces.length - 1
        : activeIndex - 1
    );
  };


  const goNext = () => {
    selectSpace(
      activeIndex ===
        spaces.length - 1
        ? 0
        : activeIndex + 1
    );
  };


  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) return;


    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            section.classList.add(
              "spaceExplorer--visible"
            );

            observer.disconnect();
          }
        },
        {
          threshold: 0.06,
        }
      );


    observer.observe(section);


    return () =>
      observer.disconnect();
  }, []);


  useEffect(() => {
    const visual =
      visualRef.current;

    if (!visual) return;


    const handleMove = (
      event: PointerEvent
    ) => {
      const rect =
        visual.getBoundingClientRect();


      const x =
        (event.clientX -
          rect.left) /
          rect.width -
        0.5;


      const y =
        (event.clientY -
          rect.top) /
          rect.height -
        0.5;


      visual.style.setProperty(
        "--image-x",
        `${x * 12}px`
      );


      visual.style.setProperty(
        "--image-y",
        `${y * 9}px`
      );


      visual.style.setProperty(
        "--mouse-x",
        `${
          event.clientX -
          rect.left
        }px`
      );


      visual.style.setProperty(
        "--mouse-y",
        `${
          event.clientY -
          rect.top
        }px`
      );
    };


    const reset = () => {
      visual.style.setProperty(
        "--image-x",
        "0px"
      );

      visual.style.setProperty(
        "--image-y",
        "0px"
      );
    };


    visual.addEventListener(
      "pointermove",
      handleMove
    );

    visual.addEventListener(
      "pointerleave",
      reset
    );


    return () => {
      visual.removeEventListener(
        "pointermove",
        handleMove
      );

      visual.removeEventListener(
        "pointerleave",
        reset
      );
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="spaceExplorer"
    >
      {/* TOP PILL */}

      <div className="spaceExplorer__topPill">
        <span>
          <LockKeyhole />
          24/7 Access
        </span>

        <i />

        <span>
          <Wifi />
          High Speed Wi-Fi
        </span>

        <i />

        <span>
          <UsersRound />
          Community First
        </span>
      </div>


      {/* MAIN */}

      <div className="spaceExplorer__layout">

        {/* =====================================
            LEFT SIDE
        ====================================== */}

        <div className="spaceExplorer__leftPanel">

          <header className="spaceExplorer__intro">

            <span className="spaceExplorer__eyebrow">
              EXPLORE THE HIVE
            </span>


            <h1>
              Find your

              <strong>
                perfect workspace.
              </strong>
            </h1>


            <p>
              Different workdays.
              Different vibes.
              <br />
              Pick a space that fits
              your flow.
            </p>


            <div className="spaceExplorer__bee">
              <span className="spaceExplorer__beeTrail" />

              <span className="spaceExplorer__beeWing spaceExplorer__beeWing--left" />

              <span className="spaceExplorer__beeWing spaceExplorer__beeWing--right" />

              <span className="spaceExplorer__beeBody">
                <i />
                <i />
              </span>

              <span className="spaceExplorer__beeFace">
                <b />
                <b />
              </span>
            </div>

          </header>


          {/* SELECTORS */}

          <div className="spaceExplorer__selector">

            {spaces.map(
              (
                space,
                index
              ) => {
                const active =
                  index ===
                  activeIndex;


                return (
                  <button
                    key={space.id}
                    type="button"
                    onClick={() =>
                      selectSpace(index)
                    }
                    style={
                      {
                        "--delay":
                          `${
                            0.08 +
                            index *
                              0.07
                          }s`,
                      } as CSSProperties
                    }
                    className={`
                      spaceExplorer__selectorCard
                      ${
                        active
                          ? "spaceExplorer__selectorCard--active"
                          : ""
                      }
                    `}
                  >
                    <span className="spaceExplorer__number">
                      {space.number}
                    </span>


                    <span className="spaceExplorer__selectorIcon">
                      {space.icon}
                    </span>


                    <span className="spaceExplorer__selectorText">

                      <strong>
                        {space.title}
                      </strong>

                      <small>
                        {space.subtitle}
                      </small>

                    </span>


                    <span className="spaceExplorer__selectorArrow">
                      <ChevronRight />
                    </span>
                  </button>
                );
              }
            )}

          </div>

        </div>


        {/* =====================================
            RIGHT SIDE
        ====================================== */}

        <div className="spaceExplorer__experience">

          <div className="spaceExplorer__navigator">

            <div className="spaceExplorer__counter">
              <strong>
                {activeSpace.number}
              </strong>

              <small>
                / 06
              </small>
            </div>


            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous workspace"
            >
              <ChevronLeft />
            </button>


            <button
              type="button"
              onClick={goNext}
              className="spaceExplorer__navigatorNext"
              aria-label="Next workspace"
            >
              <ChevronRight />
            </button>

          </div>


          <div
            ref={visualRef}
            className="spaceExplorer__visual"
          >
            <span className="spaceExplorer__visualBorder" />


            <img
              key={activeImage}
              src={activeImage}
              alt={activeSpace.title}
              draggable="false"
            />


            <div className="spaceExplorer__photoOverlay" />

            <div className="spaceExplorer__cursorLight" />


            <div
              key={activeSpace.id}
              className="spaceExplorer__photoInfo"
            >
              <span className="spaceExplorer__viewBadge">
                <Sparkles />
                YOU ARE VIEWING
              </span>


              <h2>
                {activeSpace.title}
              </h2>


              <p>
                {
                  activeSpace.description
                }
              </p>


              <div className="spaceExplorer__facts">

                <div className="spaceExplorer__fact">
                  <UserRound />

                  <span>
                    Capacity

                    <strong>
                      {
                        activeSpace.capacity
                      }
                    </strong>
                  </span>
                </div>


                <div className="spaceExplorer__fact">
                  <Sparkles />

                  <span>
                    Best for

                    <strong>
                      {
                        activeSpace.bestFor
                      }
                    </strong>
                  </span>
                </div>


                <div className="spaceExplorer__fact">
                  <Zap />

                  <span>
                    Work Mode

                    <strong>
                      {
                        activeSpace.workMode
                      }
                    </strong>
                  </span>
                </div>

              </div>

            </div>


            {/* 3 HEX FEATURES */}

            <div className="spaceExplorer__hexRail">

              <button
                type="button"
                className="spaceExplorer__hexFeature"
              >
                <Wifi />

                <span>
                  Fast Wi-Fi
                </span>
              </button>


              <span className="spaceExplorer__hexConnector">
                <i />
              </span>


              <button
                type="button"
                className="spaceExplorer__hexFeature"
              >
                <Zap />

                <span>
                  Power Access
                </span>
              </button>


              <span className="spaceExplorer__hexConnector">
                <i />
              </span>


              <button
                type="button"
                className="spaceExplorer__hexFeature"
              >
                <UsersRound />

                <span>
                  Community
                  <br />
                  Zone
                </span>
              </button>

            </div>


            {/* GALLERY */}

            <div className="spaceExplorer__gallery">

              {activeSpace.gallery.map(
                (
                  image,
                  index
                ) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() =>
                      setGalleryIndex(index)
                    }
                    className={`
                      spaceExplorer__galleryItem
                      ${
                        galleryIndex ===
                        index
                          ? "spaceExplorer__galleryItem--active"
                          : ""
                      }
                    `}
                  >
                    <img
                      src={image}
                      alt=""
                      draggable="false"
                    />
                  </button>
                )
              )}

            </div>

          </div>


          {/* BOTTOM DOCK */}

          <div className="spaceExplorer__dock">

            <div className="spaceExplorer__about">

              <span>
                ABOUT THIS SPACE
              </span>


              <p>
                {activeSpace.title} gives
                you the freedom to work
                your way in a comfortable,
                productive and professional
                environment.
              </p>

            </div>


            <div className="spaceExplorer__divider" />


            <div className="spaceExplorer__amenities">

              <span className="spaceExplorer__dockTitle">
                AMENITIES
              </span>


              <div className="spaceExplorer__amenityGrid">

                {amenities.map(
                  (
                    amenity,
                    index
                  ) => (
                    <button
                      key={amenity.title}
                      type="button"
                      style={
                        {
                          "--amenity-delay":
                            `${
                              index *
                              0.06
                            }s`,
                        } as CSSProperties
                      }
                      className="spaceExplorer__amenity"
                    >
                      <i>
                        {amenity.icon}
                      </i>

                      <small>
                        {
                          amenity.title
                        }
                      </small>
                    </button>
                  )
                )}

              </div>

            </div>


            <div className="spaceExplorer__divider" />


            <div className="spaceExplorer__booking">

              <button type="button">
                <span>
                  Book This Space
                </span>

                <i>
                  <ChevronRight />
                </i>
              </button>


              <small>
                Walk in or book
                in advance
              </small>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};


export default SpaceExplorer;