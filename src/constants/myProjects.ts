import { DeviceFrameVariant } from "@/components/DeviceFrame";

interface IDependencies {
  environment: string;
  tools: string[];
}
export enum ProjectCategory {
  production = "production",
  personal = "personal",
  certification = "certification",
  technical_test = "technical_test",
}
export interface IProjectFullPage {
  mobile?: string;
  desktop?: string;
}
export interface IProject {
  name: string;
  slug: string;
  link: string;
  environment: string;
  category: ProjectCategory;
  previews?: Partial<Record<DeviceFrameVariant, string>>;
  fullPage?: IProjectFullPage;
  link_external?: string;
  link_github?: string;
  description: string[];
  dependencies: IDependencies[];
  isMarkdown?: boolean;
  codesandboxLink?: string;
}
const myProjects: IProject[] = [
  {
    name: "Swordvoice Academy",
    slug: "swordvoice-academy",
    link: "/works/swordvoice-academy",
    environment: "NEXT JS WEB",
    category: ProjectCategory.production,
    previews: {
      tablet: "/images/projects/swordvoice/desktop.png",
      mobile: "/images/projects/swordvoice/mobile.png",
    },
    fullPage: {
      mobile: "/images/projects/swordvoice/full-page-mobile.png",
      desktop: "/images/projects/swordvoice/full-page-desktop.png",
    },
    link_external: "https://swordvoice-academy.vercel.app/",
    description: ["projects.swordvoice.first_paragraph"],
    dependencies: [
      {
        environment: "Frontend",
        tools: [
          "next",
          "react",
          "react-dom",
          "framer-motion",
          "react-hook-form",
          "@hookform/resolvers",
          "react-hot-toast",
          "react-slick",
          "slick-carousel",
          "yup",
          "nodemailer",
          "tailwindcss",
          "typescript",
        ],
      },
    ],
  },
  {
    name: "Wallet",
    slug: "wallet",
    link: "/works/wallet",
    environment: "MERN APP WEB",
    category: ProjectCategory.personal,
    previews: { mobile: "/images/projects/wallet/mobile.png" },
    link_external: "https://wallet-andrade.vercel.app/",
    link_github: "https://github.com/ilemarandrade/wallet",
    description: [
      "projects.wallet.first_paragraph",
      "projects.wallet.second_paragraph",
    ],
    dependencies: [
      {
        environment: "Frontend",
        tools: [
          "react",
          "react-dom",
          "react-hook-form",
          "react-hot-toast",
          "react-i18next",
          "react-redux",
          "react-router-dom",
          "react-scripts",
          "react-text-mask",
          "@hookform/resolvers",
          "@material-ui/core",
          "@material-ui/icons",
          "@tanstack/react-query",
          "@tanstack/react-query-devtools",
          "@testing-library/jest-dom",
          "@testing-library/react",
          "@testing-library/user-event",
          "axios",
          "currency.js",
          "i18next",
          "moment",
          "styled-components",
          "text-mask-addons",
          "yup",
        ],
      },
      {
        environment: "Backend",
        tools: [
          "express",
          "cors",
          "dotenv",
          "jsonwebtoken",
          "moment",
          "mongoose",
          "mongodb",
        ],
      },
    ],
  },
  {
    name: "University Landing",
    slug: "university-landing",
    link: "/works/university-landing",
    environment: "WEB",
    category: ProjectCategory.technical_test,
    previews: {
      tablet: "/images/projects/landing-to-university/desktop.png",
      mobile: "/images/projects/landing-to-university/mobile.png",
    },
    fullPage: {
      mobile: "/images/projects/landing-to-university/full-page-mobile.png",
      desktop: "/images/projects/landing-to-university/full-page-desktop.png",
    },
    link_external: "https://landing-to-university.vercel.app/",
    link_github: "https://github.com/ilemarandrade/Landing-to-university-test",
    description: [""],
    dependencies: [
      {
        environment: "Frontend",
        tools: ["html", "css", "js", "jquery", "bootstrap"],
      },
    ],
  },
  {
    name: "Component Catalog",
    slug: "component-catalog",
    link: "/works/component-catalog",
    environment: "REACT APP WEB",
    category: ProjectCategory.technical_test,
    previews: {
      tablet: "/images/projects/components-catalog/desktop.png",
      mobile: "/images/projects/components-catalog/mobile.png",
    },
    link_external: "https://components-catalog.vercel.app/",
    link_github: "https://github.com/ilemarandrade/catalog-components",
    description: [""],
    dependencies: [
      {
        environment: "Frontend",
        tools: [
          "axios",
          "react",
          "react-dom",
          "react-router-dom",
          "react-scripts",
          "typescript",
          "@emotion/react",
          "@emotion/styled",
          "@mui/icons-material",
          "@mui/material",
          "@mui/x-date-pickers",
          "@testing-library/jest-dom",
          "@testing-library/react",
          "@testing-library/user-event",
          "@types/jest",
          "@types/node",
          "@types/react",
          "@types/react-dom",
          "array-move",
          "axios",
          "dayjs",
          "moment",
          "react-sortable-hoc",
          "recharts",
        ],
      },
    ],
  },
  {
    name: "Rick & Morty",
    slug: "rick-&-morty-memory-game",
    link: "/works/rick-&-morty-memory-game",
    environment: "REACT APP WEB",
    category: ProjectCategory.technical_test,
    previews: {
      tablet: "/images/projects/rick-and-morty/desktop.png",
      mobile: "/images/projects/rick-and-morty/mobile.png",
    },
    link_external: "https://rick-and-morty-memory-game-v2.vercel.app/",
    link_github: "https://github.com/ilemarandrade/rick-and-morty-memory-game",
    description: ["projects.memory_game"],
    isMarkdown: true,
    dependencies: [
      {
        environment: "Frontend",
        tools: [
          "axios",
          "react",
          "react-dom",
          "react-router-dom",
          "react-scripts",
          "sass",
          "typescript",
          "@testing-library/jest-dom",
          "@testing-library/react",
          "@testing-library/user-event",
          "@types/jest",
          "@types/node",
          "@types/react",
          "@types/react-dom",
          "web-vitals",
          "@storybook/addon-actions",
          "@storybook/addon-essentials",
          "@storybook/addon-interactions",
          "@storybook/addon-links",
          "@storybook/builder-webpack5",
          "@storybook/manager-webpack5",
          "@storybook/node-logger",
          "@storybook/preset-create-react-app",
          "@storybook/react",
          "@storybook/testing-library",
          "@testing-library/cypress",
          "@types/react-router-dom",
          "babel-plugin-named-exports-order",
          "cypress",
          "msw",
        ],
      },
    ],
  },
  {
    name: "PuntosPoint",
    slug: "puntospoint-test-frontend",
    link: "/works/puntospoint-test-frontend",
    environment: "NEXT JS WEB",
    category: ProjectCategory.technical_test,
    previews: {
      tablet: "/images/projects/puntospoint-test/desktop.png",
      mobile: "/images/projects/puntospoint-test/mobile.png",
    },
    // fullPage: {
    //   desktop: "/images/projects/puntospoint-test/full-page-desktop.png",
    //   mobile: "/images/projects/puntospoint-test/full-page-mobile.png",
    // },
    link_external: "https://puntospoint-test-frontend.vercel.app/dashboard",
    link_github: "https://github.com/ilemarandrade/puntospoint-test-frontend",
    description: [
      "projects.puntospoint.first_paragraph",
      "projects.puntospoint.second_paragraph",
    ],
    dependencies: [
      {
        environment: "Frontend",
        tools: [
          "next",
          "react",
          "react-dom",
          "@mui/material",
          "@mui/icons-material",
          "@emotion/react",
          "@emotion/styled",
          "@tanstack/react-query",
          "axios",
          "tailwindcss",
          "recharts",
          "date-fns",
          "clsx",
          "react-ga4",
          "query-string",
          "typescript",
        ],
      },
      {
        environment: "Testing",
        tools: ["jest", "@testing-library/react", "cypress", "storybook"],
      },
      {
        environment: "CI/CD",
        tools: ["github-actions"],
      },
    ],
  },
  {
    name: "Woow Technology",
    slug: "woow-technology",
    link: "/works/woow-technology",
    environment: "FULL STACK WEB",
    category: ProjectCategory.technical_test,
    link_github: "https://github.com/ilemarandrade/wook-test-full-stack",
    description: [
      "projects.woow_technology.first_paragraph",
      "projects.woow_technology.second_paragraph",
    ],
    dependencies: [
      {
        environment: "Frontend",
        tools: [
          "react",
          "react-dom",
          "react-router-dom",
          "react-hook-form",
          "@hookform/resolvers",
          "@tanstack/react-query",
          "axios",
          "i18next",
          "react-i18next",
          "react-hot-toast",
          "joi",
          "typescript",
          "tailwindcss",
          "vite",
          "vitest",
          "@testing-library/react",
        ],
      },
      {
        environment: "Backend",
        tools: [
          "express",
          "typescript",
          "prisma",
          "@prisma/client",
          "pg",
          "jsonwebtoken",
          "bcrypt",
          "cors",
          "dotenv",
          "express-validator",
          "jest",
          "supertest",
        ],
      },
      {
        environment: "Infra",
        tools: ["docker", "docker-compose", "postgresql"],
      },
    ],
  },
  {
    name: "Movie Search",
    slug: "movie-search",
    link: "/works/movie-search",
    environment: "REACT APP WEB",
    category: ProjectCategory.certification,
    // previews: { mobile: "/images/projects/pelis.png" },
    codesandboxLink:
      "https://codesandbox.io/embed/busqueda-de-peliculas-fzzh2?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
    description: [
      "projects.movie_search.first_paragraph",
      "projects.movie_search.second_paragraph",
    ],
    dependencies: [
      {
        environment: "Frontend",
        tools: [
          "axios",
          "react",
          "react-dom",
          "react-router-dom",
          "react-scripts",
        ],
      },
    ],
  },
  {
    name: "Pomodoro Clock",
    slug: "pomodoro-clock",
    link: "/works/pomodoro-clock",
    environment: "REACT APP WEB",
    category: ProjectCategory.certification,
    // previews: { mobile: "/images/projects/pomodoro.png" },
    description: ["projects.calculator.first_paragraph"],
    codesandboxLink:
      "https://codesandbox.io/embed/reloj-pomodoro-5tgjr?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
    dependencies: [
      {
        environment: "Frontend",
        tools: [
          "react",
          "react-dom",
          "react-helmet",
          "react-redux",
          "react-scripts",
          "redux",
        ],
      },
    ],
  },
  {
    name: "Drum Machine",
    slug: "drum-machine",
    link: "/works/drum-machine",
    environment: "REACT APP WEB",
    category: ProjectCategory.certification,
    // previews: { mobile: "/images/projects/drum.png" },
    codesandboxLink:
      "https://codesandbox.io/embed/drum-pad-q8dds?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
    description: [
      "projects.drum_machine.first_paragraph",
      "projects.drum_machine.second_paragraph",
    ],
    dependencies: [
      {
        environment: "Frontend",
        tools: [
          "react",
          "react-dom",
          "react-helmet",
          "react-redux",
          "react-scripts",
          "redux",
        ],
      },
    ],
  },
  {
    name: "Calculator",
    slug: "calculator",
    link: "/works/calculator",
    environment: "REACT APP WEB",
    category: ProjectCategory.certification,
    // previews: { mobile: "/images/projects/calculator.png" },
    codesandboxLink:
      "https://codesandbox.io/embed/calculadora-5kl0f?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
    description: ["projects.calculator.first_paragraph"],
    dependencies: [
      {
        environment: "Frontend",
        tools: ["react", "react-dom", "react-router-dom", "react-scripts"],
      },
    ],
  },
  {
    name: "New Quote",
    slug: "new-quote",
    link: "/works/new-quote",
    environment: "Jquery WEB",
    category: ProjectCategory.certification,
    // previews: { mobile: "/images/projects/thoughts.png" },
    codesandboxLink:
      "https://codesandbox.io/embed/mensajes-con-autores-evet4?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
    description: ["projects.calculator.first_paragraph"],
    dependencies: [
      {
        environment: "Frontend",
        tools: ["jquery"],
      },
    ],
  },
  {
    name: "MarkDown",
    slug: "mark-down",
    link: "/works/mark-down",
    environment: "REACT APP WEB",
    category: ProjectCategory.certification,
    // previews: { mobile: "/images/projects/markdown.png" },
    codesandboxLink:
      "https://codesandbox.io/embed/markedjs-51q3x?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
    dependencies: [
      {
        environment: "Frontend",
        tools: ["react", "react-dom", "react-scripts", "dompurify", "marked"],
      },
    ],
    description: ["projects.calculator.first_paragraph"],
  },
  {
    name: "Landing Page",
    slug: "landing-page",
    link: "/works/landing-page",
    environment: "REACT APP WEB",
    category: ProjectCategory.certification,
    // previews: { tablet: "/images/projects/landingPage.png" },
    codesandboxLink:
      "https://codesandbox.io/embed/landing-page-edi-react-bq2hq?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
    dependencies: [
      {
        environment: "Frontend",
        tools: ["react", "react-dom", "react-scripts"],
      },
    ],
    description: ["projects.landing_page"],
  },
];

export const lastProject = myProjects[0];
export default myProjects;
