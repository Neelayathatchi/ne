import { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

type WorkspacePlaneProps = {
  image: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  index: number;
};

const WorkspacePlane = ({
  image,
  position,
  rotation = [0, 0, 0],
  scale = 1,
  index,
}: WorkspacePlaneProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, image);

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 16;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const size = useMemo(() => {
    const source = texture.image as HTMLImageElement;

    if (!source?.width || !source?.height) {
      return { width: 8, height: 5 };
    }

    const ratio = source.width / source.height;

    const maxWidth = 8.4;

    return {
      width: maxWidth * scale,
      height: (maxWidth / ratio) * scale,
    };
  }, [texture, scale]);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.elapsedTime;

    groupRef.current.position.y =
      position[1] + Math.sin(t * 0.45 + index) * 0.08;

    groupRef.current.rotation.z =
      rotation[2] + Math.sin(t * 0.3 + index) * 0.003;
  });

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
    >
      {/* BACK DEPTH CARD */}
      <mesh position={[0.16, -0.15, -0.18]}>
        <planeGeometry args={[size.width, size.height]} />
        <meshStandardMaterial
          color="#701F0E"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* MAIN IMAGE */}
      <mesh>
        <planeGeometry args={[size.width, size.height]} />

        <meshBasicMaterial
          map={texture}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* AMBER EDGE */}
      <mesh position={[0, -size.height / 2 - 0.055, 0.035]}>
        <boxGeometry args={[size.width, 0.055, 0.04]} />

        <meshStandardMaterial
          color="#FFBF00"
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );
};

export default WorkspacePlane;