'use client'

import { useState } from 'react'
import SearchBar from './search_bar'

interface HeaderProps {
  showSearch?: boolean
}

export default function Header({ showSearch = false }: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-white to-gray-100 border-b border-gray-200">
      
      <div className="container-default flex items-center justify-between h-16 gap-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src="/icons/globe.ico" width={28} height={28} alt="Logo" />
          <span className="font-semibold text-lg">Vaggo</span>
        </a>

        {/* Barra de pesquisa */}
        {showSearch && (
          <div className="flex-1 max-w-xl">
            <SearchBar />
          </div>
        )}

        {/* Menu */}
        <div className="relative shrink-0">

          <button
            onClick={() => setOpen(!open)}
            className="
              flex items-center justify-center
              w-10 h-10
              border border-gray-200
              bg-gray-100
              rounded-full
              shadow-sm
              hover:bg-gray-200 hover:shadow-md
              transition-all duration-200
            "
          >
            <div className="flex flex-col gap-[3px]">
              <span className="w-4 h-[2px] bg-gray-700"></span>
              <span className="w-4 h-[2px] bg-gray-700"></span>
              <span className="w-4 h-[2px] bg-gray-700"></span>
            </div>
          </button>

          {open && (
            <div className="
              absolute right-0 mt-2
              w-48
              bg-white
              border border-gray-200
              rounded-xl
              shadow-lg
              overflow-hidden
            ">
              <a
                href="/login"
                className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
              >
                Entrar ou Cadastrar-se
              </a>

              <div className="border-t my-1 border-gray-200"></div>

              <a
                href="#"
                className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
              >
                Ajuda
              </a>
            </div>
          )}
        </div>

      </div>
    </header>
  )
}
