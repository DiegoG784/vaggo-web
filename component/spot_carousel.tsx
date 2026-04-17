'use client'

import { useState } from 'react'
import SpotCard from './spot_card'

interface SpotCarouselProps {
  title: string
}

export default function SpotCarousel({ title }: SpotCarouselProps) {
  const [index, setIndex] = useState(0)

  const CARD_WIDTH = 260
  const GAP = 12
  const STEP = CARD_WIDTH + GAP

  const spots = [
    { id: 1, name: "Shopping Interlagos", time: "Seg-Sex • 10h às 18h", price: "R$ 120 / diária" },
    { id: 2, name: "Parking Center", time: "24 horas", price: "R$ 80 / diária" },
    { id: 3, name: "Estaciona SP", time: "Seg-Sáb • 8h às 20h", price: "R$ 100 / diária" },
    { id: 4, name: "Smart Park", time: "24 horas", price: "R$ 90 / diária" },
    { id: 5, name: "Royal Parking", time: "Seg-Dom • 6h às 22h", price: "R$ 110 / diária" }
  ]

  const visibleCards = 3
  const maxIndex = spots.length - visibleCards

  const next = () => index < maxIndex && setIndex(index + 1)
  const prev = () => index > 0 && setIndex(index - 1)

  return (
    <section className="w-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">

        <h2 className="text-2xl font-semibold text-gray-900">
          {title}
        </h2>

        <div className="flex gap-2">

          <button
            onClick={prev}
            disabled={index === 0}
            className="
              w-8 h-8
              rounded-full
              bg-white
              border border-gray-200
              shadow-sm
              hover:bg-gray-50
              disabled:opacity-30
            "
          >
            ‹
          </button>

          <button
            onClick={next}
            disabled={index === maxIndex}
            className="
              w-8 h-8
              rounded-full
              bg-white
              border border-gray-200
              shadow-sm
              hover:bg-gray-50
              disabled:opacity-30
            "
          >
            ›
          </button>

        </div>
      </div>

      {/* Slides */}
      <div className="overflow-hidden">
        <div
          className="flex gap-3 transition-transform duration-300"
          style={{
            transform: `translateX(-${index * STEP}px)`
          }}
        >
          {spots.map((spot) => (
            <div key={spot.id} className="min-w-[260px]">
              <SpotCard spot={spot} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
