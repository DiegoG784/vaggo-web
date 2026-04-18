'use client'

import { useRouter } from "next/navigation"

interface EditCardProps {
  type: "user" | "vehicle" | "property" | "spot"
  onSubmit: (e: React.FormEvent<HTMLFormElement>, data:any) => void
  onCancel?: () => void
  defaultValues?: any
  hasBlur?: boolean
}

export default function EditCard({
  type,
  onSubmit,
  onCancel,
  defaultValues = {},
  hasBlur = false
}: EditCardProps) {

  const router = useRouter()

  const config = {
    user: {
      title: "Editar conta",
      subtitle: "Atualize seus dados pessoais",
      button: "Salvar alterações"
    },

    vehicle: {
      title: "Editar veículo",
      subtitle: "Atualize as informações do carro",
      button: "Salvar veículo"
    },

    property: {
      title: "Editar propriedade",
      subtitle: "Atualize os dados da propriedade",
      button: "Salvar propriedade"
    },

    spot: {
      title: "Editar vaga",
      subtitle: "Atualize os dados da vaga",
      button: "Salvar vaga"
    }
  }

  const current = config[type]

  const inputStyle = `
    px-4 py-3
    rounded-lg
    border border-gray-300
    bg-white/90
    focus:outline-none
    focus:ring-2 focus:ring-gray-300
    transition
    w-full
  `

  return (
    <section
      className={`
        w-full max-w-lg
        rounded-2xl
        px-8 py-8
        border
        transition
        ${
          hasBlur
            ? "bg-white/95 backdrop-blur-md border-white/40 shadow-xl"
            : "bg-white border-gray-200 shadow-sm"
        }
      `}
    >

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
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
        e.preventDefault()     
        onSubmit(e, defaultValues)          
        router.refresh()
        }
    }
      >

        {/* USER */}
        {type === "user" && (
          <>
            <input name="name" defaultValue={defaultValues.name} placeholder="Nome completo" className={inputStyle} />

            <div className="grid grid-cols-2 gap-3">
              {/* <input name="cpf" defaultValue={defaultValues.cpf} placeholder="CPF" className={inputStyle} /> */}

              <select name="gender" defaultValue={defaultValues.gender} className={inputStyle}>
                <option value="">Sexo</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>

            <input type="date" name="birthDate" defaultValue={defaultValues.birthDate} className={inputStyle} />
            <input type="email" name="email" defaultValue={defaultValues.email} placeholder="E-mail" className={inputStyle} />
            <input name="phone" defaultValue={defaultValues.phone} placeholder="Telefone" className={inputStyle} />
          </>
        )}

        {/* VEHICLE */}
        {type === "vehicle" && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" name="brand" defaultValue={defaultValues.brand} placeholder="Marca" className={inputStyle} />
              <input type="text" name="model" defaultValue={defaultValues.model} placeholder="Modelo" className={inputStyle} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input type="text" name="color" defaultValue={defaultValues.color} placeholder="Cor" className={inputStyle} />
              <input type="text" name="licensePlate" defaultValue={defaultValues.licensePlate} placeholder="Placa" className={inputStyle} />
            </div>

            <input type="text" name="manufactureYear" defaultValue={defaultValues.manufactureYear} className={inputStyle} />
          </>
        )}

        {/* PROPERTY */}
        {type === "property" && (
          <>
            <input name="name" defaultValue={defaultValues.name} placeholder="Nome" className={inputStyle} />
            <input name="type" defaultValue={defaultValues.type} placeholder="Tipo" className={inputStyle} />

            <textarea
              name="description"
              defaultValue={defaultValues.description}
              placeholder="Descrição"
              className={`${inputStyle} min-h-[120px] resize-none`}
            />

            <div className="grid grid-cols-2 gap-3">
              <input type="number" name="totalCapacity" defaultValue={defaultValues.totalCapacity} placeholder="Capacidade" className={inputStyle} />
              <input name="addressId" defaultValue={defaultValues.addressId} placeholder="ID Endereço" className={inputStyle} />
            </div>
          </>
        )}

        {/* SPOT */}
        {type === "spot" && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <input name="identifier" defaultValue={defaultValues.identifier} placeholder="Identificador" className={inputStyle} />
              <input type="number" name="size" defaultValue={defaultValues.size} placeholder="Tamanho" className={inputStyle} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <select name="status" defaultValue={defaultValues.status} className={inputStyle}>
                <option value="">Status</option>
                <option value="DISPONIVEL">Disponível</option>
                <option value="INDISPONIVEL">Indisponível</option>
                <option value="OCUPADA">Ocupada</option>
              </select>

              <select name="approvalStatus" defaultValue={defaultValues.approvalStatus} className={inputStyle}>
                <option value="">Aprovação</option>
                <option value="PENDENTE">Pendente</option>
                <option value="APROVADA">Aprovada</option>
                <option value="RECUSADA">Recusada</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <select name="isCovered" defaultValue={String(defaultValues.isCovered)} className={inputStyle}>
                <option value="">Cobertura</option>
                <option value="true">Coberta</option>
                <option value="false">Descoberta</option>
              </select>

              <input name="allowedVehicles" defaultValue={defaultValues.allowedVehicles} placeholder="Veículos permitidos" className={inputStyle} />
            </div>

            <input name="operatingHours" defaultValue={defaultValues.operatingHours} placeholder="Horário de funcionamento" className={inputStyle} />
          </>
        )}

        {/* Botão salvar */}
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

        {/* Cancelar */}
        <div className="text-center text-sm">
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-600 hover:text-black hover:underline"
          >
            Cancelar
          </button>
        </div>

      </form>
    </section>
  )
}