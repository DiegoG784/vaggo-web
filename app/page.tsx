'use client'
import Image from "next/image";
import Link from "next/link";
// import Home from "@/app/view"
import Header from "@/component/header"
import SpotCard from "@/component/spot_card"

//add a little system which redirects user to login page if user is not logged in (this is for some pages only)
export default function Home() {
  return (
    <main>

      <Header/>

      {/* disable this and replace with search bar on header if on mobile (<800x600) */}
      <section className="bg-sky-500 h-50 flex flex-col-reverse items-center"> {/* Main search bar */}
        <div className="flex flex-row bg-gray-500 w-1/2 px-5 py-2 mb-5 justify-between">
          <input name="" type="date"/>
          <input name="" type="search" className="w-100"/>
          <select name="">
            <option value={''}>asd</option>
          </select>
          <a href="#">
            <img src={"/icons/magnifier.ico"} width={32} height={32}/>
          </a>
        </div>
      </section>


      <section className="flex flex-col h-100 bg-white">
        <section>
          <h1 className="text-black my-4 mx-2 text-xl font-bold">Vagas com base na sua localização</h1>
          <section className="ml-10">
            <SpotCard/>
          </section>
        
          <h1 className="text-black my-4 mx-2 text-xl font-bold">Vagas com base nas suas reservas anteriores</h1>
          <section className="ml-10">
            <SpotCard/>
          </section>
        
        </section>
      </section>
      
    </main>
  );
}
