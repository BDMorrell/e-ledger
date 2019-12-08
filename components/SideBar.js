import styled from "styled-components";
import { theme } from "../static/constants";

const SideBar = styled.aside`
  grid-area: sidebar;
  display: grid;
  grid-template:
    auto max-content
    / auto;
  grid-template-areas:
    "picker"
    "stats";

  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid ${theme.shadowColor};
  background-color: ${theme.shadowColor};
  // box-shadow: inset ${theme.subtleShadow}
`;
export default SideBar;

export const InformationArea = styled.div`
  grid-area: stats;
  text-align: center;
  border-top: 1px solid ${theme.shadowColor};
`;
