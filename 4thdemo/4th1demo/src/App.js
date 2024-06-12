//D:\threejsTrial\4thdemo\4th1demo\src\App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

function App() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight intensity={5} />
      <spotLight position={[0, 0, 0]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[0, 0, 0]} intensity={0.5} />
      <OrbitControls />
      <Model />
    </Canvas>
  );
}

export default App;

