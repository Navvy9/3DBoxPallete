// src/components/ThreeScene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

const Box = ({ id, position, dimensions, color, onDelete }) => (
  <mesh position={position} onClick={() => onDelete(id)} castShadow>
    <boxGeometry args={dimensions} />
    <meshStandardMaterial color={color} />
    <Html distanceFactor={10}>
      <div style={{ color: 'black', fontSize: '12px', textAlign: 'center' }}>
        Box {id + 1}
      </div>
    </Html>
  </mesh>
);

const Pallet = ({ width }) => (
  <mesh position={[width / 2, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
    <planeGeometry args={[width, 5]} />
    <meshStandardMaterial color="#ccc" />
    <Html position={[width / 2, 1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <div style={{ color: 'black', fontSize: '24px' }}>→</div>
    </Html>
  </mesh>
);

const ThreeScene = ({ boxes, onDeleteBox }) => {
  const palletWidth = Math.max(10, boxes.reduce((acc, box) => acc + box.dimensions[0] + 0.5, 0));

  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} castShadow />
      <Pallet width={palletWidth} />
      {boxes.map((box, index) => (
        <Box
          key={box.id}
          id={index}
          position={box.position}
          dimensions={box.dimensions}
          color={box.color}
          onDelete={onDeleteBox}
        />
      ))}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
