import styles from './hero.module.css'
import LayoutCover from '@/components/layouts/cover'
import LayoutWrapper from '@/components/layouts/wrapper'
import KeyNumber from '@/components/ui/keyNumber'
import NibiruWording from './nibiru'

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
    content: 'Widely open for users',
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
  return (
    <section className="flex items-center flex-col mb-8 md:mb-[min(10vh,theme(spacing.12))]">
      <LayoutWrapper>
        <picture>
          <source
            srcSet="/images/nibi-earth.avif 1x, /images/nibi-earth@2x.avif 2x"
            type="image/avif"
          />
          <source
            srcSet="/images/nibi-earth.webp 1x, /images/nibi-earth@2x.webp 2x"
            type="image/webp"
          />
          <img
            src="/images/nibi-earth.png"
            srcSet="/images/nibi-earth.png 1x, /images/nibi-earth@2x.png 2x"
            alt="Nibiru's earth"
            loading="lazy"
            className="relative md:hidden mx-auto w-11 mt-10.5 z-40"
            width={359}
            height={658}
          />
        </picture>

        <picture>
          <source
            srcSet="/images/nibi-gems.avif 1x, /images/nibi-gems@2x.avif 2x"
            type="image/avif"
          />
          <source
            srcSet="/images/nibi-gems.webp 1x, /images/nibi-gems@2x.webp 2x"
            type="image/webp"
          />
          <img
            src="/images/nibi-gems.png"
            srcSet="/images/nibi-gems.png 1x, /images/nibi-gems@2x.png 2x"
            alt="Nibiru's earth"
            loading="lazy"
            className="hidden md:block md:absolute mx-auto md:mt-0 md:w-[25vw] lg:w-[min(28vw,28rem)] md:top-11 lg:top-11 md:right-[10vw] lg:-right-3 xl:-right-9 z-40 pointer-events-none"
            width={511}
            height={939}
          />
        </picture>
      </LayoutWrapper>
      <LayoutCover fullScreen={false}>
        <NibiruWording
          className={styles.word + ' hidden sm:block absolute w-full'}
        />
        <LayoutWrapper>
          <div className="grid grid-cols-12 gap-4">
            <div className="relative col-start-1 col-span-12 md:col-span-8 lg:col-span-10 xl:col-span-9 md:mt-9 lg:mt-10 xl:mt-10 mb-7 md:mb-6">
              <h1 className="text-center md:text-left text-500 md:text-600 lg:text-700 xl:text-800 font-black leading-none">
                <span className={'stroked text-transparent'}>
                  Unlock leverage
                </span>
                &nbsp;at scale
                <br className="hidden md:inline" /> for the Cosmos ecosystem
              </h1>
            </div>
            <div className="col-start-0 flex flex-col sm:flex-row md:col-start-1 col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-5 row-start-2 items-center sm:items-start justify-around sm:justify-center md:justify-start">
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
  )
}
