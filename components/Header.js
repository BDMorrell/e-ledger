import Link from "next/link";
import styled from "styled-components";
import { theme } from "./constants";

const Banner = styled.nav`
  position: sticky;
  top: 0;
  background: white;
  padding-left: 0.5em;
  padding-right: 0.5em;
  height: ${theme.headerHeight};

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

export default function Header(props) {
  return (
    <Banner style={props.style}>
        <Logo />
        <AccountLink />
    </Banner>
  );
}
