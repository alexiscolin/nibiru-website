import Link from 'next/link'
import IconsNibiru from '@/components/icons/nibiru'

export default function Header() {
  return (
    <header className="w-full flex justify-between">
      <Link href="#">
        <a>
          <IconsNibiru className="w-11" />
        </a>
      </Link>
      <nav className="flex justify-between uppercase">
        <Link href="#">Technology</Link>
        <Link href="#">Documentation</Link>
      </nav>
    </header>
  )
}
