import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
} from "react";

import "./Loader.css";

type LoaderProps = {
  onComplete?: () => void;
};

type BeePoint = {
  x: number;
  y: number;
};

type BeeData = {
  id: number;

  startX: number;
  startY: number;

  targetX: number;
  targetY: number;

  delay: number;
  duration: number;

  scale: number;
};


/* =========================================================
   PIXEL FONT FOR BEE FORMATION
========================================================= */

const LETTERS: Record<string, string[]> = {
  N: [
    "10001",
    "11001",
    "10101",
    "10011",
    "10001",
  ],

  E: [
    "11111",
    "10000",
    "11110",
    "10000",
    "11111",
  ],

  R: [
    "11110",
    "10001",
    "11110",
    "10100",
    "10010",
  ],

  D: [
    "11110",
    "10001",
    "10001",
    "10001",
    "11110",
  ],

  S: [
    "01111",
    "10000",
    "01110",
    "00001",
    "11110",
  ],

  H: [
    "10001",
    "10001",
    "11111",
    "10001",
    "10001",
  ],

  I: [
    "11111",
    "00100",
    "00100",
    "00100",
    "11111",
  ],

  V: [
    "10001",
    "10001",
    "10001",
    "01010",
    "00100",
  ],
};


/* =========================================================
   CREATE "NERDS HIVE" BEE SHAPE

   IMPORTANT:
   NERDS + GAP + HIVE
========================================================= */

const createBeeWordPoints = (): BeePoint[] => {
  const firstWord = "NERDS";
  const secondWord = "HIVE";

  const cellX = 10;
  const cellY = 10;

  const normalLetterGap = 8;

  /* BIG GAP BETWEEN NERDS AND HIVE */
  const wordGap = 42;

  const letterWidth = 5 * cellX;

  const getWordWidth = (
    word: string
  ) =>
    word.length * letterWidth +
    (word.length - 1) * normalLetterGap;

  const firstWidth =
    getWordWidth(firstWord);

  const secondWidth =
    getWordWidth(secondWord);

  const totalWidth =
    firstWidth +
    wordGap +
    secondWidth;

  const startX =
    -totalWidth / 2;

  const points: BeePoint[] = [];

  const addWord = (
    word: string,
    offsetX: number
  ) => {
    [...word].forEach(
      (letter, letterIndex) => {
        const pattern =
          LETTERS[letter];

        pattern.forEach(
          (row, rowIndex) => {
            [...row].forEach(
              (
                cell,
                columnIndex
              ) => {
                if (
                  cell !== "1"
                ) {
                  return;
                }

                points.push({
                  x:
                    offsetX +
                    letterIndex *
                      (
                        letterWidth +
                        normalLetterGap
                      ) +
                    columnIndex *
                      cellX,

                  y:
                    rowIndex *
                      cellY -
                    20,
                });
              }
            );
          }
        );
      }
    );
  };

  addWord(
    firstWord,
    startX
  );

  addWord(
    secondWord,
    startX +
      firstWidth +
      wordGap
  );

  return points;
};


/* =========================================================
   RANDOM START POSITIONS FROM ALL 4 SIDES
========================================================= */

const createBeeData = (
  points: BeePoint[]
): BeeData[] => {
  const width =
    window.innerWidth;

  const height =
    window.innerHeight;

  return points.map(
    (
      point,
      index
    ) => {
      const side =
        index % 4;

      let startX = 0;
      let startY = 0;

      /* LEFT */
      if (side === 0) {
        startX =
          -width * 0.56;

        startY =
          Math.sin(
            index * 1.31
          ) *
          height *
          0.42;
      }

      /* RIGHT */
      if (side === 1) {
        startX =
          width * 0.56;

        startY =
          Math.cos(
            index * 1.52
          ) *
          height *
          0.42;
      }

      /* TOP */
      if (side === 2) {
        startX =
          Math.sin(
            index * 1.46
          ) *
          width *
          0.44;

        startY =
          -height * 0.56;
      }

      /* BOTTOM */
      if (side === 3) {
        startX =
          Math.cos(
            index * 1.18
          ) *
          width *
          0.44;

        startY =
          height * 0.56;
      }

      return {
        id: index,

        startX,
        startY,

        targetX:
          point.x,

        targetY:
          point.y,

        delay:
          (
            index % 22
          ) * 0.024,

        duration:
          1.48 +
          (
            index % 7
          ) * 0.06,

        scale:
          0.66 +
          (
            index % 4
          ) * 0.035,
      };
    }
  );
};


/* =========================================================
   SMALL CUTE FLYING BEE
========================================================= */

