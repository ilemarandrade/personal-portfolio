import { styled } from "@mui/material";
import { ReactNode } from "react";

const BoxMainStyles = styled("div")(
  ({ theme }) => `
  width: 100%;
  height: 300px;
  background: rgb(51, 54, 57);
  border-radius: 24px;
  color: white;
  padding: 25px;
  position: relative;
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
}
const BoxMain = ({ children }: Props) => {
  return <BoxMainStyles>{children}</BoxMainStyles>;
};

export default BoxMain;
