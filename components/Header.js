import Link from "next/link";
import styled from "styled-components";
import { theme } from "./constants";

const Banner = styled.header`
  position: sticky;
  top: 0;
  background: white;
  padding: 0.5em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  
  font-family: 'Open Sans', sans-serif;
  // box-shadow: ${theme.subtleShadow};
`;

const Logo = () => (
  <Link href="/">
    <a style={{font: "200 20px 'Open Sans', sans-serif"}}>Electronic&nbsp;Ledger</a>
  </Link>
);

const AccountLink = () => (
  <Link href="/login">
    <a>
      <div>&#x2318; Login</div>
    </a>
  </Link>
);

export default function Header() {
  return (
    <Banner>
      <Logo />
      <AccountLink />
    </Banner>
  );
}
