import { walkthroughScenes } from "../../data/walkthroughScenes";
import "./MobileWalkthrough.css";

const MobileWalkthrough = () => {
  return (
    <section className="mobileHive">
      <div className="mobileHive__intro">
        <span className="mobileHive__eyebrow">
          WELCOME TO NERDSHIVE
        </span>

        <h1>
          Enter the <span>Hive.</span>
        </h1>

        <p>
          Step into a workspace where ideas meet people,
          collaboration feels natural, and businesses grow together.
        </p>

        <a href="#mobile-hive-scenes" className="mobileHive__button">
          Explore the Space
          <span>↓</span>
        </a>
      </div>

      <div
        id="mobile-hive-scenes"
        className="mobileHive__scenes"
      >
        {walkthroughScenes.map((scene, index) => (
          <article
            className="mobileHiveCard"
            key={scene.id}
          >
            <div className="mobileHiveCard__image">
              <img
                src={scene.image}
                alt={scene.label}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                style={{
                  objectPosition:
                    scene.imagePosition ?? "center center",
                }}
              />

              <div className="mobileHiveCard__number">
                {String(index + 1).padStart(2, "0")}
                <span>/13</span>
              </div>

              <div className="mobileHiveCard__label">
                {scene.label}
              </div>
            </div>

            <div className="mobileHiveCard__content">
              <div className="mobileHiveCard__eyebrow">
                <i />
                {scene.eyebrow}
              </div>

              <h2>
                {scene.titleLines.map((line, lineIndex) => (
                  <span
                    key={`${scene.id}-${lineIndex}`}
                    className={
                      lineIndex === scene.accentLine
                        ? "accent"
                        : ""
                    }
                  >
                    {line}
                  </span>
                ))}
              </h2>

              <p>{scene.description}</p>

              <div className="mobileHiveCard__footer">
                <strong>
                  {String(index + 1).padStart(2, "0")}
                </strong>

                <i />

                <span>{scene.label}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MobileWalkthrough;