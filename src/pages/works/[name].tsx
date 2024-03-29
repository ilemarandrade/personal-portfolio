import MainLayout from "@/layout/MainLayout";
import { Grid, Typography, styled } from "@mui/material";
import myProjects, { IProject } from "@/constants/myProjects";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useTranslation from "@/hooks/useTranslation";
import ReactMarkdown from "react-markdown";

const IframeStyles = styled("iframe")`
  width: 100%;
  height: 80vh;
  border: none;
`;
interface Props {
  project: IProject;
}

export default function Home({ project }: Props) {
  const router = useRouter();
  const { t } = useTranslation();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const {
    environment,
    name,
    codesandboxLink,
    description,
    link_external,
    link_github,
    dependencies,
    isMarkdown,
  } = project;

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
            sx={{
              mb: 2,
              position: "relative",
              left: "-100vw",
              minWidth: "280px",
            }}
            component={motion.p}
            animate={{ left: 0, transition: { delay: 1 } }}
          >
            {environment}
          </Typography>
          <Typography
            variant="h2"
            sx={{ position: "relative", left: "-150%", minWidth: "280px" }}
            component={motion.h2}
            animate={{ left: 0, transition: { delay: 1.2 } }}
            color="primary"
          >
            {name}
          </Typography>
          {description?.length &&
            !isMarkdown &&
            description.map((text: string) => (
              <Typography
                variant="body1"
                key={text}
                sx={{
                  mb: 2,
                  position: "relative",
                  left: "-100vw",
                  minWidth: "280px",
                }}
                component={motion.p}
                animate={{ left: 0, transition: { delay: 1 } }}
              >
                {t(text)}
              </Typography>
            ))}
          {link_external && (
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                position: "relative",
                left: "-100vw",
                minWidth: "280px",
              }}
              component={motion.p}
              animate={{ left: 0, transition: { delay: 1 } }}
            >
              Link:{" "}
              <Typography
                variant="body1"
                sx={{
                  textDecoration: "underline",
                }}
                target="_blank"
                rel="noreferrer"
                component="a"
                href={link_external}
              >
                {link_external}
              </Typography>
            </Typography>
          )}
          {link_github && (
            <>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  position: "relative",
                  left: "-100vw",
                  minWidth: "280px",
                }}
                component={motion.p}
                animate={{ left: 0, transition: { delay: 1 } }}
              >
                Github:{" "}
                <Typography
                  variant="body1"
                  sx={{
                    textDecoration: "underline",
                  }}
                  href={link_github}
                  target="_blank"
                  rel="noreferrer"
                  component="a"
                >
                  {link_github}
                </Typography>
              </Typography>
            </>
          )}
          {dependencies?.length && (
            <>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  position: "relative",
                  left: "-100vw",
                  minWidth: "280px",
                  textTransform: "uppercase",
                }}
                component={motion.p}
                animate={{ left: 0, transition: { delay: 1 } }}
                color="primary"
              >
                {t("dependencies")}
              </Typography>
              {dependencies.map(
                ({
                  environment: dependenciesEnvironment,
                  tools,
                }: {
                  environment: string;
                  tools: string[];
                }) => (
                  <Typography
                    key={dependenciesEnvironment}
                    variant="body1"
                    sx={{
                      mb: 2,
                      position: "relative",
                      left: "-100vw",
                      minWidth: "280px",
                    }}
                    component={motion.p}
                    animate={{ left: 0, transition: { delay: 1 } }}
                  >
                    {dependenciesEnvironment}:{" "}
                    <Typography color="primary" component="span">
                      {tools.join(", ")}
                    </Typography>
                  </Typography>
                )
              )}
            </>
          )}
          {isMarkdown && (
            <motion.div
              initial={{
                marginBottom: 2,
                position: "relative",
                left: "-100vw",
                minWidth: "280px",
              }}
              animate={{ left: 0, transition: { delay: 1 } }}
            >
              <ReactMarkdown>{t(description[0])}</ReactMarkdown>
            </motion.div>
          )}
        </Grid>
      </Grid>
      {codesandboxLink && (
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
      )}
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
