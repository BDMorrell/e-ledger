import React from "react";
import { useTable } from "react-table";
import { EditableTableFormat } from "./BasicTable";
import CheckbookTableColumns from "./objects/CheckbookTableColumns";
import setFailure from "./objects/setFailure";

// function generateHeader(columnDefinition) {
//   return (<tr key={"header"}>
//     {columnDefinition.map(c => <th key={c.key}>{c.displayName}</th>)}
//   </tr>);
// }

// function generateRow(columnDefinition, row) {
//   return columnDefinition.map(column => (
//     <td key={column.key}>
//       {setFailure(column.formatter), "ERROR", row[column.key]}
//     </td>
//   ));
// }

// function generateTableBody(tableContents, columnDefinition) {
//   return tableContents.map((row, i) => (<tr key={i}>{generateRow(columnDefinition, row)}</tr>));
// }

function renderCellContents({cell})
{
  try {
    return cell.column.formatter(cell.value);
  } catch(e) {
    console.info(e); // info so it can be filtered out, because the table has a lot of cells
    return <span style={{ color: "red" }}>E.{e.name}</span>
  }
}

export default function EditableTable({ contents, ...props }) {
  const columns = React.useMemo(() => CheckbookTableColumns, []);
  const data = React.useMemo(() => contents, []);
  const {
    getTableProps,
    getTableBodyProps,
    flatHeaders,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })
  return (
    <EditableTableFormat {...getTableProps()}>
      <caption>Ledger Information Table</caption>
      <thead>
        <tr>
          {flatHeaders.map(thInfo => (<th {...thInfo.getHeaderProps()}>
            {thInfo.render('Header')}
          </th>))}
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(trInfo => {
          prepareRow(trInfo);
          return (
            <tr {...trInfo.getRowProps()}>
              {
                trInfo.cells.map(tdInfo => (
                  <td {...tdInfo.getCellProps()}>
                    {tdInfo.render(renderCellContents)}
                  </td>
                ))
              }
            </tr>
          );
        })}
      </tbody>
    </EditableTableFormat>
  );
}
