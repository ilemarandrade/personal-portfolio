import MainLayout from "@/layout/MainLayout";
import BoxMain from "@/components/BoxMain";
import { Grid, Theme, Typography, useMediaQuery, styled } from "@mui/material";
import { motion } from "framer-motion";
import animation from "@/constants/animation";
import Arrow from "@/assets/icons/Arrow";
import Image from "next/image";
import myProjects, { IProject, ProjectCategory } from "@/constants/myProjects";
import useTranslation from "@/hooks/useTranslation";
import ScrollToTop from "@/components/ScrollToTop";

const CATEGORY_ORDER: ProjectCategory[] = [
  ProjectCategory.production,
  ProjectCategory.personal,
  ProjectCategory.certification,
  ProjectCategory.technical_test,
];

const CategoryNav = styled("nav")(
  ({ theme }) => `
  position: sticky;
  top: 110px;
  z-index: 10;
  background: #111111;
  padding: 12px 0;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  ${theme.breakpoints.down("md")} {
    top: 81px;
  }
`
);

const CategoryChip = styled("a")(
  ({ theme }) => `
  color: ${theme.palette.text.secondary};
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid ${theme.palette.text.secondary};
  transition: color 0.2s, border-color 0.2s;
  &:hover {
    color: ${theme.palette.primary.main};
    border-color: ${theme.palette.primary.main};
  }
`
);

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ProjectCard({
  name,
  img,
  environment,
  link,
  isItAdesktopImage,
  isMobile,
}: IProject & { isMobile: boolean }) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={4}
      component={motion.div}
      whileHover={isMobile ? "" : animation.worksWithMobileExample.name}
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
            variants={animation.worksWithMobileExample.variants.textBox.variants}
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
            initial={animation.worksWithMobileExample.variants.img.initial}
            variants={
              !isItAdesktopImage
                ? animation.worksWithMobileExample.variants.img.variants
                : animation.worksWithMobileExample.variants.imgDesktop.variants
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
          variants={animation.worksWithMobileExample.variants.seeMore.variants}
          initial={animation.worksWithMobileExample.variants.seeMore.initial}
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
  );
}

export default function Works() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const grouped = CATEGORY_ORDER.reduce<Record<ProjectCategory, IProject[]>>(
    (acc, cat) => {
      acc[cat] = myProjects.filter((p) => p.category === cat);
      return acc;
    },
    {} as Record<ProjectCategory, IProject[]>
  );

  const activeCategories = CATEGORY_ORDER.filter((cat) => grouped[cat].length > 0);

  return (
    <MainLayout title="Works" bigTitle={t("main_titles.all_personal_works")}>
      <Grid container sx={{ px: { xs: 3, sm: 10, md: 15 } }}>
        <Grid item xs={12}>
          <CategoryNav>
            {activeCategories.map((cat) => (
              <CategoryChip
                key={cat}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(cat);
                }}
                href={`#${cat}`}
              >
                {t(`categories.${cat}`)}
              </CategoryChip>
            ))}
          </CategoryNav>
        </Grid>
      </Grid>
      <Grid container sx={{ px: { xs: 3, sm: 10, md: 15 }, py: 5 }} spacing={6}>
        {activeCategories.map((cat) => (
          <Grid item xs={12} key={cat} id={cat}>
            <Typography
              variant="h5"
              fontWeight={600}
              color="primary"
              sx={{ mb: 3, textTransform: "uppercase", letterSpacing: 2 }}
            >
              {t(`categories.${cat}`)}
            </Typography>
            <Grid container spacing={2}>
              {grouped[cat].map((project) => (
                <ProjectCard key={project.name} {...project} isMobile={isMobile} />
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <ScrollToTop />
    </MainLayout>
  );
}
