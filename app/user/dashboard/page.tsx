// 'use client'
// import Link from "next/link"
// import Image from "next/image";

import Header from "@/component/header"

export default function Page() {
    return (
        <main>

            <Header/>

            <h1>Olá [Usuário]!</h1>

            <section className="mb-3">
                <h1>Mensagens</h1>
                <div>
                    [Insira uma lista de últimos contatos]
                </div>
            </section>

            <section className="mb-3">
                <h1>Suas próximas reservas</h1>
                <div>
                    [Insira cartões de informações de reservas aqui]
                </div>
            </section>

            <section>
                <h1>Suas reservas anteriores</h1>
                <div>
                    [Insira cartões das últimas reservas com possíveis informações sobre avaliações]
                </div>
            </section>
        </main>
    )
}