const FlyingBee = ({
  bee,
}: {
  bee: BeeData;
}) => {
  const style = {
    "--start-x":
      `${bee.startX}px`,

    "--start-y":
      `${bee.startY}px`,

    "--target-x":
      `${bee.targetX}px`,

    "--target-y":
      `${bee.targetY}px`,

    "--bee-delay":
      `${bee.delay}s`,

    "--bee-duration":
      `${bee.duration}s`,

    "--bee-scale":
      bee.scale,
  } as CSSProperties;

  return (
    <span
      className="nhFlyingBee"
      style={style}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 82 60"
        fill="none"
      >
        {/* WINGS */}

        <ellipse
          className="nhFlyingBee__wing nhFlyingBee__wing--left"
          cx="30"
          cy="18"
          rx="14"
          ry="9"
          transform="rotate(-32 30 18)"
          fill="#FFFFFF"
          stroke="#4A2922"
          strokeWidth="2"
        />

        <ellipse
          className="nhFlyingBee__wing nhFlyingBee__wing--right"
          cx="48"
          cy="18"
          rx="14"
          ry="9"
          transform="rotate(32 48 18)"
          fill="#FFFFFF"
          stroke="#4A2922"
          strokeWidth="2"
        />


        {/* BODY */}

        <ellipse
          cx="44"
          cy="39"
          rx="24"
          ry="15"
          fill="#FFBF00"
          stroke="#4A2922"
          strokeWidth="2"
        />


        {/* STRIPES */}

        <path
          d="M37 25C33 34 33 43 38 51"
          stroke="#4A2922"
          strokeWidth="7"
        />

        <path
          d="M50 25C46 34 46 43 51 51"
          stroke="#4A2922"
          strokeWidth="7"
        />


        {/* HEAD */}

        <circle
          cx="21"
          cy="39"
          r="13"
          fill="#4A2922"
        />

        <ellipse
          cx="21"
          cy="39"
          rx="9"
          ry="8"
          fill="#FFBF00"
        />


        {/* EYES */}

        <ellipse
          cx="18"
          cy="36"
          rx="3"
          ry="4"
          fill="#FFFFFF"
        />

        <circle
          cx="18.4"
          cy="36.4"
          r="1.4"
          fill="#121212"
        />

        <ellipse
          cx="25"
          cy="36"
          rx="3"
          ry="4"
          fill="#FFFFFF"
        />

        <circle
          cx="24.6"
          cy="36.4"
          r="1.4"
          fill="#121212"
        />


        {/* SMILE */}

        <path
          d="M17 42C19 45 23 45 26 42"
          stroke="#4A2922"
          strokeWidth="1.6"
          strokeLinecap="round"
        />


        {/* ANTENNAS */}

        <path
          d="M16 27C11 19 8 17 5 17"
          stroke="#4A2922"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle
          cx="4"
          cy="16"
          r="2"
          fill="#4A2922"
        />

        <path
          d="M25 26C29 19 32 16 36 15"
          stroke="#4A2922"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle
          cx="37"
          cy="14"
          r="2"
          fill="#4A2922"
        />


        {/* STING */}

        <path
          d="M67 36L79 40L67 45Z"
          fill="#4A2922"
        />
      </svg>
    </span>
  );
};


/* =========================================================
   FINAL LETTERS
========================================================= */

const finalLetters = [
  "N",
  "E",
  "R",
  "D",
  "S",
  " ",
  "H",
  "I",
  "V",
  "E",
];


/* =========================================================
   LOADER
========================================================= */

