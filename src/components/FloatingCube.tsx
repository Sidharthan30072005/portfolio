
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = clock.elapsedTime * 0.5;
      meshRef.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#1e40af"
        emissiveIntensity={0.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

export default FloatingCube;
