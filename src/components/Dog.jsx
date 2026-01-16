import {
  OrbitControls,
  useAnimations,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
export default function Dog() {
  useThree(({ camera, scene, gl }) => {
    camera.position.z = 3.1;
    gl.outputColorSpace = THREE.SRGBColorSpace;
    gl.toneMapping = THREE.ReinhardToneMapping;
  });

  // const txture = useTexture({
  //   normalMap: "/dog_normals.jpg",
  //   matcap: "/matcap/mat-2.png",
  // });

  const [normalMap, matcap] = useTexture([
    "/dog_normals.jpg",
    "/matcap/mat-2.png",
  ]).map((txtre) => {
    txtre.colorSpace = THREE.SRGBColorSpace;
    txtre.flipY = false;
    return txtre;
  });
  // const txture = { normalMap, matcap };
  // txture.normalMap.flipY = false;
  // txture.matcap.colorSpace = THREE.SRGBColorSpace;
  const model = useGLTF("/models/dog.drc.glb");
  const dogMaterial = new THREE.MeshMatcapMaterial({
    normalMap: normalMap,
    matcap: matcap,
  });
  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = dogMaterial;
    }
  });
  const { actions } = useAnimations(model.animations, model.scene);
  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions]);
  return (
    <>
      <primitive
        object={model.scene}
        rotation={[0, Math.PI / 3.1, 0]}
        position={[0.22, -0.4, 2]}
      />
      <directionalLight intensity={10} color={0xffffff} position={[0, 5, 5]} />
      <OrbitControls />
    </>
  );
}
