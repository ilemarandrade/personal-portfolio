import MainLayout from "@/layout/MainLayout";
import {
  Grid,
  Typography,
  styled,
  useMediaQuery,
  Theme,
  Tabs,
  Tab,
} from "@mui/material";
import myProjects, { IProject, IProjectFullPage } from "@/constants/myProjects";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useTranslation from "@/hooks/useTranslation";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import DeviceFrame, { DeviceFrameVariant } from "@/components/DeviceFrame";

const DevicePreviewRow = styled("div")`
  display: flex;
  gap: 32px;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const DesktopPreviewWrapper = styled("div")`
  position: relative;
  cursor: zoom-in;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #2a2d31;
  margin-bottom: 40px;
  max-height: 280px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
    pointer-events: none;
  }

  &:hover .zoom-hint {
    opacity: 1;
  }
`;

const ZoomHint = styled("div")`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  z-index: 2;
`;

const MaximizeBtn = styled("div")`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  padding: 5px 16px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  white-space: nowrap;
  z-index: 3;
  pointer-events: none;
`;

const LightboxOverlay = styled("div")`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 1300;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  cursor: zoom-out;
  padding: 32px 16px;
`;

const LightboxInner = styled("div")<{ isMobile?: boolean }>`
  max-width: ${({ isMobile }) => (isMobile ? "390px" : "min(100%, 1200px)")};
  width: 100%;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }
