import toast from "react-hot-toast";

export const toastSuccess = (message: string): void => {
  toast.success(message);
};

export const toastError = (message: string): void => {
  toast.error(message);
};
