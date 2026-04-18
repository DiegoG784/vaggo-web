// app/account/page.tsx
'use client'

import Header from "@/component/header"
import { useState } from "react"
import Link from "next/link"

import TabContainer from "@/component/container/TabContainer/tabContainer"
import TabPage from "@/component/container/TabContainer/tabPage"
import TabSidebar from "@/component/container/TabContainer/tabSidebar"

import EntityCard from "@/component/entity_card"
import EditCard from "@/component/edit_card"

function ProfileItem({
  label,
  value
}: {
  label: string
  value: string
}) {
  return (
    <div className="border border-gray-200 rounded-2xl p-4 bg-white">
      <p className="text-sm text-gray-500 mb-1">
        {label}
      </p>

      <p className="font-medium text-gray-900">
        {value}
      </p>
    </div>
  )
}

export default function Page() {
  const [activeTab, setActiveTab] = useState("Perfil")
  const [isEditing, setIsEditing] = useState(false)

  const user = {
    email: "galvian@email.com",
    lastLogin: "2026-04-17T10:30:00.000Z",
    person: {
      name: "Galvian",
      cpf: "123.456.789-00",
      phone: "(11) 99999-9999",
      birthDate: "1999-08-15",
      isActive: true
    }
  }

  const subPages = {
    Perfil: (
      <TabPage label="Perfil">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            Meu Perfil
          </h2>

          <div className="flex items-center gap-3">

            <span
              className={`
                px-3 py-1 rounded-full text-xs font-medium
                ${
                  user.person.isActive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }
              `}
            >
              {user.person.isActive ? "Ativo" : "Inativo"}
            </span>

            <button
              onClick={() => setIsEditing(true)}
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
            </button>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProfileItem label="Nome" value={user.person.name} />
          <ProfileItem label="Email" value={user.email} />
          <ProfileItem label="Telefone" value={user.person.phone} />
          <ProfileItem label="CPF" value={user.person.cpf} />
          <ProfileItem label="Nascimento" value={user.person.birthDate} />
          <ProfileItem
            label="Último acesso"
            value={new Date(user.lastLogin).toLocaleString("pt-BR")}
          />
        </div>

      </TabPage>
    ),

    Veículos: (
      <TabPage label="Veículos">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            Meus Veículos
          </h2>

          <Link
            href="/user/vehicle/register"
            className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-black transition"
          >
            + Novo veículo
          </Link>
        </div>

        <div className="space-y-4">
          <EntityCard
            type="vehicle"
            editHref="/user/vehicle/register"
            data={{
              brand: "Honda",
              model: "Civic Touring",
              color: "Preto",
              licensePlate: "ABC-1234",
              manufactureYear: "2022-01-01"
            }}
          />

          <EntityCard
            type="vehicle"
            editHref="/user/vehicle/register"
            data={{
              brand: "Toyota",
              model: "Corolla",
              color: "Prata",
              licensePlate: "XYZ-8899",
              manufactureYear: "2020-01-01"
            }}
          />
        </div>
      </TabPage>
    ),

    Propriedades: (
      <TabPage label="Propriedades">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            Minhas Propriedades
          </h2>

          <Link
            href="/property/register"
            className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-black transition"
          >
            + Nova propriedade
          </Link>
        </div>

        <div className="space-y-4">
          <EntityCard
            type="property"
            editHref="/property/register"
            data={{
              name: "Shopping Interlagos",
              type: "Estacionamento",
              description: "Grande fluxo diário",
              totalCapacity: 250,
              addressId: 12
            }}
          />

          <EntityCard
            type="property"
            editHref="/property/register"
            data={{
              name: "Aeroporto Congonhas",
              type: "Garagem Coberta",
              description: "Vagas premium",
              totalCapacity: 80,
              addressId: 19
            }}
          />
        </div>
      </TabPage>
    ),

    Vaga_Placeholder: (
      <TabPage label="Vagas">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            Minhas Vagas
          </h2>

          <Link
            href="/spot/register"
            className="px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-black transition"
          >
            + Nova vaga
          </Link>
        </div>

        <div className="space-y-4">
          <EntityCard
            type="spot"
            editHref="/spot/register"
            data={{
              size: 2,
              status: "DISPONIVEL",
              identifier: "A-12",
              isCovered: true,
              approvalStatus: "APROVADA",
              allowedVehicles: "Carro",
              operatingHours: "08:00 às 22:00"
            }}
          />

          <EntityCard
            type="spot"
            editHref="/spot/register"
            data={{
              size: 1,
              status: "OCUPADA",
              identifier: "B-03",
              isCovered: false,
              approvalStatus: "APROVADA",
              allowedVehicles: "Moto",
              operatingHours: "24h"
            }}
          />
        </div>
      </TabPage>
    ),

    Reservas: (
      <TabPage label="Reservas">
        <h2 className="text-2xl font-semibold mb-6">
          Minhas Reservas
        </h2>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-2xl p-5 bg-white">
            <h3 className="font-semibold">
              Shopping Interlagos
            </h3>

            <p className="text-gray-500">
              20/04/2026 • 08:00 às 18:00
            </p>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 bg-white">
            <h3 className="font-semibold">
              Aeroporto Congonhas
            </h3>

            <p className="text-gray-500">
              25/04/2026 • 06:00 às 23:00
            </p>
          </div>
        </div>
      </TabPage>
    ),
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-gray-900">
            Minha Conta
          </h1>

          <p className="text-gray-500 mt-2">
            Gerencie suas informações e preferências
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          <TabSidebar
            subPages={subPages}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <TabContainer
            subPages={subPages}
            activeTab={activeTab}
          />

        </div>

      </section>

      {/* 🔥 MODAL EDIT */}
      {isEditing && (
        <div
          className="
            fixed inset-0
            z-50
            flex items-center justify-center
            bg-black/30
            backdrop-blur-sm
          "
          onClick={() => setIsEditing(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <EditCard
              type="user"
              hasBlur
              defaultValues={{
                name: user.person.name,
                cpf: user.person.cpf,
                phone: user.person.phone,
                birthDate: user.person.birthDate,
                email: user.email
              }}
              onSubmit={(e) => {
                e.preventDefault()

                const formData = new FormData(e.currentTarget)

                const updatedUser = {
                  name: formData.get("name"),
                  cpf: formData.get("cpf"),
                  phone: formData.get("phone"),
                  birthDate: formData.get("birthDate"),
                  email: formData.get("email")
                }

                console.log(updatedUser)

                setIsEditing(false)
              }}
            />
          </div>
        </div>
      )}

    </main>
  )
}