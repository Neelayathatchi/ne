import {
  ArrowRight,
} from "lucide-react";

import "./PricingPreview.css";

const plans = [
  {
    number: "01",
    eyebrow: "FLEXIBLE DAYS",
    title: "Day",
    description:
      "Drop in when you need a productive place to work.",
  },

  {
    number: "02",
    eyebrow: "WORKING RHYTHM",
    title: "Week",
    description:
      "Build consistency across a focused working week.",
    featured: true,
  },

  {
    number: "03",
    eyebrow: "REGULAR WORK",
    title: "Month",
    description:
      "Make NerdsHive part of your everyday professional routine.",
  },

  {
    number: "04",
    eyebrow: "GROWING TEAM",
    title: "Custom",
    description:
      "Find a workspace arrangement shaped around your team.",
  },
];

const PricingPreview = () => {
  return (
    <section
      id="pricing-preview"
      className="pricingPreview"
    >

      <div className="pricingPreview__header">

        <div>

          <div className="pricingPreview__eyebrow">

            <i />

            <strong>
              WORK YOUR WAY
            </strong>

          </div>


          <h2>

            <span>
              Flexible by
            </span>

            <span>
              Design.
            </span>

          </h2>

        </div>


        <p>
          Start with the way you want to work and explore the
          workspace setup that fits your day, routine or team.
        </p>

      </div>


      <div className="pricingPreview__cards">

        {plans.map(
          (
            plan
          ) => (

            <article
              key={
                plan.number
              }
              className={
                plan.featured
                  ? "pricingPreview__card pricingPreview__card--featured"
                  : "pricingPreview__card"
              }
            >

              <span className="pricingPreview__number">
                {
                  plan.number
                }
              </span>


              <div className="pricingPreview__cardContent">

                <small>
                  {
                    plan.eyebrow
                  }
                </small>

                <h3>
                  {
                    plan.title
                  }
                </h3>

                <p>
                  {
                    plan.description
                  }
                </p>

              </div>


              <span className="pricingPreview__arrow">
                ↗
              </span>

            </article>

          )
        )}

      </div>


      <a
        href="/pricing"
        className="pricingPreview__button"
      >

        View Workspace Plans

        <ArrowRight
          size={18}
        />

      </a>

    </section>
  );
};

export default PricingPreview;