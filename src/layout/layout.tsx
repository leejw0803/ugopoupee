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

const Main = styled.main`
  margin-top: 3.5rem;
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
