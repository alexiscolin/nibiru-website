interface Props {
  children: React.ReactNode
}

export default function LayoutCover({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="my-auto">{children}</div>
    </div>
  )
}
