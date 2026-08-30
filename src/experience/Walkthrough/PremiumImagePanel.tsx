import {
  useMemo,
} from "react";

import {
  useLoader,
  useThree,
} from "@react-three/fiber";

import * as THREE from "three";


/* =========================================================
   TYPES
========================================================= */

type PremiumImagePanelProps = {
  image: string;

  position?: [
    number,
    number,
    number
  ];

  rotation?: [
    number,
    number,
    number
  ];

  /**
   * Maximum width in Three.js world units.
   */
  maxWidth?: number;

  /**
   * Maximum height in Three.js world units.
   */
  maxHeight?: number;

  /**
   * Optional panel scale.
   */
  scale?: number;

  /**
   * Show walnut depth / shadow panel.
   */
  showDepth?: boolean;

  /**
   * Show amber underline.
   */
  showAccent?: boolean;
};


/* =========================================================
   COMPONENT
========================================================= */

const PremiumImagePanel = ({
  image,

  position = [
    0,
    0,
    0,
  ],

  rotation = [
    0,
    0,
    0,
  ],

  maxWidth = 8.8,

  maxHeight = 6.4,

  scale = 1,

  showDepth = true,

  showAccent = true,
}: PremiumImagePanelProps) => {
  /* =======================================================
     LOAD TEXTURE
  ======================================================= */

  const texture =
    useLoader(
      THREE.TextureLoader,
      image
    );


  /* =======================================================
     THREE.JS RENDERER
  ======================================================= */

  const {
    gl,
  } = useThree();


  /* =======================================================
     TEXTURE QUALITY SETTINGS
  ======================================================= */

  useMemo(
    () => {
      texture.colorSpace =
        THREE.SRGBColorSpace;

      /*
       * Maximum available
       * anisotropy from GPU.
       *
       * Helps image clarity,
       * especially during 3D tilt.
       */
      texture.anisotropy =
        Math.min(
          gl.capabilities
            .getMaxAnisotropy(),
          16
        );

      texture.minFilter =
        THREE.LinearMipmapLinearFilter;

      texture.magFilter =
        THREE.LinearFilter;

      texture.generateMipmaps =
        true;

      texture.wrapS =
        THREE.ClampToEdgeWrapping;

      texture.wrapT =
        THREE.ClampToEdgeWrapping;

      texture.needsUpdate =
        true;
    },
    [
      texture,
      gl,
    ]
  );


  /* =======================================================
     CALCULATE IMAGE SIZE
     -------------------------------------------------------
     IMPORTANT:
     We keep original aspect ratio.

     Image will NOT become distorted.
  ======================================================= */

  const panelSize =
    useMemo(
      () => {
        const source =
          texture.image as
            | HTMLImageElement
            | undefined;


        /*
         * Fallback dimensions.
         */

        if (
          !source ||
          !source.width ||
          !source.height
        ) {
          return {
            width:
              maxWidth,

            height:
              Math.min(
                maxHeight,
                maxWidth *
                  0.65
              ),
          };
        }


        /*
         * Original photo aspect.
         */

        const aspect =
          source.width /
          source.height;


        let width =
          maxWidth;

        let height =
          width /
          aspect;


        /*
         * If calculated height
         * becomes too large,
         * limit by maxHeight.
         */

        if (
          height >
          maxHeight
        ) {
          height =
            maxHeight;

          width =
            height *
            aspect;
        }


        return {
          width,
          height,
        };
      },
      [
        texture,
        maxWidth,
        maxHeight,
      ]
    );


  /* =======================================================
     PANEL DIMENSIONS
  ======================================================= */

  const width =
    panelSize.width;

  const height =
    panelSize.height;


  /* =======================================================
     DEPTH VALUES
  ======================================================= */

  const depthOffsetX =
    0.16;

  const depthOffsetY =
    -0.16;

  const depthOffsetZ =
    -0.10;


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <group
      position={
        position
      }
      rotation={
        rotation
      }
      scale={
        scale
      }
    >

      {/* ===================================================
          WALNUT BACK DEPTH PANEL
      ==================================================== */}

      {showDepth && (
        <mesh
          position={[
            depthOffsetX,
            depthOffsetY,
            depthOffsetZ,
          ]}
        >
          <planeGeometry
            args={[
              width,
              height,
            ]}
          />

          <meshStandardMaterial
            color="#701F0E"
            roughness={1}
            metalness={0}
          />
        </mesh>
      )}


      {/* ===================================================
          VERY SMALL AMBER OFFSET PANEL
          Gives layered premium depth.
      ==================================================== */}

      <mesh
        position={[
          -0.10,
          0.08,
          -0.055,
        ]}
      >
        <planeGeometry
          args={[
            width,
            height,
          ]}
        />

        <meshStandardMaterial
          color="#FFBF00"
          roughness={1}
          metalness={0}
        />
      </mesh>


      {/* ===================================================
          MAIN HD PHOTO
      ==================================================== */}

      <mesh
        position={[
          0,
          0,
          0,
        ]}
      >
        <planeGeometry
          args={[
            width,
            height,
          ]}
        />

        <meshBasicMaterial
          map={
            texture
          }
          toneMapped={
            false
          }
          transparent={
            false
          }
          side={
            THREE.FrontSide
          }
        />
      </mesh>


      {/* ===================================================
          BOTTOM AMBER ACCENT LINE
      ==================================================== */}

      {showAccent && (
        <mesh
          position={[
            0,
            -height / 2 -
              0.045,
            0.025,
          ]}
        >
          <boxGeometry
            args={[
              width,
              0.055,
              0.035,
            ]}
          />

          <meshStandardMaterial
            color="#FFBF00"
            roughness={1}
            metalness={0}
          />
        </mesh>
      )}

    </group>
  );
};

export default PremiumImagePanel;