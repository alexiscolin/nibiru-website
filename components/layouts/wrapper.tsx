interface Props {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: Props) {
  return (
    <div className="w-full mx-auto max-w-[90rem] m:px-9 l:px-10">
      {children}
    </div>
  )
}
