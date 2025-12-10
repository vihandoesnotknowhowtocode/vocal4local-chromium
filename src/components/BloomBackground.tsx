import { Canvas } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingOrb = ({ position, color, size = 0.5, speed = 1 }: { position: [number, number, number]; color: string; size?: number; speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          toneMapped={false}
        />
      </Sphere>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      
      {/* Blue orbs */}
      <FloatingOrb position={[-3, 1, -2]} color="#3b82f6" size={0.4} speed={0.8} />
      <FloatingOrb position={[3, -1, -3]} color="#06b6d4" size={0.3} speed={1.2} />
      <FloatingOrb position={[-1, 2, -4]} color="#6366f1" size={0.5} speed={0.6} />
      <FloatingOrb position={[2, 0, -2]} color="#0ea5e9" size={0.25} speed={1} />
      <FloatingOrb position={[-2, -1.5, -3]} color="#3b82f6" size={0.35} speed={0.9} />
      <FloatingOrb position={[0, 1.5, -5]} color="#06b6d4" size={0.6} speed={0.5} />
      
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          intensity={1.5}
          radius={0.8}
        />
      </EffectComposer>
    </>
  );
};

const BloomBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default BloomBackground;
