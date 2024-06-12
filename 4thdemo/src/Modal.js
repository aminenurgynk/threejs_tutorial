import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

function Model() {
  const group = useRef();
  const { nodes, materials } = useGLTF('/hauntedHause1.glb');

  return (
    <group ref={group} dispose={null}>
      <mesh
        geometry={nodes.YourModel.geometry}
        material={materials.YourMaterial}
      />
    </group>
  );
}

useGLTF.preload('/path/to/your/model.glb');

export default Model;
