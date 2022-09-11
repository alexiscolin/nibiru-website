import LayoutWrapper from '@/components/layouts/wrapper'
import Card from '@/components/ui/card'

const data = [
  {
    id: 1,
    ico: 'John Doe',
    title: 'Start doing x, doing y and doing z.',
    cta: 'comming-soon',
    disabled: true,
  },
  {
    id: 2,
    ico: 'Victor Wayne',
    title: 'Start doing x, doing y and doing z.',
    cta: 'comming-soon',
    disabled: true,
  },
  {
    id: 3,
    ico: 'Jane Doe',
    title: 'Start doing x, doing y and doing z.',
    cta: 'comming-soon',
    disabled: true,
  },
]

export default function Hero() {
  return (
    <LayoutWrapper>
      <section className="grid grid-cols-3 gap-4 w-full justify-between pb-12">
        {data?.map((card) => (
          <Card
            key={card.id}
            ico={card.ico}
            title={card.title}
            cta={card.cta}
          />
        ))}
      </section>
    </LayoutWrapper>
  )
}
