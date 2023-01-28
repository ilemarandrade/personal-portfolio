import pelis from "@/assets/images/projects/pelis.png";
import drum from "@/assets/images/projects/drum.png";
import calculator from "@/assets/images/projects/calculator.png";
import landingPage from "@/assets/images/projects/landingPage.png";
import markdown from "@/assets/images/projects/markdown.png";
import thoughts from "@/assets/images/projects/thoughts.png";
import defaultImg from "@/assets/images/projects/default.png";

const myProjects = [
  {
    name: "Movie Search",
    slug: "movie-search",
    link: "/works/movie-search",
    environment: "REACT APP WEB",
    img: pelis,
    codesandboxLink:
      "https://codesandbox.io/embed/busqueda-de-peliculas-fzzh2?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
  },
  {
    name: "Wallet",
    slug: "wallet",
    link: "/works/wallet",
    environment: "REACT APP WEB",
    img: defaultImg,
    codesandboxLink:
      "https://codesandbox.io/embed/billetera-zutg6?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
  },
  {
    name: "Pomodoro Clock",
    slug: "pomodoro-clock",
    link: "/works/pomodoro-clock",
    environment: "REACT APP WEB",
    img: defaultImg,
    codesandboxLink:
      "https://codesandbox.io/embed/reloj-pomodoro-5tgjr?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
  },
  {
    name: "Drum Machine",
    slug: "drum-machine",
    link: "/works/drum-machine",
    environment: "REACT APP WEB",
    img: drum,
    codesandboxLink:
      "https://codesandbox.io/embed/drum-pad-q8dds?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
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
  },
  {
    name: "Landing Page",
    slug: "landing-page",
    link: "/works/landing-page",
    environment: "REACT APP WEB",
    img: landingPage,
    codesandboxLink:
      "https://codesandbox.io/embed/landing-page-edi-react-bq2hq?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
  },
  {
    name: "New Quote",
    slug: "new-quote",
    link: "/works/new-quote",
    environment: "REACT APP WEB",
    img: thoughts,
    codesandboxLink:
      "https://codesandbox.io/embed/mensajes-con-autores-evet4?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
  },
  {
    name: "MarkDown",
    slug: "mark-down",
    link: "/works/mark-down",
    environment: "REACT APP WEB",
    img: markdown,
    codesandboxLink:
      "https://codesandbox.io/embed/markedjs-51q3x?fontsize=14&hidenavigation=1&view=preview&theme=dark&view=preview&codemirror=1&hidedevtools=1",
  },
];

export const lastProject = myProjects[0];
export default myProjects;
