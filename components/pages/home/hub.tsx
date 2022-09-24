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
    detail: 'coming soon',
    disabled: true,
  },
  {
    id: 2,
    ico: 'docs',
    href: '#',
    title: (
      <p>
        Documentation <span className="text-gray-700">about Nibiru.</span>
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
      <section className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-7 w-full justify-between pb-10 md:pb-12 md:px-0">
        {data?.map((card) =>
          card.disabled ? (
            <Card
              key={card.id}
              ico={card.ico}
              detail={card.detail}
              disabled={card.disabled}
              className="w-full cols-span-1 sm:cols-span-2 md:cols-span-1 h-full js-hub_card opacity-0"
            >
              {card.title}
            </Card>
          ) : (
            <Link key={card.id} href={card.href}>
              <a className="w-full cols-span-1 sm:cols-span-2 md:cols-span-1 h-full js-hub_card opacity-0">
                <Card
                  ico={card.ico}
                  disabled={card.disabled}
                  detail={card.detail}
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
