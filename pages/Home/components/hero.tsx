import Image from 'next/future/image'
import LayoutCover from '@/components/layouts/cover'
import LayoutWrapper from '@/components/layouts/wrapper'
import NibiruWording from './nibiru'

export default function Hero() {
  return (
    <section className="flex items-center flex-col mb-11">
      <LayoutCover fullScreen={false}>
        <NibiruWording className="w-full mb-10" />
        <LayoutWrapper>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 col-start-1">
              <h1 className="text-500 font-bold mb-7">
                Unlock leverage at scale for the Cosmos ecosystem
              </h1>
              <div className="">
                <button className="rounded-full py-4 px-7 bg-gray-50 text-gray-900 text-400 font-bold">
                  Stayed tuned
                </button>
              </div>
            </div>
            <div className="col-span-1 col-start-3">
              {/* <div>chiffre</div>
              <div>chiffre</div> */}
            </div>
          </div>
        </LayoutWrapper>
      </LayoutCover>
      <Image
        className="absolute w-16 top-10"
        src="/images/nibi-earth@2x.png"
        alt="Nibiru's earth"
        width={359}
        height={658}
      />
    </section>
  )
}
