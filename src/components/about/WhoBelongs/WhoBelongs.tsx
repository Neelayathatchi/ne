import { useEffect, useRef } from "react";
import "./WhoBelongs.css";


type InteractiveCard = {
  name: string;
  className: string;
};


const cards: InteractiveCard[] = [
  {
    name: "Founders",
    className: "founders",
  },
  {
    name: "Freelancers",
    className: "freelancers",
  },
  {
    name: "Creators",
    className: "creators",
  },
  {
    name: "Remote Teams",
    className: "remote",
  },
  {
    name: "Startups",
    className: "startups",
  },
  {
    name: "Professionals",
    className: "professionals",
  },
];


const WhoBelongs = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);


  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }


    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            section.classList.add(
              "whoBelongsExact--visible"
            );

            observer.disconnect();
          }
        },
        {
          threshold: 0.12,
        }
      );


    observer.observe(section);


    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="whoBelongsExact"
    >

      {/* BACKGROUND GLOW ONLY */}

      <div className="whoBelongsExact__glow whoBelongsExact__glow--left" />

      <div className="whoBelongsExact__glow whoBelongsExact__glow--right" />


      {/* ===================================================
          EXACT APPROVED DESIGN
      ==================================================== */}

      <div className="whoBelongsExact__artwork">

        <img
          className="whoBelongsExact__baseImage"
          src="/images/about/who-belongs.png"
          alt="Different Paths. One Hive at NerdsHive"
          draggable="false"
        />


        {/* =================================================
            REAL VISUAL INTERACTIVE CARD LAYERS

            These use the SAME approved image.
            So design remains exactly same.
        ================================================== */}

        <div className="whoBelongsExact__cardLayer">

          {cards.map((card) => (
            <button
              key={card.name}
              type="button"
              aria-label={card.name}
              className={`
                whoBelongsExact__card
                whoBelongsExact__card--${card.className}
              `}
            >

              <span className="whoBelongsExact__cardVisual">

                <img
                  src="/images/about/who-belongs.png"
                  alt=""
                  draggable="false"
                />

              </span>


              <span className="whoBelongsExact__cardSpark">
                ✦
              </span>

            </button>
          ))}

        </div>


        {/* =================================================
            CENTER HEX INTERACTION
        ================================================== */}

        <button
          type="button"
          className="whoBelongsExact__center"
          aria-label="One community. Many journeys."
        >

          <span className="whoBelongsExact__centerRing whoBelongsExact__centerRing--one" />

          <span className="whoBelongsExact__centerRing whoBelongsExact__centerRing--two" />

        </button>

      </div>

    </section>
  );
};


export default WhoBelongs;