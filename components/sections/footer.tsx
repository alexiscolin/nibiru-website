import Link from 'next/link'
import Icon from '@/components/ui/icon'
import LayoutWrapper from '@/components/layouts/wrapper'
import IconsNibiruGray from '@/components/icons/nibiruGray'

interface FooterLinks {
  id: number
  name: string
  url: string
}
interface SocialLinks {
  id: number
  ico: string
  name: string
  url: string
}

const footerLinks: FooterLinks[] = [
  {
    id: 0,
    name: 'Terms',
    url: 'https://docs.nibiru.fi/concepts/readme',
  },
  {
    id: 1,
    name: 'Privacy',
    url: 'https://docs.nibiru.fi/concepts/readme',
  },
]

const socialLinks: SocialLinks[] = [
  {
    id: 0,
    name: 'Discord',
    url: 'https://discord.com/invite/sgPw8ZYfpQ',
    ico: 'discord',
  },
  {
    id: 1,
    name: 'Twitter',
    url: 'https://twitter.com/NibiruChain',
    ico: 'twitter',
  },
  {
    id: 2,
    name: 'Linkedin',
    url: 'https://www.linkedin.com/company/nibiruchain/',
    ico: 'linkedin',
  },
  {
    id: 3,
    name: 'Medium',
    url: 'https://nibiruchain.medium.com/',
    ico: 'medium',
  },
  {
    id: 4,
    name: 'Github',
    url: 'https://github.com/NibiruChain',
    ico: 'github',
  },
]

export default function Footer() {
  return (
    <LayoutWrapper>
      <footer className="grid grid-cols-12 gap-x-3 gap-y-6 mb-7">
        <div className="col-span-7 flex justify-between">
          <div className="flex items-center">
            <div className="mr-9 w-9">
              <IconsNibiruGray />
            </div>
            {footerLinks.map((link) => (
              <Link href={link.url} key={link.id}>
                <a className="mr-6 font-medium">{link.name}</a>
              </Link>
            ))}
          </div>
          <nav className="flex text-gray-700">
            {socialLinks.map((link) => (
              <Link href={link.url} key={link.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 last:mr-0 hover:text-gray-0"
                  title={link.name}
                >
                  <Icon name={link.ico} />
                </a>
              </Link>
            ))}
          </nav>
        </div>
        <span className="col-span-12 text-100 text-gray-700">
          © 2022 Nibiru Overlords – {new Date().getFullYear()}
        </span>
      </footer>
    </LayoutWrapper>
  )
}
