import { useMemo, useRef } from "react";

export const useFilterOptions = (preFilteredRows, setFilter, id, hide) => {
  const filterRef = useRef();

  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  const handleOverlayClose = (e) => {
    if (filterRef.current === e.target.closest("div[data-name='filter']")) return;
    hide();
  };

  const onSelectChange = (e) => {
    setFilter(e.target.value || undefined);
    hide();
  };

  return {
    filterRef,
    options,
    handleOverlayClose: (e) => handleOverlayClose(e),
    onSelectChange: (e) => onSelectChange(e),
  };
};
