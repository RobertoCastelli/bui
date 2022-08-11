import { ColumnFilter } from "./plugins/ColumnFilter"

export const COLUMNS = [
  {
    Header: "id",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "title",
    accessor: "title",
    Filter: ColumnFilter,
  },
  {
    Header: "action",
    accessor: "action",
    Filter: ColumnFilter,
  },
]
