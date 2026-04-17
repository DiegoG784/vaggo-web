interface LoginCardProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
}

import Link from "next/link";
export default function LoginCard({ onSubmit, loading }: LoginCardProps) {
  return (
    <section className="
      w-full max-w-sm
      bg-white
      border border-gray-200
      rounded-2xl
      shadow-sm
      px-6 py-8
    ">

      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Entrar no Vaggo
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Acesse sua conta
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">
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
              bg-white
              focus:outline-none
              focus:ring-2 focus:ring-gray-300
              transition
            "
          />
        </div>

        {/* Senha */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600">
            Senha
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="••••••••"
            className="
              px-4 py-3
              rounded-lg
              border border-gray-300
              bg-white
              focus:outline-none
              focus:ring-2 focus:ring-gray-300
              transition
            "
          />
        </div>

        {/* Links */}
        <div className="flex justify-between text-sm mt-1">
          <Link href="/register" className="text-gray-600 hover:text-black">
            Criar conta
          </Link>
          <Link href="/template" className="text-gray-600 hover:text-black">
            Esqueci a senha
          </Link>
        </div>

        {/* Botão */}
        <button
          type="submit"
          disabled={loading}
          className="
            mt-4
            py-3
            rounded-lg
            font-medium
            text-white
            bg-gray-900
            hover:bg-black
            transition
            disabled:opacity-60
          "
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>

      </form>

    </section>
  );
}