const Loader = ({
  onComplete,
}: LoaderProps) => {
  const [
    progress,
    setProgress,
  ] = useState(0);

  const [
    beeFormationDone,
    setBeeFormationDone,
  ] = useState(false);

  const [
    showLetters,
    setShowLetters,
  ] = useState(false);

  const [
    showFinalLogo,
    setShowFinalLogo,
  ] = useState(false);

  const [
    leaving,
    setLeaving,
  ] = useState(false);

  const points =
    useMemo(
      () =>
        createBeeWordPoints(),
      []
    );

  const bees =
    useMemo(
      () =>
        createBeeData(
          points
        ),
      [points]
    );


  /* =========================================================
     LOADER TIMELINE
  ========================================================= */

  useEffect(() => {
    let value = 0;

    const progressTimer =
      window.setInterval(
        () => {
          value +=
            Math.random() *
              3.2 +
            1.5;

          if (
            value >= 100
          ) {
            value = 100;

            window.clearInterval(
              progressTimer
            );


            /*
             * STEP 1
             * BEES HAVE FORMED NERDS HIVE
             */

            window.setTimeout(
              () => {
                setBeeFormationDone(
                  true
                );
              },
              350
            );


            /*
             * STEP 2
             * HOLD BEE FORMATION
             */

            window.setTimeout(
              () => {
                setShowLetters(
                  true
                );
              },
              1350
            );


            /*
             * STEP 3
             * LETTERS FINISH BOUNCING
             * SHOW APPROVED FINAL BEE LOGO
             */

            window.setTimeout(
              () => {
                setShowFinalLogo(
                  true
                );
              },
              3000
            );


            /*
             * STEP 4
             * HOLD FINAL LOGO
             */

            window.setTimeout(
              () => {
                setLeaving(
                  true
                );
              },
              4450
            );


            /*
             * STEP 5
             * OPEN WEBSITE
             */

            window.setTimeout(
              () => {
                onComplete?.();
              },
              5150
            );
          }

          setProgress(
            Math.min(
              value,
              100
            )
          );
        },
        72
      );

    return () => {
      window.clearInterval(
        progressTimer
      );
    };
  }, [onComplete]);


  return (
    <div
      className={[
        "nerdsFinalLoader",

        beeFormationDone
          ? "nerdsFinalLoader--beesReady"
          : "",

        showLetters
          ? "nerdsFinalLoader--letters"
          : "",

        showFinalLogo
          ? "nerdsFinalLoader--finalLogo"
          : "",

        leaving
          ? "nerdsFinalLoader--leaving"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >

      {/* =====================================================
          DECORATIVE HONEYCOMBS
      ====================================================== */}

      <div className="nerdsLoaderHex nerdsLoaderHex--topLeft">

        {Array.from({
          length: 12,
        }).map(
          (
            _,
            index
          ) => (
            <span key={index} />
          )
        )}

      </div>


      <div className="nerdsLoaderHex nerdsLoaderHex--bottomRight">

        {Array.from({
          length: 12,
        }).map(
          (
            _,
            index
          ) => (
            <span key={index} />
          )
        )}

      </div>


      {/* =====================================================
          MAIN CENTER
      ====================================================== */}

      <div className="nerdsFinalLoader__center">


        {/* ===================================================
            TOP ANIMATION STAGE
        ==================================================== */}

        <div className="loaderWordStage">


          {/* ===============================================
              BEE FORMATION — NERDS HIVE
          ================================================ */}

          <div className="loaderBeeFormation">

            {bees.map(
              (
                bee
              ) => (
                <FlyingBee
                  key={bee.id}
                  bee={bee}
                />
              )
            )}

          </div>


          {/* ===============================================
              REAL LETTERS — ONE BY ONE BOUNCE
          ================================================ */}

          <div className="loaderJumpWord">

            {finalLetters.map(
              (
                letter,
                index
              ) => {
                if (
                  letter === " "
                ) {
                  return (
                    <span
                      key={`space-${index}`}
                      className="loaderJumpWord__space"
                    />
                  );
                }

                return (
                  <span
                    key={`${letter}-${index}`}
                    className="loaderJumpLetter"
                    style={{
                      "--letter-index":
                        index,
                    } as CSSProperties}
                  >
                    {letter}
                  </span>
                );
              }
            )}

          </div>


          {/* ===============================================
              APPROVED FINAL IMAGE
              BEE SITS ABOVE HIVE
          ================================================ */}

          <img
            src="/images/misc/nerds-hive-bee-logo.png"
            alt="Nerds Hive"
            className="loaderApprovedLogo"
          />

        </div>


        {/* ===================================================
            MAIN ORIGINAL NERDSHIVE LOGO
        ==================================================== */}

        <div className="loaderMainLogoStage">

          <span className="loaderMainLogoPulse loaderMainLogoPulse--one" />

          <span className="loaderMainLogoPulse loaderMainLogoPulse--two" />

          <img
            src="/images/logo/nerdshive-logo.png"
            alt="NerdsHive"
            className="loaderMainLogo"
          />

        </div>


        {/* ===================================================
            CAPTION
        ==================================================== */}

        <div className="loaderEnteringText">
          ENTERING THE HIVE
        </div>


        {/* ===================================================
            PROGRESS BAR
        ==================================================== */}

        <div className="loaderProgressTrack">

          <span
            style={{
              transform:
                `scaleX(${
                  progress /
                  100
                })`,
            }}
          />

        </div>


        <div className="loaderPercentage">

          {Math.round(
            progress
          )}

          <small>
            %
          </small>

        </div>

      </div>

    </div>
  );
};

export default Loader;