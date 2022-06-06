import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

interface IUseDeleteConfirm {
  actionDelete: (id: string) => Promise<void>;
  hide: () => void;
  redirect: boolean;
}

export const useDeleteConfirm = (options: IUseDeleteConfirm) => {
  const loading = useRef<boolean>(false);
  const navigate = useNavigate();

  const { actionDelete, hide, redirect } = options;

  useEffect(
    () => () => {
      loading.current = false;
    },
    []
  );

  const handleDelete = async (id: string): Promise<void> => {
    loading.current = true;
    await actionDelete(id);
    hide();
    redirect && navigate("/");
  };

  const cancel = (): void => {
    hide();
  };

  return {
    loading,
    handleDelete: (id: string) => handleDelete(id),
    cancel: () => cancel(),
  };
};
