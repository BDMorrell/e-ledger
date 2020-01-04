import { iota, formatMoney, finished } from "./formatters";

const checkbookTableColumns = [
  {
    Header: "Account",
    accessor: "Account",
    formatter: iota,
  },
  {
    Header: "Check",
    accessor: "Check",
    formatter: iota,
  },
  {
    Header: "Date",
    accessor: "Date",
    formatter: iota,
  },
  {
    Header: "Description",
    accessor: "Description",
    formatter: iota,
  },
  {
    Header: "Done",
    accessor: "Done",
    formatter: finished,
  },
  {
    Header: "Debit",
    accessor: "Debit",
    formatter: formatMoney,
  },
  {
    Header: "Credit",
    accessor: "Credit",
    formatter: formatMoney,
  },
];

export default checkbookTableColumns;
