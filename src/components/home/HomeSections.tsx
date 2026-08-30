import {
  ArrowRight,
  ArrowUpRight,
  Wifi,
  Zap,
  Presentation,
  Armchair,
  Users,
  ShieldCheck,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Linkedin,
} from "lucide-react";

import "./HomeSections.css";
import WorkModeHive from "../workspace/WorkModeHive";


/* =========================================================
   FEATURED SPACES
========================================================= */

const featuredSpaces = [
  {
    id: "01",
    category: "SHARED WORKSPACE",
    title: "Work Together.",
    description:
      "An open professional environment built for focus, collaboration and productive workdays.",
    image: "/images/walkthrough/02-coworking-long.jpg",
  },

  {
    id: "02",
    category: "PRIVATE WORKSPACE",
    title: "Focus Deeper.",
    description:
      "A quieter personal environment for uninterrupted work and important conversations.",
    image: "/images/walkthrough/09-single-cabin.jpg",
  },

  {
    id: "03",
    category: "MEETING SPACE",
    title: "Build Together.",
    description:
      "A dedicated space where teams can meet, discuss, decide and move ideas forward.",
    image: "/images/walkthrough/11-meeting-room.jpg",
  },
];


/* =========================================================
   AMENITIES
========================================================= */

const amenities = [
  {
    icon: Wifi,
    label: "Fast Connectivity",
  },

  {
    icon: Zap,
    label: "Work Ready",
  },

  {
    icon: Presentation,
    label: "Meeting Spaces",
  },

  {
    icon: Armchair,
    label: "Comfortable Setup",
  },

  {
    icon: ShieldCheck,
    label: "Professional Space",
  },

  {
    icon: Users,
    label: "Community",
  },
];


/* =========================================================
   PRICING PREVIEW
========================================================= */

const plans = [
  {
    id: "01",
    eyebrow: "FLEXIBLE DAYS",
    title: "Day",
    text:
      "A professional workspace whenever you need a focused day outside your usual setup.",
  },

  {
    id: "02",
    eyebrow: "WORKING RHYTHM",
    title: "Week",
    text:
      "Build consistency across your week with a workspace ready whenever you arrive.",
    featured: true,
  },

  {
    id: "03",
    eyebrow: "REGULAR WORK",
    title: "Month",
    text:
      "Create a dependable professional routine and make the Hive part of your workday.",
  },

  {
    id: "04",
    eyebrow: "GROWING TEAMS",
    title: "Custom",
    text:
      "Find a workspace arrangement shaped around your growing team and business.",
  },
];


/* =========================================================
   HOME SECTIONS
========================================================= */

