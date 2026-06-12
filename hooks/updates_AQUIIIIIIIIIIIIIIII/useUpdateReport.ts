// TA SEMI BATIZADO
import { useState } from "react";
import { useApi } from "../useApi";

type stateReturnProps = [
  updateReport: (id: number, formData: FormData) => void,
  loading: boolean,
  success: boolean,
];

export function useUpdateReport(): stateReturnProps {
  const [target, setTarget] = useState<{ id: number; body: string }>();

  const [data, loaded, success] = useApi({
    uri: target ? `reports/${target.id}` : undefined,
    dataOnly: true,
    useToken: true,
    req: {
      method: "PATCH",
      body: target?.body,
      headers: { "Content-Type": "application/json" },
    },
  });

  const updateReport = (id: number, formData: FormData) => {
    setTarget({ id, body: JSON.stringify(Object.fromEntries(formData)) });
  };

  return [updateReport, !loaded, success];
}
