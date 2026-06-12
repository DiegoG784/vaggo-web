// TA SEMI BATIZADO
import { useState } from "react";
import { useApi } from "../useApi";

type stateReturnProps = [
  updateProperty: (id: number, formData: FormData) => void,
  loading: boolean,
  success: boolean,
];

export function useUpdateProperty(): stateReturnProps {
  const [target, setTarget] = useState<{ id: number; body: string }>();

  const [data, loaded, success] = useApi({
    uri: target ? `properties/${target.id}` : undefined,
    dataOnly: true,
    useToken: true,
    req: {
      method: "PATCH",
      body: target?.body,
      headers: { "Content-Type": "application/json" },
    },
  });

  const updateProperty = (id: number, formData: FormData) => {
    setTarget({ id, body: JSON.stringify(Object.fromEntries(formData)) });
  };

  return [updateProperty, !loaded, success];
}
