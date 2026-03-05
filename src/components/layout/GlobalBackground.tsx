"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  
  const sphere = useMemo(() => {
    const points = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3;
      // Spread particles across a wide area to cover the whole screen
      points[i3] = (Math.random() - 0.5) * 25;
      points[i3 + 1] = (Math.random() - 0.5) * 25;
      points[i3 + 2] = (Math.random() - 0.5) * 25;
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#4fd1c5"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
    </group>
  );
}

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
