import { useState } from "react";
import "./SpacesHero.css";


type SpaceId =
  | "cowork"
  | "private"
  | "meeting"
  | "focus"
  | "lounge";


type SpaceData = {
  id: SpaceId;
  number: string;
  title: string;
  subtitle: string;
};


const spaces: SpaceData[] = [
  {
    id: "cowork",
    number: "01",
    title: "Cowork Space",
    subtitle:
      "Flexible desks for ideas, focus and everyday momentum.",
  },
  {
    id: "private",
    number: "02",
    title: "Private Cabin",
    subtitle:
      "Your own quiet zone for uninterrupted work.",
  },
  {
    id: "meeting",
    number: "03",
    title: "Meeting Room",
    subtitle:
      "A professional space for conversations and decisions.",
  },
  {
    id: "focus",
    number: "04",
    title: "Focus Desk",
    subtitle:
      "A calm corner designed for deep, productive work.",
  },
  {
    id: "lounge",
    number: "05",
    title: "Breakout Lounge",
    subtitle:
      "Pause, connect, recharge and find your next idea.",
  },
];


const SpacesHero = () => {
  const [activeId, setActiveId] =
    useState<SpaceId>("cowork");


  const activeSpace =
    spaces.find(
      (space) =>
        space.id === activeId
    ) ?? spaces[0];


  return (
    <section className="spacesHero">

      <div className="spacesHero__container">

        <div className="spacesHero__eyebrow">

          <span className="spacesHero__eyebrowMark" />

          <span>
            NERDSHIVE SPACES
          </span>

        </div>


        <h1 className="spacesHero__title">

          <span>
            A space for every
          </span>

          <span className="spacesHero__titleAccent">
            way you work.
          </span>

        </h1>


        <div className="spacesHero__intro">

          <p>
            From focused individual desks to
            collaborative meeting rooms and private
            cabins, NerdsHive gives you the freedom
            to choose a workspace that fits your day.
          </p>


          <div className="spacesHero__hint">

            <span className="spacesHero__hintDot" />

            <div>
              <small>
                INTERACTIVE
              </small>

              <strong>
                Explore the spaces
              </strong>
            </div>

          </div>

        </div>


        <div className="spacesHero__grid">

          {/* COWORK */}

          <button
            type="button"
            className={`spaceCard spaceCard--cowork ${
              activeId === "cowork"
                ? "spaceCard--active"
                : ""
            }`}
            onMouseEnter={() =>
              setActiveId("cowork")
            }
            onFocus={() =>
              setActiveId("cowork")
            }
          >

            <span className="spaceCard__number">
              01
            </span>


            <div className="coworkScene">

              <div className="coworkTable coworkTable--one">
                <span className="coworkLaptop" />
                <span className="coworkChair" />
              </div>

              <div className="coworkTable coworkTable--two">
                <span className="coworkLaptop" />
                <span className="coworkChair" />
              </div>

              <div className="coworkTable coworkTable--three">
                <span className="coworkLaptop" />
                <span className="coworkChair" />
              </div>

            </div>


            <div className="spaceCard__name">

              <span>
                ●
              </span>

              <strong>
                COWORK
              </strong>

            </div>

          </button>


          {/* PRIVATE */}

          <button
            type="button"
            className={`spaceCard spaceCard--private ${
              activeId === "private"
                ? "spaceCard--active"
                : ""
            }`}
            onMouseEnter={() =>
              setActiveId("private")
            }
            onFocus={() =>
              setActiveId("private")
            }
          >

            <span className="spaceCard__number">
              02
            </span>


            <div className="privateScene">

              <div className="privateScene__room">

                <div className="privateDesk">

                  <span className="privateMonitor">
                    <i />
                  </span>

                </div>


                <div className="privateDoor">
                  <i />
                </div>

              </div>

            </div>


            <div className="spaceCard__name">

              <span>
                ■
              </span>

              <strong>
                PRIVATE
              </strong>

            </div>

          </button>


          {/* MEETING */}

          <button
            type="button"
            className={`spaceCard spaceCard--meeting ${
              activeId === "meeting"
                ? "spaceCard--active"
                : ""
            }`}
            onMouseEnter={() =>
              setActiveId("meeting")
            }
            onFocus={() =>
              setActiveId("meeting")
            }
          >

            <span className="spaceCard__number">
              03
            </span>


            <div className="meetingScene">

              <div className="meetingTable" />

              <span className="meetingSeat meetingSeat--1" />
              <span className="meetingSeat meetingSeat--2" />
              <span className="meetingSeat meetingSeat--3" />
              <span className="meetingSeat meetingSeat--4" />
              <span className="meetingSeat meetingSeat--5" />
              <span className="meetingSeat meetingSeat--6" />

            </div>


            <div className="spaceCard__name spaceCard__name--meeting">

              <span>
                ✦
              </span>

              <strong>
                MEETING
              </strong>

            </div>

          </button>


          {/* FOCUS */}

          <button
            type="button"
            className={`spaceCard spaceCard--focus ${
              activeId === "focus"
                ? "spaceCard--active"
                : ""
            }`}
            onMouseEnter={() =>
              setActiveId("focus")
            }
            onFocus={() =>
              setActiveId("focus")
            }
          >

            <span className="spaceCard__number">
              04
            </span>


            <div className="focusScene">

              <div className="focusScene__desk" />

              <div className="focusScene__monitor">
                <span />
              </div>

              <div className="focusScene__lamp">
                <span />
                <i />
              </div>

              <div className="focusScene__chair" />

            </div>


            <div className="spaceCard__name">

              <span>
                ◐
              </span>

              <strong>
                FOCUS
              </strong>

            </div>

          </button>


          {/* LOUNGE */}

          <button
            type="button"
            className={`spaceCard spaceCard--lounge ${
              activeId === "lounge"
                ? "spaceCard--active"
                : ""
            }`}
            onMouseEnter={() =>
              setActiveId("lounge")
            }
            onFocus={() =>
              setActiveId("lounge")
            }
          >

            <span className="spaceCard__number">
              05
            </span>


            <div className="loungeScene">

              <div className="loungeChair">
                <span />
              </div>


              <div className="loungeTable">

                <div className="coffeeCup">

                  <span />

                  <i className="coffeeSteam coffeeSteam--one" />

                  <i className="coffeeSteam coffeeSteam--two" />

                </div>

              </div>

            </div>


            <div className="spaceCard__name">

              <span>
                ☕
              </span>

              <strong>
                LOUNGE
              </strong>

            </div>

          </button>

        </div>


        <div
          key={activeSpace.id}
          className="spacesHero__activeInfo"
        >

          <div className="spacesHero__activeNumber">
            {activeSpace.number}
          </div>


          <div className="spacesHero__activeCopy">

            <small>
              CURRENT SPACE
            </small>

            <strong>
              {activeSpace.title}
            </strong>

            <p>
              {activeSpace.subtitle}
            </p>

          </div>


          <span className="spacesHero__activeArrow">
            ↗
          </span>

        </div>

      </div>

    </section>
  );
};


export default SpacesHero;