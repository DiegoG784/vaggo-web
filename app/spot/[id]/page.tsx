// 'use client'
// import Link from "next/link"
import Image from "next/image";

import Header from "@/component/header";

export default function Page() {
    return (
        <main>

            <Header/>

            <section className="bg-gray-300 m-10 flex flex-row justify-between">
                <section className="w-1/2">
                    <p>oskdoskdok</p>
                </section>

                <section className="w-1/2 flex flex-col">
                    <h1>Shopping Interlagos</h1>
                    <div className="flex flex-col items-end">
                        {/* Info about user */}
                        <div className="flex flex-row">
                            {/* name(s) with total stars if single owner*/}
                            <div className="flex flex-col items-end"> 
                                <p>Shopping Interlagos</p>
                                <p>4.8/5</p>
                            </div>

                            {/* profile picture or cascade if multiple owners */}
                            <div>

                            </div>
                        </div>

                        {/* dynamic price if planned */}
                        <div>R$15-40/Hora</div>

                        {/* availability date/hour */}
                        <div className="flex flex-col">
                            {/* Date */}
                            <div>

                            </div>
                            {/* Time */}
                            <div>

                            </div>
                        </div>

                        {/* Spot options */}
                        <div className="flex flex-row">
                            <button className="mr-3">Reservar</button>
                            <button>[Chat]</button>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}