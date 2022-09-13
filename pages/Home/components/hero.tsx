import Image from 'next/future/image'
import styles from '../Home.module.css'
import LayoutCover from '@/components/layouts/cover'
import LayoutWrapper from '@/components/layouts/wrapper'
import KeyNumber from '@/components/ui/keyNumber'
import NibiruWording from './nibiru'
import HomeEphermis from './ephemeris'

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
    <section className="flex items-center flex-col mb-8 md:mb-11">
      <LayoutWrapper>
        <Image
          className="relative md:hidden mx-auto w-11 mt-10.5  z-40"
          src="/images/nibi-earth@2x.png"
          alt="Nibiru's earth"
          width={359}
          height={658}
        />
        <Image
          className="hidden md:block md:absolute mx-auto md:mt-0 md:w-[25vw] lg:w-[min(28vw,28rem)] md:top-11 lg:top-11 md:right-[10vw] lg:-right-3 xl:-right-9 z-40 pointer-events-none"
          src="/images/nibi-gems@2x.png"
          alt="Nibiru's earth"
          width={511}
          height={939}
        />
      </LayoutWrapper>
      <LayoutCover fullScreen={false}>
        <NibiruWording
          className={styles.word + ' hidden sm:block absolute w-full'}
        />
        <LayoutWrapper>
          <div className="grid grid-cols-12 gap-4">
            <div className="relative col-start-1 col-span-12 md:col-span-8 lg:col-span-10 xl:col-span-9 md:mt-9 lg:mt-10 xl:mt-11 mb-7 md:mb-6">
              <h1 className="text-center md:text-left text-500 md:text-600 lg:text-700 xl:text-800 font-black leading-none">
                <span className={'stroked text-transparent'}>
                  Unlock leverage
                </span>
                &nbsp;at scale
                <br className="hidden md:inline" /> for the Cosmos ecosystem
              </h1>
              <HomeEphermis className="absolute h-auto top-1/2 md:-top-7 lg:-top-6 xl:-top-8.5 md:left-[14rem] left-1/2 lg:left-[max(40%,25rem)] xl:left-[50%] -translate-y-1/2 md:translate-y-0 -translate-x-1/2 md:translate-x-0 md:-rotate-[170deg] md:-scale-x-100 xl:rotate-0 xl:scale-x-100 w-[12rem] lg:w-[18rem] xl:w-[25rem]" />
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
