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
    <main className="flex flex-col">
        
        <div className="flex flex-col items-center justify-center h-screen w-screen"> {/* change h/w-screen between 'full' or '100'. screens get messy */}
            <section className="flex flex-col items-center bg-gray-300 w-1/3 h-2/4">

                <h1>Vaggo</h1>
                <h1>Seja bem vindo!</h1>

                <form className="flex flex-col" onSubmit={handleRegister}>


                  <input type="text" name="name" placeholder="Nome Completo"/>
                  <input type="text" name="cpf" placeholder="CPF"/>

                  <div className="flex flex-row">
                    <label htmlFor="gender" className="mr-1">Sexo:</label>
                    <select name="gender">
                      <option  value={"M"}>Masculino</option>
                      <option  value={"F"}>Feminino</option>
                    </select>
                  </div>

                  <div className="flex flex-row">
                    <label htmlFor="birthDate" className="mr-1">Data de Nascimento:</label>
                    <input type="date" name="birthDate"/>
                  </div>

                  <input type="text" name="email" placeholder="e-mail"/>
                  <input type="text" name="phone" placeholder="(XX) XXXXX-XXXX"/>

                  <input type="password" name="password" placeholder="Senha"/>

                  <input type="password" name="passConfirm" placeholder="Digite sua senha novamente"/>

                  <input type="submit" value={"Registrar"}/>

                </form>

            </section>
        </div>

    </main>
  );
}
