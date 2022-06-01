import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

export const useDeleteConfirm = (actionDelete, hide, redirect) => {
  const loading = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    return (loading.current = false);
  }, []);

  const handleDelete = async (id) => {
    loading.current = true;
    await actionDelete(id);
    hide();
    redirect && navigate("/");
  };

  const cancel = () => {
    hide();
  };

  return {
    loading,
    handleDelete: (id) => handleDelete(id),
    cancel: () => cancel(),
  };
};
