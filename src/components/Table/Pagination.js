import { InputText, StyledSelect } from "../../styles/formStyles";
import { PaginationButton } from "./Table.styled";

const Pagination = ({
  options: {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    pageIndex,
    pageSize,
  },
}) => {
  return (
    <div>
      <PaginationButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {"<<"}
      </PaginationButton>{" "}
      <PaginationButton onClick={() => previousPage()} disabled={!canPreviousPage}>
        {"<"}
      </PaginationButton>{" "}
      <PaginationButton onClick={() => nextPage()} disabled={!canNextPage}>
        {">"}
      </PaginationButton>{" "}
      <PaginationButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {">>"}
      </PaginationButton>{" "}
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
      </span>
      <span>
        | Go to page:{" "}
        <InputText
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: "30px", paddingRight: 0 }}
        />
      </span>{" "}
      <StyledSelect
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};

export default Pagination;
