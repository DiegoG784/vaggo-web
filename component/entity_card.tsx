// component/entity_card.tsx
'use client'

import Link from "next/link"

type CardType = "vehicle" | "property" | "spot"

interface VehicleData {
  brand: string
  model: string
  color: string
  licensePlate: string
  manufactureYear: string | Date
}

interface PropertyData {
  name: string
  type: string
  description: string
  totalCapacity: number
  addressId: number
}

interface SpotData {
  size: number
  status: "DISPONIVEL" | "INDISPONIVEL" | "OCUPADA"
  identifier: string
  isCovered: boolean
  approvalStatus: "PENDENTE" | "APROVADA" | "RECUSADA"
  allowedVehicles: string
  operatingHours: string
}

interface EntityCardProps {
  type: CardType
  data: VehicleData | PropertyData | SpotData
  editHref?: string
}

export default function EntityCard({
  type,
  data,
  editHref = "#"
}: EntityCardProps) {
  function renderContent() {
    /* VEHICLE */
    if (type === "vehicle") {
      const vehicle = data as VehicleData

      return (
        <>
          <h3 className="text-lg font-semibold text-gray-900">
            {vehicle.brand} {vehicle.model}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {vehicle.licensePlate}
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            <Tag>{vehicle.color}</Tag>
            <Tag>
              {new Date(vehicle.manufactureYear).getFullYear()}
            </Tag>
          </div>
        </>
      )
    }

    /* PROPERTY */
    if (type === "property") {
      const property = data as PropertyData

      return (
        <>
          <h3 className="text-lg font-semibold text-gray-900">
            {property.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {property.type}
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            <Tag>{property.totalCapacity} vagas</Tag>
            <Tag>ID {property.addressId}</Tag>
          </div>
        </>
      )
    }

    /* SPOT */
    const spot = data as SpotData

    return (
      <>
        <h3 className="text-lg font-semibold text-gray-900">
          Vaga {spot.identifier}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {spot.operatingHours}
        </p>

        <div className="flex gap-2 mt-3 flex-wrap">
          <Tag>{spot.status}</Tag>
          <Tag>{spot.isCovered ? "Coberta" : "Descoberta"}</Tag>
        </div>
      </>
    )
  }

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
        <div className="flex-1">
          {renderContent()}
        </div>

        {/* Botão */}
        <Link
          href={editHref}
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

function Tag({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <span
      className="
        px-3 py-1
        rounded-full
        text-xs
        bg-gray-100
        text-gray-700
      "
    >
      {children}
    </span>
  )
}
