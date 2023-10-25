import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import "./styles.css";

function Scene() {
  const texture = useTexture("displacement.png");

  return (
    <>
      <OrbitControls />
      <directionalLight
        position={[0, 10, 5]}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <mesh receiveShadow castShadow>
        <planeGeometry args={[10, 10, 128, 128]} />
        <meshStandardMaterial
          color="gray"
          displacementMap={texture}
          displacementScale={5}
        />
      </mesh>
    </>
  );
}

export default function App() {
  return (
    <div id="canvas">
      <Canvas camera={{ position: [0, 5, 10], fov: 40 }} shadows>
        <Scene />
      </Canvas>
    </div>
  );
}
