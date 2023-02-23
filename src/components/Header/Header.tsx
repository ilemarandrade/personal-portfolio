import menuItems from "@/constants/menuItems";
import { Grid, Theme, useMediaQuery } from "@mui/material";
import ile from "@/assets/images/ile.jpeg";
import { useState } from "react";
import MenuButton from "./MenuButton";
import {
  Avatar,
  ButtonGetinTouch,
  Menu,
  MenuItemsStyles,
  MyName,
  NavStyles,
} from "./styles";
import Link from "next/link";
import { motion } from "framer-motion";
import useTranslation from "@/hooks/useTranslation";
import Language from "../Languages/indext";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <>
      <NavStyles
        container
        wrap="nowrap"
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.2 } }}
      >
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
          <Language />
          {!isMobile ? (
            <>
              {menuItems.map(({ label, to }) => (
                <MenuItemsStyles href={to} key={label}>
                  {t(label)}
                </MenuItemsStyles>
              ))}
              <Link href="/contact">
                <ButtonGetinTouch variant="outlined">
                  {t("contact_me")}
                </ButtonGetinTouch>
              </Link>
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
            {t(label)}
          </MenuItemsStyles>
        ))}
        <ButtonGetinTouch
          variant="outlined"
          sx={{ mt: "0.5rem" }}
          href="/contact"
        >
          {t("contact_me")}
        </ButtonGetinTouch>
      </Menu>
    </>
  );
};

export default Header;
