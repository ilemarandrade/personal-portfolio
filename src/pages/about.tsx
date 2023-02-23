import MainLayout from "@/layout/MainLayout";
import { Grid, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import BoxImage from "@/components/BoxImage";
import galery from "@/constants/galery";
import useTranslation from "@/hooks/useTranslation";

const Me = styled("div")`
  background-image: url(/images/ile-without-background.png);
  background-size: cover;
  width: 400px;
  height: 280px;
`;

export default function About() {
  const { t } = useTranslation();
  return (
    <MainLayout title="Works" bigTitle={t("main_titles.about_me")}>
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
              {t("about_me.first_paragraph")}
            </Typography>
            <Typography variant="body1" fontSize={22} sx={{ mb: 1 }}>
              {t("about_me.second_paragraph")}
            </Typography>
            <Typography variant="body1" fontSize={22} sx={{ mb: 1 }}>
              {t("about_me.third_paragraph")}
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
