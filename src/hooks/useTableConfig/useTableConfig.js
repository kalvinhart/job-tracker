import { useMemo } from "react";

import { columnData, statusOptions, centeredColumns } from "../../config/tableConfig";

export const useTableConfig = (jobs) => {
  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => jobs, [jobs]);

  return { columns, data, statusOptions, centeredColumns };
};
