// src/components/ThreeScene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Box = ({ position, dimensions, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={dimensions} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Pallet = () => {
  return (
    <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 10]} /> {/* Increased the size to make a long horizontal plate */}
      <meshStandardMaterial color={0x808080} />
    </mesh>
  );
};

const ThreeScene = ({ boxes }) => {
  return (
    <Canvas camera={{ position: [0, 5, 20] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      <Pallet />

      {boxes.map((box) => (
        <Box key={box.id} position={box.position} dimensions={box.dimensions} color={box.color} />
      ))}

      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
