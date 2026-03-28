'use client'

export default function SearchBar() {
  return (
    <div className="w-full flex justify-center">
      
      <div className="relative w-full max-w-md">

        {/* Ícone */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>

        {/* Input */}
        <input
          type="text"
          placeholder="Buscar vagas..."
          className="
            input
            w-full
            pl-10   /* espaço pro ícone */
          "
        />

      </div>

    </div>
  );
}