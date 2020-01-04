import React from "react";
import { useTable } from "react-table";
import styled from "styled-components";
import { theme } from "../static/constants";
import CheckbookTableColumns from "./objects/CheckbookTableColumns";

const EditableTableFormat = styled.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
  thead th {
    position: sticky;
    top: 0;
    background-color: white;
    box-shadow: 0 1px ${theme.lightColor}; /* bottom border when sticked */
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
    td[contenteditable="true"] {
      white-space: nowrap;
      :focus {
        outline-color: ${theme.main};
        br {
          display: none;
        }
      }
    }
  }
  caption { /* for screen readers only, and allow for scrolling past the bottom */
    border-top: 80vh solid transparent;
    caption-side: bottom;
    color: transparent;
    user-select: none;
  }
`;

function renderCell(cell) {
  const { column, row, value: originalValue, getCellProps, render } = cell;

  const [value, setValue] = React.useState(originalValue);

  const onInput = e => {
    /* Don't sanitize here unless debugging! The curser jumps unexpectedly for the user. */
  }

  const onBlur = e => {
    const nodes = e.target.childNodes;
    if (e.target.childNodes.length > 1 || nodes.length === 1 && nodes[0].nodeType !== 3) {
      e.target.textContent = e.target.textContent.normalize().trim();
    }
    setValue(e.target.textContent);
  }

  React.useEffect(() => {
    setValue(originalValue);
  }, [originalValue]);

  return (
    <td {...getCellProps()} contentEditable="true" suppressContentEditableWarning="true" onInput={onInput} onBlur={onBlur}>
      {render(<>{value}</>)}
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
  });
  return (
    <>
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
      <pre>Debugging (in EditableTable):{"\n"+JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
