import styled from "styled-components";
import { theme } from "../static/constants";

const buttonForm = `
  padding: ${theme.friendlyPadding};
  margin: 0.5em;
  border: ${theme.borderWidth} solid ${theme.main};
  // border: none;
  font: inherit;
  // border-radius: ${theme.friendlyPadding};
`;

const Primary = styled.button`
  ${buttonForm}
  background-color: ${theme.main};
  color: ${theme.onMain};
`;

const Secondary = styled.button`
  ${buttonForm}
  color: ${theme.main};
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-items: right;
  flex-direction: row-reverse;
`;

export { Primary, Secondary, ButtonRow };
