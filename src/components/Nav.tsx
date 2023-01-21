import menuItems from "@/constants/menuItems";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import Link from "next/link";

const NavStyles = styled(Grid)`
  height: 109px;
  padding: 0px 20px;
  justify-content: space-between;
`;
const MyName = styled(Link)`
  font-size: 24px;
`;
const MenuItemsStyles = styled(Link)`
  color: #838683;
  margin-left: 1rem;

  &:hover {
    color: ${({ theme }) => theme.palette.text.tertiary};
  }
`;
const Nav = () => {
  return (
    <NavStyles container wrap="nowrap">
      <Grid item container alignItems="center">
        <MyName href="/">Ilemar Andrade</MyName>
      </Grid>
      <Grid item container alignItems="center" justifyContent="flex-end">
        {menuItems.map(({ label, to }) => (
          <MenuItemsStyles href={to} key={label}>
            {label}
          </MenuItemsStyles>
        ))}
      </Grid>
    </NavStyles>
  );
};

export default Nav;
