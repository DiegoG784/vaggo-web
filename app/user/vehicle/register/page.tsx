'use client'
import Header from "@/component/header"
import { The_Nautigal } from "next/font/google";
import Link from "next/link"
// import Image from "next/image";
import { useRouter, redirect } from "next/navigation" 
// import { redirect } from "next/navigation" 
import { useEffect, useState } from 'react';

export default function Page() {

  const handleRegister = (e:any) => {
    e.preventDefault()

    // validar  CPF
    // validar e-mail
    // validar telefone
    // validar senha
    const formData = new FormData(e.currentTarget)
    const values = Object.fromEntries(formData)
    
    console.log(values)
    let result
    
    delete values.passConfirm

    fetch('http://localhost:3000/vehicles',
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(values)
      }
    )
    .then((res) => res.json())
    .then((data) => console.log(data))

//     {
//   "brand": "Toyota",
//   "model": "Corolla",
//   "color": "Prata",
//   "licensePlate": "ABC1D24",
//   "manufactureYear": "2022-01-01"
//     }

    // se resposta da api for 200, loga o usuário com a senha criada pelo forms e leva o usuário para a página dashboard

    
    // transformar dados registro em JSON

    // enviar JSON pra API -> 
    // <- API envia mensagem 200 (message: true, new_id: token)


    // router.push('/user/dashboard')

  }


  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <div className="flex flex-1 items-center justify-center px-4 py-10">

        <section
          className="
            w-full max-w-lg
            bg-white
            border border-gray-200
            rounded-2xl
            shadow-sm
            px-8 py-8
          "
        >

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Registrar veículo
            </h1>

            <p className="text-gray-500 text-sm mt-1">
              Adicione as informações do seu carro
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleRegister}>

            {/* Marca + Modelo */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="brand"
                placeholder="Marca"
                className="input-clean"
              />

              <input
                type="text"
                name="model"
                placeholder="Modelo"
                className="input-clean"
              />
            </div>

            {/* Cor + Placa */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="color"
                placeholder="Cor"
                className="input-clean"
              />

              <input
                type="text"
                name="licensePlate"
                placeholder="Placa"
                className="input-clean"
              />
            </div>

            {/* Ano */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">
                Data de fabricação
              </label>

              <input
                type="date"
                name="manufactureYear"
                className="input-clean"
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="
                mt-4
                py-3
                rounded-lg
                font-medium
                text-white
                bg-gray-900
                hover:bg-black
                transition
              "
            >
              Registrar veículo
            </button>

            {/* Link */}
            <div className="text-center text-sm">
              <Link
                href="/user/dashboard"
                className="text-gray-600 hover:text-black hover:underline"
              >
                Voltar ao painel
              </Link>
            </div>

          </form>

        </section>

      </div>
    </main>
  );
}
