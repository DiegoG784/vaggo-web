'use client'
import Header from "@/component/header"
import RegisterCard from "@/component/register_card"
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
          password: values.password,
          // name: values.name,
          // cpf: values.cpf,
          // gender: values.gender,
          // phone: values.phone,
          // birthDate: values.birthDate
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
          .then((data) => {localStorage.setItem('token', data.data.token); localStorage.setItem('userId', data.data.user.id)})
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
    <main className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex justify-center py-10 px-4">
        <RegisterCard
          type="user"
          onSubmit={handleRegister}
        />
      </div>
    </main>
  );
}
