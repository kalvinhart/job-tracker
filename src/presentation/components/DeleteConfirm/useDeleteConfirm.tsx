import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

interface IUseDeleteConfirm {
  actionDelete: () => Promise<void> | (() => void);
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

  const handleDelete = async (): Promise<void> => {
    loading.current = true;

    await actionDelete();

    hide();
    redirect && navigate("/");
  };

  const cancel = (): void => {
    hide();
  };

  return {
    loading,
    handleDelete: () => handleDelete(),
    cancel: () => cancel(),
  };
};
