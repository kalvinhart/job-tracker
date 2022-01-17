import { useMemo, useRef, useEffect, useState, useContext } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination,
} from "react-table";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../../context/jobContext";

import { fetchJobs } from "../../utilities/firebase";

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
  const [loading, setLoading] = useState(true);
  const { setJobs, filteredJobs, setFilteredJobs } = useContext(JobContext);

  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;

    const retrieveJobs = async () => {
      const originalJobs = await fetchJobs();
      const newJobs = filterJobs(originalJobs);
      setJobs(originalJobs);
      setFilteredJobs(newJobs);
    };

    retrieveJobs();

    loadedRef.current = true;
    setLoading(false);
  }, [fetchJobs]);

  const filterJobs = (jobs) => {
    return jobs.map((job) => {
      return {
        ...job,
        date: new Date(job.date.seconds).toDateString(),
        salary: job.salary.toString(),
      };
    });
  };

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const columns = useMemo(() => columnData, []);
  const data = useMemo(() => filteredJobs, [filteredJobs]);

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
