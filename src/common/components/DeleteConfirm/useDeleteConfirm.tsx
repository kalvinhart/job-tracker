import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

interface IUseDeleteConfirm {
  id?: string;
  actionDelete: (id?: string) => Promise<void> | (() => void);
  hide: () => void;
  redirect: boolean;
}

export const useDeleteConfirm = (options: IUseDeleteConfirm) => {
  const loading = useRef<boolean>(false);
  const navigate = useNavigate();

  const { id, actionDelete, hide, redirect } = options;

  useEffect(
    () => () => {
      loading.current = false;
    },
    []
  );

  const handleDelete = async (): Promise<void> => {
    loading.current = true;

    if (id !== undefined) {
      await actionDelete(id);
    } else {
      await actionDelete();
    }

    hide();
    redirect && navigate("/");
  };

  const cancel = (): void => {
    hide();
  };

  return {
    loading: loading.current,
    handleDelete: () => handleDelete(),
    cancel: () => cancel(),
  };
};
