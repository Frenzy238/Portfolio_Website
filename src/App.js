import React, { useRef, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Html, Environment, useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import HeroPage from './HeroPage';
import RightClick from './RightClick';

function Model({ onRightClick }) {
  const { scene } = useGLTF('/models/coffee_shop/scene.gltf');
  return (
    <group onContextMenu={onRightClick}>
      <primitive object={scene} scale={1} />
      
      <Html className="content" rotation-x={7.6} rotation-y={1.8} rotation-z={5} position={[22.5, 10, -1.3]} transform occlude>
              <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
                <HeroPage />
              </div>
            </Html>'
            <Html>
              <RightClick/>
            </Html>
    </group>
  );
}

function CameraController({ targetPosition }) {
  const { camera } = useThree();
  const lookAtPoint = new THREE.Vector3(0, 0, 0);
  
  React.useEffect(() => {
    gsap.to(camera.position, {
      x: targetPosition[0],
      y: targetPosition[1],
      z: targetPosition[2],
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.lookAt(lookAtPoint);
      }
    });

    // Add tilt animation
    gsap.to(camera.rotation, {
      z: THREE.MathUtils.degToRad(15), // 15 degree tilt
      duration: 2,
      ease: "power2.inOut"
    });
  }, [targetPosition]);
  
  return null;
}

export default function App() {
  const [cameraPosition, setCameraPosition] = useState([70, 90, 50]);

  const handleRightClick = (event) => {
    event.stopPropagation();
    setCameraPosition([30, 12, -3]);
  };

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [70, 80, 50], fov: 75 }}>
        <CameraController targetPosition={cameraPosition} />
        <Model onRightClick={handleRightClick} />
        <Environment preset="sunset" />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
          enableDamping={true}
          minDistance={0}
          maxDistance={110}
        />
        
      </Canvas>
      
    </div>
  );
}