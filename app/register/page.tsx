'use client'
import Header from "@/component/header"
import Link from "next/link"
// import Image from "next/image";
import { useRouter, redirect } from "next/navigation" 


export default function Page() {
  //user login page:
  //  - credentials inserted will be validated and see if email and pass matches from api call
  //  - if approved, insert credentials as cookies or somewhere safe, like a token or smth
  //  - make user credential validation function on controller or model side, idk where tf this stays at i forgor
  const router = useRouter()

  const handleRegister = (e:any) => {
    e.preventDefault()

    // validar  CPF
    // validar e-mail
    // validar telefone
    // validar senha

    // transformar dados registro em JSON

    // enviar JSON pra API -> 
    // <- API envia mensagem 200 (message: true, new_id: token)


    router.push('/user/dashboard')

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
                    <label htmlFor="sex" className="mr-1">Sexo:</label>
                    <select name="sex">
                      <option  value={"m"}>Masculino</option>
                      <option  value={"f"}>Feminino</option>
                    </select>
                  </div>

                  <div className="flex flex-row">
                    <label htmlFor="birthDate" className="mr-1">Data de Nascimento:</label>
                    <input type="date" name="birthDate"/>
                  </div>

                  <input type="text" name="email" placeholder="e-mail"/>
                  <input type="text" name="email" placeholder="(XX) XXXXX-XXXX"/>

                  <input type="password" name="pass" placeholder="Senha"/>

                  <input type="password" name="passConfirm" placeholder="Digite sua senha novamente"/>

                  <input type="submit" value={"Registrar"}/>

                </form>

            </section>
        </div>

    </main>
  );
}
