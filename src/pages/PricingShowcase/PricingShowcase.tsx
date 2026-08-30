import {
  CalendarDays,
  Check,
  Heart,
  LockKeyhole,
  Mail,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Star,
  UsersRound,
  WalletCards,
  Wifi,
} from "lucide-react";

import {
  useEffect,
  useRef,
} from "react";

import type {
  CSSProperties,
  ReactNode,
} from "react";

import "./PricingShowcase.css";
import "./PricingShowcaseWide.css";


type PricingPlan = {
  id: string;
  title: string;
  price: ReactNode;
  description: string;
  features: string[];
  icon: ReactNode;
  featured?: boolean;
  footer: string;
};


const sharedPlans: PricingPlan[] = [
  {
    id: "shared-hot-desk",
    title: "Hot Desk",
    price: (
      <>
        ₹399
        <small> + GST</small>
      </>
    ),
    description:
      "Perfect for freelancers and remote workers.",
    features: [
      "Flexible seating arrangement",
      "High-speed WiFi access",
      "Power backup facility",
      "Fully air-conditioned space",
      "Pantry access",
    ],
    icon: <UsersRound />,
    footer: "Start Today",
  },

  {
    id: "shared-weekly",
    title: "Weekly Pass",
    price: (
      <>
        <span>Starting at </span>
        ₹1,600
        <small> + GST</small>
      </>
    ),
    description:
      "Ideal for short-term projects & consultants.",
    features: [
      "All Hot Desk benefits included",
      "1 hour meeting room access",
      "Priority seating guarantee",
      "Pantry access",
      "Networking events access",
    ],
    icon: <CalendarDays />,
    featured: true,
    footer: "Most Popular",
  },

  {
    id: "shared-monthly",
    title: "Monthly",
    price: (
      <>
        <span>Starting at </span>
        ₹4,800
        <small> + GST</small>
      </>
    ),
    description:
      "Best value for regular professionals.",
    features: [
      "All Weekly Pass benefits",
      "4 hours meeting room",
      "Dedicated desk assignment",
      "Extended facility access",
      "Pantry access",
      "Guest access",
      "Basic printing services",
    ],
    icon: <WalletCards />,
    footer: "Best Value",
  },
];


const privatePlans: PricingPlan[] = [
  {
    id: "private-hot-desk",
    title: "Hot Desk",
    price: (
      <>
        ₹699
        <small> + GST</small>
      </>
    ),
    description:
      "Private desk in a quiet, focused setting.",
    features: [
      "Reserved private desk for the day",
      "High-speed WiFi access",
      "Power backup facility",
      "Fully air-conditioned space",
      "Pantry access",
    ],
    icon: <UsersRound />,
    footer: "Start Today",
  },

  {
    id: "private-weekly",
    title: "Weekly Pass",
    price: (
      <>
        ₹2,400
        <small> + GST</small>
      </>
    ),
    description:
      "Ideal for short-term private workspace needs.",
    features: [
      "All Private Hot Desk benefits",
      "1 hour meeting room access",
      "Lockable personal storage",
      "Priority private seating",
      "Pantry access",
      "Networking events access",
    ],
    icon: <CalendarDays />,
    featured: true,
    footer: "Most Popular",
  },

  {
    id: "private-monthly",
    title: "Monthly",
    price: (
      <div className="pricingShowcase__dualPrice">
        <strong>
          Single:
          <span> Starting at ₹8,000</span>
          <small> + GST</small>
        </strong>

        <strong>
          Team:
          <span> Starting at ₹5,200</span>
          <small> / seat + GST</small>
        </strong>
      </div>
    ),
    description:
      "Dedicated private workspace for individuals and teams.",
    features: [
      "Private dedicated desk / team cabin",
      "Meeting room access",
      "Lockable storage",
      "Extended facility access",
      "Pantry access",
      "Guest access",
      "Basic printing services",
    ],
    icon: <UsersRound />,
    footer: "Get Started",
  },
];


