import MainLayout from "@/layout/MainLayout";
import BoxMain from "@/components/BoxMain";
import { Grid, Theme, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import BadgeIcon from "@mui/icons-material/Badge";
import animation from "@/constants/animation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WebIcon from "@mui/icons-material/Web";
import Arrow from "@/assets/icons/Arrow";
import BugReportIcon from "@mui/icons-material/BugReport";

export default function Home() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <MainLayout title="Home" bigTitle="Software Developer">
      <Grid container sx={{ px: { xs: 3, sm: 10, md: 15 }, py: 5 }} spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          component={motion.div}
          whileHover={isMobile ? "" : animation.enterTextFromBottom.name}
        >
          <BoxMain to="/about">
            <Grid
              component={motion.div}
              container
              justifyContent="center"
              direction="column"
              sx={{ height: "100%", position: "relative" }}
              variants={
                animation.enterTextFromBottom.variants.firstBox.variants
              }
            >
              <Typography variant="h3" fontWeight={600}>
                Hi, I&apos;m Ilemar👋
              </Typography>
              <Typography
                variant="h5"
                sx={{ position: "relative", width: "calc(100% - 40px)" }}
              >
                &quot;Nothing is impossible&quot;
                <Arrow style={{ right: "-40px" }} />
              </Typography>
            </Grid>
            <Grid
              component={motion.div}
              sx={{ height: "100%", position: "absolute", py: "32px" }}
              initial={animation.enterTextFromBottom.variants.secondBox.initial}
              variants={
                animation.enterTextFromBottom.variants.secondBox.variants
              }
            >
              <Typography variant="h3" fontWeight={600}>
                Learn <br /> more
                <br /> about me
              </Typography>
            </Grid>
          </BoxMain>
        </Grid>
        <Grid item xs={12} sm={6}>
          <BoxMain />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          component={motion.div}
          whileHover={isMobile ? "" : animation.enterTextFromBottom.name}
        >
          <BoxMain to="/works">
            <Grid
              component={motion.div}
              container
              justifyContent="center"
              direction="column"
              sx={{ height: "100%", position: "relative" }}
              variants={
                animation.enterTextFromBottom.variants.firstBox.variants
              }
            >
              <BadgeIcon fontSize="large" />
              <Typography
                variant="h4"
                fontWeight={600}
                sx={{ position: "relative" }}
              >
                My work
                <Arrow />
              </Typography>
            </Grid>
            <Grid
              component={motion.div}
              container
              alignItems="center"
              sx={{ height: "100%", position: "absolute", py: "32px" }}
              initial={animation.enterTextFromBottom.variants.secondBox.initial}
              variants={
                animation.enterTextFromBottom.variants.secondBox.variants
              }
            >
              <Typography variant="h4" fontWeight={600}>
                View <br />
                All My
                <br /> Works
              </Typography>
            </Grid>
          </BoxMain>
        </Grid>
        <Grid
          component={motion.div}
          item
          xs={12}
          sm={6}
          md={3}
          whileHover={isMobile ? "" : "hover"}
        >
          <Grid
            component={BoxMain}
            container
            justifyContent="center"
            alignItems="center"
            to="https://www.linkedin.com/in/ilemar-andrade-0b261818b"
            target="_blank"
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <motion.div
                initial={{ transform: "initial" }}
                variants={{ hover: { transform: "scale(1.6)" } }}
              >
                <LinkedInIcon sx={{ fontSize: "72px" }} />
              </motion.div>
              <Typography
                variant="h5"
                fontWeight={600}
                component={motion.h5}
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: isMobile ? 1 : 0 }}
              >
                Let&apos;s connect
              </Typography>
            </Grid>
            <Arrow style={{ right: "40px" }} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <BoxMain to="/contact">
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Typography>What I Do</Typography>
              </Grid>
              <Grid item container>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  container
                  justifyContent="center"
                  alignItems="center"
                  direction="column"
                  sx={{ mb: { xs: 2, sm: 0 } }}
                >
                  <Typography variant="h6" fontWeight={600} align="center">
                    Web Development
                  </Typography>
                  <WebIcon fontSize="large" />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  container
                  justifyContent="center"
                  alignItems="center"
                  direction="column"
                >
                  <Typography variant="h6" fontWeight={600} align="center">
                    Test Unit-End2End
                  </Typography>
                  <BugReportIcon fontSize="large" />
                </Grid>
                <Arrow style={{ right: "40px", bottom: "40px" }} />
              </Grid>
            </Grid>
          </BoxMain>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
