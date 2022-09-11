import Link from 'next/link'
import LayoutWrapper from '@/components/layouts/wrapper'
import IconsNibiru from '@/components/icons/nibiru'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 py-8 w-full">
      <LayoutWrapper className="flex justify-between w-full">
        <Link href="#">
          <a>
            <IconsNibiru className="w-11" />
          </a>
        </Link>
        <nav className="flex justify-between uppercase font-bold">
          <Link href="#">
            <a className="mr-8">Technology</a>
          </Link>
          <Link href="#">
            <a>Documentation</a>
          </Link>
        </nav>
      </LayoutWrapper>
    </header>
  )
}
