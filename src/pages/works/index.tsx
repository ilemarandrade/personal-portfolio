import MainLayout from "@/layout/MainLayout";
import BoxMain from "@/components/BoxMain";
import { Grid, Theme, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import animation from "@/constants/animation";
import Arrow from "@/assets/icons/Arrow";
import Image from "next/image";
import myProjects from "@/constants/myProjects";
import useTranslation from "@/hooks/useTranslation";

export default function Home() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <MainLayout title="Works" bigTitle={t("main_titles.all_personal_works")}>
      <Grid container sx={{ px: { xs: 3, sm: 10, md: 15 }, py: 5 }} spacing={2}>
        {myProjects.map(
          ({ name, img, environment, link, isItAdesktopImage }) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              component={motion.div}
              whileHover={isMobile ? "" : animation.worksWithMobileExample.name}
              key={name}
            >
              <BoxMain to={link}>
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
                    <Typography variant="body1">{environment}</Typography>
                    <Typography variant="h4" fontWeight={600}>
                      {name}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyContent="center"
                    component={motion.div}
                    initial={
                      animation.worksWithMobileExample.variants.img.initial
                    }
                    variants={
                      !isItAdesktopImage
                        ? animation.worksWithMobileExample.variants.img.variants
                        : animation.worksWithMobileExample.variants.imgDesktop
                            .variants
                    }
                    sx={{ mt: 2, position: "relative" }}
                  >
                    <Image src={img} alt={name} />
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
          )
        )}
      </Grid>
    </MainLayout>
  );
}
