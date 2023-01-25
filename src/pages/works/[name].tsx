import MainLayout from "@/layout/MainLayout";
import { Grid, Typography, styled } from "@mui/material";
import myProjects from "@/constants/myProjects";
import { motion } from "framer-motion";

const IframeStyles = styled("iframe")`
  width: 100%;
  height: 80vh;
  border: none;
`;
interface Props {
  project: any;
}
export default function Home({ project }: Props) {
  const { environment, name, codesandboxLink } = project;
  return (
    <MainLayout title="Works">
      <Grid
        container
        sx={{ px: { xs: 3, sm: 10, md: 15 }, py: 5, color: "white" }}
        spacing={2}
      >
        <Grid item>
          <Typography
            variant="body1"
            sx={{ mb: 2, position: "relative", left: "-100%", minWidth: "280px" }}
            component={motion.p}
            animate={{ left: 0, transition: { delay: 1 } }}
          >
            {environment}
          </Typography>
          <Typography
            variant="h2"
            sx={{ position: "relative", left: "-150%",  minWidth: "280px" }}
            component={motion.h2}
            animate={{ left: 0, transition: { delay: 1.2 } }}
          >
            {name}
          </Typography>
        </Grid>
      </Grid>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5 } }}
      >
        <IframeStyles
          src={codesandboxLink}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></IframeStyles>
      </motion.div>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const paths = myProjects.map(({ slug }) => {
    return {
      params: { name: slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context: any) {
  const { params } = context;
  const project = myProjects.filter(({ slug }) => slug === params.name)[0];
  return {
    props: {
      project,
    },
  };
}
