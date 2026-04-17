// app/account/page.tsx
'use client'

import Header from "@/component/header"
import { useState } from "react"
import Link from "next/link"

import TabContainer from "@/component/tabContainer"
import TabPage from "@/component/tabPage"
import TabSidebar from "@/component/tabSidebar"
import VehicleCard from "@/component/vehicle_card"

export default function Page() {
    const [activeTab, setActiveTab] = useState("Perfil")

    const subPages = {
        Perfil: (
            <TabPage label="Perfil">
                <h2 className="text-2xl font-semibold mb-6">
                    Meu Perfil
                </h2>

                <div className="space-y-4 text-gray-700">
                    <p><strong>Nome:</strong> Galvian</p>
                    <p><strong>Email:</strong> galvian@email.com</p>
                    <p><strong>Telefone:</strong> (11) 99999-9999</p>
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
                        className="
          px-4 py-2
          rounded-xl
          bg-gray-900
          text-white
          text-sm
          font-medium
          hover:bg-black
          transition
        "
                    >
                        + Novo veículo
                    </Link>
                </div>

                <div className="space-y-4">
                    <VehicleCard
                        brand="Honda"
                        model="Civic Touring"
                        plate="ABC-1234"
                    />

                    <VehicleCard
                        brand="Toyota"
                        model="Corolla"
                        plate="XYZ-8899"
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
                    <div className="border border-gray-200 rounded-2xl p-5">
                        <h3 className="font-semibold">
                            Shopping Interlagos
                        </h3>
                        <p className="text-gray-500">
                            20/04/2026 • 08:00 às 18:00
                        </p>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-5">
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

                {/* Topo */}
                <div className="mb-8">
                    <h1 className="text-4xl font-semibold text-gray-900">
                        Minha Conta
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Gerencie suas informações e preferências
                    </p>
                </div>

                {/* Layout */}
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
        </main>
    )
}
