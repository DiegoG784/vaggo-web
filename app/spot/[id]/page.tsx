'use client'
// import Link from "next/link"
import Image from "next/image";

import Header from "@/component/header";
import * as api from "@/app/api"
import { PropertyResponse } from "@/interface/api/property";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ParkingSpotResponse } from "@/interface/api/spot";
import BlurOverlay from "@/component/blur_overlay";

export default function Page( { params }:any ) {
    params = useParams()
    const [property, setProperty] = useState<any>(undefined) //TODO REPLACE WITH TYPES
    const [spots, setSpots] = useState<any>(undefined)
    const [showWindow, setShowWindow] = useState(false)
    
    useEffect(
        () => {
            const query = async () => {
                const data = await api.call(`properties/${params.id}`, true, {dataOnly: true})
                const spotData = await api.call(`spots/properties/${params.id}/spots`, true, {dataOnly: true})
                console.log(data)
                console.log(spotData)

                setProperty(data as PropertyResponse)
                setSpots(spotData as ParkingSpotResponse)
            }
            query()
        }, 
    [])

    if (property === undefined && spots === undefined) return (<section></section>)
    return (
        <main>

            <Header/>

            <section className="m-10 flex flex-row">

                <section className="bg-white w-full rounded-3xl border border-gray-200 shadow-sm p-8 flex flex-row">
                    <h2 className="text-2xl w-1/2  mb-6 mr-6">
                        <img
                        src="/spot_image_test.webp"
                        alt={"test"}
                        className="
                            w-full h-full object-cover
                        "
                        />
                    </h2>

                    <div className="flex w-1/2 flex-col items-end">
                        <h1 className="text-2xl font-semibold">{property?.name}</h1>
                        <p className="text-sm mb-4">{property?.type}</p>
                        <p>{property?.description}</p>
                        <p>Capacidade total: {property?.totalCapacity} Vaga(as)</p>
                        <h2 className="text-2xl font-semibold mt-6">R$ 0 / Reserva</h2>

                        <button onClick={() => setShowWindow(true)} className=" mt-4 py-3 rounded-lg font-medium text-white bg-gray-900 hover:bg-black transition disabled:opacity-60 w-100">
                            Vagas Disponíveis
                        </button>
                    </div>
                </section>

            </section>

                  <BlurOverlay
                    show={showWindow}
                    onClick={() => setShowWindow(false)}
                  />

                  {showWindow && (
                    <div
                      className="
                        fixed inset-0 z-50
                        flex items-center justify-center
                        px-4
                      "
                    >
                      <div className="relative w-1/2">
            
                        <section className="bg-white w-full rounded-3xl border border-gray-200 shadow-sm p-8 flex flex-col">
                            <h2 className="text-2xl w-1/2  mb-6 mr-6">
                                Vagas Disponíveis
                            </h2>

                            <div className="flex flex-col w-[100%] items-center">
                                {
                                    spots.map((spot:any) => {
                                        if (spot.status != "INDISPONIVEL")
                                        return (
                                        <section className="bg-white w-full rounded-3xl border border-gray-200 shadow-sm p-8 w-100 mb-4">
                                            <h2 className="font-semibold mb-6">
                                                {spot.identifier}
                                            </h2>

                                            <div className="flex flex-col items-end">
                                                <p>{spot.status}</p>
                                                <p>Tamanho: {spot.size}</p>
                                                <p>{spot.allowedVehicles}</p>
                                            </div>
                                        </section>
                                        )
                                    })
                                }
                            </div>
                        </section>
            
                        {/* Fechar */}
                        <button
                          onClick={() => setShowWindow(false)}
                          className="
                            absolute -top-3 -right-3
                            w-9 h-9
                            rounded-full
                            bg-white
                            border border-gray-200
                            shadow-md
                            hover:bg-gray-100
                            transition
                          "
                        >
                          ✕
                        </button>
            
                      </div>
                    </div>
                  )}
        </main>
    )
}

                // <section className="w-1/2 flex flex-col">
                //     <h1>Shopping Interlagos</h1>
                //     <div className="flex flex-col items-end">

                //         Info about user
                //         <div className="flex flex-row">
                //             {/* name(s) with total stars if single owner*/}
                //             <div className="flex flex-col items-end"> 
                //                 <p>{property?.name}</p>
                //                 <p>0/0</p>
                //             </div>

                //             {/* profile picture or cascade if multiple owners */}
                //             <div>

                //             </div>
                //         </div>

                //         {/* dynamic price if planned */}
                //         <div>R$15-40/Hora</div>

                //         {/* availability date/hour */}
                //         <div className="flex flex-col">
                //             {/* Date */}
                //             <div>

                //             </div>
                //             {/* Time */}
                //             <div>

                //             </div>
                //         </div>

                //         {/* Spot options */}
                //         <div className="flex flex-row">
                //             <button className="mr-3">Reservar</button>
                //             <button>[Chat]</button>
                //         </div>
                //     </div>
                // </section>