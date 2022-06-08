import { useState } from "react";
import { useAsyncDebounce } from "react-table";

import { StyledGlobalFilter } from "../Table/Table.styled";
import { StyledInput } from "../../../styles/formStyles";

const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <StyledGlobalFilter>
      <span>
        Search:
        <StyledInput
          type="text"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
      </span>
    </StyledGlobalFilter>
  );
};

export default GlobalFilter;
