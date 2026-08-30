import {
  ArrowRight,
  Building2,
  CalendarDays,
  Headphones,
  LockKeyhole,
  Sparkles,
  Star,
  UserRound,
  Wifi,
  Zap,
} from "lucide-react";

import {
  useEffect,
  useRef,
} from "react";

import type {
  CSSProperties,
  ReactNode,
} from "react";

import "./ServiceHighlights.css";


type ServiceCard = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  className: string;
};


const serviceCards: ServiceCard[] = [
  {
    id: "workspace",
    number: "01",
    title: "Workspace Solutions",
    description:
      "Flexible desks, dedicated seats and private cabins designed for your perfect workday.",
    icon: <Building2 />,
    className:
      "serviceHighlights__card--workspace",
  },

  {
    id: "featured",
    number: "02",
    title: "Built Around Your Growth",
    description:
      "More than a workspace, we build an ecosystem that helps you thrive.",
    icon: <Sparkles />,
    className:
      "serviceHighlights__card--featured",
  },

  {
    id: "training",
    number: "03",
    title: "Training & Events",
    description:
      "Professional rooms and engaging sessions to learn, share and grow together.",
    icon: <CalendarDays />,
    className:
      "serviceHighlights__card--training",
  },

  {
    id: "creator",
    number: "04",
    title: "Creator Support",
    description:
      "Special plans and dedicated support for content creators and influencers.",
    icon: <UserRound />,
    className:
      "serviceHighlights__card--creator",
  },

  {
    id: "operations",
    number: "05",
    title: "Managed Operations",
    description:
      "24/7 security, maintenance and support so you can focus on what matters.",
    icon: <Headphones />,
    className:
      "serviceHighlights__card--operations",
  },

  {
    id: "custom-office",
    number: "06",
    title: "Custom Office Setup",
    description:
      "Tailored office solutions that match your brand, culture and workflow.",
    icon: <Building2 />,
    className:
      "serviceHighlights__card--custom",
  },
];


