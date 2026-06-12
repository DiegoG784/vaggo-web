// TA SEMI BATIZADO
import { useState } from "react";
import { useApi } from "../useApi";
import { BrowserService } from "@services";

type stateReturnProps = [
  updateUser: (formData: FormData) => void,
  loading: boolean,
  success: boolean,
];

export function useUpdateUser(): stateReturnProps {
  const token = BrowserService.getToken();
  const [body, setBody] = useState<string>();

  const [data, loaded, success] = useApi({
    uri: body ? `users/${token?.user.id}` : undefined,
    dataOnly: true,
    useToken: true,
    req: {
      method: "PATCH",
      body: body,
      headers: { "Content-Type": "application/json" },
    },
  });

  const updateUser = (formData: FormData) => {
    setBody(JSON.stringify(Object.fromEntries(formData)));
  };

  return [updateUser, !loaded, success];
}