const HomeSections = () => {
  return (
    <div className="nhHomeSections">

      {/* =====================================================
          02 — ABOUT PREVIEW
      ====================================================== */}

      <section
        id="about-preview"
        className="nhStory"
      >
        <div className="nhContainer nhStory__grid">

          {/* LEFT */}

          <div className="nhStory__content">

            <div className="nhEyebrow">
              <span />

              <strong>
                MORE THAN A WORKSPACE
              </strong>
            </div>


            <h2 className="nhStory__title">

              <span>
                Many
              </span>

              <span>
                Businesses.
              </span>

              <span className="nhYellow">
                One Hive.
              </span>

            </h2>


            <p>
              NerdsHive brings focused work, meaningful
              conversations, collaboration and growing
              businesses together inside one professional
              environment.
            </p>


            <a
              href="#spaces-preview"
              className="nhPrimaryButton"
            >
              Discover the Hive

              <ArrowRight
                size={18}
              />
            </a>

          </div>


          {/* RIGHT HIVE */}

          <div className="nhNetwork">

            <svg
              viewBox="0 0 700 650"
              className="nhNetwork__svg"
              aria-hidden="true"
            >
              <path d="M350 325 L155 150" />
              <path d="M350 325 L350 80" />
              <path d="M350 325 L550 150" />

              <path d="M350 325 L590 330" />

              <path d="M350 325 L510 545" />
              <path d="M350 325 L205 555" />

              <path d="M350 325 L105 350" />
            </svg>


            <div className="nhNetwork__core">

              <small>
                ONE
              </small>

              <strong>
                HIVE
              </strong>

            </div>


            <div className="nhNetwork__cell nhNetwork__cell--1">
              FOUNDERS
            </div>

            <div className="nhNetwork__cell nhNetwork__cell--2">
              CREATORS
            </div>

            <div className="nhNetwork__cell nhNetwork__cell--3">
              STARTUPS
            </div>

            <div className="nhNetwork__cell nhNetwork__cell--4">
              TEAMS
            </div>

            <div className="nhNetwork__cell nhNetwork__cell--5">
              IDEAS
            </div>

            <div className="nhNetwork__cell nhNetwork__cell--6">
              BUILDERS
            </div>

            <div className="nhNetwork__cell nhNetwork__cell--7">
              BUSINESS
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          03 — FEATURED SPACES
      ====================================================== */}

      <section
        id="spaces-preview"
        className="nhSpaces"
      >
        <div className="nhContainer">

          <div className="nhSectionHeader">

            <div>

              <div className="nhEyebrow">
                <span />

                <strong>
                  FIND YOUR SPACE
                </strong>
              </div>


              <h2>
                Spaces Made

                <strong>
                  for Work.
                </strong>
              </h2>

            </div>


            <p>
              From collaborative coworking areas to private
              spaces and dedicated meeting rooms, find the
              environment that fits your workday.
            </p>

          </div>


          <div className="nhSpaceGrid">

            {featuredSpaces.map((space) => (
              <article
                key={space.id}
                className="nhSpaceCard"
              >

                <div className="nhSpaceCard__image">

                  <img
                    src={space.image}
                    alt={space.title}
                  />

                  <span>
                    {space.id}
                  </span>

                </div>


                <div className="nhSpaceCard__content">

                  <small>
                    {space.category}
                  </small>

                  <h3>
                    {space.title}
                  </h3>

                  <p>
                    {space.description}
                  </p>


                  <a href="#contact-preview">

                    Explore Space

                    <ArrowUpRight
                      size={17}
                    />

                  </a>

                </div>

              </article>
            ))}

          </div>


          <div className="nhCenteredAction">

            <a
              href="#contact-preview"
              className="nhOutlineButton"
            >
              Explore All Spaces

              <ArrowRight
                size={18}
              />
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          04 — INTERACTIVE WORK MODES
      ====================================================== */}

      <WorkModeHive />


      {/* =====================================================
          05 — SERVICES / AMENITIES
      ====================================================== */}

      <section
        id="services-preview"
        className="nhAmenities"
      >

        <div className="nhAmenities__inner">

          <div className="nhAmenities__copy">

            <div className="nhEyebrow nhEyebrow--yellow">
              <span />

              <strong>
                EVERYTHING YOU NEED
              </strong>
            </div>


            <h2>

              <span>
                Work Without
              </span>

              <strong>
                Friction.
              </strong>

            </h2>


            <p>
              The essentials are already around you, so your
              attention can stay where it belongs — on your
              work, your ideas and your business.
            </p>


            <a href="#pricing-preview">

              Explore the Experience

              <ArrowRight
                size={18}
              />

            </a>

          </div>


          {/* ORBIT */}

          <div className="nhOrbit">

            <div className="nhOrbit__ring nhOrbit__ring--outer" />

            <div className="nhOrbit__ring nhOrbit__ring--inner" />


            <div className="nhOrbit__core">

              <small>
                INSIDE
              </small>

              <strong>
                THE HIVE
              </strong>

            </div>


            {amenities.map(
              (
                amenity,
                index
              ) => {
                const Icon =
                  amenity.icon;

                return (
                  <div
                    key={
                      amenity.label
                    }
                    className={`nhOrbit__item nhOrbit__item--${index + 1}`}
                  >

                    <Icon
                      size={24}
                      strokeWidth={1.8}
                    />

                    <span>
                      {amenity.label}
                    </span>

                  </div>
                );
              }
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          06 — COMMUNITY
      ====================================================== */}

      <section
        id="community-preview"
        className="nhCommunity"
      >

        {/* BACKGROUND WORDS */}

        <span className="nhCommunity__word nhCommunity__word--1">
          IDEAS
        </span>

        <span className="nhCommunity__word nhCommunity__word--2">
          PEOPLE
        </span>

        <span className="nhCommunity__word nhCommunity__word--3">
          BUILD
        </span>

        <span className="nhCommunity__word nhCommunity__word--4">
          CONNECT
        </span>

        <span className="nhCommunity__word nhCommunity__word--5">
          GROW
        </span>


        {/* CUTE BEE */}

        <div className="nhCommunityBee">

          <span className="nhCommunityBee__wing nhCommunityBee__wing--1" />

          <span className="nhCommunityBee__wing nhCommunityBee__wing--2" />


          <span className="nhCommunityBee__body">

            <i />

            <i />

          </span>


          <span className="nhCommunityBee__head">

            <b />

            <b />

          </span>

        </div>


        {/* CONTENT */}

        <div className="nhCommunity__content">

          <div className="nhEyebrow nhEyebrow--center">
            <span />

            <strong>
              MORE THAN A DESK
            </strong>
          </div>


          <h2>

            <span>
              Work Around
            </span>

            <strong>
              Momentum.
            </strong>

          </h2>


          <p>
            A workspace becomes more powerful when the people
            around you are building, learning, collaborating
            and moving forward too.
          </p>


          <a
            href="#contact-preview"
            className="nhPrimaryButton"
          >

            Meet the Hive

            <ArrowRight
              size={18}
            />

          </a>

        </div>

      </section>


      {/* =====================================================
          07 — PRICING PREVIEW
      ====================================================== */}

      <section
        id="pricing-preview"
        className="nhPricing"
      >
        <div className="nhContainer">

          <div className="nhSectionHeader">

            <div>

              <div className="nhEyebrow">
                <span />

                <strong>
                  WORK YOUR WAY
                </strong>
              </div>


              <h2>
                Flexible by

                <strong>
                  Design.
                </strong>
              </h2>

            </div>


            <p>
              Choose the way you want to work and find a
              flexible workspace option for your day,
              routine or growing team.
            </p>

          </div>


          <div className="nhPricingGrid">

            {plans.map((plan) => (

              <article
                key={plan.id}
                className={
                  plan.featured
                    ? "nhPricingCard nhPricingCard--featured"
                    : "nhPricingCard"
                }
              >

                <span className="nhPricingCard__number">
                  {plan.id}
                </span>


                <span className="nhPricingCard__arrow">
                  ↗
                </span>


                <div>

                  <small>
                    {plan.eyebrow}
                  </small>

                  <h3>
                    {plan.title}
                  </h3>

                  <p>
                    {plan.text}
                  </p>

                </div>

              </article>

            ))}

          </div>


          <div className="nhCenteredAction">

            <a
              href="#contact-preview"
              className="nhPrimaryButton"
            >
              View Workspace Plans

              <ArrowRight
                size={18}
              />
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          08 — FINAL CTA
      ====================================================== */}

      <section
        id="contact-preview"
        className="nhFinalCTA"
      >

        <div className="nhFinalCTA__hex nhFinalCTA__hex--left">

          {Array.from({
            length: 15,
          }).map(
            (
              _,
              index
            ) => (
              <span
                key={
                  `left-${index}`
                }
              />
            )
          )}

        </div>


        <div className="nhFinalCTA__hex nhFinalCTA__hex--right">

          {Array.from({
            length: 15,
          }).map(
            (
              _,
              index
            ) => (
              <span
                key={
                  `right-${index}`
                }
              />
            )
          )}

        </div>


        <div className="nhFinalCTA__content">

          <div className="nhEyebrow nhEyebrow--center nhEyebrow--yellow">
            <span />

            <strong>
              YOUR NEXT WORKDAY
            </strong>
          </div>


          <h2>

            <span>
              Ready to Enter
            </span>

            <strong>
              the Hive?
            </strong>

          </h2>


          <p>
            Come see the workspace, experience the atmosphere,
            and discover the setup that fits the way you want
            to work.
          </p>


          <div className="nhFinalCTA__buttons">

            <a
              href="#nh-footer"
              className="nhYellowButton"
            >

              Book a Tour

              <ArrowRight
                size={18}
              />

            </a>


            <a
              href="#spaces-preview"
              className="nhGhostButton"
            >
              Explore Spaces
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          09 — FOOTER
      ====================================================== */}

      <footer
        id="nh-footer"
        className="nhFooter"
      >

        <div className="nhContainer nhFooter__grid">

          {/* BRAND */}

          <div className="nhFooter__brand">

            <div className="nhFooter__logo">

              <img
                src="/images/logo/nerdshive-logo.png"
                alt="NerdsHive"
              />

            </div>


            <h3>
              Work.
              <br />

              Connect.
              <br />

              <span>
                Grow.
              </span>
            </h3>


            <p>
              A workspace designed for focused work,
              collaboration, community and growing businesses.
            </p>

          </div>


          {/* LINKS */}

          <div className="nhFooter__links">

            <div>

              <small>
                EXPLORE
              </small>

              <a href="#walkthrough">
                Home
              </a>

              <a href="#about-preview">
                About
              </a>

              <a href="#spaces-preview">
                Spaces
              </a>

              <a href="#services-preview">
                Services
              </a>

            </div>


            <div>

              <small>
                THE HIVE
              </small>

              <a href="#pricing-preview">
                Pricing
              </a>

              <a href="#community-preview">
                Community
              </a>

              <a href="#contact-preview">
                Contact
              </a>

              <a href="#contact-preview">
                Book a Tour
              </a>

            </div>


            <div>

              <small>
                CONNECT
              </small>

              <span>
                <Phone
                  size={15}
                />

                Contact NerdsHive
              </span>


              <span>
                <Mail
                  size={15}
                />

                Email NerdsHive
              </span>


              <span>
                <MapPin
                  size={15}
                />

                Thanjavur
              </span>

            </div>

          </div>

        </div>


        <div className="nhContainer nhFooter__bottom">

          <span>
            © 2026 NerdsHive. All rights reserved.
          </span>


          <div>

            <a
              href="#"
              aria-label="Instagram"
            >
              <Instagram
                size={18}
              />
            </a>


            <a
              href="#"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={18}
              />
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default HomeSections;