'use client'
import Header from "@/component/header"
import SpotCarousel from "@/component/spot_carousel";
import SearchBar from "@/component/search_bar";

export default function Home() {
  return (
    <main>
      <Header />

  <section className="flex items-center justify-center">
         <SearchBar/>
</section>
 
      <section className="section-default bg-[var(--background-soft)]">
        <div className="container-default">

          <h1 className="text-2xl font-semibold text-center">
            Pontos de interesse com base na sua localização
          </h1>

          <SpotCarousel />

          <div className="h-16"></div>

          <h1 className="text-2xl font-semibold mb-8 text-center">
            Pontos de interesse com reservas anteriores
          </h1>

          <SpotCarousel />

          <div className="h-12"></div>

        </div>
      </section>
    </main>
  );
}