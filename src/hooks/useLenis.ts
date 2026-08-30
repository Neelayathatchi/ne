import {
  useEffect,
} from "react";

import Lenis from "lenis";


export const useLenis = () => {
  useEffect(() => {
    const lenis =
      new Lenis({
        duration: 1.05,

        smoothWheel: true,

        wheelMultiplier: 0.9,

        touchMultiplier: 1.05,
      });


    let frame =
      0;


    const raf = (
      time: number
    ) => {
      lenis.raf(time);

      frame =
        requestAnimationFrame(
          raf
        );
    };


    frame =
      requestAnimationFrame(
        raf
      );


    return () => {
      cancelAnimationFrame(
        frame
      );

      lenis.destroy();
    };
  }, []);
};