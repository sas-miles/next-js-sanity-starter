/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ThreeElements } from "@react-three/fiber";
type GLTFResult = GLTF & {
  nodes: {
    ["tile-road-intersection-t-nb001_1"]: THREE.Mesh;
    ["tile-road-intersection-t-nb001_2"]: THREE.Mesh;
    ["tile-road-intersection-t-nb001_3"]: THREE.Mesh;
    ["tile-road-intersection-t-nb001_4"]: THREE.Mesh;
    ["tile-road-intersection-t-nb"]: THREE.Mesh;
    ["tile-road-intersection-t-nb_1"]: THREE.Mesh;
    ["tile-road-intersection-t-nb_2"]: THREE.Mesh;
    ["tile-road-intersection-t-nb_3"]: THREE.Mesh;
    ["tile-plain-nb029"]: THREE.Mesh;
    ["tile-road-straight-nb"]: THREE.Mesh;
    ["tile-road-straight-nb_1"]: THREE.Mesh;
    ["tile-road-straight-nb_2"]: THREE.Mesh;
    ["tile-plain-nb031"]: THREE.Mesh;
    ["tile-road-straight-nb"]: THREE.Mesh;
    ["tile-road-straight-nb_1"]: THREE.Mesh;
    ["tile-road-straight-nb_2"]: THREE.Mesh;
    ["tile-road-end-nb"]: THREE.Mesh;
    ["tile-road-end-nb_1"]: THREE.Mesh;
    ["tile-road-end-nb_2"]: THREE.Mesh;
    ["tile-road-intersection-t-nb"]: THREE.Mesh;
    ["tile-road-intersection-t-nb_1"]: THREE.Mesh;
    ["tile-road-intersection-t-nb_2"]: THREE.Mesh;
    ["tile-road-intersection-t-nb_3"]: THREE.Mesh;
    ["tile-road-intersection-t-nb"]: THREE.Mesh;
    ["tile-road-intersection-t-nb_1"]: THREE.Mesh;
    ["tile-road-intersection-t-nb_2"]: THREE.Mesh;
    ["tile-road-intersection-t-nb_3"]: THREE.Mesh;
  };
  materials: {
    ["18 GREY-DARK"]: THREE.MeshPhysicalMaterial;
    ["21 GREY LIGHT.001"]: THREE.MeshPhysicalMaterial;
    ["23 GREY-WHITE.001"]: THREE.MeshPhysicalMaterial;
    ["14 BROWN-LIGHTEST"]: THREE.MeshPhysicalMaterial;
    ["18 GREY-DARK.001"]: THREE.MeshPhysicalMaterial;
    ["14 BROWN-LIGHTEST.002"]: THREE.MeshPhysicalMaterial;
    ["14 BROWN-LIGHTEST.006"]: THREE.MeshPhysicalMaterial;
  };
};

