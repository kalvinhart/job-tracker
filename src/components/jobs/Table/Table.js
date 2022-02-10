import { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination,
} from "react-table";

import GlobalFilter from "./GlobalFilter";
import DefaultColumnFilter from "./DefaultColumnFilter";
import Pagination from "./Pagination";

import { renderCell, renderHeader } from "../../../utilities/table";

import {
  TableWrapper,
  StyledTableBorder,
  StyledTable,
  StyledTH,
  StyledTR,
} from "./Table.styled";

const Table = ({ columns, data, viewJob }) => {
  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

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
                {headerGroup.headers.map(renderHeader)}
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
                <StyledTR {...row.getRowProps()} onClick={() => viewJob(row.original.id)}>
                  {row.cells.map(renderCell)}
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
