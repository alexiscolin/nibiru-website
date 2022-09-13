import Icon from '@/components/ui/icon'

interface Props {
  children: React.ReactNode
  ico: string
  disabled?: boolean
  className?: string
  detail?: string
}

export default function Wrapper({
  className,
  ico,
  children,
  detail,
  disabled,
}: Props) {
  return (
    <div
      className={
        className +
        (disabled
          ? ' bg-gray-800 text-gray-0 border-gray-0 border'
          : ' bg-gray-0 text-gray-800 hover:bg-gray-50 transition-all ease-in-out duration-150') +
        ' flex flex-col w-full py-7 px-6 rounded-lg'
      }
    >
      <div className="flex justify-between uppercase text-100 font-medium">
        <Icon className="mb-7.5" name={ico} />
        {detail && <span>{detail}</span>}
      </div>
      <span className="text-300 md:text-300 font-black leading-tight">
        {children}
      </span>
    </div>
  )
}
