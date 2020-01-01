import styled from "styled-components";
import React from "react";
import { theme, icons, svgUri } from "../static/constants";

const AccountArea = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const AcccountList = styled.ul`
  ${props => props.visible ? "" : "display: none;"}
  padding-inline-start: 1em; // Edge incompatible as of writing this line
  li {
    list-style: none;
  }
`;

const Checkbox = styled.input` // TODO: mess with this
  appearance: none;
  width: 1.5em;
  height: 1.5em;
  margin: 0;
  margin-top: auto;
  margin-bottom: auto;
  padding: 0;
  border: none;
  outline: none;

  // icons
  background-image: ${svgUri(icons.arrowRight)};
  background-size: 1.5em 1.5em;
  // transition: transform 0.1s;
  &:checked {
    background-image: ${svgUri(icons.arrowDown)};
    // transform: rotate(90deg);
  }

  &:hover {
    background-color: ${theme.shadowColor};
    border-radius: 100%;
  }
`;

function generateAccountsDOM(accounts, visible=true) {
  if (Array.isArray(accounts) && accounts.length !== 0) {
    return (
      <AcccountList visible={visible}>
        {accounts.map(singleAccount => <AccountDisplay key={singleAccount.name} account={singleAccount} />)}
      </AcccountList>
    );
  } else {
    return null;
  }
}

class AccountDisplay extends React.Component {
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
    if (this.hasSubAccounts) {
      return (
        <li>
          <Checkbox type="checkbox" checked={this.state.subAccountsVisible} onChange={e => this.toggleSubaccountVisibility(e)}/>
          {this.props.account.name}
          {generateAccountsDOM(this.props.account.subAccounts, this.state.subAccountsVisible)}
        </li>
      );
    } else {
      return (
        <li>
          <Checkbox type="checkbox" style={{visibility: "hidden"}} />{/* This is for alignment only */}
          {this.props.account.name}
        </li>
      );
    }
  }
}

export default function AccountPane(props) {
  return (
    <AccountArea>
      {generateAccountsDOM(props.accounts)}
    </AccountArea>
  );
}
