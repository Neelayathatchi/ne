import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import PremiumImagePanel from "./PremiumImagePanel";

import {
  walkthroughScenes,
} from "../../data/walkthroughScenes";

type PremiumSceneProps = {
  progressRef: React.MutableRefObject<number>;

  pointerRef: React.MutableRefObject<{
    x: number;
    y: number;
  }>;
};

const PremiumScene = ({
  progressRef,
  pointerRef,
}: PremiumSceneProps) => {
  const worldRef =
    useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!worldRef.current) {
      return;
    }

    /* =====================================================
       VERY SUBTLE WORLD PARALLAX
    ====================================================== */

    const targetRotY =
      pointerRef.current.x *
      0.008;

    const targetRotX =
      -pointerRef.current.y *
      0.005;


    worldRef.current.rotation.y =
      THREE.MathUtils.damp(
        worldRef.current.rotation.y,
        targetRotY,
        4,
        delta
      );


    worldRef.current.rotation.x =
      THREE.MathUtils.damp(
        worldRef.current.rotation.x,
        targetRotX,
        4,
        delta
      );


    /* =====================================================
       VERY LIGHT BREATHING MOTION
    ====================================================== */

    worldRef.current.position.y =
      Math.sin(
        state.clock.elapsedTime *
          0.25
      ) * 0.004;


    /* =====================================================
       KEEP WORLD Z STABLE
    ====================================================== */

    worldRef.current.position.z =
      THREE.MathUtils.damp(
        worldRef.current.position.z,
        0,
        4,
        delta
      );
  });


  return (
    <>
      <ambientLight
        intensity={2}
      />


      <directionalLight
        position={[4, 6, 8]}
        intensity={1.5}
      />


      <group ref={worldRef}>

        {walkthroughScenes.map(
          (
            scene,
            index
          ) => (
            <PremiumImagePanel
              key={scene.id}
              image={scene.image}
              index={index}
              total={
                walkthroughScenes.length
              }
              progressRef={
                progressRef
              }
              pointerRef={
                pointerRef
              }
            />
          )
        )}

      </group>
    </>
  );
};

export default PremiumScene;