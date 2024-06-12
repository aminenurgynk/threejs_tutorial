//D:\threejsTrial\4thdemo\4th1demo\src\Model.js
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

function Model() {
  const group = useRef();
  const { scene } = useGLTF('/col.glb');

  return (
    <group ref={group} position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]}>
    <primitive object={scene} dispose={null} />
  </group>
  );
}

useGLTF.preload('/col.glb');

export default Model;
