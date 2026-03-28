'use client'

import Link from "next/link";

interface LoginCardProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

export default function LoginCard({ onSubmit, loading }: LoginCardProps) {
  return (
  <section className="
    w-full max-w-sm
    min-h-[320px]
    bg-white/80 backdrop-blur-xl
    border border-white/30
    rounded-2xl
    shadow-2xl
    px-8 py-1
    flex flex-col justify-between   
  ">

    {/* Header */}
    <div className="text-center">
      <h1 className="
        text-4xl font-bold
        bg-gradient-to-r from-blue-600 to-blue-400
        bg-clip-text text-transparent
      ">
        Vaggo
      </h1>
      <p className="text-gray-500 text-base mt-2">
        Seja bem-vindo!
      </p>
    </div>

    {/* Form */}
    <form className="flex flex-col gap-5 items-center" onSubmit={onSubmit}>

      {/* Email */}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-sm text-gray-700 font-medium">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="seu@email.com"
          className="
            px-4 py-3
            rounded-lg
            border border-gray-300
            bg-white/70
            focus:outline-none
            focus:ring-2 focus:ring-blue-400
          "
        />
      </div>

      {/* Senha */}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-sm text-gray-700 font-medium">
          Senha
        </label>
        <input
          type="password"
          name="pass"
          required
          placeholder="••••••••"
          className="
            px-4 py-3
            rounded-lg
            border border-gray-300
            bg-white/70
            focus:outline-none
            focus:ring-2 focus:ring-blue-400
          "
        />
      </div>

      {/* Links */}
      <div className="flex justify-center gap-6 text-sm mt-2">
        <Link href="/register" className="text-blue-600 hover:underline">
          Cadastre-se
        </Link>
        <Link href="/template" className="text-blue-600 hover:underline">
          Esqueci a senha
        </Link>
      </div>

      {/* Botão */}
      <button
        type="submit"
        disabled={loading}
        className="
          mt-4
          px-10 py-3
          text-base
          rounded-lg
          font-semibold
          text-white
          bg-gradient-to-r from-blue-600 to-blue-500
          hover:from-blue-700 hover:to-blue-600
          shadow-md
          hover:scale-105
          active:scale-95
          transition-all
          disabled:opacity-60
        "
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>

    </form>

  </section>
);
}