import { ColumnFilter } from "./plugins/ColumnFilter"

export const COLUMNS = [
  {
    Header: "id",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "campus",
    accessor: "campus",
    Filter: ColumnFilter,
  },
  {
    Header: "edificio",
    accessor: "edificio",
    Filter: ColumnFilter,
  },
  {
    Header: "oggetto",
    accessor: "oggetto",
    Filter: ColumnFilter,
  },
  {
    Header: "budget",
    accessor: "budget",
    Filter: ColumnFilter,
  },
  {
    Header: "eseguito",
    accessor: "eseguito",
    Filter: ColumnFilter,
  },
  {
    Header: "residuo",
    accessor: "residuo",
    Filter: ColumnFilter,
  },
  {
    Header: "stadio",
    accessor: "stadio",
    Filter: ColumnFilter,
  },
  {
    Header: "ref.",
    accessor: "referente",
    Filter: ColumnFilter,
  },
  {
    Header: "ruolo",
    accessor: "ruolo",
    Filter: ColumnFilter,
  },
]

/* export const GROUPED_COLUMNS = [
  {
    Header: "info",
    columns: [
      {
        Header: "id",
        accessor: "id",
        Filter: ColumnFilter,
      },
      {
        Header: "campus",
        accessor: "campus",
        Filter: ColumnFilter,
      },
      {
        Header: "edificio",
        accessor: "edificio",
        Filter: ColumnFilter,
      },
      {
        Header: "oggetto",
        accessor: "oggetto",
        Filter: ColumnFilter,
      },
    ],
  },
  {
    Header: "stato",
    columns: [
      {
        Header: "budget",
        accessor: "budget",
        Filter: ColumnFilter,
      },
      {
        Header: "eseguito",
        accessor: "eseguito",
        Filter: ColumnFilter,
      },
      {
        Header: "residuo",
        accessor: "residuo",
        Filter: ColumnFilter,
      },
      {
        Header: "stadio",
        accessor: "stadio",
        Filter: ColumnFilter,
      },
    ],
  },
  {
    Header: "attività",
    columns: [
      {
        Header: "ref.",
        accessor: "referente",
        Filter: ColumnFilter,
      },
      {
        Header: "ruolo",
        accessor: "ruolo",
        Filter: ColumnFilter,
      },
    ],
  },
]
 */
