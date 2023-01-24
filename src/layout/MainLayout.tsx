import Header from "@/components/Header";
import { styled, Typography } from "@mui/material";
import Head from "next/head";
import { ReactNode } from "react";

const MainStyles = styled("main")(
  ({ theme }) => `
    padding-top: 110px; 
    ${[theme.breakpoints.down("md")]}{
      padding-top: 81px;
    }
`
);
const BigTitle = styled('h1')(({theme})=>`
    text-align: center;
    font-size: 10vw;
    line-height: 10vw;
    color: ${theme.palette.text.secondary};
`)
interface Props {
  title: string;
  description?: string;
  children: ReactNode;
  bigTitle?: string;
}
export default function MainLayout({
  title,
  description,
  children,
  bigTitle,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainStyles>
        <Header />
        {bigTitle && <BigTitle>{bigTitle}</BigTitle>}
        {children}
      </MainStyles>
    </>
  );
}
