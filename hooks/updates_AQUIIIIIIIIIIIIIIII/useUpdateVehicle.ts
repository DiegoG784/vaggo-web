// TA SEMI BATIZADO
import { useState } from "react";
import { useApi } from "../useApi";

type stateReturnProps = [
  updateVehicle: (id: number, formData: FormData) => void,
  loading: boolean,
  success: boolean,
];

export function useUpdateVehicle(): stateReturnProps {
  const [target, setTarget] = useState<{ id: number; body: string }>();

  const [data, loaded, success] = useApi({
    uri: target ? `vehicles/${target.id}` : undefined,
    dataOnly: true,
    useToken: true,
    req: {
      method: "PATCH",
      body: target?.body,
      headers: { "Content-Type": "application/json" },
    },
  });

  const updateVehicle = (id: number, formData: FormData) => {
    setTarget({ id, body: JSON.stringify(Object.fromEntries(formData)) });
  };

  return [updateVehicle, !loaded, success];
}
