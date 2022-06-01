import { StyledInput, StyledSelect } from "../../../styles/formStyles";
import { PaginationButton } from "../Table/Table.styled";

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
        <StyledInput
          type="number"
          min={0}
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
          style={{ width: "45px", paddingRight: 0, textAlign: "center" }}
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
