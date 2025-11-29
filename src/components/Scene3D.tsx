import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedSphere({ position, scale, color, speed = 1 }: { position: [number, number, number]; scale: number; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

function AnimatedTorus({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <Torus ref={meshRef} args={[1, 0.4, 16, 100]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </Torus>
    </Float>
  );
}

function AnimatedBox({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <Box ref={meshRef} args={[1, 1, 1]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          wireframe
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Box>
    </Float>
  );
}

function AnimatedIcosahedron({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={2} floatIntensity={1.8}>
      <Icosahedron ref={meshRef} args={[1, 1]} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.9}
          wireframe
          emissive={color}
          emissiveIntensity={0.4}
        />
      </Icosahedron>
    </Float>
  );
}

function Particles() {
  const count = 100;
  const meshRef = useRef<THREE.Points>(null);
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <spotLight position={[0, 10, 0]} intensity={0.8} color="#ffffff" angle={0.3} penumbra={1} />
          
          <AnimatedSphere position={[-4, 2, -2]} scale={0.8} color="#00ffff" speed={1.2} />
          <AnimatedSphere position={[4, -1, -3]} scale={0.6} color="#8b5cf6" speed={0.8} />
          <AnimatedTorus position={[3, 2, -1]} scale={0.5} color="#00ffff" />
          <AnimatedTorus position={[-3, -2, -2]} scale={0.4} color="#8b5cf6" />
          <AnimatedBox position={[0, 3, -4]} scale={0.6} color="#00ffff" />
          <AnimatedBox position={[-5, 0, -3]} scale={0.4} color="#8b5cf6" />
          <AnimatedIcosahedron position={[5, -2, -2]} scale={0.5} color="#00ffff" />
          <AnimatedIcosahedron position={[-2, -3, -1]} scale={0.35} color="#8b5cf6" />
          
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
