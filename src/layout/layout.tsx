import styled from "@emotion/styled";
import { ReactNode } from "react";
import Banner from "./banner";
import Navigation from "./navigation";

type LayoutProps = {
  children: ReactNode;
};

const ColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const Main = styled.main`
  height: 100%;
`;

function Layout({ children }: LayoutProps) {
  return (
    <ColumnLayout>
      <Banner />
      <RowLayout>
        <Navigation />
        <Main>{children}</Main>
      </RowLayout>
    </ColumnLayout>
  );
}

export default Layout;
