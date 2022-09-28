import { SyntheticEvent, useState } from "react";
import { useJobContext } from "../../../common/hooks/useJobContext/useJobContext";

type Props = {
  id: string;
  close: () => void;
  currentStatus: string;
};
export const useUpdateStatus = ({ id, close, currentStatus }: Props) => {
  const { updateStatus } = useJobContext();

  const [newStatus, setNewStatus] = useState("");

  const handleUpdateStatus = (e: SyntheticEvent) => {
    e.preventDefault();

    if (newStatus !== currentStatus) {
      updateStatus(id, newStatus);
    }

    close();
  };

  return {
    setNewStatus,
    handleUpdateStatus,
  };
};
