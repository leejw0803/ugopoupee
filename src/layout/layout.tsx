import styled from "@emotion/styled";
import { ReactNode } from "react";
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
  width: 100%;
`;

const Main = styled.main`
  padding: 2.5rem;
  height: 100%;
  width: 100%;
`;

function Layout({ children }: LayoutProps) {
  return (
    <ColumnLayout>
      <Navigation />
      <Main>{children}</Main>
    </ColumnLayout>
  );
}

export default Layout;
