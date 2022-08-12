// REACT
import { useContext, useMemo } from "react"

// TABLE
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  useRowSelect,
} from "react-table"
import { COLUMNS } from "./Columns"
import { GlobalFilter } from "./plugins/GlobalFilter"
import { Checkbox } from "./plugins/Checkbox"

// CONTEXT
import { DataContext } from "../../context/context"

// CSS
import styles from "./table.module.css"

const Table = () => {
  const { database } = useContext(DataContext)

  // data
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => {
    return [
      {
        id: "id",
        campus: "campus",
      },
    ]
  }, [])
  /*  const data = useMemo(() => database, []) */

  // useTable props + plugins
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",

            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ]
      })
    }
  )

  return (
    <div className={styles.wrapper}>
      <h2>table</h2>
      {/* COLUMN HIDER */}
      <div className={styles.header__list}>
        <div>
          <Checkbox {...getToggleHideAllColumnsProps()} /> all
        </div>
        {allColumns.map((column) => (
          <div key={column.id}>
            <input type="checkbox" {...column.getToggleHiddenProps()} />
            {column.Header}
          </div>
        ))}
      </div>
      {/*  GLOBAL FILTER */}
      <GlobalFilter filter={state.globalFilter} setFilter={setGlobalFilter} />
      {/* TABLE VIEW */}
      <table className={styles.table} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column.id}>
                  <div
                    className={styles.header__title}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    {/* COLUMN SORT */}
                    <span className={styles.sort__arrows}>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ⮙"
                          : " ⮛"
                        : " "}
                    </span>
                  </div>
                  {/* COLUMN FILTER */}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(
                  (cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    )
                  },
                  null,
                  2
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
      {console.log(
        `${JSON.stringify({
          selectedFlatRows: selectedFlatRows.map((row) => row.original),
        })}`
      )}
    </div>
  )
}

export default Table
