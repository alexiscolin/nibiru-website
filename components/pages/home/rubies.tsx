/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import useMousePosition from '@/components/useMousePosition'

type GLTFResult = GLTF & {
  nodes: {
    ['nibi-gem']: THREE.Mesh
    ['axelar-gem']: THREE.Mesh
    ['cosmos-gem']: THREE.Mesh
  }
}
type Props = JSX.IntrinsicElements['group'] & {
  addAnimation: (animation: GSAPTimeline | GSAPTween) => void
}

export default function Rubies(props: Props) {
  const { nodes } = useGLTF(
    '/models/homepage-scene.glb'
  ) as unknown as GLTFResult

  const bakedTexture = useTexture('/models/backing-dark.jpg')

  const gems = useRef<THREE.Group>(null)
  const nibi = useRef<THREE.Mesh>(null)
  const nibiWrap = useRef<THREE.Group>(null)
  const axelar = useRef<THREE.Mesh>(null)
  const axelarWrap = useRef<THREE.Group>(null)
  const cosmos = useRef<THREE.Mesh>(null)
  const cosmosWrap = useRef<THREE.Group>(null)

  const tl = useRef<GSAPTimeline | null>(null)
  const tlNibi = useRef<GSAPTimeline | null>(null)
  const tlAxelar = useRef<GSAPTimeline | null>(null)
  const tlCosmos = useRef<GSAPTimeline | null>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    tl.current = gsap.timeline()
    tlNibi.current = gsap.timeline({ repeat: -1 })
    tlCosmos.current = gsap.timeline({ repeat: -1, delay: 0.4 })
    tlAxelar.current = gsap.timeline({ repeat: -1, delay: 0.8 })

    const breakPoint = 800

    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
      },
      (context) => {
        const isDesktop = context?.conditions?.isDesktop

        if (tl.current !== null) {
          tl.current.to(
            nibi?.current?.position || null,
            {
              y: 2.89,
              ease: 'power2.out',
              duration: 1.4,
            },
            isDesktop ? 1.8 : 0
          )
          tl.current.to(
            nibi?.current?.rotation || null,
            {
              y: -0.65,
              ease: 'power2.out',
              duration: 1.4,
            },
            '<'
          )
          tl.current.to(
            cosmos?.current?.position || null,
            {
              y: 0.27,
              ease: 'power2.out',
              duration: 1.4,
            },
            isDesktop ? 1.95 : 0.15
          )
          tl.current.to(
            cosmos?.current?.rotation || null,
            {
              y: -0.29,
              ease: 'power2.out',
              duration: 1.4,
            },
            '<'
          )
          tl.current.to(
            axelar?.current?.position || null,
            {
              y: -2.08,
              ease: 'power2.out',
              duration: 1.4,
            },
            isDesktop ? 2.23 : 0.28
          )
          tl.current.to(
            axelar?.current?.rotation || null,
            {
              y: -0.27,
              ease: 'power2.out',
              duration: 1.4,
            },
            '<'
          )
        }
      }
    )

    if (
      tlNibi.current !== null &&
      tlCosmos.current !== null &&
      tlAxelar.current !== null
    ) {
      const animation = [
        {
          y: -0.2,
          ease: 'Sine.easeInOut',
          duration: 2.5,
        },
        {
          y: 0,
          ease: 'Sine.easeInOut',
          duration: 2.5,
        },
      ]
      tlNibi.current
        .to(nibiWrap?.current?.position || null, animation[0])
        .to(nibiWrap?.current?.position || null, animation[1])

      tlCosmos.current
        .to(cosmosWrap?.current?.position || null, animation[0])
        .to(cosmosWrap?.current?.position || null, animation[1])

      tlAxelar.current
        .to(axelarWrap?.current?.position || null, animation[0])
        .to(axelarWrap?.current?.position || null, animation[1])
    }

    if (tl.current !== null) {
      props.addAnimation(tl.current)
    }

    return () => {
      tl.current?.kill()
      tlNibi.current?.kill()
      tlCosmos.current?.kill()
      tlAxelar.current?.kill()
    }
  }, [props, tl])

  const { cursorX, cursorY } = useMousePosition()
  useFrame(() => {
    if (gems.current !== null) {
      gems.current.rotation.y += (cursorX - gems.current.rotation.y) * 0.05
      gems.current.rotation.x += (cursorY / 2 - gems.current.rotation.x) * 0.05
    }
  })

  return (
    <group {...props} dispose={null} ref={gems}>
      <group ref={nibiWrap} dispose={null}>
        <mesh
          ref={nibi}
          geometry={nodes['nibi-gem'].geometry}
          material={nodes['nibi-gem'].material}
          position={[-0.04, -3, -1.91]}
          rotation={[3.14, -4, 3.14]}
          scale={[1.3, 1.3, 1.3]}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
      </group>
      <group ref={axelarWrap} dispose={null}>
        <mesh
          ref={axelar}
          geometry={nodes['axelar-gem'].geometry}
          material={nodes['axelar-gem'].material}
          position={[-1.51, -9, 2.12]}
          rotation={[-3.14, -4, 0]}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
      </group>
      <group ref={cosmosWrap} dispose={null}>
        <mesh
          ref={cosmos}
          geometry={nodes['cosmos-gem'].geometry}
          material={nodes['cosmos-gem'].material}
          position={[2.26, -7, 0.99]}
          rotation={[-3.14, -4, 0]}
        >
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/homepage-scene.glb')
