'use client'; // Important for Next.js app directory

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Group } from 'three';

function Robot() {
  const { scene } = useGLTF('/RobotModel.glb');
  const robotRef = useRef<Group>(null);

  useFrame((state) => {
    const { pointer } = state;
    if (robotRef.current) {
      robotRef.current.rotation.y += (pointer.x * Math.PI * 0.25 - robotRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <group ref={robotRef} castShadow receiveShadow position={[0, -0.5, 0]}>
      <primitive object={scene} scale={3} castShadow receiveShadow />
    </group>
  );
}

// Default export
export default function RobotModelComponent() {
  return (
<Canvas style={{ height: '50vh' }} camera={{ position: [0, 1.5, 4], fov: 30 }}>      <directionalLight position={[2, 5, 5]} intensity={2} castShadow /> {/* Stronger directional light */}
      <pointLight position={[0, 2, 3]} intensity={2} />
      <Suspense fallback={null}>
        <Robot />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
      />
    </Canvas>
  );
}