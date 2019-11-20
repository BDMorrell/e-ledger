import styled from "styled-components";
import Header from "../components/Header";
import { Primary, Secondary, ButtonRow } from "../components/Buttons";
import { theme } from "../components/constants";

const LoginFormBox = styled.form`
  display: flex;
  margin: 5em;
  margin-left: auto;
  margin-right: auto;
  // box-shadow: ${theme.subtleShadow};
  border-radius: ${theme.borderWidth};
  align-content: space-between;
  max-width: 20em;
  flex-direction: column;
  padding 1em;
`;

const MyInput = styled.input`
  padding: ${theme.friendlyPadding};
  border: 0;
  border-bottom: ${theme.borderWidth} solid ${theme.main};
  // margin: ${theme.friendlyPadding};
  font: inherit;
`;

const LoginForm = () => (
  <LoginFormBox action="/checkbook" method="post">
    <MyInput type="text" name="usrName" id="uname" placeholder="Username" />
    <MyInput type="password" name="password" id="pass" placeholder="Password" />
    <ButtonRow>
      <Primary>Login</Primary>
      <Secondary>Cancel</Secondary>
    </ButtonRow>
  </LoginFormBox>
);

export default function LoginPage() {
  return (
    <>
      <Header />
      <LoginForm />
    </>
  );
}