import CarouselOfTools from "@/components/CarouselOfTools";
import FormContact from "@/components/Forms/Contact";
import useTranslation from "@/hooks/useTranslation";
import MainLayout from "@/layout/MainLayout";
import { Grid, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";

const ContainerForm = styled(Grid)`
  background: rgb(51, 54, 57);
  border-radius: 24px;
  padding: 32px;
  opacity: 0.5;
  pointer-events: none;
  position: relative;

  & h3 {
    position: absolute;
    z-index: 2;
    transform: rotate(30deg);
    top: 40%;
    left: 20%;
    color: #c92424;
  }
`;
export default function Contact() {
  const { t } = useTranslation();
  return (
    <MainLayout title="Works">
      <Grid
        container
        sx={{ px: { xs: 3, sm: 10, md: 15 }, py: 5, color: "white" }}
        spacing={2}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
      >
        <Grid item container sx={{ mb: 4 }}>
          <CarouselOfTools />
        </Grid>
        <Grid
          container
          item
          spacing={{ xs: 2, sm: 4 }}
          justifyContent={{ xs: "initial", md: "space-between" }}
        >
          <Grid xs={12} md={4} item>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {t("contact_me")} ✨
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {t("contact.first_paragraph")}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {t("contact.second_paragraph")}
            </Typography>
            <Typography variant="body1" color="text.tertiary" sx={{ mb: 2 }}>
              {t("contact.want_to_call_me")}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <a href="https://wa.me/584144505536">
                {t("contact.can_do_it_by_ws")}
              </a>
            </Typography>
            <Typography variant="body1" color="text.tertiary" sx={{ mb: 2 }}>
              {t("contact.just_want_to_email_me")}
            </Typography>
            <Typography variant="body1">
              <a href="mailto:ilemarandrade@gmail.com">
                ilemarandrade@gmail.com
              </a>
            </Typography>
          </Grid>
          <Grid xs={12} md={7} item>
            <ContainerForm container direction="column">
              <Typography variant="h3">In development</Typography>
              <FormContact />
            </ContainerForm>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
