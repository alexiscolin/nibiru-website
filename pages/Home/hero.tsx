import Image from 'next/future/image'
import NibiruWording from './nibiru'
import LayoutCover from '@/components/layouts/cover'

export default function Hero() {
  return (
    <section className="flex items-center flex-col">
      <LayoutCover>
        <NibiruWording className="w-full" />
        <div>
          <div>
            <div>Unlock leverage at scale for the Cosmos ecosystem</div>
            <div>cta</div>
          </div>
          <div>
            <div>chiffre</div>
            <div>chiffre</div>
          </div>
        </div>
      </LayoutCover>
      <Image
        className="absolute w-16"
        src="/images/nibi-earth@2x.png"
        alt="Nibiru's earth"
        width={359}
        height={658}
      />
    </section>
  )
}
