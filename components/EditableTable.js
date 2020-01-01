import React from "react";
import { useTable } from "react-table";
import CheckbookTableColumns from "./objects/CheckbookTableColumns";
import styled from "styled-components";
import { theme } from "../static/constants";

const EditableTableFormat = styled.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
  thead th {
    position: sticky;
    top: 0;
    background-color: white;
    box-shadow: 0 1px ${theme.lightColor}; // bottom border when sticked
    border-top: none;
  }
  * tr {
    height: 2em;
    td, th {
      border: 1px solid ${theme.lightColor};
      padding: .25em;
    }
    * {
      :first-child {
        border-left: none;
      }
      :last-child {
        border-right: none;
      }
    }
  }
  caption { // for screen readers only
    border-top: 80vh solid transparent;
    caption-side: bottom;
    color: transparent;
    user-select: none;
  }
`;

function renderCellContents({ cell }) {
  try {
    return (cell.column.formatter(cell.value));
  } catch (e) {
    console.info(e); // info so it can be filtered out, because the table has a lot of cells
    return (<span style={{ color: "red" }}>E.{e.name}</span>);
  }
}

function renderCell(tdInfo) {
  return (
    <td {...tdInfo.getCellProps()}>
      {tdInfo.render(renderCellContents)}
    </td>
  );
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
              {trInfo.cells.map(renderCell)}
            </tr>
          );
        })}
      </tbody>
    </EditableTableFormat>
  );
}
