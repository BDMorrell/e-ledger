import styled from "styled-components";
import { theme } from "../lib/constants/stylingParts";
import { generateAccountsDOM } from "./AccountSelectors";

const SideBar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  overflow-x: hidden;
  border-right: 1px solid ${theme.shadowColor};
  background-color: ${theme.shadowColor};
  /* box-shadow: inset ${theme.subtleShadow} */
`;
export default SideBar;

export const InformationArea = styled.div`
  text-align: center;
  border-top: 1px solid ${theme.shadowColor};
`;

const AccountArea = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

export function AccountPane({ accounts, ...props }) {
  return (
    <AccountArea>
      {generateAccountsDOM(accounts)}
    </AccountArea>
  );
}
