import { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination,
} from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

import GlobalFilter from "./GlobalFilter";
import DefaultColumnFilter from "./DefaultColumnFilter";
import Pagination from "./Pagination";

import { statusOptions, centeredColumns } from "../../../tableConfig";

import {
  TableWrapper,
  StyledTableBorder,
  StyledTable,
  StyledTH,
  StyledTHWrapper,
  StyledTR,
  StyledTD,
  StyledFilterIconDiv,
} from "./Table.styled";
import { StatusSpan } from "../../../styles/fontStyles";

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
                {headerGroup.headers.map((column) => (
                  <StyledTH hideFirst={true} {...column.getHeaderProps()}>
                    <StyledTHWrapper>
                      <div {...column.getSortByToggleProps()}>
                        {column.render("Header")}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <FontAwesomeIcon icon={faSortDown} />
                            ) : (
                              <FontAwesomeIcon icon={faSortUp} />
                            )
                          ) : (
                            <FontAwesomeIcon icon={faSort} />
                          )}
                        </span>
                      </div>
                      <StyledFilterIconDiv
                        isFiltered={column.filterValue ? true : false}
                        style={{ position: "relative" }}
                      >
                        {column.canFilter ? column.render("Filter") : null}
                      </StyledFilterIconDiv>
                    </StyledTHWrapper>
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
                <StyledTR {...row.getRowProps()} onClick={() => viewJob(row.original.id)}>
                  {row.cells.map((cell) => {
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
