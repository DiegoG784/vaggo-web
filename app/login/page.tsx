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
  const handleRouting = (e:any) => {
    e.preventDefault()
    router.push('/user/dashboard')
  }

  return (
    <main className="flex flex-col">
        
        <div className="flex flex-col items-center justify-center h-screen w-screen"> {/* change h/w-screen between 'full' or '100'. screens get messy */}
            <section className="flex flex-col items-center bg-gray-300 w-1/3 h-2/4">

                <h1>Vaggo</h1>
                <h1>Seja bem vindo!</h1>

                <form className="flex flex-col" onSubmit={handleRouting}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"/>

                    <label htmlFor="pass">Senha</label>
                    <input type="text" name="pass"/>
                    <input type="submit" value={"Entrar"}/>
                </form>

                <Link href={"/register"}>Registrar</Link>

            </section>
        </div>

    </main>
  );
}
