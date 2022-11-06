import { useRecoilState } from "recoil";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

import logoPng from "../assets/logo.png";
import { contentStore } from "../store/content";

type TypoProps = {
  isActive: boolean;
};

const Nav = styled.header`
  width: 100%;
  position: fixed;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  border-bottom: 2px solid white;
  padding: 1rem;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MenuItem = styled.li`
  padding: 0 0.25rem;
`;

const Typo = styled(Typography)<TypoProps>`
  opacity: 0.5;
  transition: opacity 0.2s;
  color: #ffffff;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    `
  opacity: 1;
`}
`;

const Logo = styled.img`
  height: 100%;
`;

function Navigation() {
  const [content, setContent] = useRecoilState(contentStore);

  return (
    <Nav>
      <Logo src={logoPng} alt="logo" />
      <Menu>
        <MenuItem onClick={() => setContent("tenn")}>
          <Typo isActive={content === "tenn"} variant="body1">
            🪡
          </Typo>
        </MenuItem>
        <MenuItem onClick={() => setContent("ume")}>
          <Typo isActive={content === "ume"} variant="body1">
            🍽
          </Typo>
        </MenuItem>
        <MenuItem onClick={() => setContent("yrk")}>
          <Typo isActive={content === "yrk"} variant="body1">
            🎟
          </Typo>
        </MenuItem>
        <MenuItem onClick={() => setContent("my")}>
          <Typo isActive={content === "my"} variant="body1">
            🔮
          </Typo>
        </MenuItem>
      </Menu>
    </Nav>
  );
}

export default Navigation;
