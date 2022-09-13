import Link from 'next/link'
import LayoutWrapper from '@/components/layouts/wrapper'
import Card from '@/components/ui/card'
import React from 'react'

const data = [
  {
    id: 1,
    ico: 'start',
    href: '#',
    title: (
      <p>
        Open <span className="text-gray-700">the trading application.</span>
      </p>
    ),
    disabled: true,
  },
  {
    id: 2,
    ico: 'docs',
    href: '#',
    title: (
      <p>
        Documentation
        <br />
        <span className="text-gray-700">about Nibiru.</span>
      </p>
    ),
    disabled: false,
  },
  {
    id: 3,
    ico: 'explore',
    href: '#',
    title: (
      <p>
        Explore <span className="text-gray-700">blocks and transactions.</span>
      </p>
    ),
    disabled: false,
  },
]

export default function Hero() {
  return (
    <LayoutWrapper className="grid grid-cols-12 gap-4 ">
      <section className="flex col-span-7 w-full justify-between pb-12">
        {data?.map((card) =>
          card.disabled ? (
            <Card
              key={card.id}
              ico={card.ico}
              disabled={card.disabled}
              className=" w-1/3 h-full mr-4 last:mr-0"
            >
              {card.title}
            </Card>
          ) : (
            <Link key={card.id} href={card.href}>
              <a className=" w-1/3 h-full mr-4 last:mr-0">
                <Card
                  ico={card.ico}
                  disabled={card.disabled}
                  className="h-full"
                >
                  {card.title}
                </Card>
              </a>
            </Link>
          )
        )}
      </section>
    </LayoutWrapper>
  )
}
