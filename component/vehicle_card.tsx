// component/vehicleCard.tsx
'use client'

import Link from "next/link"

interface VehicleCardProps {
  brand: string
  model: string
  plate: string
}

export default function VehicleCard({
  brand,
  model,
  plate,
}: VehicleCardProps) {
  return (
    <div
      className="
        border border-gray-200
        rounded-2xl
        p-5
        bg-white
        shadow-sm
        hover:shadow-md
        transition
      "
    >
      <div className="flex items-start justify-between gap-4">

        {/* Dados */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            {brand} {model}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {plate}
          </p>
        </div>

        {/* Botão editar */}
        <Link
          href="/user/vehicle/register"
          className="
            px-4 py-2
            rounded-xl
            text-sm
            font-medium
            bg-gray-900
            text-white
            hover:bg-black
            transition
            shrink-0
          "
        >
          Editar
        </Link>

      </div>
    </div>
  )
}
