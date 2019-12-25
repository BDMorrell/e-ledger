import styled from "styled-components";
import { theme } from "../static/constants";
export const EditableTableFormat = styled.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
  thead th {
    position: sticky;
    top: 0;
    background-color: white;
    box-shadow: 0 1px ${theme.lightColor}; // bottom border when sticked
    border-top: none;
    // box-shadow: ${theme.subtleShadow};
  }
  * tr {
    height: 2em;
    td, th {
      padding: .25em;
      border: 1px solid ${theme.lightColor};
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
