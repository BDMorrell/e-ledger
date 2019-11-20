import Link from "next/link";
import styled from "styled-components";
import { theme } from "./constants";

const Banner = styled.header`
  position: sticky;
  top: 0;
  background: white;
  // border-bottom: 1px solid #dbdbdb;
  padding: 0.5em;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  
  font-family: 'Open Sans', sans-serif;
  box-shadow: 0px 0px 5px 0px #dbdbdb;

  a {
    text-decoration: none;
    color: ${theme.main};
  }
`;

const Logo = () => (
  <Link href="/">
    <a>Electronic&nbsp;Ledger</a>
  </Link>
);

const AccountLink = () => (
  <Link href="/login">
    <a>
      <span>&#x2318; Login</span>
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
