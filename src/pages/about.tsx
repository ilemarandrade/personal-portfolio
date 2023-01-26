import MainLayout from "@/layout/MainLayout";
import { Grid, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import BoxImage from "@/components/BoxImage";
import galery from "@/constants/galery";

const Me = styled("div")`
  background-image: url(/images/ile-without-background.png);
  background-size: cover;
  width: 400px;
  height: 280px;
`;

export default function About() {
  return (
    <MainLayout title="Works" bigTitle="About me">
      <Grid
        container
        sx={{
          px: { xs: 3, sm: 10, md: 15 },
          py: 5,
          color: "white",
          maxWidth: 1400,
          margin: "auto",
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
      >
        <Grid
          container
          sx={{
            mb: 4,
            background: "radial-gradient(#ff6900 -20%,transparent 90%)",
            borderRadius: "24px",
            border: "1px solid #262626",
          }}
          justifyContent="center"
        >
          <Me />
        </Grid>
        <Grid
          container
          sx={{
            mb: 6,
          }}
        >
          <Grid
            sx={{
              background: "rgb(51, 54, 57)",
              borderRadius: "24px",
              padding: "32px",
              mb: 6,
            }}
          >
            <Typography variant="body1" fontSize={22} sx={{ mb: 1 }}>
              I am a dreamer who does not believe in the impossible, persistent
              and committed to my goals and projects. Solving problems and
              giving effective, practical solutions with a transcendental
              approach are my motivations when performing my role as a web
              developer; Defragmenting large problems into small daily
              challenges is the solution for me.
            </Typography>
            <Typography variant="body1" fontSize={22} sx={{ mb: 1 }}>
              I enjoy learning new things, spending time with my guitar and
              singing along with my wife, play basketball, lighting up as much
              as I can and of course all the NBA highlights.
            </Typography>
            <Typography variant="body1" fontSize={22} sx={{ mb: 1 }}>
              I love teaching almost anything, that&apos;s why I also enjoy
              being a mentor at the Swordvoice software developer academy; In my
              community, also with my wife I teach music for non profit to young
              people who want to increase their knowledge of an instrument or
              their voices. I wish one day to be a father and also teach him
              everything I know and guide him to achieve all his dreams with
              perseverance.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {galery.map(({ url, propsGrid }) => (
            <Grid key={url} item {...{ ...propsGrid }}>
              <BoxImage url={url} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </MainLayout>
  );
}
