import React from "react";
import { useTable } from "react-table";
import { EditableTableFormat } from "./BasicTable";
import CheckbookTableColumns from "./objects/CheckbookTableColumns";
import setFailure from "./objects/setFailure";

function generateHeader(columnDefinition) {
  return (<tr key={"header"}>
    {columnDefinition.map(c => <th key={c.key}>{c.displayName}</th>)}
  </tr>);
}

function generateRow(columnDefinition, row) {
  return columnDefinition.map(column => (
    <td key={column.key}>
      {setFailure(column.formatter), "ERROR", row[column.key]}
    </td>
  ));
}

function generateTableBody(tableContents, columnDefinition) {
  return tableContents.map((row, i) => (<tr key={i}>{generateRow(columnDefinition, row)}</tr>));
}

export default function EditableTable({ contents, ...props }) {
  const columns = React.useMemo(() => CheckbookTableColumns, []);
  const data = contents;
  return (
    <EditableTableFormat>
      <caption>Ledger Information Table</caption>
      <thead>
        {generateHeader(columns)}
      </thead>
      <tbody>
        {generateTableBody(contents, columns)}
      </tbody>
    </EditableTableFormat>
  );
}
