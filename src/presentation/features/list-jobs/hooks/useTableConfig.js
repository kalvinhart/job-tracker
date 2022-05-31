import { useMemo } from "react";

import {
  columnData,
  statusOptions,
  centeredColumns,
} from "../../features/list-jobs/config/tableConfig";

export const useTableConfig = (jobs) => {
  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => jobs, [jobs]);

  return { columns, data, statusOptions, centeredColumns };
};
