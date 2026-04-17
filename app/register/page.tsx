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
    // console.log(user)

    
    // transformar dados registro em JSON

    // enviar JSON pra API -> 
    // <- API envia mensagem 200 (message: true, new_id: token)


    // router.push('/user/dashboard')

  }

return (
  <main className="flex flex-col min-h-screen">
  <Header />

  <div className="flex flex-1 items-center justify-center px-4 mt-6">

    <section className="
      w-full max-w-lg
      bg-white
      border border-gray-200
      rounded-2xl
      shadow-sm
      px-8 py-8
    ">

      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Criar conta
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Preencha seus dados
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={handleRegister}>

        {/* Nome */}
        <input type="text" name="name" placeholder="Nome completo" className="input-clean" />

        {/* CPF + Sexo */}
        <div className="grid grid-cols-2 gap-3">
          <input type="text" name="cpf" placeholder="CPF" className="input-clean" />

          <select name="gender" className="input-clean">
            <option value="">Sexo</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
        </div>

        {/* Data */}
        <input type="date" name="birthDate" className="input-clean" />

        {/* Email */}
        <input type="email" name="email" placeholder="E-mail" className="input-clean" />

        {/* Telefone */}
        <input type="text" name="phone" placeholder="(XX) XXXXX-XXXX" className="input-clean" />

        {/* Senhas */}
        <div className="grid grid-cols-2 gap-3">
          <input type="password" name="password" placeholder="Senha" className="input-clean" />
          <input type="password" name="passConfirm" placeholder="Confirmar" className="input-clean" />
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
          Registrar
        </button>
        <div className="text-center text-sm">
  <Link href="/login" className="text-gray-900 hover:underline">
    Já possui uma conta?
  </Link>
</div>
      </form>

    </section>

  </div>
</main>
);
}
