import Header from "../components/Header";
import styled from "styled-components";
import { theme } from "../static/constants";
import AppGrid from "../components/AppGrid";
import SideBar, { InformationArea } from "../components/SideBar";
import AccountPane from "../components/AccountPane";
import { EditableTableFormat } from "../components/BasicTable";
import { exampleTableBodyObject, exampleAccountData } from "../static/exampleData";

const MainGridSection = styled.div`
  overflow-y: scroll;
  grid-area: main;
`;


function generateRow() {
  return (v, i) => {
    const formatMoney = ammount => {
      if (ammount !== 0) {
        return ("$" + Number.parseFloat(ammount).toFixed(2));
      } // else
      return "";
    };
    return (<tr key={i}>
      {[v.Account, v.Check, v.Date, v.Description, v.Done ? "X" : "", formatMoney(v.Debit), formatMoney(v.Credit)].map(text => (<td>{text}</td>))}
    </tr>);
  };
}

export default function CheckbookPage() {
  const tableContents = exampleTableBodyObject.map(generateRow());
  return (
    <AppGrid>
      <Header style={{ position: "staic", gridArea: "header", borderBottom: "1px solid " + theme.shadowColor, }} />
      <SideBar>
        <AccountPane accounts={exampleAccountData} />
        <InformationArea>
          <div>You have $__.__</div>
          <div>Some more stats</div>
          <div>More placeholder text</div>
        </InformationArea>
      </SideBar>
      <MainGridSection>
        <EditableTableFormat>
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
        </EditableTableFormat>
      </MainGridSection>
    </AppGrid>
  );
}
