import styled from "styled-components";

const AccountArea = styled.div`
  grid-area: picker;
  overflow: auto;
`;

function AccountDisplay(props) {
  if (props && props.account && props.account.name && Array.isArray(props.account.subAccounts)) {
    return (
      <li>
        {props.account.name}
        {generateAccountsDOM(props.account.subAccounts)}
      </li>
    );
  } else {
    return null;
  }
}

function generateAccountsDOM(accounts) {
  if (Array.isArray(accounts) && accounts.length !== 0) {
    return (
      <ul>
        {accounts.map(singleAccount => <AccountDisplay key={singleAccount.name} account={singleAccount} />)}
      </ul>
    );
  } else {
    return null;
  }
}

export default function AccountPane(props) {
  return (
    <AccountArea>
      {generateAccountsDOM(props.accounts)}
    </AccountArea>
  );
}
