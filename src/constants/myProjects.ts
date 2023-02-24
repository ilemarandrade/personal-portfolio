import pelis from "@/assets/images/projects/pelis.png";
import drum from "@/assets/images/projects/drum.png";
import calculator from "@/assets/images/projects/calculator.png";
import landingPage from "@/assets/images/projects/landingPage.png";
import markdown from "@/assets/images/projects/markdown.png";
import thoughts from "@/assets/images/projects/thoughts.png";
import defaultImg from "@/assets/images/projects/default.png";
import wallet from "@/assets/images/projects/wallet.png";

const myProjects = [
  {
    name: "Wallet",
    slug: "wallet",
    link: "/works/wallet",
    environment: "MERN APP WEB",
    img: wallet,
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
    name: "Movie Search",
    slug: "movie-search",
    link: "/works/movie-search",
    environment: "REACT APP WEB",
    img: pelis,
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
    img: defaultImg,
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
    img: drum,
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
  /*{
        name: "Memory Game",
        link: "/works/nameOfprojectIs",
        img:
 pelis    },*/
  {
    name: "Calculator",
    slug: "calculator",
    link: "/works/calculator",
    environment: "REACT APP WEB",
    img: calculator,
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
    img: thoughts,
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
    img: markdown,
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
    img: landingPage,
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
