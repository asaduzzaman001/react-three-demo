import { Canvas } from "@react-three/fiber";
import Dog from "../components/Dog";

export default function BG() {
  return (
    <div>
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundImage: "url('/background-l.png')",
          backgroundSize: "cover",
        }}
      >
        <Dog />
      </Canvas>
    </div>
  );
}
