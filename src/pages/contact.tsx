import CarouselOfTools from "@/components/CarouselOfTools";
import FormContact from "@/components/Forms/Contact";
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
              Get in Touch ✨
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Are you looking for a developer to help you with your next
              project?
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              I&apos;d love to hear from you! Whether it&apos;s for a new
              project, to improve or maintain your project or anything related
              to software development, I can help! Just contact me on this form
              or email or whatsapp below and let&apos;s start collaborating!
            </Typography>
            <Typography variant="body1" color="text.tertiary" sx={{ mb: 2 }}>
              WANT TO CALL ME?
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <a href="https://wa.me/584144505536">Can do it by Whatsapp</a>
            </Typography>
            <Typography variant="body1" color="text.tertiary" sx={{ mb: 2 }}>
              JUST WANT TO EMAIL ME?
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
