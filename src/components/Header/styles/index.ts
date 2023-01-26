import { Button, Grid, GridProps, styled, Theme } from "@mui/material";
import {
  AnimationProps,
  ForwardRefComponent,
  HTMLMotionProps,
} from "framer-motion";
import Image from "next/image";
import NavLink from "../NavLink";

interface NavStylesProps extends GridProps, AnimationProps {
  component: ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>;
}
export const NavStyles = styled(Grid)<NavStylesProps>(
  ({ theme }) => `
    height: 109px;
    padding: 0px 50px;
    justify-content: space-between;
    font-size: 28px;
    font-weight: 600;
    text-decoration: none;
    position: fixed;
    z-index: 2;
    background: #111111d9;
    backdrop-filter: blur(7px);
    top: 0px;
    z-index: 3;
    ${[theme.breakpoints.down("md")]}{
      padding: 0px 25px;
      height: 80px;
    }
  
  `
);
export const MyName = styled(NavLink)(
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
export const MenuItemsStyles = styled(NavLink)(
  ({ theme }) => `
    color: ${theme.palette.text.secondary};
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
export const ButtonGetinTouch = styled(Button)(
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
export const Avatar = styled(Image)(
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
export const Menu = styled(Grid)(
  ({ isOpen, theme }: MenuProps) => `
    background: #111111;
    width: 100vw;
    height: 100vh;
    position: fixed;
    text-decoration: none;
    padding: 8px 25px;
    top: ${isOpen ? "80px" : "-100vh"};
    transition: top 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    z-index: 2;
    ${[theme?.breakpoints.up("md")]}{
      display: none;
    }
  `
);
