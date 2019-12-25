import { EditableTableFormat } from "./BasicTable";

function iota(value) {
  return value;
}

const formatMoney = ammount => {
  if (ammount !== 0) {
    return ("$" + Number.parseFloat(ammount).toFixed(2));
  } // else
  return "";
};

const finished = bool => bool ? "X" : "";

const CheckbookTableColumns = [
  { key: "Account", displayName: "Account", formatter: iota },
  { key: "Check", displayName: "Check", formatter: iota },
  { key: "Date", displayName: "Date", formatter: iota },
  { key: "Description", displayName: "Description", formatter: iota },
  { key: "Done", displayName: "Done", formatter: finished },
  { key: "Debit", displayName: "Debit", formatter: formatMoney },
  { key: "Credit", displayName: "Credit", formatter: formatMoney },
];

function generateHeader(columnDefinition) {
  return (<tr>
    {columnDefinition.map(c => c.displayName).map(t => <th>{t}</th>)}
  </tr>);
}

function generateRow(columnDefinition, row) {
  return columnDefinition.map(column => (<td>{tryFormat(column, row)}</td>));

  function tryFormat(column, row) {
    try {
      return column.formatter(row[column.key]);
    } catch (e) {
      console.error(e);
      return "ERROR";
    }
  }
}

function generateTableBody(tableContents, columnDefinition) {
  return tableContents.map((row, i) => (<tr key={i}>{generateRow(columnDefinition, row)}</tr>));
}

function EditableTable({ contents, ...props }) {
  const columns = CheckbookTableColumns;
  return <EditableTableFormat>
    <caption>Ledger Information Table</caption>
    <thead>
      {generateHeader(columns)}
    </thead>
    <tbody>
      {generateTableBody(contents, columns)}
    </tbody>
  </EditableTableFormat>;
}
export default EditableTable;

