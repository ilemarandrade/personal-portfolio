import { styled, Theme } from "@mui/material";
import { motion, MotionProps } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface BoxStylesProps extends MotionProps {
  url: string;
  theme?: Theme;
}
const BoxStyles = styled(motion.div)(
  ({ theme, url }: BoxStylesProps) => `
  width: 100%;
  height: 400px;
  background: url(${url});
  border-radius: 24px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${[theme?.breakpoints.down("sm")]}{
    height: 500px;
  }
`
);

interface Props {
  url: string;
}
const BoxImage = ({ url }: Props) => {
  return (
    <BoxStyles
      initial={{ transform: "scale(0)" }}
      transition={{ type: "spring", damping: 80, stiffness: 100 }}
      whileInView={{ transform: "scale(1)" }}
      viewport={{ once: true }}
      url={url}
    />
  );
};

export default BoxImage;
