import IconStart from '@/components/ui/icons/start'
import IconDocs from '@/components/ui/icons/docs'
import IconExplore from '@/components/ui/icons/explore'
import IconTwitter from '@/components/ui/icons/socials/twitter'
import IconMedium from '@/components/ui/icons/socials/medium'
import IconLinkedin from '@/components/ui/icons/socials/linkedin'
import IconGithub from '@/components/ui/icons/socials/github'
import IconDiscord from '@/components/ui/icons/socials/discord'
import IconWorld from '@/components/ui/icons/world'
import IconThunder from '@/components/ui/icons/thunder'

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
