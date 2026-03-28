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
    <div className="w-[260px] bg-white rounded-2xl shadow-md overflow-hidden">

      <div className="w-full h-[160px] overflow-hidden">
        <img
          src="/spot_image_test.webp"
          alt={spot.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">

        <Link href={`/spot/${spot.id}`}>
          <p className="font-semibold text-lg hover:text-blue-600 transition">
            {spot.name}
          </p>
        </Link>

        <p className="text-sm text-gray-500 mt-1">
          {spot.time}
        </p>

        <p className="text-blue-600 font-bold mt-2">
          {spot.price}
        </p>

      </div>
    </div>
  )
}
