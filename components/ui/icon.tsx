import IconStart from '@/components/icons/start'
import IconDocs from '@/components/icons/docs'
import IconExplore from '@/components/icons/explore'
import IconTwitter from '@/components/icons/socials/twitter'
import IconMedium from '@/components/icons/socials/medium'
import IconLinkedin from '@/components/icons/socials/linkedin'
import IconGithub from '@/components/icons/socials/github'
import IconDiscord from '@/components/icons/socials/discord'
import IconWorld from '@/components/icons/world'
import IconThunder from '@/components/icons/thunder'

interface Props {
  name: string
  className?: string
}

type IconTypes = { [name: string]: React.FC }
const iconTypes: IconTypes = {
  start: IconStart,
  docs: IconDocs,
  explore: IconExplore,
  github: IconGithub,
  linkedin: IconLinkedin,
  medium: IconMedium,
  twitter: IconTwitter,
  discord: IconDiscord,
  world: IconWorld,
  thunder: IconThunder,
}

export default function Icon({ name, className }: Props) {
  const Component: React.FC<Props> = iconTypes[name]
  return <Component className={className} name={name} />
}
