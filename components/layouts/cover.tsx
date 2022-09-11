interface Props {
  children: React.ReactNode
  fullScreen?: boolean
}

export default function LayoutCover({ children, fullScreen = true }: Props) {
  return (
    <div className={`flex flex-col w-full${fullScreen ? ' min-h-screen' : ''}`}>
      <div className={fullScreen ? 'my-auto' : 'mt-[25vh]'}>{children}</div>
    </div>
  )
}
