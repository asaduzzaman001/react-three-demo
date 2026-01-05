import { Canvas } from "@react-three/fiber";

function Box() {
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color="lime" />
    </mesh>
  );
}

export default function Bird() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Box />
    </Canvas>
  );
}
