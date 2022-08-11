// REACT
import React from "react"

// CSS
import styles from "../table.module.css"

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column
  return (
    <span>
      <input
        className={styles.search__column}
        placeholder="cerca..."
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  )
}
