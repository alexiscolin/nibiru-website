import Link from 'next/link'
import LayoutWrapper from '@/components/layouts/wrapper'
import IconsNibiru from '@/components/icons/nibiru'
import IconNotification from '@/components/icons/notification'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 py-8 w-full z-50">
      <LayoutWrapper className="grid grid-cols-12 gap-4 align-middle items-center justify-between w-full">
        <Link href="#" className="col-start-1 col-span-1">
          <a>
            <IconsNibiru className="w-11" />
          </a>
        </Link>
        <nav className="col-start-5 col-span-4 flex justify-center uppercase font-bold text-200 leading-none">
          <Link href="#">
            <a className="mr-8">Technology</a>
          </Link>
          <Link href="#">
            <a>Documentation</a>
          </Link>
        </nav>
        <div className="col-start-9 col-span-5 flex justify-end">
          <div className="flex align-center justify-center border border-gray-0 rounded p-4 w-10 bg-gray-900">
            <IconNotification />
          </div>
        </div>
      </LayoutWrapper>
    </header>
  )
}
