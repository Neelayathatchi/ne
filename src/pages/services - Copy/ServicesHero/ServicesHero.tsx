import {
  useEffect,
  useRef,
  type MouseEvent,
} from "react";

import gsap from "gsap";

import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Coffee,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wifi,
  Zap,
} from "lucide-react";

import "./ServicesHero.css";


type ServicePosition =
  | "top"
  | "leftTop"
  | "rightTop"
  | "leftBottom"
  | "rightBottom"
  | "bottom";


type ServiceItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  position: ServicePosition;
  icon: typeof BriefcaseBusiness;
};


const services: ServiceItem[] = [
  {
    id: "coworking",
    number: "01",
    title: "Co-working Space",
    description:
      "Open, flexible and inspiring desks to get your best work done.",
    position: "top",
    icon: BriefcaseBusiness,
  },

  {
    id: "private",
    number: "02",
    title: "Private Cabins",
    description:
      "Fully furnished private offices for teams to focus and grow.",
    position: "leftTop",
    icon: UsersRound,
  },

  {
    id: "training",
    number: "03",
    title: "Training Rooms",
    description:
      "Professional spaces for meetings, workshops and trainings.",
    position: "rightTop",
    icon: GraduationCap,
  },

  {
    id: "security",
    number: "04",
    title: "Managed Security",
    description:
      "Enterprise-grade security with 24/7 monitoring and support.",
    position: "leftBottom",
    icon: ShieldCheck,
  },

  {
    id: "creator",
    number: "05",
    title: "Creator Support",
    description:
      "Special plans and support for content creators and influencers.",
    position: "rightBottom",
    icon: Sparkles,
  },

  {
    id: "custom",
    number: "06",
    title: "Custom Office Setup",
    description:
      "Tailored office solutions that match your brand and workflow.",
    position: "bottom",
    icon: BriefcaseBusiness,
  },
];


