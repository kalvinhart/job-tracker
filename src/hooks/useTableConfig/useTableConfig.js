import { useMemo } from "react";

import { columnData } from "../../config/tableConfig";

export const useTableConfig = (jobs) => {
  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => jobs, [jobs]);

  return { columns, data };
};
