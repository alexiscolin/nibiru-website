interface Props {
  ico: string
  title: string
  cta: string
}

export default function Wrapper({ ico, title, cta }: Props) {
  return (
    <div>
      <span>{ico}</span>
      <span>{title}</span>
      <span>{cta}</span>
    </div>
  )
}
