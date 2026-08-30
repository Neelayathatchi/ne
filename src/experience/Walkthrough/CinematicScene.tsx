import {
  useEffect,
  useMemo,
  useRef,
} from "react";

import {
  useFrame,
  useThree,
} from "@react-three/fiber";

import * as THREE from "three";

import CinematicPanel from "./CinematicPanel";

import {
  walkthroughScenes,
} from "../../data/walkthroughScenes";

type CinematicSceneProps = {
  progressRef: React.MutableRefObject<number>;

  pointerRef: React.MutableRefObject<{
    x: number;
    y: number;
  }>;
};

type HexProps = {
  position: [
    number,
    number,
    number
  ];

  scale?: number;

  color?: string;

  rotation?: number;
};

const FloatingHex = ({
  position,
  scale = 1,
  color = "#FFBF00",
  rotation = 0,
}: HexProps) => {
  const ref =
    useRef<THREE.Mesh>(null);

  const startY =
    position[1];

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.position.y =
      startY +
      Math.sin(
        state.clock.elapsedTime *
          0.5 +
          position[0]
      ) *
        0.12;

    ref.current.rotation.z =
      rotation +
      state.clock.elapsedTime *
        0.05;
  });

  return (
    <mesh
      ref={ref}
      position={position}
      scale={scale}
    >
      <cylinderGeometry
        args={[
          0.5,
          0.5,
          0.1,
          6,
        ]}
      />

      <meshStandardMaterial
        color={color}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
};

const CinematicScene = ({
  progressRef,
  pointerRef,
}: CinematicSceneProps) => {
  const worldRef =
    useRef<THREE.Group>(null);

  const { camera } =
    useThree();

  const hexes = useMemo(
    () => [
      {
        position: [
          -5.8,
          2.7,
          -1.8,
        ] as [
          number,
          number,
          number
        ],
        scale: 0.55,
        color: "#FFBF00",
      },

      {
        position: [
          5.8,
          -2.8,
          -5,
        ] as [
          number,
          number,
          number
        ],
        scale: 0.36,
        color: "#701F0E",
      },

      {
        position: [
          5.4,
          2.7,
          -8,
        ] as [
          number,
          number,
          number
        ],
        scale: 0.23,
        color: "#121212",
      },

      {
        position: [
          -5.5,
          -2.9,
          -12,
        ] as [
          number,
          number,
          number
        ],
        scale: 0.42,
        color: "#FFBF00",
      },

      {
        position: [
          5.7,
          2.3,
          -17,
        ] as [
          number,
          number,
          number
        ],
        scale: 0.28,
        color: "#701F0E",
      },
    ],
    []
  );

  useEffect(() => {
    camera.position.set(
      0,
      0,
      10
    );
  }, [camera]);

  useFrame((state, delta) => {
    /*
      MOUSE PARALLAX
    */

    const targetCamX =
      pointerRef.current.x *
      0.25;

    const targetCamY =
      pointerRef.current.y *
      0.16;

    camera.position.x =
      THREE.MathUtils.damp(
        camera.position.x,
        targetCamX,
        3.5,
        delta
      );

    camera.position.y =
      THREE.MathUtils.damp(
        camera.position.y,
        targetCamY,
        3.5,
        delta
      );

    /*
      Scroll adds tiny camera push.
    */

    const p =
      progressRef.current;

    camera.position.z =
      THREE.MathUtils.damp(
        camera.position.z,
        10 -
          Math.sin(
            p *
              Math.PI *
              2
          ) *
            0.12,
        3,
        delta
      );

    /*
      Slight camera roll during travel.
    */

    camera.rotation.z =
      THREE.MathUtils.damp(
        camera.rotation.z,
        Math.sin(
          p *
            Math.PI *
            12
        ) *
          0.004,
        3,
        delta
      );

    /*
      World parallax.
    */

    if (worldRef.current) {
      worldRef.current.rotation.y =
        THREE.MathUtils.damp(
          worldRef.current.rotation.y,
          pointerRef.current.x *
            0.012,
          3,
          delta
        );

      worldRef.current.rotation.x =
        THREE.MathUtils.damp(
          worldRef.current.rotation.x,
          -pointerRef.current.y *
            0.008,
          3,
          delta
        );
    }

    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight
        intensity={2.2}
      />

      <directionalLight
        position={[5, 6, 8]}
        intensity={2.1}
      />

      <directionalLight
        position={[
          -4,
          -2,
          4,
        ]}
        intensity={0.6}
      />

      <group ref={worldRef}>
        {walkthroughScenes.map(
          (scene, index) => (
            <CinematicPanel
              key={scene.id}
              image={scene.image}
              index={index}
              progressRef={
                progressRef
              }
            />
          )
        )}

        {hexes.map(
          (hex, index) => (
            <FloatingHex
              key={index}
              position={
                hex.position
              }
              scale={
                hex.scale
              }
              color={
                hex.color
              }
              rotation={
                index * 0.35
              }
            />
          )
        )}
      </group>
    </>
  );
};

export default CinematicScene;