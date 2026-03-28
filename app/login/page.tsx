'use client'
import Header from "@/component/header"
import Link from "next/link"
// import Image from "next/image";
import { useRouter, redirect } from "next/navigation" 
import { useState } from 'react';


export default function Page() {
  //user login page:
  //  - credentials inserted will be validated and see if email and pass matches from api call
  //  - if approved, insert credentials as cookies or somewhere safe, like a token or smth
  //  - make user credential validation function on controller or model side, idk where tf this stays at i forgor
  const [user, setUser] = useState(null)
  // const router = useRouter()
  // const handleRouting = (e:any) => {
    // e.preventDefault()
    // router.push('/user/dashboard')
  // }


  const handle = (e:any) => {
    e.preventDefault()

    // validar  CPF
    // validar e-mail
    // validar telefone
    // validar senha
    const formData = new FormData(e.currentTarget)
    const values = Object.fromEntries(formData)
    const router = useRouter()
    
    console.log(values)
    let result
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzc0NjYxNTkzLCJleHAiOjE3NzQ2NjUxOTN9.Qd96mltdnSXA9XMGYfawBO3GN3dvloZIJe53jcWXcW4"
    
    delete values.passConfirm

    fetch('http://localhost:3000/users/login',
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
    .then((data) => {
      // if response  ok, give token and redirect to page
      localStorage.setItem('token', data.data.token)
      console.log(data)
      // router.push('/user/dashboard')

    })

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

                <form className="flex flex-col" onSubmit={handle}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"/>

                    <label htmlFor="password">Senha</label>
                    <input type="text" name="pass"/>
                    <input type="submit" value={"Entrar"}/>
                </form>

                <Link href={"/register"}>Registrar</Link>

            </section>
        </div>

    </main>
  );
}
