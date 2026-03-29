'use client'
// import Link from "next/link"
// import Image from "next/image";

import Header from "@/component/header"
import Link from "next/link"
<<<<<<< HEAD
=======
import { useEffect, useState } from "react"

function VehicleCard(raw_data:any) {
    // const [data, setData] = useState(null)
    const data = raw_data.raw_data
    // setData(raw_data)
    console.log(data)
    
    if (data != null)
    return (
        <section>
            <div>
                <p>Veículo: {data.brand} {data.model}</p>
                <p>Placa: {data.licensePlate}</p>
            </div>
        </section>
    )
}
>>>>>>> 81f52eace40674f31af9e6a5be14941800d6c011

export default function Page() {
    const [carData, setCarData] = useState(null)
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        try {
            fetch(`http://localhost:3000/vehicles/${localStorage.getItem('userId')}`, {
            headers: { 
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json" 
            },
            })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setCarData(data.data)
            })

            fetch(`http://localhost:3000/users/${localStorage.getItem('userId')}`, {
            headers: { 
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json" 
            },
            })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setUserData(data.data)
            })

    
        } catch (error) {
            console.log(error)
        }
    }, [])
    
    if ((carData != null && userData != null))
    return (
        <main>

            <Header/>

<<<<<<< HEAD
            <h1>Olá [Usuário]!</h1>
=======
            <h1>Olá {userData.person.name}!</h1>
>>>>>>> 81f52eace40674f31af9e6a5be14941800d6c011
            <Link href={"/user/vehicle/register"}>Registrar Veículo</Link>

            <section className="mb-3">
                <h1>Mensagens</h1>
                <div>
                    [Insira uma lista de últimos contatos]
                </div>
            </section>

            <section className="mb-3">
                <h1>Veículos</h1>
                <div>
                    <VehicleCard raw_data={carData}/>
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