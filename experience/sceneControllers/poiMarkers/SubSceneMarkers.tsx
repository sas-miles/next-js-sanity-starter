"use client";
import { Html } from "@react-three/drei";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCameraStore } from "../store/cameraStore";
import { Vector3 } from "three";
import { INITIAL_POSITIONS } from "../store/cameraStore";

type MarkerPosition = {
  x: number;
  y: number;
  z: number;
};

type Position = [number, number, number];

const toPosition = (marker: MarkerPosition): Position => {
  return [marker.x, marker.y, marker.z];
};

export default function SubSceneMarkers({ scene }: { scene: Sanity.Scene }) {
  const [hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null);
  const { setCamera, setControlType } = useCameraStore();

  const handleMarkerClick = (poi: any) => {
    if (poi.cameraPosition && poi.cameraTarget) {
      setControlType("CameraControls");
      setCamera(
        new Vector3(
          poi.cameraPosition.x,
          poi.cameraPosition.y,
          poi.cameraPosition.z
        ),
        new Vector3(poi.cameraTarget.x, poi.cameraTarget.y, poi.cameraTarget.z)
      );
    } else {
      console.warn("Missing camera position or target:", poi);
    }
  };

  return (
    <group>
      {scene.pointsOfInterest?.map((poi) => {
        if (
          "_type" in poi &&
          poi._type === "scenes" &&
          "mainSceneMarkerPosition" in poi &&
          poi.mainSceneMarkerPosition &&
          "slug" in poi
        ) {
          console.log(
            "Found valid POI with position:",
            poi.mainSceneMarkerPosition
          );
          const isHovered = hoveredMarkerId === poi._id;
          return (
            <group
              key={poi._id}
              position={toPosition(poi.mainSceneMarkerPosition)}
              onClick={() => handleMarkerClick(poi)}
              onPointerEnter={() => setHoveredMarkerId(poi._id)}
              onPointerLeave={() => setHoveredMarkerId(null)}
            >
              <Html>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <h3 className="text-lg font-bold">{poi.title}</h3>
                </div>
              </Html>
              <mesh>
                <sphereGeometry args={[1, 52, 52]} />
                <meshStandardMaterial
                  color={isHovered ? "hotpink" : "pink"}
                  transparent
                  opacity={0.8}
                />
              </mesh>
            </group>
          );
        }
        return null;
      })}
    </group>
  );
}
