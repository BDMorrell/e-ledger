import styled from "styled-components";
import { theme } from "../lib/constants/stylingParts";

const AppGrid = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template:
    ${theme.headerHeight} auto
    / 15em auto;
  grid-template-areas:
    "header header"
    "sidebar main";
`;

export default AppGrid;
