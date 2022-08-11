// REACT
import React from "react"

// CSS
import styles from "../table.module.css"

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <input
        className={styles.search__global}
        placeholder="cerca..."
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  )
}