const PricingShowcase = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);


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
              "pricingShowcase--visible"
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


  const renderPlan = (
    plan: PricingPlan,
    index: number
  ) => (
    <article
      key={plan.id}
      className={`
        pricingShowcase__card
        ${
          plan.featured
            ? "pricingShowcase__card--featured"
            : ""
        }
      `}
      style={
        {
          "--delay": `${index * 0.08}s`,
        } as CSSProperties
      }
    >

      {plan.featured && (
        <span className="pricingShowcase__popularBadge">
          <Star />
          MOST POPULAR
        </span>
      )}


      <div className="pricingShowcase__cardHead">

        <span className="pricingShowcase__planIcon">
          {plan.icon}
        </span>


        <div>
          <h3>
            {plan.title}
          </h3>

          <div className="pricingShowcase__price">
            {plan.price}
          </div>

          <p>
            {plan.description}
          </p>
        </div>

      </div>


      <span className="pricingShowcase__divider" />


      <ul>
        {plan.features.map(
          (feature) => (
            <li key={feature}>
              <span>
                <Check />
              </span>

              {feature}
            </li>
          )
        )}
      </ul>


      <div className="pricingShowcase__cardFooter">
        {plan.footer ===
        "Most Popular" ? (
          <Star />
        ) : plan.footer ===
          "Best Value" ? (
          <Heart />
        ) : plan.footer ===
          "Get Started" ? (
          <Rocket />
        ) : (
          <CalendarDays />
        )}

        <strong>
          {plan.footer}
        </strong>
      </div>

    </article>
  );


  return (
    <section
      ref={sectionRef}
      className="pricingShowcase"
    >

      {/* =========================
          HEADER
      ========================== */}

      <header className="pricingShowcase__header">

        <div className="pricingShowcase__pill pricingShowcase__jump">
          <span>
            <WalletCards />
          </span>

          PRICING PLANS
        </div>


        <h1 className="pricingShowcase__jump">
          Simple,
          <span>
            Transparent Pricing
          </span>
        </h1>


        <p className="pricingShowcase__jump">
          Choose the plan that fits your
          work style and budget.
        </p>

      </header>


      {/* =========================
          TOP BEE
      ========================== */}

      <div className="pricingShowcase__bee pricingShowcase__bee--top">
        <span className="pricingShowcase__beeWing pricingShowcase__beeWing--left" />
        <span className="pricingShowcase__beeWing pricingShowcase__beeWing--right" />

        <span className="pricingShowcase__beeBody">
          <i />
          <i />
        </span>

        <span className="pricingShowcase__beeHead">
          <b />
          <b />
        </span>
      </div>


      <svg
        className="pricingShowcase__beePath pricingShowcase__beePath--top"
        viewBox="0 0 260 180"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0 165
            C60 153 90 107 76 78
            C65 53 42 65 45 90
            C49 129 112 83 155 52
            C188 28 220 21 255 19
          "
        />
      </svg>


      {/* =========================
          SHARED SPACE
      ========================== */}

      <div className="pricingShowcase__category">

        <div className="pricingShowcase__categoryPill">
          <UsersRound />
          <strong>
            Shared Space
          </strong>
        </div>

        <p>
          Open, collaborative workspace
          for everyday productivity
        </p>

      </div>


      <div className="pricingShowcase__plans">
        {sharedPlans.map(
          (plan, index) =>
            renderPlan(
              plan,
              index
            )
        )}
      </div>


      {/* LEFT SIDE FEATURES */}

      <div className="pricingShowcase__sideFeatures pricingShowcase__sideFeatures--left">

        <div>
          <Wifi />
          <p>
            <strong>
              High-Speed
            </strong>
            Internet
          </p>
        </div>


        <div>
          <ShieldCheck />
          <p>
            <strong>
              Secure
            </strong>
            Environment
          </p>
        </div>

      </div>


      {/* =========================
          PRIVATE SPACE
      ========================== */}

      <div className="pricingShowcase__category pricingShowcase__category--private">

        <div className="pricingShowcase__categoryPill">
          <LockKeyhole />
          <strong>
            Private Space
          </strong>
        </div>

        <p>
          Quiet, dedicated workspace for
          individuals and teams
        </p>

      </div>


      <div className="pricingShowcase__plans">
        {privatePlans.map(
          (plan, index) =>
            renderPlan(
              plan,
              index + 3
            )
        )}
      </div>


      {/* RIGHT SIDE FEATURES */}

      <div className="pricingShowcase__sideFeatures pricingShowcase__sideFeatures--right">

        <div>
          <UsersRound />
          <p>
            <strong>
              Vibrant
            </strong>
            Community
          </p>
        </div>


        <div>
          <span className="pricingShowcase__twentyFour">
            24/7
          </span>

          <p>
            <strong>
              24/7
            </strong>
            Access
          </p>
        </div>

      </div>


      {/* =========================
          CUSTOM SOLUTION
      ========================== */}

      <div className="pricingShowcase__custom">

        <div className="pricingShowcase__customDecor">

          <span className="pricingShowcase__customHex pricingShowcase__customHex--1">
            <HeadsetIcon />
          </span>

          <span className="pricingShowcase__customHex pricingShowcase__customHex--2">
            <Building2Icon />
          </span>

          <span className="pricingShowcase__customHex pricingShowcase__customHex--3">
            <UsersRound />
          </span>

        </div>


        <div className="pricingShowcase__customCopy">
          <h2>
            Need a Custom Solution?
          </h2>

          <p>
            Looking for private cabins,
            virtual office services, or
            custom office setup? We offer
            flexible solutions tailored to
            your specific needs.
          </p>
        </div>


        <div className="pricingShowcase__customActions">

          <a
            className="pricingShowcase__mail"
            href="mailto:"
          >
            <Mail />

            <span>
              Email Us
            </span>
          </a>


          <a
            className="pricingShowcase__whatsapp"
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle />

            <span>
              WhatsApp Us
            </span>
          </a>

        </div>

      </div>


      {/* =========================
          BOTTOM BEE
      ========================== */}

      <div className="pricingShowcase__bee pricingShowcase__bee--bottom">
        <span className="pricingShowcase__beeWing pricingShowcase__beeWing--left" />
        <span className="pricingShowcase__beeWing pricingShowcase__beeWing--right" />

        <span className="pricingShowcase__beeBody">
          <i />
          <i />
        </span>

        <span className="pricingShowcase__beeHead">
          <b />
          <b />
        </span>
      </div>


      <svg
        className="pricingShowcase__beePath pricingShowcase__beePath--bottom"
        viewBox="0 0 280 180"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0 40
            C68 43 100 76 97 107
            C93 135 126 150 151 123
            C179 94 195 69 225 89
            C250 105 241 142 275 145
          "
        />
      </svg>


      {/* =========================
          HONEYCOMB
      ========================== */}

      <div className="pricingShowcase__honeycomb">
        <span />
        <span />
        <span />
        <span />
      </div>

    </section>
  );
};


/* =========================================================
   SMALL LOCAL ICONS
========================================================= */

const HeadsetIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M4 13v-2a8 8 0 0 1 16 0v2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <rect
      x="3"
      y="12"
      width="4"
      height="7"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <rect
      x="17"
      y="12"
      width="4"
      height="7"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);


const Building2Icon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M6 21V5l6-2v18M18 21V8l-6-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 8h.01M9 12h.01M9 16h.01M15 11h.01M15 15h.01"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
    />
  </svg>
);


export default PricingShowcase;