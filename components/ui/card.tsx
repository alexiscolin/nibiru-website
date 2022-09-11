interface Props {
  ico: string
  title: string
  cta: string
  disabled?: boolean
}

export default function Wrapper({ ico, title, cta }: Props) {
  return (
    <div className="flex flex-col w-full p-8 bg-gray-900 rounded">
      <span className="mb-8">{ico}</span>
      <span className="mb-9">{title}</span>
      <span>{cta}</span>
    </div>
  )
}
