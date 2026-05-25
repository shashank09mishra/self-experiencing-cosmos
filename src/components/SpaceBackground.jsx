import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Stars({ count = 6000 }) {
  const mesh = useRef()
  const { mouse } = useThree()

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 400
      pos[i * 3 + 1] = (Math.random() - 0.5) * 400
      pos[i * 3 + 2] = (Math.random() - 0.5) * 400

      // Mix of cyan, white, purple colors
      const r = Math.random()
      if (r < 0.3) {
        // Cyan stars
        col[i * 3] = 0
        col[i * 3 + 1] = 0.8 + Math.random() * 0.2
        col[i * 3 + 2] = 1
      } else if (r < 0.5) {
        // Purple stars
        col[i * 3] = 0.4 + Math.random() * 0.3
        col[i * 3 + 1] = 0.1
        col[i * 3 + 2] = 0.8 + Math.random() * 0.2
      } else {
        // White/blue stars
        const v = 0.7 + Math.random() * 0.3
        col[i * 3] = v * 0.8
        col[i * 3 + 1] = v * 0.9
        col[i * 3 + 2] = v
      }
    }
    return [pos, col]
  }, [count])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = t * 0.02 + mouse.x * 0.1
    mesh.current.rotation.x = t * 0.01 + mouse.y * 0.05
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.5} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

function NebulaCloud() {
  const mesh = useRef()
  const count = 2000

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const r = 40 + Math.random() * 60
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.3
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [count])

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.003
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={1.5} color="#4c1d95" transparent opacity={0.3} sizeAttenuation />
    </points>
  )
}

function FloatingOrbs() {
  const group = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.children.forEach((child, i) => {
      child.position.y = Math.sin(t * 0.5 + i * 1.2) * 3
      child.position.x = Math.cos(t * 0.3 + i * 0.8) * 2
    })
  })

  return (
    <group ref={group}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[
          (i - 2) * 15,
          Math.sin(i * 1.2) * 5,
          -20 + i * 5
        ]}>
          <sphereGeometry args={[0.3 + Math.random() * 0.3, 16, 16]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#00f5ff' : '#7c3aed'}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0" style={{ background: 'radial-gradient(ellipse at center, #0a0520 0%, #030308 70%)' }}>
      <Canvas
        camera={{ position: [0, 0, 50], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Stars />
        <NebulaCloud />
        <FloatingOrbs />
        <fog attach="fog" args={['#030308', 100, 400]} />
      </Canvas>
    </div>
  )
}
