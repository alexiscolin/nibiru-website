import Icon from '@/components/ui/icon'

interface Data {
  id: number
  title: string
  content: string
  ico: string
}
interface Props {
  data: Data
  className?: string
}

export default function KeyNumber({ className, data }: Props) {
  return (
    <div className={className + ' flex'}>
      <div className="mr-3">
        <Icon name={data.ico} />
      </div>
      <div>
        <div className="text-300 font-black leading-none">{data.title}</div>
        <div className="text-100 font-medium text-gray-700">{data.content}</div>
      </div>
    </div>
  )
}
