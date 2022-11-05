import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const Nav = styled.header`
  width: 14rem;
  height: 100%;
  background-color: green;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  padding: 1rem;
`;

const MenuItem = styled.li`
  padding: 0.25rem;
`;

const Typo = styled(Typography)`
  opacity: 0.5;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

function Navigation() {
  return (
    <Nav>
      <Menu>
        <MenuItem>
          <Typo variant="h5">메뉴 </Typo>
        </MenuItem>
        <MenuItem>
          <Typo variant="h5">메뉴 </Typo>
        </MenuItem>
        <MenuItem>
          <Typo variant="h5">메뉴 </Typo>
        </MenuItem>
      </Menu>
    </Nav>
  );
}

export default Navigation;