const ServiceHighlights = () => {
  const sectionRef =
    useRef<HTMLElement | null>(
      null
    );


  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }


    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            section.classList.add(
              "serviceHighlights--visible"
            );

            observer.disconnect();
          }
        },
        {
          threshold: 0.08,
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
      className="serviceHighlights"
    >

      {/* =========================================
          HEADER
      ========================================== */}

      <header className="serviceHighlights__header">

        <div className="serviceHighlights__eyebrow serviceHighlights__jump">

          <span>
            <img
              src="/images/logo/nerdshive-logo.png"
              alt=""
              draggable="false"
            />
          </span>

          <strong>
            OUR SERVICES
          </strong>

        </div>


        <h2 className="serviceHighlights__jump">
          Everything You Need,

          <span>
            All in One Hive.
          </span>
        </h2>


        <p className="serviceHighlights__jump">
          Smart spaces, powerful services and a vibrant community
          <br />
          to help you focus, create and grow every single day.
        </p>


        <span className="serviceHighlights__headerLine" />

      </header>


      {/* =========================================
          TOP BEE
      ========================================== */}

      <div className="serviceHighlights__topBee">

        <span className="serviceHighlights__beeWing serviceHighlights__beeWing--left" />

        <span className="serviceHighlights__beeWing serviceHighlights__beeWing--right" />

        <span className="serviceHighlights__beeBody">
          <i />
          <i />
        </span>

        <span className="serviceHighlights__beeHead">
          <b />
          <b />
        </span>

      </div>


      <svg
        className="serviceHighlights__topPath"
        viewBox="0 0 300 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M0 150
            C50 145 70 105 90 92
            C118 73 105 45 82 45
            C55 45 55 84 82 93
            C123 108 170 62 230 40
            C253 31 274 24 300 20
          "
        />
      </svg>


      {/* =========================================
          CARDS
      ========================================== */}

      <div className="serviceHighlights__grid">

        {serviceCards.map(
          (
            card,
            index
          ) => {
            const featured =
              card.id ===
              "featured";


            return (
              <article
                key={card.id}
                className={`
                  serviceHighlights__card
                  ${card.className}
                `}
                style={
                  {
                    "--card-delay":
                      `${index * 0.08}s`,
                  } as CSSProperties
                }
              >

                <span className="serviceHighlights__number">
                  {card.number}
                </span>


                {featured && (
                  <div className="serviceHighlights__featuredBadge">
                    <Star />
                    FEATURED
                  </div>
                )}


                <div className="serviceHighlights__icon">

                  {featured ? (
                    <img
                      src="/images/logo/nerdshive-logo.png"
                      alt=""
                      draggable="false"
                    />
                  ) : (
                    card.icon
                  )}

                </div>


                <h3>
                  {card.title}
                </h3>


                <p>
                  {card.description}
                </p>


                {!featured && (
                  <span className="serviceHighlights__arrow">
                    <ArrowRight />
                  </span>
                )}


                {featured && (
                  <>
                    <span className="serviceHighlights__featuredSpark serviceHighlights__featuredSpark--1">
                      ✦
                    </span>

                    <span className="serviceHighlights__featuredSpark serviceHighlights__featuredSpark--2">
                      ✦
                    </span>

                    <span className="serviceHighlights__featuredSpark serviceHighlights__featuredSpark--3">
                      ✦
                    </span>
                  </>
                )}

              </article>
            );
          }
        )}

      </div>


      {/* =========================================
          RIGHT PATH
      ========================================== */}

      <svg
        className="serviceHighlights__rightPath"
        viewBox="0 0 250 380"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M55 0
            C110 35 90 90 48 88
            C20 87 20 55 45 55
            C105 54 168 92 173 160
            C176 210 126 224 127 277
            C128 315 171 336 225 350
          "
        />
      </svg>


      <span className="serviceHighlights__rightHeart">
        ♥
      </span>


      {/* =========================================
          RIGHT BEE
      ========================================== */}

      <div className="serviceHighlights__rightBee">

        <span className="serviceHighlights__rightBeeWing serviceHighlights__rightBeeWing--left" />

        <span className="serviceHighlights__rightBeeWing serviceHighlights__rightBeeWing--right" />

        <span className="serviceHighlights__rightBeeBody">
          <i />
          <i />
        </span>

        <span className="serviceHighlights__rightBeeHead">
          <b />
          <b />
        </span>

      </div>


      {/* =========================================
          CUSTOM CTA LOOK — NOT BUTTON
      ========================================== */}

      <div className="serviceHighlights__customStrip">

        <span className="serviceHighlights__customIcon">
          ☎
        </span>


        <div>
          <small>
            Need something custom?
          </small>

          <strong>
            Let’s build it together.
          </strong>
        </div>


        <i />


        <div className="serviceHighlights__teamText">

          Talk to Our Team

          <span>
            <ArrowRight />
          </span>

        </div>

      </div>


      {/* =========================================
          METRICS
      ========================================== */}

      <div className="serviceHighlights__metrics">

        <div>
          <span>
            ☺
          </span>

          <p>
            <strong>
              500+
            </strong>

            <small>
              Happy Members
            </small>
          </p>
        </div>


        <i />


        <div>
          <span>
            <Building2 />
          </span>

          <p>
            <strong>
              12+
            </strong>

            <small>
              Space Options
            </small>
          </p>
        </div>


        <i />


        <div>
          <span>
            <Star />
          </span>

          <p>
            <strong>
              24/7
            </strong>

            <small>
              Work Access
            </small>
          </p>
        </div>


        <i />


        <div>
          <span>
            <Wifi />
          </span>

          <p>
            <strong>
              High-Speed
            </strong>

            <small>
              Connectivity
            </small>
          </p>
        </div>


        <i />


        <div>
          <span>
            <Sparkles />
          </span>

          <p>
            <strong>
              Vibrant
            </strong>

            <small>
              Community
            </small>
          </p>
        </div>


        <i />


        <div>
          <span>
            <LockKeyhole />
          </span>

          <p>
            <strong>
              Secure
            </strong>

            <small>
              Environment
            </small>
          </p>
        </div>

      </div>

    </section>
  );
};


export default ServiceHighlights;