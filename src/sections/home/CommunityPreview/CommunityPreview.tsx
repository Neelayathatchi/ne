import {
  ArrowUpRight,
} from "lucide-react";

import "./CommunityPreview.css";

const CommunityPreview = () => {
  return (
    <section
      id="community-preview"
      className="communityPreview"
    >

      {/* FLOATING WORDS */}

      <div className="communityPreview__words">

        <span className="communityPreview__word communityPreview__word--one">
          IDEAS
        </span>

        <span className="communityPreview__word communityPreview__word--two">
          PEOPLE
        </span>

        <span className="communityPreview__word communityPreview__word--three">
          BUILD
        </span>

        <span className="communityPreview__word communityPreview__word--four">
          CONNECT
        </span>

        <span className="communityPreview__word communityPreview__word--five">
          GROW
        </span>

      </div>


      {/* CSS BEE */}

      <div className="communityBee">

        <span className="communityBee__wing communityBee__wing--left" />

        <span className="communityBee__wing communityBee__wing--right" />


        <span className="communityBee__body">

          <i />

          <i />

        </span>


        <span className="communityBee__head">

          <b />

          <b />

        </span>

      </div>


      {/* CONTENT */}

      <div className="communityPreview__content">

        <div className="communityPreview__eyebrow">

          <i />

          <strong>
            MORE THAN A DESK
          </strong>

        </div>


        <h2>

          <span>
            Work Around
          </span>

          <span>
            Momentum.
          </span>

        </h2>


        <p>
          A workspace becomes more powerful when the people
          around you are building, learning, collaborating and
          moving forward too.
        </p>


        <a href="/community">

          Meet the Community

          <ArrowUpRight
            size={18}
          />

        </a>

      </div>

    </section>
  );
};

export default CommunityPreview;