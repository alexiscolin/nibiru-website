import Icon from '@/components/ui/icon'

interface Props {
  children: React.ReactNode
  ico: string
  disabled?: boolean
  className?: string
}

export default function Wrapper({ className, ico, children, disabled }: Props) {
  return (
    <div
      className={
        className +
        (disabled
          ? ' bg-gray-800 text-gray-0 border-gray-0 border'
          : ' bg-gray-0 text-gray-800') +
        ' flex flex-col w-full py-7 px-6 rounded-lg'
      }
    >
      <Icon className="mb-7.5" name={ico} />
      <span className="text-300 font-black leading-tight">{children}</span>
    </div>
  )
}
