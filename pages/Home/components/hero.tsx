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
    content: 'Trades are executed instantly ',
    ico: 'thunder',
  },
]

export default function Hero() {
  return (
    <section className="flex items-center flex-col mb-11">
      <LayoutCover fullScreen={false}>
        <NibiruWording className={styles.word + ' absolute w-full'} />
        <LayoutWrapper>
          <div className="grid grid-cols-12 gap-4">
            <div className="relative col-start-1 col-span-9 mt-11">
              <h1 className="text-800 font-black mb-6 leading-none">
                <span className={styles.titleStroke + ' text-transparent'}>
                  Unlock leverage
                </span>
                &nbsp;at scale for the Cosmos ecosystem
              </h1>
              <HomeEphermis className="absolute -top-9 right-9" />
            </div>
            <div className="flex col-start-0 col-span-5 row-start-2">
              {keyNumbers.map((data) => (
                <KeyNumber
                  key={data.id}
                  data={data}
                  className="mr-8 last:mr-0"
                />
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </LayoutCover>
      <Image
        className="absolute w-[16vw] top-11 right-12"
        src="/images/nibi-earth@2x.png"
        alt="Nibiru's earth"
        width={359}
        height={658}
      />
    </section>
  )
}
