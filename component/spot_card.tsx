'use client'

import Link from "next/link"

interface Spot {
  id: number
  name: string
  time: string
  price: string
}

interface SpotProps {
  spot: Spot
}

export default function SpotCard({ spot }: SpotProps) {
  return (
    <div className="
      w-[260px]
      bg-white
      border border-gray-200
      rounded-2xl
      shadow-sm
      overflow-hidden
      hover:shadow-md
      transition
    ">

      {/* Imagem */}
      <div className="w-full h-[160px] overflow-hidden">
        <img
          src="/spot_image_test.webp"
          alt={spot.name}
          className="
            w-full h-full object-cover
            hover:scale-105
            transition duration-300
          "
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4">

        <Link href={`/spot/${spot.id}`}>
          <h3 className="
            font-semibold
            text-lg
            text-gray-900
            hover:text-black
            transition
          ">
            {spot.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 mt-1">
          {spot.time}
        </p>

        <p className="text-gray-900 font-semibold mt-3">
          {spot.price}
        </p>

      </div>
    </div>
  )
}