export function GroundConstruction(props: ThreeElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/road-zone-construction.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="tile-road-intersection-t-nb001"
          position={[60, 2.667, -45]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="tile-road-intersection-t-nb001_1"
            geometry={nodes["tile-road-intersection-t-nb001_1"].geometry}
            material={materials["18 GREY-DARK"]}
          />
          <mesh
            name="tile-road-intersection-t-nb001_2"
            geometry={nodes["tile-road-intersection-t-nb001_2"].geometry}
            material={materials["21 GREY LIGHT.001"]}
          />
          <mesh
            name="tile-road-intersection-t-nb001_3"
            geometry={nodes["tile-road-intersection-t-nb001_3"].geometry}
            material={materials["23 GREY-WHITE.001"]}
          />
          <mesh
            name="tile-road-intersection-t-nb001_4"
            geometry={nodes["tile-road-intersection-t-nb001_4"].geometry}
            material={materials["14 BROWN-LIGHTEST"]}
          />
        </group>
        <group
          name="tile-road-intersection-t-nb006"
          position={[60, 2.667, -105]}
        >
          <mesh
            name="tile-road-intersection-t-nb"
            geometry={nodes["tile-road-intersection-t-nb"].geometry}
            material={materials["18 GREY-DARK.001"]}
          />
          <mesh
            name="tile-road-intersection-t-nb_1"
            geometry={nodes["tile-road-intersection-t-nb_1"].geometry}
            material={materials["21 GREY LIGHT.001"]}
          />
          <mesh
            name="tile-road-intersection-t-nb_2"
            geometry={nodes["tile-road-intersection-t-nb_2"].geometry}
            material={materials["23 GREY-WHITE.001"]}
          />
          <mesh
            name="tile-road-intersection-t-nb_3"
            geometry={nodes["tile-road-intersection-t-nb_3"].geometry}
            material={materials["14 BROWN-LIGHTEST"]}
          />
        </group>
        <mesh
          name="tile-plain-nb029"
          geometry={nodes["tile-plain-nb029"].geometry}
          material={materials["14 BROWN-LIGHTEST.002"]}
          position={[60, 2.667, -135]}
        />
        <group
          name="tile-road-straight-nb005"
          position={[60, 2.667, -75]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          <mesh
            name="tile-road-straight-nb"
            geometry={nodes["tile-road-straight-nb"].geometry}
            material={materials["14 BROWN-LIGHTEST.006"]}
          />
          <mesh
            name="tile-road-straight-nb_1"
            geometry={nodes["tile-road-straight-nb_1"].geometry}
            material={materials["18 GREY-DARK.001"]}
          />
          <mesh
            name="tile-road-straight-nb_2"
            geometry={nodes["tile-road-straight-nb_2"].geometry}
            material={materials["21 GREY LIGHT.001"]}
          />
        </group>
        <mesh
          name="tile-plain-nb031"
          geometry={nodes["tile-plain-nb031"].geometry}
          material={materials["14 BROWN-LIGHTEST.002"]}
          position={[90, 2.667, -135]}
        />
        <group
          name="tile-road-straight-nb011"
          position={[90, 2.667, -45]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="tile-road-straight-nb"
            geometry={nodes["tile-road-straight-nb"].geometry}
            material={materials["14 BROWN-LIGHTEST.006"]}
          />
          <mesh
            name="tile-road-straight-nb_1"
            geometry={nodes["tile-road-straight-nb_1"].geometry}
            material={materials["18 GREY-DARK.001"]}
          />
          <mesh
            name="tile-road-straight-nb_2"
            geometry={nodes["tile-road-straight-nb_2"].geometry}
            material={materials["21 GREY LIGHT.001"]}
          />
        </group>
        <group
          name="tile-road-end-nb001"
          position={[180, 2.667, -45]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh
            name="tile-road-end-nb"
            geometry={nodes["tile-road-end-nb"].geometry}
            material={materials["18 GREY-DARK.001"]}
          />
          <mesh
            name="tile-road-end-nb_1"
            geometry={nodes["tile-road-end-nb_1"].geometry}
            material={materials["21 GREY LIGHT.001"]}
          />
          <mesh
            name="tile-road-end-nb_2"
            geometry={nodes["tile-road-end-nb_2"].geometry}
            material={materials["14 BROWN-LIGHTEST"]}
          />
        </group>
        <group
          name="tile-road-intersection-t-nb004"
          position={[120, 2.667, -45]}
        >
          <mesh
            name="tile-road-intersection-t-nb"
            geometry={nodes["tile-road-intersection-t-nb"].geometry}
            material={materials["18 GREY-DARK.001"]}
          />
          <mesh
            name="tile-road-intersection-t-nb_1"
            geometry={nodes["tile-road-intersection-t-nb_1"].geometry}
            material={materials["21 GREY LIGHT.001"]}
          />
          <mesh
            name="tile-road-intersection-t-nb_2"
            geometry={nodes["tile-road-intersection-t-nb_2"].geometry}
            material={materials["23 GREY-WHITE.001"]}
          />
          <mesh
            name="tile-road-intersection-t-nb_3"
            geometry={nodes["tile-road-intersection-t-nb_3"].geometry}
            material={materials["14 BROWN-LIGHTEST"]}
          />
        </group>
        <group
          name="tile-road-intersection-t-nb005"
          position={[150, 2.667, -45]}
        >
          <mesh
            name="tile-road-intersection-t-nb"
            geometry={nodes["tile-road-intersection-t-nb"].geometry}
            material={materials["18 GREY-DARK.001"]}
          />
          <mesh
            name="tile-road-intersection-t-nb_1"
            geometry={nodes["tile-road-intersection-t-nb_1"].geometry}
            material={materials["21 GREY LIGHT.001"]}
          />
          <mesh
            name="tile-road-intersection-t-nb_2"
            geometry={nodes["tile-road-intersection-t-nb_2"].geometry}
            material={materials["23 GREY-WHITE.001"]}
          />
          <mesh
            name="tile-road-intersection-t-nb_3"
            geometry={nodes["tile-road-intersection-t-nb_3"].geometry}
            material={materials["14 BROWN-LIGHTEST"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/road-zone-construction.glb");
