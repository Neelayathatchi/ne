import {
  useEffect,
  useRef,
} from "react";

import "./LocalRoots.css";


const LocalRoots = () => {
  const sectionRef =
    useRef<HTMLElement | null>(
      null
    );

  const artworkRef =
    useRef<HTMLDivElement | null>(
      null
    );


  useEffect(() => {
    const section =
      sectionRef.current;

    const artwork =
      artworkRef.current;


    if (!section || !artwork) {
      return;
    }


    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            section.classList.add(
              "localRoots--visible"
            );

            observer.disconnect();
          }
        },
        {
          threshold: 0.12,
        }
      );


    observer.observe(section);


    const handlePointerMove = (
      event: PointerEvent
    ) => {
      const rect =
        section.getBoundingClientRect();


      const x =
        (
          event.clientX -
          rect.left
        ) /
          rect.width -
        0.5;


      const y =
        (
          event.clientY -
          rect.top
        ) /
          rect.height -
        0.5;


      artwork.style.setProperty(
        "--local-x",
        `${x * 4}px`
      );


      artwork.style.setProperty(
        "--local-y",
        `${y * 4}px`
      );
    };


    const reset = () => {
      artwork.style.setProperty(
        "--local-x",
        "0px"
      );

      artwork.style.setProperty(
        "--local-y",
        "0px"
      );
    };


    section.addEventListener(
      "pointermove",
      handlePointerMove
    );


    section.addEventListener(
      "pointerleave",
      reset
    );


    return () => {
      observer.disconnect();


      section.removeEventListener(
        "pointermove",
        handlePointerMove
      );


      section.removeEventListener(
        "pointerleave",
        reset
      );
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      className="localRoots"
    >

      <div
        ref={artworkRef}
        className="localRoots__artwork"
      >

        <img
          src="/images/about/local-roots-horizons.png"
          alt="Local Roots. Bigger Horizons — NerdsHive"
          draggable="false"
        />

      </div>

    </section>
  );
};


export default LocalRoots;