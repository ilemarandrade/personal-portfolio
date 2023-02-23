import MainLayout from "@/layout/MainLayout";
import BoxMain from "@/components/BoxMain";
import { Grid, styled, Theme, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import BadgeIcon from "@mui/icons-material/Badge";
import animation from "@/constants/animation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WebIcon from "@mui/icons-material/Web";
import Arrow from "@/assets/icons/Arrow";
import BugReportIcon from "@mui/icons-material/BugReport";
import LanIcon from "@mui/icons-material/Lan";
import { lastProject } from "@/constants/myProjects";
import Image from "next/image";
import useTranslation from "@/hooks/useTranslation";

const LastBox = styled(BoxMain)(
  ({ theme }) => `
  ${[theme.breakpoints.down("sm")]}{
    height: auto;
  }
`
);
export default function Home(props: any) {
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <MainLayout title="Home" bigTitle={t("main_titles.software_developer")}>
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
                {t("say_hello")}
              </Typography>
              <Typography
                variant="h5"
                sx={{ position: "relative", width: "calc(100% - 40px)" }}
              >
                &quot;{t("nothing_is_imposible")}&quot;
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
              <Typography
                variant="h3"
                fontWeight={600}
                dangerouslySetInnerHTML={{
                  __html: t("learn_more_about_me"),
                }}
              />
            </Grid>
          </BoxMain>
        </Grid>
        <Grid item xs={12} sm={6}>
          <BoxMain to={lastProject.link}>
            <Grid
              container
              direction="column"
              sx={{ height: "100%", position: "relative" }}
              wrap="nowrap"
            >
              <Grid
                item
                component={motion.div}
                variants={
                  animation.worksWithMobileExample.variants.textBox.variants
                }
              >
                <Typography variant="body1">
                  {t("the_last_personal_project")}
                </Typography>
                <Typography variant="h4" fontWeight={600}>
                  {lastProject.name}
                </Typography>
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                component={motion.div}
                initial={animation.worksWithMobileExample.variants.img.initial}
                variants={
                  animation.worksWithMobileExample.variants.img.variants
                }
                sx={{ mt: 2, position: "relative" }}
              >
                <Image src={lastProject.img} alt={lastProject.name} />
              </Grid>
            </Grid>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{ position: "absolute", bottom: "30px" }}
              component={motion.h5}
              variants={
                animation.worksWithMobileExample.variants.seeMore.variants
              }
              initial={
                animation.worksWithMobileExample.variants.seeMore.initial
              }
            >
              See More
              <Arrow
                style={{
                  position: "relative",
                  verticalAlign: "middle",
                  marginLeft: "8px",
                }}
              />
            </Typography>
          </BoxMain>
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
                {t("my_work")}
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
              <Typography
                variant="h4"
                fontWeight={600}
                dangerouslySetInnerHTML={{ __html: t("view_all_works") }}
              />
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
                {t("lets_connect")}
              </Typography>
            </Grid>
            <Arrow style={{ right: "40px" }} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <LastBox to="/contact">
            <Grid container spacing={2}>
              <Grid item sm={12}>
                <Typography>{t("what_i_do")}</Typography>
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
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    align="center"
                    dangerouslySetInnerHTML={{ __html: t("web_development") }}
                  />
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
                  sx={{ mb: { xs: 2, sm: 0 } }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    align="center"
                    sx={{ lineHeight: { md: 3.4, sm: "initial" } }}
                  >
                    {t("test_code")}
                  </Typography>
                  <BugReportIcon fontSize="large" />
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
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    align="center"
                    sx={{ lineHeight: { md: 3.4, sm: "initial" } }}
                  >
                    {t("ci_cd")}
                  </Typography>
                  <LanIcon fontSize="large" />
                </Grid>
                <Arrow style={{ right: "40px", bottom: "40px" }} />
              </Grid>
            </Grid>
          </LastBox>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