`;

type PreviewTabId =
  | "preview-mobile"
  | "preview-tablet"
  | "fullpage-mobile"
  | "fullpage-desktop";

interface Props {
  project: IProject;
}

export default function ProjectDetail({ project }: Props) {
  const router = useRouter();
  const { t } = useTranslation();
  const isMobileScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md"),
  );
  const [lightboxImg, setLightboxImg] = useState<{
    src: string;
    type: keyof IProjectFullPage;
  } | null>(null);
  const [activeTab, setActiveTab] = useState<PreviewTabId | "">("");

  useEffect(() => {
    if (!lightboxImg) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxImg]);

  if (router.isFallback) return <div>Loading...</div>;

  const {
    environment,
    name,
    codesandboxLink,
    description,
    link_external,
    link_github,
    dependencies,
    isMarkdown,
    previews,
    fullPage,
  } = project;

  const deviceVariants = (["mobile", "tablet"] as DeviceFrameVariant[]).filter(
    (v) => previews?.[v],
  );
  const fullPageVariants = (
    ["mobile", "desktop"] as (keyof IProjectFullPage)[]
  ).filter((k) => fullPage?.[k]);

  const availableTabs: { id: PreviewTabId; label: string }[] = [
    previews?.mobile ? { id: "preview-mobile", label: "Mobile" } : null,
    previews?.tablet ? { id: "preview-tablet", label: "Tablet" } : null,
    fullPage?.mobile ? { id: "fullpage-mobile", label: "Full Mobile" } : null,
    fullPage?.desktop
      ? { id: "fullpage-desktop", label: "Full Desktop" }
      : null,
  ].filter(Boolean) as { id: PreviewTabId; label: string }[];

  const currentTab = activeTab || (availableTabs[0]?.id ?? "");

  const animateFromLeft = {
    position: "relative" as const,
    left: "-100vw",
    minWidth: "280px",
  };
  const animateProps = { left: 0, transition: { delay: 1 } };

  function renderFullPagePreview(k: keyof IProjectFullPage) {
    return (
      <DesktopPreviewWrapper
        key={k}
        onClick={() => setLightboxImg({ src: fullPage![k]!, type: k })}
        style={{ maxWidth: k === "mobile" ? 320 : 700, marginBottom: 0 }}
      >
        <img src={fullPage![k]!} alt={`${name} ${k} full page`} />
        <MaximizeBtn>Ver completo</MaximizeBtn>
        <ZoomHint className="zoom-hint">Ver completo</ZoomHint>
      </DesktopPreviewWrapper>
    );
  }

  function renderTabContent(tabId: PreviewTabId) {
    switch (tabId) {
      case "preview-mobile":
        return (
          <DeviceFrame variant="mobile">
            <img src={previews!.mobile!} alt={`${name} mobile`} />
          </DeviceFrame>
        );
      case "preview-tablet":
        return (
          <DeviceFrame variant="tablet">
            <img src={previews!.tablet!} alt={`${name} tablet`} />
          </DeviceFrame>
        );
      case "fullpage-mobile":
        return renderFullPagePreview("mobile");
      case "fullpage-desktop":
        return renderFullPagePreview("desktop");
    }
  }

  const hasPreviews = deviceVariants.length > 0 || fullPageVariants.length > 0;

  return (
    <MainLayout title="Works">
      <Grid
        container
        sx={{ px: { xs: 3, sm: 10, md: 15 }, py: 5, color: "white" }}
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography
            variant="body1"
            sx={{ mb: 2, ...animateFromLeft }}
            component={motion.p}
            animate={animateProps}
          >
            {environment}
          </Typography>
          <Typography
            variant="h2"
            sx={{ ...animateFromLeft }}
            component={motion.h2}
            animate={animateProps}
            color="primary"
          >
            {name}
          </Typography>
        </Grid>

        {hasPreviews && (
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1.3 } }}
            >
              {isMobileScreen ? (
                <>
                  <Tabs
                    value={currentTab}
                    onChange={(_, v) => setActiveTab(v)}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{ mb: 3 }}
                  >
                    {availableTabs.map((tab) => (
                      <Tab key={tab.id} value={tab.id} label={tab.label} />
                    ))}
                  </Tabs>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    {currentTab && renderTabContent(currentTab as PreviewTabId)}
                  </div>
                </>
              ) : (
                <>
                  {deviceVariants.length > 0 && (
                    <DevicePreviewRow>
                      {deviceVariants.map((variant) => (
                        <DeviceFrame key={variant} variant={variant}>
                          <img
                            src={previews![variant]!}
                            alt={`${name} ${variant}`}
                          />
                        </DeviceFrame>
                      ))}
                    </DevicePreviewRow>
                  )}
                  {fullPageVariants.length > 0 && (
                    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                      {fullPageVariants.map((k) => renderFullPagePreview(k))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </Grid>
        )}

        <Grid item xs={12}>
          {description?.length &&
            !isMarkdown &&
            description.map((text: string) => (
              <Typography
                variant="body1"
                key={text}
                sx={{ mb: 2, ...animateFromLeft }}
                component={motion.p}
                animate={animateProps}
              >
                {t(text)}
              </Typography>
            ))}

          {codesandboxLink && (
            <Typography
              variant="body1"
              sx={{ mb: 2, ...animateFromLeft }}
              component={motion.p}
              animate={animateProps}
            >
              Preview:{" "}
              <Typography
                variant="body1"
                sx={{ textDecoration: "underline" }}
                target="_blank"
                rel="noreferrer"
                component="a"
                href={codesandboxLink}
              >
                Ver preview
              </Typography>
            </Typography>
          )}

          {link_external && (
            <Typography
              variant="body1"
              sx={{ mb: 2, ...animateFromLeft }}
              component={motion.p}
              animate={animateProps}
            >
              Link:{" "}
              <Typography
                variant="body1"
                sx={{ textDecoration: "underline" }}
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
            <Typography
              variant="body1"
              sx={{ mb: 2, ...animateFromLeft }}
              component={motion.p}
              animate={animateProps}
            >
              Github:{" "}
              <Typography
                variant="body1"
                sx={{ textDecoration: "underline" }}
                href={link_github}
                target="_blank"
                rel="noreferrer"
                component="a"
              >
                {link_github}
              </Typography>
            </Typography>
          )}

          {isMarkdown && (
            <motion.div initial={{ ...animateFromLeft }} animate={animateProps}>
              <ReactMarkdown>{t(description[0])}</ReactMarkdown>
            </motion.div>
          )}

          {dependencies?.length && (
            <>
              <Typography
                variant="body1"
                sx={{ mb: 2, ...animateFromLeft, textTransform: "uppercase" }}
                component={motion.p}
                animate={animateProps}
                color="primary"
              >
                {t("dependencies")}
              </Typography>
              {dependencies.map(
                ({
                  environment: depEnv,
                  tools,
                }: {
                  environment: string;
                  tools: string[];
                }) => (
                  <Typography
                    key={depEnv}
                    variant="body1"
                    sx={{ mb: 2, ...animateFromLeft }}
                    component={motion.p}
                    animate={animateProps}
                  >
                    {depEnv}:{" "}
                    <Typography color="primary" component="span">
                      {tools.join(", ")}
                    </Typography>
                  </Typography>
                ),
              )}
            </>
          )}
        </Grid>
      </Grid>

      {lightboxImg && (
        <LightboxOverlay onClick={() => setLightboxImg(null)}>
          <LightboxInner isMobile={lightboxImg.type === "mobile"}>
            <img src={lightboxImg.src} alt={`${name} full page`} />
          </LightboxInner>
        </LightboxOverlay>
      )}
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const paths = myProjects.map(({ slug }) => ({ params: { name: slug } }));
  return { paths, fallback: true };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const project = myProjects.filter(({ slug }) => slug === params.name)[0];
  return { props: { project } };
}
