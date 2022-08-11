// REACT
import { useContext, useMemo } from "react"

// TABLE
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table"
import { COLUMNS } from "./Columns"

// CONTEXT
import { DataContext } from "../../context/context"

// CSS
import styles from "./table.module.css"
import { GlobalFilter } from "./plugins/GlobalFilter"

const Table = () => {
  const { database } = useContext(DataContext)

  const dummyData = [
    {
      id: 0,
      title: "example",
      action: "zero",
    },
    {
      id: 1,
      title: "demo",
      action: "uno",
    },
    {
      id: 2,
      title: "ciao",
      action: "testa",
    },
  ]

  // data
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => dummyData, [])

  // useTable props + options
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  )

  return (
    <div className={styles.wrapper}>
      <h2>table</h2>
      {/*  GLOBAL FILTER */}
      <GlobalFilter filter={state.globalFilter} setFilter={setGlobalFilter} />
      <table className={styles.table} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, id) => (
                <th key={id}>
                  <div
                    className={styles.header__title}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    {/* COLUMN SORT */}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ⮙"
                          : " ⮛"
                        : " ⮚"}
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
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
