import { useRef, useEffect, Suspense, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { Canvas } from '@react-three/fiber'
import { OrthographicCamera, TorusKnot } from '@react-three/drei'

import styles from './hero.module.css'
import LayoutCover from '@/components/layouts/cover'
import LayoutWrapper from '@/components/layouts/wrapper'
import KeyNumber from '@/components/ui/keyNumber'
import NibiruWording from './nibiru'
import Hub from '@/components/pages/home/hub'
import Rubies from '@/components/pages/home/rubies'
import useResize from '@/components/useResize'

interface KeyNumbers {
  id: number
  title: string
  content: string
  ico: string
}

const keyNumbers: KeyNumbers[] = [
  {
    id: 0,
    title: '+40 blockchains',
    content: 'Interoperability',
    ico: 'world',
  },
  {
    id: 1,
    title: '<2s block times',
    content: 'Fast trade execution',
    ico: 'thunder',
  },
]

export default function Hero() {
  const nibiWord = useRef<HTMLDivElement>(null)
  const mask = useRef<HTMLDivElement>(null)
  const hero = useRef<HTMLDivElement>(null)
  const [tl] = useState<GSAPTimeline>(() => gsap.timeline())

  useEffect(() => {
    const mm = gsap.matchMedia()
    const qw = gsap.utils.selector(nibiWord)
    const qt = gsap.utils.selector(hero)
    const breakPoint = 800

    mm.add(`(min-width: ${breakPoint}px)`, () => {
      tl.to(mask.current, { autoAlpha: 0, duration: 0.5 })
        .from(qw('#js-word > .js-word_letter'), {
          yPercent: 100,
          stagger: 0.1,
          ease: 'expo.out',
          duration: 1,
        })
        .set(qw('#js-word-gradient'), {
          autoAlpha: 1,
        })
        .to(
          qw('#js-word'),
          {
            autoAlpha: 0,
            ease: 'expo.out',
            duration: 2,
          },
          '<=-.2'
        )
        .from(
          qt('.js-title'),
          {
            autoAlpha: 0,
            yPercent: 100,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power2.out',
          },
          '<'
        )
        .from(
          qt('.js-hero_keynumber'),
          {
            autoAlpha: 0,
            yPercent: 100,
            duration: 0.8,
            ease: 'power2.out',
          },
          '<=+.4'
        )
        .from(
          qt('.js-hub_card'),
          {
            autoAlpha: 0,
            duration: 2,
            ease: 'power2.out',
          },
          '<=+.4'
        )
        .from('.js-gems', { autoAlpha: 0, duration: 1.5 }, 2)
    })

    mm.add(`(max-width: ${breakPoint - 1}px)`, () => {
      tl.to(mask.current, { autoAlpha: 0, duration: 0.5 })
      tl.from('.js-gems', { autoAlpha: 0, duration: 1.5 }, 0)
    })

    return () => {
      tl.kill()
    }
  }, [tl])

  const addAnimation = useCallback(
    (animation: GSAPTimeline | GSAPTween) => {
      tl.add(animation, 0)
    },
    [tl]
  )

  const windowWidth = useResize()
  return (
    <div ref={hero}>
      <div
        className="fixed w-full h-full bg-gray-1000 top-0 left-0 z-50"
        ref={mask}
      ></div>
      <section className="flex items-center flex-col mb-8 md:mb-[min(10vh,theme(spacing.12))]">
        <div className="md:absolute top-0 left-0 w-full h-[60vh] md:h-full z-10">
          <Canvas camera={{ fov: 75 }} className="js-gems">
            <Suspense fallback={null}>
              <OrthographicCamera
                makeDefault
                zoom={windowWidth >= 800 ? 70 : 45}
              />
              <Rubies
                position={[windowWidth >= 800 ? windowWidth / 250 : 0, -1, -5]}
                addAnimation={addAnimation}
              />
            </Suspense>
          </Canvas>
        </div>
        <LayoutCover fullScreen={false}>
          <NibiruWording ref={nibiWord} className={styles.word} />
          <LayoutWrapper>
            <div className="grid grid-cols-12 gap-4">
              <div className="relative col-start-1 col-span-12 md:col-span-8 lg:col-span-10 xl:col-span-9 md:mt-9 lg:mt-10 xl:mt-10 mb-7 md:mb-6">
                <h1 className="text-center md:text-left text-500 md:text-600 lg:text-700 xl:text-800 font-black leading-none">
                  <span className="js-title | inline-block">
                    <span className={'stroked text-transparent'}>
                      Unlock leverage
                    </span>
                    &nbsp;at scale
                  </span>
                  <span className="js-title | md:inline-block inline">
                    for the Cosmos ecosystem
                  </span>
                </h1>
              </div>
              <div className="col-start-0 flex flex-col sm:flex-row md:col-start-1 col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-5 row-start-2 items-center sm:items-start justify-around sm:justify-center md:justify-start  | js-hero_keynumber">
                {keyNumbers.map((data) => (
                  <KeyNumber
                    key={data.id}
                    data={data}
                    className="sm:mr-8 mb-4 sm:mb-0 last:mr-0"
                  />
                ))}
              </div>
            </div>
          </LayoutWrapper>
        </LayoutCover>
      </section>
      <Hub />
    </div>
  )
}
