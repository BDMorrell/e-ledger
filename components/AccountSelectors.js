import styled from "styled-components";
import React from "react";
import { theme, icons, svgUri } from "../lib/constants/stylingParts";

const AcccountList = styled.ul`
  ${props => props.visible ? "" : "display: none;"}
  padding-inline-start: 1em; /* Edge incompatible as of writing this line */
  li {
    list-style: none;
  }
`;

const TreeExpandHandle = styled.input` /* TODO: mess with this */
  appearance: none;
  width: 1.5em;
  height: 1.5em;
  margin: 0;
  margin-top: auto;
  margin-bottom: auto;
  padding: 0;
  border: none;
  outline: none;

  /* icons */
  background-image: ${svgUri(icons.arrowRight)};
  background-size: 1.5em 1.5em;
  // transition: transform 0.1s;
  &:checked {
    background-image: ${svgUri(icons.arrowDown)};
    /* transform: rotate(90deg); */
  }

  &:hover {
    background-color: ${theme.shadowColor};
    border-radius: 100%;
  }
`;

export function generateAccountsDOM(accounts, visible = true) {
  if (Array.isArray(accounts) && accounts.length !== 0) {
    return (
      <AcccountList visible={visible}>
        {accounts.map(singleAccount => <AccountSelector key={singleAccount.name} account={singleAccount} />)}
      </AcccountList>
    );
  } else {
    return null;
  }
}

class AccountSelector extends React.Component {
  constructor(props) {
    if (!(props && props.account && props.account.name && Array.isArray(props.account.subAccounts))) {
      throw new SyntaxError("props.account is invalid");
    }
    super(props);

    const subAccountsVisible = true;
    this.state = { subAccountsVisible };
  }

  get hasSubAccounts() {
    return this.props.account.subAccounts.length > 0;
  }

  toggleSubaccountVisibility(event) {
    this.setState({ subAccountsVisible: event.target.checked });
  }

  render() {
    const TreeHandleStyle = (this.hasSubAccounts ? {} : { visibility: "hidden" }); // if it's hidden, it to help alignment
    return (
      <li>
        <TreeExpandHandle type="checkbox" checked={this.state.subAccountsVisible} style={TreeHandleStyle} onChange={e => this.toggleSubaccountVisibility(e)} />
        {this.props.account.name}
        {this.hasSubAccounts ? generateAccountsDOM(this.props.account.subAccounts, this.state.subAccountsVisible) : null}
      </li>
    );
  }
}


