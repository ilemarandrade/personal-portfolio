import menuItems from "@/constants/menuItems";
import {
  Button,
  Grid,
  GridProps,
  styled,
  Theme,
  useMediaQuery,
} from "@mui/material";
import ile from "@/assets/images/ile.jpeg";
import Image from "next/image";
import { useState } from "react";
import MenuButton from "./MenuButton";
import NavLink from "./NavLink";
const NavStyles = styled(Grid)(
  ({ theme }) => `
  height: 109px;
  padding: 0px 50px;
  justify-content: space-between;
  font-size: 28px;
  font-weight: 600;
  text-decoration: none;
  position: fixed;
  z-index: 2;
  background: #111111;
  ${[theme.breakpoints.down("sm")]}{
    padding: 0px 25px;
    height: 80px;
  }

`
);
const MyName = styled(NavLink)(
  ({ theme }) => `
  color: white;
  margin-right: 1rem;
  width: max-content;
  &:hover {
    color: ${theme.palette.text.tertiary};
  }
  ${[theme.breakpoints.down("sm")]} {
    font-size: 24px;
  }
`
);
const MenuItemsStyles = styled(NavLink)(
  ({ theme }) => `
  color: #838683;
  margin-right: 1rem;
  font-weight: 600;
  &:hover {
    color: ${theme.palette.text.tertiary};
  }
  ${[theme.breakpoints.down("sm")]} {
    font-size: 24px;
  }
`
);
const ButtonGetinTouch = styled(Button)(
  ({ theme }) => `
  color: white;
  border-radius: 10px;
  border-color: white;
  font-weight: 600;
  &:hover {
    background: ${theme.palette.primary.main};
  }
  width: max-content;
`
);
const Avatar = styled(Image)(
  ({ theme }) => `
  border-radius: 100px;
  height: 50px;
  width: 50px;
  ${[theme.breakpoints.down("sm")]} {
    margin-bottom: 1rem;
  }
`
);
interface MenuProps extends GridProps {
  isOpen: boolean;
  theme?: Theme;
}
const Menu = styled(Grid)(
  ({ isOpen, theme }: MenuProps) => `
  background: #111111;
  width: 100vw;
  height: 100vh;
  position: absolute;
  text-decoration: none;
  padding: 0px 25px;
  top: ${isOpen ? "80px" : "-100vh"};
  transition: top 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  ${[theme?.breakpoints.up("sm")]}{
    display: none;
  }
`
);
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <>
      <NavStyles container wrap="nowrap">
        <Grid item alignItems="center" sx={{ display: "flex" }}>
          <MyName href="/">Ilemar Andrade</MyName>
          {!isMobile && <Avatar alt="Ilemar Andrade" src={ile} />}
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="flex-end"
          sx={{ width: { xs: "initial", sm: "100%" } }}
        >
          {!isMobile ? (
            <>
              {menuItems.map(({ label, to }) => (
                <MenuItemsStyles href={to} key={label}>
                  {label}
                </MenuItemsStyles>
              ))}
              <ButtonGetinTouch variant="outlined">
                Get in Touch
              </ButtonGetinTouch>
            </>
          ) : (
            <MenuButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </Grid>
      </NavStyles>
      <Menu container direction="column" isOpen={isMenuOpen}>
        <Avatar alt="Ilemar Andrade" src={ile} />
        {menuItems.map(({ label, to }) => (
          <MenuItemsStyles href={to} key={label}>
            {label}
          </MenuItemsStyles>
        ))}
        <ButtonGetinTouch variant="outlined" sx={{ mt: "0.5rem" }}>
          Get in Touch
        </ButtonGetinTouch>
      </Menu>
    </>
  );
};

export default Header;
