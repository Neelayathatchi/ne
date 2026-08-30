import {
  CalendarCheck,
  Check,
  Clock3,
  Copy,
  ExternalLink,
  Headphones,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Phone,
  Send,
  User,
  Zap,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  FormEvent,
} from "react";

import "./ContactExperience.css";
import "./ContactExperienceWide.css";





const PHONE_DISPLAY =
  "+91 86810 08888";

const PHONE_RAW =
  "918681008888";

const EMAIL =
  "hello@nerdshive.in";

const ADDRESS =
  "Vetri E-Square, Muthamilarignar Kalaignar Mu Karunanidhi Arangam, New Bus Stand, Vallam Quarry Road, Thanjavur - 613 005";


const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(ADDRESS);


const MAP_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(ADDRESS) +
  "&output=embed";


const ContactExperience = () => {
  const sectionRef =
    useRef<HTMLElement | null>(
      null
    );

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [copied, setCopied] =
    useState(false);

  const [sent, setSent] =
    useState(false);


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
              "contactExperience--visible"
            );

            observer.disconnect();
          }
        },
        {
          threshold: 0.05,
        }
      );


    observer.observe(section);


    return () => {
      observer.disconnect();
    };
  }, []);


  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        EMAIL
      );

      setCopied(true);

      window.setTimeout(
        () => {
          setCopied(false);
        },
        1600
      );
    } catch {
      window.location.href =
        `mailto:${EMAIL}`;
    }
  };


  const sendWhatsApp = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();


    if (
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return;
    }


    const whatsappMessage = [
      "Hello NerdsHive 👋",
      "",
      "I would like to know more about your workspace.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      "",
      `Message: ${message}`,
    ].join("\n");


    const whatsappUrl =
      `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(
        whatsappMessage
      )}`;


    setSent(true);


    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );


    window.setTimeout(
      () => {
        setSent(false);
      },
      2000
    );
  };


  return (
    <section
      ref={sectionRef}
      className="contactExperience"
    >

      {/* HERO */}

      <header className="contactExperience__hero">

        <div className="contactExperience__pill contactExperience__jump">
          <MessageSquareText />

          <span>
            GET IN TOUCH
          </span>
        </div>


        <h1 className="contactExperience__jump">
          Let&apos;s Build

          <span>
            Something Together.
          </span>
        </h1>


        <p className="contactExperience__jump">
          Ready to join Thanjavur&apos;s most vibrant
          co-working community?

          <strong>
            Let&apos;s talk!
          </strong>
        </p>

      </header>


      {/* BEE */}

      <div className="contactExperience__bee contactExperience__bee--top">

        <span className="contactExperience__beeWing contactExperience__beeWing--left" />

        <span className="contactExperience__beeWing contactExperience__beeWing--right" />

        <span className="contactExperience__beeBody">
          <i />
          <i />
        </span>

        <span className="contactExperience__beeHead">
          <b />
          <b />
        </span>

      </div>


      <svg
        className="contactExperience__flightPath"
        viewBox="0 0 320 170"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="
            M0 120
            C75 150 120 116 108 75
            C97 42 61 50 69 82
            C82 128 152 89 190 48
            C225 12 268 45 316 20
          "
        />
      </svg>


      {/* MAIN */}

      <div className="contactExperience__main">

        {/* LEFT */}

        <div className="contactExperience__left">

          <div className="contactExperience__sectionTitle">
            <span />

            <h2>
              Contact Information
            </h2>

            <span />
          </div>


          {/* ADDRESS */}

          <article className="contactExperience__contactCard">

            <div className="contactExperience__contactIcon">
              <MapPin />
            </div>


            <div className="contactExperience__contactText">
              <strong>
                Address
              </strong>

              <p>
                {ADDRESS}
              </p>
            </div>


            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="contactExperience__roundAction"
              aria-label="Open location in Google Maps"
            >
              <ExternalLink />
            </a>

          </article>


          {/* PHONE */}

          <article className="contactExperience__contactCard">

            <div className="contactExperience__contactIcon">
              <Phone />
            </div>


            <div className="contactExperience__contactText">
              <strong>
                Phone
              </strong>

              <p>
                {PHONE_DISPLAY}
              </p>
            </div>


            <a
              href={`tel:+${PHONE_RAW}`}
              className="contactExperience__miniAction"
            >
              <Phone />

              <span>
                Call Now
              </span>
            </a>

          </article>


          {/* EMAIL */}

          <article className="contactExperience__contactCard">

            <div className="contactExperience__contactIcon">
              <Mail />
            </div>


            <div className="contactExperience__contactText">

              <strong>
                Email
              </strong>


              <a
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
              </a>

            </div>


            <button
              type="button"
              onClick={copyEmail}
              className="contactExperience__miniAction"
            >

              {copied ? (
                <Check />
              ) : (
                <Copy />
              )}


              <span>
                {copied
                  ? "Copied"
                  : "Copy"}
              </span>

            </button>

          </article>


          {/* HOURS */}

          <article className="contactExperience__contactCard">

            <div className="contactExperience__contactIcon">
              <Clock3 />
            </div>


            <div className="contactExperience__contactText">
              <strong>
                Hours
              </strong>

              <p>
                9:00 AM – 7:30 PM
                <br />
                Monday – Saturday
              </p>
            </div>


            <div className="contactExperience__miniAction contactExperience__miniAction--status">
              <Clock3 />

              <span>
                Open Hours
              </span>
            </div>

          </article>


          {/* MAP */}

          <div className="contactExperience__map">

            <iframe
              title="NerdsHive Location"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />


            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="contactExperience__mapAction"
            >
              <MapPin />

              <span>
                Open in Google Maps
              </span>

              <ExternalLink />
            </a>


            <span className="contactExperience__mapPulse">
              <MapPin />
            </span>

          </div>

        </div>


        {/* FORM */}

        <div className="contactExperience__formCard">

          <div className="contactExperience__formHeader">

            <h2>
              Send us a Message
            </h2>


            <span>
              We&apos;d love to hear from you!
            </span>

          </div>


          <form
            onSubmit={sendWhatsApp}
          >

            <div className="contactExperience__formRow">

              <label>

                <span>
                  Name *
                </span>


                <div className="contactExperience__inputWrap">

                  <User />


                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(event) =>
                      setName(
                        event.target.value
                      )
                    }
                    placeholder="Your full name"
                  />

                </div>

              </label>


              <label>

                <span>
                  Phone *
                </span>


                <div className="contactExperience__inputWrap">

                  <Phone />


                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(event) =>
                      setPhone(
                        event.target.value
                      )
                    }
                    placeholder="Your phone number"
                  />

                </div>

              </label>

            </div>


            <label>

              <span>
                Email *
              </span>


              <div className="contactExperience__inputWrap">

                <Mail />


                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) =>
                    setEmail(
                      event.target.value
                    )
                  }
                  placeholder="your.email@example.com"
                />

              </div>

            </label>


            <label>

              <span>
                Message *
              </span>


              <div className="contactExperience__inputWrap contactExperience__inputWrap--textarea">

                <MessageSquareText />


                <textarea
                  required
                  maxLength={500}
                  value={message}
                  onChange={(event) =>
                    setMessage(
                      event.target.value
                    )
                  }
                  placeholder="Tell us about your workspace needs..."
                />


                <small>
                  {message.length}/500
                </small>

              </div>

            </label>


            <button
              type="submit"
              className="contactExperience__whatsappButton"
            >

              <MessageCircle />


              <span>
                {sent
                  ? "Opening WhatsApp..."
                  : "Send Message via WhatsApp"}
              </span>


              <Send />

            </button>


            <p className="contactExperience__privacy">

              <LockKeyhole />

              Your information is safe with us.
              We respect your privacy.

            </p>

          </form>

        </div>

      </div>


      {/* EXPERIENCE STRIP */}

      <div className="contactExperience__experienceStrip">

        <div className="contactExperience__experienceLead">

          <span>
            <Send />
          </span>


          <div>
            <strong>
              You&apos;re One Message Away
            </strong>

            <h3>
              From Your New Workspace!
            </h3>
          </div>

        </div>


        <i />


        <div className="contactExperience__experienceItem">

          <span>
            <Zap />
          </span>


          <p>
            <strong>
              Fast Response
            </strong>

            <small>
              We reply within
              <br />
              2 business hours
            </small>
          </p>

        </div>


        <div className="contactExperience__experienceItem">

          <span>
            <Headphones />
          </span>


          <p>
            <strong>
              Personalized Support
            </strong>

            <small>
              Get help from our
              <br />
              workspace experts
            </small>
          </p>

        </div>


        <div className="contactExperience__experienceItem">

          <span>
            <CalendarCheck />
          </span>


          <p>
            <strong>
              Visit & Experience
            </strong>

            <small>
              Schedule a tour and
              <br />
              feel the Hive vibe
            </small>
          </p>

        </div>

      </div>


      {/* FOOTER */}

      <footer className="contactExperience__footer">

        <div className="contactExperience__footerMain">

          {/* BRAND */}

          <div className="contactExperience__footerBrand">

            <img
              src="/images/logo/nerdshive-logo.png"
              alt="NerdsHive"
              draggable="false"
            />


            <p>
              Thanjavur&apos;s first co-working space,
              building a collaborative community for
              creators, startups, and professionals.
            </p>


            {/* CUSTOM SOCIAL ICONS —
                NO LUCIDE BRAND IMPORTS */}

            <div className="contactExperience__socials">

              <a
                href="#"
                aria-label="Facebook"
              >
                <strong>
                  f
                </strong>
              </a>


              <a
                href="#"
                aria-label="Instagram"
              >
                <strong>
                  ◎
                </strong>
              </a>


              <a
                href="#"
                aria-label="LinkedIn"
              >
                <strong>
                  in
                </strong>
              </a>


              <a
                href="#"
                aria-label="YouTube"
              >
                <strong>
                  ▶
                </strong>
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}

          <div className="contactExperience__footerLinks">

            <h3>
              Quick Links
            </h3>


            <a href="/">
              Home
            </a>


            <a href="/about">
              About
            </a>


            <a href="/services">
              Services
            </a>


            <a href="/pricing">
              Pricing
            </a>

          </div>


          {/* SERVICES */}

          <div className="contactExperience__footerLinks">

            <h3>
              Our Services
            </h3>


            <a href="/spaces">
              Co-working Space
            </a>


            <a href="/spaces">
              Private Cabins
            </a>


            <a href="/spaces">
              Meeting Rooms
            </a>


            <a href="/services">
              Virtual Office
            </a>

          </div>


          {/* CONTACT INFO */}

          <div className="contactExperience__footerContact">

            <h3>
              Contact Info
            </h3>


            <p>
              <MapPin />

              <span>
                Vetri E-Square,
                Muthamilarignar Kalaignar
                Mu Karunanidhi Arangam,
                New Bus Stand,
                Vallam Quarry Road,
                Thanjavur - 613 005
              </span>
            </p>


            <a
              href={`tel:+${PHONE_RAW}`}
            >
              <Phone />

              {PHONE_DISPLAY}
            </a>


            <a
              href={`mailto:${EMAIL}`}
            >
              <Mail />

              {EMAIL}
            </a>

          </div>


          {/* WHATSAPP */}

          <div className="contactExperience__qr">

            <a
              href={`https://wa.me/${PHONE_RAW}`}
              target="_blank"
              rel="noreferrer"
              className="contactExperience__qrFallback"
            >

              <MessageCircle />

              <strong>
                WhatsApp
              </strong>

              <span>
                Chat with NerdsHive
              </span>

            </a>

          </div>

        </div>


        <div className="contactExperience__footerBottom">

          <span>
            © 2026 NerdsHive.
            All Rights Reserved.
          </span>


          <span>
            Designed with
            <strong>
              ♡
            </strong>
            in Thanjavur
          </span>

        </div>

      </footer>

    </section>
  );
};


export default ContactExperience;