const ServicesHero = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const hiveRef =
    useRef<HTMLDivElement | null>(null);


  /* =========================================================
     INTRO
  ========================================================= */

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(".servicesHero__eyebrow", {
        opacity: 0,
        x: -35,
        duration: 0.5,
      })

        .from(
          ".servicesHero__titleLine",
          {
            opacity: 0,
            y: 48,
            stagger: 0.09,
            duration: 0.68,
          },
          "-=0.2"
        )

        .from(
          ".servicesHero__description",
          {
            opacity: 0,
            y: 22,
            duration: 0.5,
          },
          "-=0.28"
        )

        .from(
          ".servicesHero__stat",
          {
            opacity: 0,
            y: 18,
            stagger: 0.07,
            duration: 0.4,
          },
          "-=0.2"
        )

        .from(
          ".servicesHero__actions",
          {
            opacity: 0,
            y: 20,
            duration: 0.45,
          },
          "-=0.16"
        )

        .from(
          ".servicesHero__centerHive",
          {
            opacity: 0,
            scale: 0.65,
            rotate: -5,
            duration: 0.75,
          },
          "-=0.45"
        )

        .from(
          ".servicesHero__serviceCard",
          {
            opacity: 0,
            scale: 0.78,
            y: 28,
            stagger: 0.065,
            duration: 0.52,
          },
          "-=0.4"
        )

        .from(
          ".servicesHero__benefits",
          {
            opacity: 0,
            y: 28,
            duration: 0.5,
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  /* =========================================================
     SUBTLE DESKTOP PARALLAX
  ========================================================= */

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>
  ) => {
    if (
      !sectionRef.current ||
      !hiveRef.current ||
      window.innerWidth < 1100
    ) {
      return;
    }

    const rect =
      sectionRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
        rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
        rect.height -
      0.5;

    gsap.to(
      hiveRef.current,
      {
        x: x * 6,
        y: y * 5,
        rotateY: x * 0.55,
        rotateX: -y * 0.4,
        duration: 0.9,
        ease: "power3.out",
      }
    );
  };


  const handleMouseLeave = () => {
    if (!hiveRef.current) return;

    gsap.to(
      hiveRef.current,
      {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.9,
        ease: "power3.out",
      }
    );
  };


  return (
    <section
      ref={sectionRef}
      className="servicesHero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* BACKGROUND DOTS */}

      <div
        className="servicesHero__decor"
        aria-hidden="true"
      >
        <i className="servicesHero__decorDot servicesHero__decorDot--1" />
        <i className="servicesHero__decorDot servicesHero__decorDot--2" />
        <i className="servicesHero__decorDot servicesHero__decorDot--3" />
        <i className="servicesHero__decorDot servicesHero__decorDot--4" />
        <i className="servicesHero__decorDot servicesHero__decorDot--5" />
      </div>


      <div className="servicesHero__inner">

        {/* ===================================================
            LEFT
        ==================================================== */}

        <div className="servicesHero__content">

          <div className="servicesHero__eyebrow">
            <span className="servicesHero__eyebrowBee">
              🐝
            </span>

            <strong>
              OUR SERVICES
            </strong>
          </div>


          <h1 className="servicesHero__title">

            <span className="servicesHero__titleLine">
              Everything
            </span>

            <span className="servicesHero__titleLine">
              You Need,
            </span>

            <span className="servicesHero__titleLine servicesHero__titleLine--yellow">
              All in One Hive.
            </span>

          </h1>


          <p className="servicesHero__description">
            Smart spaces, powerful services and a vibrant
            community to help you focus, create and grow
            every single day.
          </p>


          {/* STATS */}

          <div className="servicesHero__stats">

            <div className="servicesHero__stat">

              <span className="servicesHero__statIcon">
                <UsersRound size={20} />
              </span>

              <span className="servicesHero__statCopy">
                <strong>500+</strong>
                <small>Happy Members</small>
              </span>

            </div>


            <span className="servicesHero__divider" />


            <div className="servicesHero__stat">

              <span className="servicesHero__statIcon">
                <BriefcaseBusiness size={19} />
              </span>

              <span className="servicesHero__statCopy">
                <strong>12+</strong>
                <small>Space Options</small>
              </span>

            </div>


            <span className="servicesHero__divider" />


            <div className="servicesHero__stat">

              <span className="servicesHero__statIcon">
                <Zap size={19} />
              </span>

              <span className="servicesHero__statCopy">
                <strong>24/7</strong>
                <small>Work Access</small>
              </span>

            </div>

          </div>


          {/* BUTTONS */}

          <div className="servicesHero__actions">

            <a
              href="#services-showcase"
              className="servicesHero__primary"
            >
              <span>
                Explore All Services
              </span>

              <span className="servicesHero__primaryIcon">
                <ArrowRight size={17} />
              </span>
            </a>


            <button
              type="button"
              className="servicesHero__video"
            >
              <span className="servicesHero__play">
                ▶
              </span>

              <span>
                Watch Video
              </span>
            </button>

          </div>


          {/* BEE TRAIL */}

          <div
            className="servicesHero__beeTrail"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 610 110"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M0 72
                  C75 118 112 20 186 69
                  C264 120 308 22 378 65
                  C439 105 490 31 610 60
                "
              />
            </svg>

            <span className="servicesHero__largeBee">
              🐝
            </span>
          </div>

        </div>


        {/* ===================================================
            RIGHT HIVE
        ==================================================== */}

        <div
          ref={hiveRef}
          className="servicesHero__hive"
        >

          {/* CUSTOM YELLOW CONNECTION DESIGN */}

          <svg
            className="servicesHero__connectionMap"
            viewBox="0 0 820 700"
            aria-hidden="true"
          >

            {/* top → left */}
            <path
              d="
                M410 104
                C327 100
                263 126
                205 192
              "
            />

            {/* top → right */}
            <path
              d="
                M410 104
                C493 100
                557 126
                615 192
              "
            />

            {/* left upper → left lower */}
            <path
              d="
                M182 273
                C165 332
                169 398
                204 476
              "
            />

            {/* right upper → right lower */}
            <path
              d="
                M638 273
                C655 332
                651 398
                616 476
              "
            />

            {/* left lower → bottom */}
            <path
              d="
                M211 523
                C275 595
                335 608
                410 601
              "
            />

            {/* right lower → bottom */}
            <path
              d="
                M609 523
                C545 595
                485 608
                410 601
              "
            />

          </svg>


          {/* CONNECTOR NODES */}

          <span className="servicesHero__joinNode servicesHero__joinNode--1" />
          <span className="servicesHero__joinNode servicesHero__joinNode--2" />
          <span className="servicesHero__joinNode servicesHero__joinNode--3" />
          <span className="servicesHero__joinNode servicesHero__joinNode--4" />
          <span className="servicesHero__joinNode servicesHero__joinNode--5" />
          <span className="servicesHero__joinNode servicesHero__joinNode--6" />


          {/* CENTER SOFT CIRCLE */}

          <div className="servicesHero__centerOrbit" />


          {/* CENTER HEXAGON */}

          <div className="servicesHero__centerHive">

            <div className="servicesHero__centerInner">

              <div className="servicesHero__centerBee">
                🐝
              </div>

              <strong>
                Nerds
                <span>Hive</span>
              </strong>

              <small>
                Work. Create. Grow.
              </small>

            </div>

          </div>


          {/* SERVICE HEXAGONS */}

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className={`servicesHero__serviceCard servicesHero__serviceCard--${service.position}`}
              >

                <div className="servicesHero__serviceInner">

                  <span className="servicesHero__serviceNumber">
                    {service.number}
                  </span>


                  <span className="servicesHero__serviceIcon">
                    <Icon
                      size={27}
                      strokeWidth={1.8}
                    />
                  </span>


                  <h3>
                    {service.title}
                  </h3>


                  <p>
                    {service.description}
                  </p>


                  <button
                    type="button"
                    className="servicesHero__cardArrow"
                    aria-label={`Explore ${service.title}`}
                  >
                    <ArrowRight size={15} />
                  </button>

                </div>

              </article>
            );
          })}


          {/* RIGHT FLYING BEE */}

          <span
            className="servicesHero__flyingBee"
            aria-hidden="true"
          >
            🐝
          </span>


          <span
            className="servicesHero__tinyHeart servicesHero__tinyHeart--1"
            aria-hidden="true"
          >
            ♥
          </span>

          <span
            className="servicesHero__tinyHeart servicesHero__tinyHeart--2"
            aria-hidden="true"
          >
            ♥
          </span>

        </div>

      </div>


      {/* =====================================================
          BENEFITS BAR
      ====================================================== */}

      <div className="servicesHero__benefits">

        <div className="servicesHero__benefit">

          <span className="servicesHero__benefitIcon">
            <CalendarDays size={20} />
          </span>

          <span>
            <strong>Flexible Plans</strong>
            <small>Choose what fits you best.</small>
          </span>

        </div>


        <div className="servicesHero__benefit">

          <span className="servicesHero__benefitIcon">
            <MapPin size={20} />
          </span>

          <span>
            <strong>Prime Location</strong>
            <small>Easy access, great connectivity.</small>
          </span>

        </div>


        <div className="servicesHero__benefit">

          <span className="servicesHero__benefitIcon">
            <Coffee size={20} />
          </span>

          <span>
            <strong>Community Vibes</strong>
            <small>Network, collaborate and grow.</small>
          </span>

        </div>


        <div className="servicesHero__benefit">

          <span className="servicesHero__benefitIcon">
            <Wifi size={20} />
          </span>

          <span>
            <strong>All Essentials</strong>
            <small>Everything you need included.</small>
          </span>

        </div>

      </div>

    </section>
  );
};


export default ServicesHero;