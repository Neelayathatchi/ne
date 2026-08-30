import { MutableRefObject, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import WorkspacePlane from "./WorkspacePlane";
import { walkthroughScenes } from "../../data/walkthroughScenes";

type ThreeDSceneProps = {
  progressRef: MutableRefObject<number>;
};

const ThreeDScene = ({ progressRef }: ThreeDSceneProps) => {
  const scenePositions = useMemo(() => {
    return walkthroughScenes.map((_, index) => {
      const side =
        index === 0
          ? 0
          : index % 2 === 0
            ? -1
            : 1;

      return {
        position: [
          side * 2.2,
          index % 3 === 0 ? 0.25 : -0.05,
          -index * 10,
        ] as [number, number, number],

        rotation: [
          0,
          side === 0 ? 0 : side * -0.08,
          0,
        ] as [number, number, number],
      };
    });
  }, []);

  useFrame((state, delta) => {
    const progress = progressRef.current;

    const maximumTravel =
      (walkthroughScenes.length - 1) * 10;

    const targetZ =
      8 - progress * maximumTravel;

    const activeFloat =
      Math.sin(progress * Math.PI * 8) * 0.12;

    state.camera.position.z = THREE.MathUtils.damp(
      state.camera.position.z,
      targetZ,
      4.5,
      delta
    );

    state.camera.position.x = THREE.MathUtils.damp(
      state.camera.position.x,
      Math.sin(progress * Math.PI * 5) * 0.65,
      3.2,
      delta
    );

    state.camera.position.y = THREE.MathUtils.damp(
      state.camera.position.y,
      activeFloat,
      3.5,
      delta
    );

    state.camera.rotation.y = THREE.MathUtils.damp(
      state.camera.rotation.y,
      Math.sin(progress * Math.PI * 5) * 0.012,
      3,
      delta
    );
  });

  return (
    <>
      <ambientLight intensity={2.4} />

      <directionalLight
        position={[6, 8, 5]}
        intensity={2}
      />

      {/* WHITE 3D ENVIRONMENT */}
      <mesh position={[0, 0, -60]}>
        <planeGeometry args={[80, 140]} />

        <meshStandardMaterial
          color="#FFFFFF"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {walkthroughScenes.map((scene, index) => (
        <WorkspacePlane
          key={scene.id}
          image={scene.image}
          index={index}
          position={scenePositions[index].position}
          rotation={scenePositions[index].rotation}
          scale={index === 0 ? 1.08 : 1}
        />
      ))}

      {/* 3D HIVE CELLS */}
      {Array.from({ length: 14 }).map((_, index) => {
        const angle = index * 0.92;

        const x =
          Math.sin(angle) * (4.8 + (index % 3));

        const y =
          Math.cos(angle * 1.5) * 2.5;

        const z =
          -index * 8 - 4;

        return (
          <mesh
            key={`hive-${index}`}
            position={[x, y, z]}
            rotation={[Math.PI / 2, 0, angle]}
          >
            <cylinderGeometry
              args={[0.38, 0.38, 0.045, 6]}
            />

            <meshStandardMaterial
              color={
                index % 3 === 0
                  ? "#FFBF00"
                  : index % 3 === 1
                    ? "#701F0E"
                    : "#121212"
              }
              roughness={1}
              metalness={0}
            />
          </mesh>
        );
      })}
    </>
  );
};

export default ThreeDScene;