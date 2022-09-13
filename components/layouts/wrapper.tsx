interface Props {
  children: React.ReactNode
  className?: string
}

export default function LayoutWrapper({ children, className = '' }: Props) {
  return (
    <div
      className={
        className +
        ' relative w-full mx-auto max-w-[90rem] px-7 md:px-6 lg:px-8'
      }
    >
      {children}
    </div>
  )
}
