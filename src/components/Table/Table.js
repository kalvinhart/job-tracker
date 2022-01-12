import { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination,
  useRowState,
} from "react-table";

import GlobalFilter from "./GlobalFilter";
import DefaultColumnFilter from "./DefaultColumnFilter";
import Pagination from "./Pagination";
import { columnData, jobData } from "./tableConfig";

import {
  TableWrapper,
  StyledTableBorder,
  StyledTable,
  StyledTH,
  StyledTR,
  StyledTD,
} from "./Table.styled";

const Table = () => {
  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => jobData, []);

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
    usePagination,
    useRowState
  );
  return (
    <TableWrapper>
      <StyledTableBorder>
        <StyledTable {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <StyledTH {...column.getHeaderProps()}>
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
              return (
                <StyledTR {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    console.log(cell);
                    return (
                      <StyledTD {...cell.getCellProps()}>{cell.render("Cell")}</StyledTD>
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
