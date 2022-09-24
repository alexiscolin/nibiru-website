import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import Link from 'next/link'
import LayoutWrapper from '@/components/layouts/wrapper'
import IconsNibiru from '@/components/ui/icons/nibiru'
// import IconNotification from '@/components/ui/icons/notification'

export default function Header() {
  const header = useRef(null)

  useEffect(() => {
    gsap.from(header.current, { autoAlpha: 0, delay: 2.5 })
  })

  return (
    <header
      className="fixed top-0 left-0 py-6 md:py-8 w-full z-50"
      ref={header}
    >
      <LayoutWrapper className="grid grid-cols-12 gap-4 align-middle items-start sm:items-center justify-between w-full">
        <Link href="/" className="col-start-1 col-span-1">
          <a>
            <IconsNibiru className="w-9.5 md:w-11" />
          </a>
        </Link>
        <nav className="col-start-5 col-span-8 flex flex-col sm:flex-row items-end justify-end uppercase font-bold text-100 lg:text-200 leading-none">
          <Link href="https://github.com/NibiruChain">
            <a className={'navLink mt-3 mb-6 sm:my-0 mr-0 sm:mr-6 lg:mr-8'}>
              Code
            </a>
          </Link>
          <Link href="https://docs.nibiru.fi/concepts/readme">
            <a className={'navLink'}>Docs</a>
          </Link>
        </nav>
        {/* <div className="col-start-9 col-span-5 flex justify-end">
          <div className="flex align-center justify-center border border-gray-0 rounded p-4 w-10 bg-gray-900">
            <IconNotification />
          </div>
        </div> */}
      </LayoutWrapper>
    </header>
  )
}
