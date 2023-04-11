import useTranslation from "@/hooks/useTranslation";
import { ButtonBase, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import spain from "@/assets/images/flags/spain.png";
import usa from "@/assets/images/flags/usa.png";

const FlagStyles = styled(Image)`
  width: 30px;
  height: 30px;
`;
const ButtonStyles = styled(ButtonBase)`
  margin-right: 1rem;
`;
const Language = () => {
  const { language, asPath, changeTo } = useTranslation();
  const isEnglish = language === "en";
  return (
    <ButtonStyles>
      <Link href={asPath} locale={changeTo}>
        <FlagStyles src={!isEnglish ? usa : spain} alt="flag" />
      </Link>
    </ButtonStyles>
  );
};
export default Language;
