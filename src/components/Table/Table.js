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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

import Spinner from "../Spinner/Spinner";
import GlobalFilter from "./GlobalFilter";
import DefaultColumnFilter from "./DefaultColumnFilter";
import Pagination from "./Pagination";
import { columnData, statusOptions, centeredColumns } from "./tableConfig";

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
import { StatusSpan } from "../../styles/fontStyles";
import NoData from "./NoData";

const Table = () => {
  const navigate = useNavigate();
  const { jobs, loading, jobsForTable, setSelectedJob } = useContext(JobContext);

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => jobsForTable, [jobsForTable]);

  const goToJobView = (id) => {
    setSelectedJob(jobs.filter((job) => job.id === id)[0]);
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

  if (loading) return <Spinner />;

  if (!loading && jobs.length === 0) return <NoData />;

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
                <StyledTR
                  {...row.getRowProps()}
                  onClick={() => goToJobView(row.original.id)}
                >
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
