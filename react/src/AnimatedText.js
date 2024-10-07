import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { startTransition } from 'react';

const AnimatedText = () => {
  const mesh = useRef();

  useFrame(() => {
    // Wrap the updates in startTransition to avoid suspending the UI
    startTransition(() => {
      if (mesh.current) {
        mesh.current.rotation.x += 0.005;
        mesh.current.rotation.y += 0.005;
      }
    });
  });

  useEffect(() => {
    console.log("AnimatedText component rendered");
  }, []); // Add an empty dependency array to log only when the component is first rendered

  return (
    <Text
      ref={mesh}
      color={'rgba(0, 255, 0, 0.7)'}
      fontSize={2}
      maxWidth={200}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign={'center'}
    >
      Chips Coming ...
    </Text>
  );
};

const AnimatedTextCanvas = () => {
  useEffect(() => {
    console.log("AnimatedTextCanvas component rendered");
  }, []); // Log only when the component is first rendered

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <AnimatedText />
      </Canvas>
    </div>
  );
};

export default AnimatedTextCanvas;
