'use client'

import Link from "next/link"

interface RegisterCardProps {
  type: "user" | "vehicle"
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function RegisterCard({
  type,
  onSubmit
}: RegisterCardProps) {

  const config = {
    user: {
      title: "Criar conta",
      subtitle: "Preencha seus dados",
      button: "Registrar",
      backLink: "/login"
    },

    vehicle: {
      title: "Registrar veículo",
      subtitle: "Adicione as informações do carro",
      button: "Registrar veículo",
      backLink: "/account"
    },

    property: {
      title: "Registrar Propriedade",
      subtitle: "Adicione as informações da propriedade",
      button: "Registrar Propriedade",
      backLink: "/account"
    }
  }

  const current = config[type]

  return (
    <section className="
      w-full max-w-lg
      bg-white
      border border-gray-200
      rounded-2xl
      shadow-sm
      px-8 py-8
    ">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          {current.title}
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          {current.subtitle}
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>

        {/* USER */}
        {type === "user" && (
          <>
            <input name="name" placeholder="Nome completo" className="input-clean" />

            <div className="grid grid-cols-2 gap-3">
              <input name="cpf" placeholder="CPF" className="input-clean" />

              <select name="gender" className="input-clean">
                <option value="">Sexo</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>

            <input type="date" name="birthDate" className="input-clean" />
            <input type="email" name="email" placeholder="E-mail" className="input-clean" />
            <input name="phone" placeholder="Telefone" className="input-clean" />

            <div className="grid grid-cols-2 gap-3">
              <input type="password" name="password" placeholder="Senha" className="input-clean" />
              <input type="password" name="passConfirm" placeholder="Confirmar" className="input-clean" />
            </div>
          </>
        )}

        {/* VEHICLE */}
        {type === "vehicle" && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <input name="brand" placeholder="Marca" className="input-clean" />
              <input name="model" placeholder="Modelo" className="input-clean" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input name="color" placeholder="Cor" className="input-clean" />
              <input name="licensePlate" placeholder="Placa" className="input-clean" />
            </div>

            <input type="date" name="manufactureYear" className="input-clean" />
          </>
        )}

        {/* Botão */}
        <button
          type="submit"
          className="
            mt-4
            py-3
            rounded-lg
            font-medium
            text-white
            bg-gray-900
            hover:bg-black
            transition
          "
        >
          {current.button}
        </button>

        {/* Link */}
        <div className="text-center text-sm">
          <Link
            href={current.backLink}
            className="text-gray-600 hover:text-black hover:underline"
          >
            Voltar
          </Link>
        </div>

      </form>
    </section>
  )
}
