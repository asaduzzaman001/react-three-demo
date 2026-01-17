import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export default function Dog() {
  useThree(({ camera, scene, gl }) => {
    camera.position.z = 0.65;
    gl.outputColorSpace = THREE.SRGBColorSpace;
    gl.toneMapping = THREE.ReinhardToneMapping;
  });

  const [normalMap, matcap] = useTexture([
    "/dog_normals.jpg",
    "/matcap/mat-2.png",
  ]).map((txtre) => {
    txtre.colorSpace = THREE.SRGBColorSpace;
    txtre.flipY = false;
    return txtre;
  });

  const [branchNormalMap, branchMatcap] = useTexture([
    "/branches_normals.jpeg",
    "/branches_diffuse.jpeg",
  ]).map((txtre) => {
    txtre.colorSpace = THREE.SRGBColorSpace;
    txtre.flipY = true;
    return txtre;
  });

  const model = useGLTF("/models/dog.drc.glb");
  const dogMaterial = new THREE.MeshMatcapMaterial({
    normalMap: normalMap,
    matcap: matcap,
  });
  const branchMaterial = new THREE.MeshMatcapMaterial({
    normalMap: branchNormalMap,
    matcap: branchMatcap,
  });
  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = dogMaterial;
    }
    if (child.name.includes("BRANCH")) {
      child.material = branchMaterial;
    }
  });
  const { actions } = useAnimations(model.animations, model.scene);
  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions]);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sec-1",
        endTrigger: "#sec-3",
        start: "top top",
        end: "bottom bottom",
        markers: true,
        scrub: true,
      },
    });
    tl.to(modelRef.current.scene.position, {
      z: "-=.3",
      y: "+=.1",
      x: "-=0.05",
    })
      .to(
        modelRef.current.scene.position,
        {
          z: "-=.15",
          x: "+=.1",
        },
        "x",
      )
      .to(
        modelRef.current.scene.position,
        {
          z: "-=.2",
        },
        "x",
      )
      .to(
        modelRef.current.scene.rotation,
        {
          x: `+=${Math.PI / 10}`,
        },
        "x",
      )

      .to(
        modelRef.current.scene.rotation,
        {
          y: `-=${Math.PI / 1.1}`,
        },
        "pos",
      )
      .to(
        modelRef.current.scene.position,
        {
          x: "-=.5",
          y: "+=.03",
          z: "+=.33",
        },
        "pos",
      );
  }, []);

  const modelRef = useRef(model);

  return (
    <>
      <primitive
        object={model.scene}
        rotation={[-Math.PI / 30, Math.PI / 6.1, 0]}
        position={[0.17, -0.58, 0.18]}
      />
      <directionalLight
        intensity={15}
        color={0xffffff}
        position={[0, 10, -10]}
      />
    </>
  );
}
