import Header from "../components/Header";
import styled from "styled-components";
import { theme } from "../components/constants";

const AppGrid = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template:
    ${theme.headerHeight} auto
    / 15em auto;
  grid-template-areas:
    "header header"
    "sidebar main";
`;

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

const AccountArea = styled.ul`
  grid-area: picker;
  overflow: auto;
`;

const InformationArea = styled.div`
  grid-area: stats;
  text-align: center;
  border-top: 1px solid ${theme.shadowColor};
`;

const MainSection = styled.div`
  overflow-y: scroll;
  grid-area: main;
`;

const Table = styled.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
  thead {
    box-shadow: ${theme.subtleShadow};
    * {
      position: sticky;
      top: 0;
      border-top: none;
      background-color: white;
      *:before {
        content: "";
        position: absolute;
        top: 0;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border: 1px solid ${theme.shadowColor};
        border-top: none;
        // box-shadow: ${theme.subtleShadow};
      }
    }
  }
  tbody td, thead th {
    padding: .25em;
    border: 1px solid lightGrey;
  }
  tbody tr, thead tr {
    height: 2em;
    *:first-child {
      border-left: none;
    }
    *:last-child {
      border-right: none;
    }
  }
  caption {
    border-top: 100vh solid transparent;
    caption-side: bottom;
    color: transparent;
    user-select: none;
  }
`;

export default function LoginPage() {
  const tableBodyObject = [
    {
      Account: "Account 1",
      Check: "XXXX",
      Date: "Yesterday",
      Description: "Payment to my friend",
      Done: false,
      Debit: 1000,
      Credit: 0,
    },
    {
      Account: "Account 5",
      Check: "XXXY",
      Date: "Today",
      Description: "Payment to my not friend",
      Done: false,
      Debit: 0.01,
      Credit: 0,
    },
    {
      Account: "Sub account 2",
      Check: "",
      Date: "1 Jan 1970",
      Description: "Money from a golden gift card",
      Done: false,
      Debit: 0,
      Credit: 25000.00,
    },
    {
      Account: "",
      Check: "",
      Date: "",
      Description: "",
      Done: false,
      Debit: 0,
      Credit: 0,
    },
  ];
  const tableContents = tableBodyObject.map((v, i) => {
    const formatMoney = ammount => {
      if (ammount !== 0) {
        return ("$" + Number.parseFloat(ammount).toFixed(2));
      } // else
      return "";
    };
    return (
      <tr key={i}>
        {[v.Account, v.Check, v.Date, v.Description, v.Done ? "X" : "", formatMoney(v.Debit), formatMoney(v.Credit)].map(text => (<td>{text}</td>))}
      </tr>
    );
  });
  return (
    <AppGrid>
      <Header style={{ position: "staic", gridArea: "header", borderBottom: "1px solid " + theme.shadowColor,}} />
      <SideBar>
        <AccountArea>
          <li>Everything
            <ul>
              <li>Account 1
                <ul>
                  <li>Sub account 1</li>
                  <li>Sub account 2</li>
                </ul>
              </li>
              {[2, 3, 4, 5].map(i => <li key={i}>Account {i}</li>)}
            </ul>
          </li>
        </AccountArea>
        <InformationArea>
          <div>You have $__.__</div>
          <div>Some more stats</div>
          <div>More placeholder text</div>
        </InformationArea>
      </SideBar>
      <MainSection>
        <Table>
          <caption>Ledger Information Table{/* This is for screen readers, perhaps */}</caption>
          <thead>
            <tr>
              <th>Account</th>
              <th>Check</th>
              <th>Date</th>
              <th>Description</th>
              <th>Done</th>
              <th>Debit</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            {tableContents}
          </tbody>
        </Table>
      </MainSection>
    </AppGrid>
  );
}