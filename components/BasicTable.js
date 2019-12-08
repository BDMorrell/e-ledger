import styled from "styled-components";
import { theme } from "../static/constants";
export const EditableTableFormat = styled.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
  thead {
    box-shadow: ${theme.subtleShadow};
    * {
      position: sticky;
      top: 0;
      border-top: none;
      background-color: white;
      *:before {
        content: "";
        position: absolute;
        top: 0;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border: 1px solid ${theme.shadowColor};
        border-top: none;
        // box-shadow: ${theme.subtleShadow};
      }
    }
  }
  tbody td, thead th {
    padding: .25em;
    border: 1px solid lightGrey;
  }
  tbody tr, thead tr {
    height: 2em;
    *:first-child {
      border-left: none;
    }
    *:last-child {
      border-right: none;
    }
  }
  caption {
    border-top: 100vh solid transparent;
    caption-side: bottom;
    color: transparent;
    user-select: none;
  }
`;
