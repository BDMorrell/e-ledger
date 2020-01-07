import Header from "../../components/Header";
import styled from "styled-components";
import { theme } from "../../lib/constants/stylingParts";
import AppGrid from "../../components/AppGrid";
import SideBar, { InformationArea, AccountPane } from "../../components/SideBar";
import { exampleTableBodyObject, exampleAccountData } from "../../lib/constants/exampleData";
import EditableTable from "../../components/EditableTable";

const MainGridSection = styled.div`
  overflow-y: scroll;
  grid-area: main;
`;

export default function CheckbookPage() {
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
        <EditableTable contents={exampleTableBodyObject} />
      </MainGridSection>
    </AppGrid>
  );
}

