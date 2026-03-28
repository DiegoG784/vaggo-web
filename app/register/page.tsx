'use client'
import Header from "@/component/header"
import { The_Nautigal } from "next/font/google";
import Link from "next/link"
// import Image from "next/image";
import { useRouter, redirect } from "next/navigation" 
// import { redirect } from "next/navigation" 
import { useEffect, useState } from 'react';






export default function Page() {
  //user login page:
  //  - credentials inserted will be validated and see if email and pass matches from api call
  //  - if approved, insert credentials as cookies or somewhere safe, like a token or smth
  //  - make user credential validation function on controller or model side, idk where tf this stays at i forgor
  // const router = useRouter()
  
  const [user, setUser] = useState(null)

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
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzc0NjYxNTkzLCJleHAiOjE3NzQ2NjUxOTN9.Qd96mltdnSXA9XMGYfawBO3GN3dvloZIJe53jcWXcW4"
    
    delete values.passConfirm

    fetch('http://localhost:3000/users',
      {
        headers: {
          // 'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(values)
      }
    )
    .then((res) => res.json())
    .then((data) => setUser(data)).then(
      () => {
        let loginData = {
          email: values.email,
          password: values.password
        }
        console.log(`para login: ${JSON.stringify(loginData)}`)
        
        fetch('http://localhost:3000/users/login',
          {
            headers: {
              // 'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(loginData)
          }
        )
          .then((res) => res.json())
          .then((data) => localStorage.setItem('token', data.data.token))
      }
    )

    // se resposta da api for 200, loga o usuário com a senha criada pelo forms e leva o usuário para a página dashboard
    console.log(user)

    
    // transformar dados registro em JSON

    // enviar JSON pra API -> 
    // <- API envia mensagem 200 (message: true, new_id: token)


    // router.push('/user/dashboard')

  }

return (
  <main className="flex flex-col min-h-screen">
    <Header />

    <div className="flex flex-1 items-center justify-center bg-[var(--background-soft)] px-4">

      <section className="
        w-full max-w-md        /* mais largo */
        min-h-[520px]          /* menos alto */
        bg-white/80 backdrop-blur-xl
        border border-white/30
        rounded-2xl
        shadow-2xl
        px-10 py-8             /* mais equilibrado */
        flex flex-col justify-between
      ">

        {/* Header */}
        <div className="text-center">
          <h1 className="
            text-4xl font-bold
            bg-gradient-to-r from-blue-600 to-blue-400
            bg-clip-text text-transparent
          ">
            Vaggo
          </h1>
          <p className="text-gray-500 text-base mt-2">
            Crie sua conta
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 mt-6" onSubmit={handleRegister}>

          <input type="text" name="name" placeholder="Nome completo" className="input" />
          <input type="text" name="cpf" placeholder="CPF" className="input" />

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Sexo</label>
            <select name="gender" className="input">
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Data de nascimento</label>
            <input type="date" name="birthDate" className="input" />
          </div>

          <input type="email" name="email" placeholder="E-mail" className="input" />
          <input type="text" name="phone" placeholder="(XX) XXXXX-XXXX" className="input" />

          <input type="password" name="password" placeholder="Senha" className="input" />
          <input type="password" name="passConfirm" placeholder="Confirmar senha" className="input" />

          <button
            type="submit"
            className="
              mt-4
              px-10 py-3
              self-center
              rounded-lg
              font-semibold
              text-white
              bg-gradient-to-r from-blue-600 to-blue-500
              hover:from-blue-700 hover:to-blue-600
              shadow-md
              hover:scale-105
              active:scale-95
              transition-all
            "
          >
            Registrar
          </button>

        </form>

      </section>

    </div>
  </main>
);
}
