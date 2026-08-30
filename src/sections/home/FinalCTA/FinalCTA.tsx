import {
  ArrowRight,
} from "lucide-react";

import "./FinalCTA.css";

const FinalCTA = () => {
  return (
    <section
      id="contact-preview"
      className="finalCTA"
    >

      <div className="finalCTA__hive finalCTA__hive--left">

        {Array.from({
          length: 15,
        }).map(
          (
            _,
            index
          ) => (
            <span
              key={index}
            />
          )
        )}

      </div>


      <div className="finalCTA__hive finalCTA__hive--right">

        {Array.from({
          length: 15,
        }).map(
          (
            _,
            index
          ) => (
            <span
              key={index}
            />
          )
        )}

      </div>


      <div className="finalCTA__content">

        <div className="finalCTA__eyebrow">

          <i />

          <strong>
            YOUR NEXT WORKDAY
          </strong>

        </div>


        <h2>

          <span>
            Ready to Enter
          </span>

          <span>
            the Hive?
          </span>

        </h2>


        <p>
          Come see the space, experience the atmosphere and
          discover the workspace that fits the way you want
          to work.
        </p>


        <div className="finalCTA__actions">

          <a
            href="/contact"
            className="finalCTA__primary"
          >

            Book a Tour

            <ArrowRight
              size={18}
            />

          </a>


          <a
            href="/spaces"
            className="finalCTA__secondary"
          >

            Explore Spaces

          </a>

        </div>

      </div>


      <div className="finalCTA__bee">

        <span className="finalCTA__beeWing finalCTA__beeWing--left" />

        <span className="finalCTA__beeWing finalCTA__beeWing--right" />


        <span className="finalCTA__beeBody">

          <i />

          <i />

        </span>


        <span className="finalCTA__beeHead">

          <b />

          <b />

        </span>

      </div>

    </section>
  );
};

export default FinalCTA;