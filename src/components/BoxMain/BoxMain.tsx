import { styled } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

const BoxMainStyles = styled(motion.div)(
  ({ theme }) => `
  width: 100%;
  height: 300px;
  background: rgb(51, 54, 57);
  border-radius: 24px;
  color: white;
  padding: 32px;
  position: relative;
  overflow: hidden;
  ${[theme.breakpoints.down("sm")]}{
    height: 320px;
  }

  &:hover{
    background: ${theme.palette.primary.main};
  }

`
);

interface Props {
  children?: ReactNode;
  className?: string;
  to?: string;
  target?: string;
}
const BoxMain = ({ children, className, to, target }: Props) => {
  return (
    <BoxMainStyles
      className={className}
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      transition={{ type: "spring", damping: 80, stiffness: 100 }}
    >
      {to ? (
        <Link href={to} target={target}>
          {children}
        </Link>
      ) : (
        children
      )}
    </BoxMainStyles>
  );
};

export default BoxMain;
