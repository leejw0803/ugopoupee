import styled from "@emotion/styled";
import { ReactNode } from "react";

type BannerProps = {
  children?: ReactNode;
};

const BannerImage = styled.div`
  width: 100%;
  height: 20rem;
  background-color: red;
`;

function Banner({ children }: BannerProps) {
  return <BannerImage>{children}</BannerImage>;
}

export default Banner;
