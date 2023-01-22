import { styled, Theme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}
const NavLinkStyles = styled(Link)(
  ({ theme, isActive }: { isActive: boolean; theme?: Theme }) => `

  color: ${isActive ? `${theme?.palette.text.tertiary} !important` : ""};
`
);
const NavLink = ({ href, children, className }: Props) => {
  const { pathname } = useRouter();
  const RegexRoute = new RegExp(href, "i");
  const isActive = RegexRoute.test(pathname);
  return (
    <NavLinkStyles href={href} isActive={isActive} className={className}>
      {children}
    </NavLinkStyles>
  );
};

export default NavLink;
