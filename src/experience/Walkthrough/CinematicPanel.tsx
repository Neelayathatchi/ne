import { useEffect, useMemo, useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";

type CinematicPanelProps = {
  image: string;
  index: number;
  progressRef: React.MutableRefObject<number>;
};

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const CinematicPanel = ({
  image,
  index,
  progressRef,
}: CinematicPanelProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const frameRef = useRef<THREE.Mesh>(null);

  const texture = useLoader(THREE.TextureLoader, image);

  const { gl } = useThree();

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;

    texture.anisotropy =
      gl.capabilities.getMaxAnisotropy();

    texture.minFilter =
      THREE.LinearMipmapLinearFilter;

    texture.magFilter =
      THREE.LinearFilter;

    texture.needsUpdate = true;
  }, [texture, gl]);

  const ratio = useMemo(() => {
    const img = texture.image as HTMLImageElement;

    if (!img?.width || !img?.height) {
      return 1.5;
    }

    return img.width / img.height;
  }, [texture]);

  const dimensions = useMemo(() => {
    /*
      IMPORTANT:
      We are using CONTAIN logic.

      Landscape images:
      max width about 8.6

      Portrait images:
      max height about 6.2

      This prevents previous half-cut issue.
    */

    const maxWidth = 8.7;
    const maxHeight = 6.1;

    let width = maxWidth;
    let height = width / ratio;

    if (height > maxHeight) {
      height = maxHeight;
      width = height * ratio;
    }

    return {
      width,
      height,
    };
  }, [ratio]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const total =
      13 - 1;

    const current =
      progressRef.current * total;

    const distance =
      index - current;

    /*
      distance = 0 means ACTIVE.
      Negative = passed scene.
      Positive = upcoming scene.
    */

    const absDistance =
      Math.abs(distance);

    /*
      Z DEPTH

      Upcoming scenes sit far inside.
      Active scene comes towards viewer.
      Previous scene travels past viewer.
    */

    let targetZ = -distance * 7.4;

    if (distance < 0) {
      targetZ =
        Math.abs(distance) * 4.8;
    }

    /*
      LEFT / RIGHT CURVE

      Creates a subtle S-shaped tunnel.
    */

    const curveDirection =
      index % 2 === 0 ? 1 : -1;

    const targetX =
      distance *
      1.7 *
      curveDirection;

    const targetY =
      Math.sin(
        index * 1.17
      ) *
      0.35 *
      Math.min(
        absDistance,
        1.8
      );

    /*
      PANEL ROTATION
    */

    const targetRotateY =
      clamp(
        distance * 0.19,
        -0.44,
        0.44
      );

    const targetRotateX =
      clamp(
        -distance * 0.035,
        -0.08,
        0.08
      );

    const targetRotateZ =
      clamp(
        distance *
          0.018 *
          curveDirection,
        -0.04,
        0.04
      );

    /*
      Scale active panel slightly bigger.
    */

    const activeStrength =
      clamp(
        1 - absDistance,
        0,
        1
      );

    const targetScale =
      0.78 +
      activeStrength * 0.22;

    /*
      Visibility optimization.

      Panels that are several scenes away
      become invisible.
    */

    groupRef.current.visible =
      absDistance < 2.25;

    /*
      Ultra smooth interpolation.
    */

    groupRef.current.position.x =
      THREE.MathUtils.damp(
        groupRef.current.position.x,
        targetX,
        4.5,
        delta
      );

    groupRef.current.position.y =
      THREE.MathUtils.damp(
        groupRef.current.position.y,
        targetY,
        4.5,
        delta
      );

    groupRef.current.position.z =
      THREE.MathUtils.damp(
        groupRef.current.position.z,
        targetZ,
        5,
        delta
      );

    groupRef.current.rotation.x =
      THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotateX,
        4.5,
        delta
      );

    groupRef.current.rotation.y =
      THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetRotateY,
        4.5,
        delta
      );

    groupRef.current.rotation.z =
      THREE.MathUtils.damp(
        groupRef.current.rotation.z,
        targetRotateZ,
        4.5,
        delta
      );

    const currentScale =
      groupRef.current.scale.x;

    const nextScale =
      THREE.MathUtils.damp(
        currentScale,
        targetScale,
        4.5,
        delta
      );

    groupRef.current.scale.setScalar(
      nextScale
    );

    /*
      Extremely subtle living tilt
      only for the currently active card.
    */

    if (activeStrength > 0.75) {
      groupRef.current.rotation.y +=
        Math.sin(
          state.clock.elapsedTime *
            0.45
        ) *
        0.006;

      groupRef.current.rotation.x +=
        Math.cos(
          state.clock.elapsedTime *
            0.38
        ) *
        0.004;
    }
  });

  return (
    <group
      ref={groupRef}
      position={[
        index % 2 === 0
          ? 1
          : -1,
        0,
        -index * 7,
      ]}
    >
      {/* ==============================
          REAR MATTE DEPTH LAYER
      =============================== */}

      <mesh
        position={[
          0.18,
          -0.18,
          -0.16,
        ]}
      >
        <planeGeometry
          args={[
            dimensions.width,
            dimensions.height,
          ]}
        />

        <meshStandardMaterial
          color="#701F0E"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* ==============================
          MAIN HD IMAGE
      =============================== */}

      <mesh ref={frameRef}>
        <planeGeometry
          args={[
            dimensions.width,
            dimensions.height,
            32,
            32,
          ]}
        />

        <meshBasicMaterial
          map={texture}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* ==============================
          AMBER BOTTOM EDGE
      =============================== */}

      <mesh
        position={[
          0,
          -dimensions.height /
            2 -
            0.055,
          0.05,
        ]}
      >
        <boxGeometry
          args={[
            dimensions.width,
            0.055,
            0.05,
          ]}
        />

        <meshStandardMaterial
          color="#FFBF00"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* ==============================
          MATTE SIDE DEPTH
      =============================== */}

      <mesh
        position={[
          dimensions.width /
            2 +
            0.055,
          0,
          -0.07,
        ]}
      >
        <boxGeometry
          args={[
            0.07,
            dimensions.height,
            0.14,
          ]}
        />

        <meshStandardMaterial
          color="#121212"
          roughness={1}
        />
      </mesh>
    </group>
  );
};

export default CinematicPanel;