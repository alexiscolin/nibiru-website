import Link from 'next/link'
import Icon from '@/components/ui/icon'
import LayoutWrapper from '@/components/layouts/wrapper'
import IconsNibiruGray from '@/components/ui/icons/nibiruGray'

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
    url: 'terms-and-conditions.pdf',
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
    url: 'https://blog.nibiru.fi/',
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
        <div className="col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-7 flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col sm:flex-row text-center justify-between sm:items-center">
            <IconsNibiruGray className="sm:mr-6 md:mr-9 w-10 md:w-9 mx-auto mb-5 sm:mb-0" />
            <div>
              {footerLinks.map((link) => (
                <Link href={link.url} key={link.id}>
                  <a className="navLink mr-5 md:mr-6 last:mr-0 font-medium">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <nav className="flex justify-center text-gray-700 mt-6 sm:mt-0">
            {socialLinks.map((link) => (
              <Link href={link.url} key={link.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="mr-5 md:mr-6 last:mr-0 hover:text-gray-0 transition-all ease-in-out duration-150"
                  title={link.name}
                >
                  <Icon name={link.ico} />
                </a>
              </Link>
            ))}
          </nav>
        </div>
        <span className="col-span-12 text-center md:text-left text-100 text-gray-700 mt-6">
          © {new Date().getFullYear()} Nibiru Overlords
        </span>
      </footer>
    </LayoutWrapper>
  )
}
