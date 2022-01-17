import { useMemo, useContext } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination,
} from "react-table";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../../context/jobContext";

import GlobalFilter from "./GlobalFilter";
import DefaultColumnFilter from "./DefaultColumnFilter";
import Pagination from "./Pagination";
import { columnData, statusOptions, centeredColumns } from "./tableConfig";

import {
  TableWrapper,
  StyledTableBorder,
  StyledTable,
  StyledTH,
  StyledTR,
  StyledTD,
  StatusSpan,
} from "./Table.styled";

const Table = () => {
  const navigate = useNavigate();
  const { filteredJobs } = useContext(JobContext);

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => filteredJobs, []);

  const goToJobView = (id) => {
    navigate(`/job/${id}`);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { globalFilter, pageIndex, pageSize },
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageSize: 20 },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );
  return (
    <TableWrapper>
      <StyledTableBorder>
        <StyledTable {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <StyledTH hideFirst={true} {...column.getHeaderProps()}>
                    <div {...column.getSortByToggleProps()}>
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? " desc" : " asc") : ""}
                      </span>
                    </div>
                    <div>{column.canFilter ? column.render("Filter") : null}</div>
                  </StyledTH>
                ))}
              </tr>
            ))}

            <tr>
              <StyledTH colSpan={columns.length}>
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
              </StyledTH>
            </tr>
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              console.log("Row:", row);
              return (
                <StyledTR
                  {...row.getRowProps()}
                  onClick={() => goToJobView(row.original.id)}
                >
                  {row.cells.map((cell) => {
                    console.log("Cell:", cell);
                    console.log("Cell props: ", cell.getCellProps());
                    const center = centeredColumns.includes(cell.column.Header);
                    const cellValue = cell.render("Cell").props.value;
                    const status = statusOptions.includes(cellValue)
                      ? cellValue
                      : undefined;
                    return (
                      <StyledTD center={center} {...cell.getCellProps()}>
                        {status ? (
                          <StatusSpan status={status}>{status}</StatusSpan>
                        ) : (
                          cell.render("Cell")
                        )}
                      </StyledTD>
                    );
                  })}
                </StyledTR>
              );
            })}
          </tbody>
        </StyledTable>
      </StyledTableBorder>

      <Pagination
        options={{
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
        }}
      />
    </TableWrapper>
  );
};

export default Table;
