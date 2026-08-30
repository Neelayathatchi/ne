import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ExteriorScene.css";

gsap.registerPlugin(ScrollTrigger);

const ExteriorScene = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const content = contentRef.current;

    if (!section || !video || !content) return;

    const ctx = gsap.context(() => {
      gsap.set(video, {
        scale: 1.12,
      });

      gsap.set(content, {
        opacity: 1,
        y: 0,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2200",
          scrub: 1,
          pin: true,
        },
      });

      timeline
        .to(
          video,
          {
            scale: 1.35,
            yPercent: -4,
            ease: "none",
          },
          0
        )
        .to(
          content,
          {
            opacity: 0,
            y: -80,
            ease: "none",
          },
          0.1
        )
        .to(
          ".exterior-scene__shade",
          {
            opacity: 0.12,
            ease: "none",
          },
          0.25
        )
        .to(
          ".exterior-scene__portal",
          {
            scale: 1.5,
            opacity: 1,
            ease: "none",
          },
          0.45
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="exterior-scene">
      <video
        ref={videoRef}
        className="exterior-scene__video"
        src="/videos/exterior/exterior-source.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="exterior-scene__shade" />

      <div className="exterior-scene__honeycomb exterior-scene__honeycomb--one" />
      <div className="exterior-scene__honeycomb exterior-scene__honeycomb--two" />
      <div className="exterior-scene__honeycomb exterior-scene__honeycomb--three" />

      <div ref={contentRef} className="exterior-scene__content">
        <span className="exterior-scene__eyebrow">
          Welcome to NerdsHive
        </span>

        <h1>
          Enter the
          <br />
          <span>Hive.</span>
        </h1>

        <p>
          Scroll to step inside a workspace built for ideas,
          collaboration and growth.
        </p>

        <div className="exterior-scene__scroll">
          <span />
          Scroll to Explore
        </div>
      </div>

      <div className="exterior-scene__portal">
        <div className="exterior-scene__portal-inner" />
      </div>
    </section>
  );
};

export default ExteriorScene;