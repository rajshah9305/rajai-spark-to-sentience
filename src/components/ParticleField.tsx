import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  color?: string;
}

function Particles({ count = 200, color = '#f59e0b' }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);
  
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    
    return { positions, velocities };
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame(() => {
    if (!mesh.current) return;
    
    const posAttr = mesh.current.geometry.attributes.position;
    const posArray = posAttr.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      posArray[i * 3] += velocities[i * 3];
      posArray[i * 3 + 1] += velocities[i * 3 + 1];
      posArray[i * 3 + 2] += velocities[i * 3 + 2];
      
      // Smooth boundary transitions
      if (Math.abs(posArray[i * 3]) > 6) velocities[i * 3] *= -0.9;
      if (Math.abs(posArray[i * 3 + 1]) > 6) velocities[i * 3 + 1] *= -0.9;
      if (Math.abs(posArray[i * 3 + 2]) > 6) velocities[i * 3 + 2] *= -0.9;
    }
    
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        color={color}
        size={1.5}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

interface ParticleFieldProps {
  color?: string;
  count?: number;
}

export default function ParticleField({ color = '#f59e0b', count = 200 }: ParticleFieldProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
        dpr={Math.min(window.devicePixelRatio, 1.5)}
        performance={{ min: 0.5 }}
      >
        <Particles count={count} color={color} />
      </Canvas>
    </div>
  );
}