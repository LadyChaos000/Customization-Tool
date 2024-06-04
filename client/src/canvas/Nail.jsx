import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import state from "../store";

const Nail = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/nailmodel.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) =>
    easing.dampC(materials.mat.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  return (
    <group
      key={stateString}
    >
      <mesh
        castShadow
        geometry={nodes.Nail_model.geometry}
        material={materials.mat}
        material-roughness={1}
        dispose={null}
        scale={[0.8, 0.8, 0.8]}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 4.2, 3.1]}
            scale={0.3}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Nail;
