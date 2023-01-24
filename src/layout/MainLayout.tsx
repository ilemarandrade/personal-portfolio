import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
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
const BigTitle = styled(motion.h1)(({theme})=>`
    text-align: center;
    font-size: 10vw;
    line-height: 10vw;
    color: ${theme.palette.text.secondary};
    font-weight: 600;
    position: relative;
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
        {bigTitle && <BigTitle initial={{opacity: 0}} animate={{opacity: 1, transition: {delay:1.5}}}>{bigTitle}</BigTitle>}
        {children}
        <Footer />
      </MainStyles>
    </>
  );
}
