const en = {
  main_titles: {
    software_developer: "Software Developer",
    about_me: "About me",
    all_personal_works: "All Personal Works",
  },
  about_me: {
    first_paragraph:
      "I am a dreamer who does not believe in the impossible, persistent and committed to my goals and projects. Solving problems and giving effective, practical solutions with a transcendental approach are my motivations when performing my role as a web developer; Defragmenting large problems into small daily challenges is the solution for me.",
    second_paragraph:
      "I enjoy learning new things, spending time with my guitar and singing along with my wife, play basketball, lighting up as much as I can and of course all the NBA highlights.",
    third_paragraph:
      "I love teaching almost anything, that's why I also enjoy being a mentor at the Swordvoice software developer academy; In my community, also with my wife I teach music for non profit to young people who want to increase their knowledge of an instrument or their voices. I wish one day to be a father and also teach him everything I know and guide him to achieve all his dreams with perseverance.",
  },
  contact: {
    first_paragraph:
      "Are you looking for a developer to help you with your next project?",
    second_paragraph:
      "I'd love to hear from you! Whether it's for a new project, to improve or maintain your project or anything related to software development, I can help! Just contact me on this form or email or whatsapp below and let's start collaborating!",
    want_to_call_me: "WANT TO CALL ME??",
    can_do_it_by_ws: "Can do it by Whatsapp",
    just_want_to_email_me: "JUST WANT TO EMAIL ME?",
    form: {
      button: "Send Message",
      name: "Name",
      email: "Email",
      type_your_message: "Type your message",
    },
  },
  projects: {
    wallet: {
      first_paragraph:
        "Develop a web app in order to record income and expenses, keep track of the user's movement history and eliminate erroneous movements by restoring the corresponding balance, you can enjoy this service with a simple registration on the platform and then login, It is also a multilanguage app which has English and Spanish.",
      second_paragraph:
        "In the development process I was able to apply a clean and scalable code both in the frontend and in the backend, the latter development environment being recent knowledge which I could apply in a real environment, being essential for the optimal functioning of the app.",
    },
    movie_search: {
      first_paragraph:
        "This project was where I first practiced consuming services from an API, which I did with this public API https://omdbapi.com/.",
      second_paragraph:
        "This project allows you to search and view an overview of the selected movie.",
    },
    drum_machine: {
      first_paragraph:
        'This project is part of the projects to obtain my certificate in "Front End Development Libraries", in this drum machine what I can highlight the most is the use of a global state managed by redux and the audio tag to obtain a sound after clicking each button.',
      second_paragraph:
        "Before you can use it, you have to turn it on and you have two sound banks available to start making music with the combination of them.",
    },
    calculator: {
      first_paragraph:
        'This project is part of the projects to obtain my certificate in "Front End Development Libraries".',
    },
    eventezer_services: {
      first_paragraph: `**Co-created by Ilemar Andrade & Chellys Castillo**

Eventezer is a multi-tenant SaaS platform for event management, serving both individuals (weddings, concerts, workshops) and organizations (companies, agencies, associations) on a subscription + commission model — Eventezer only charges a commission on approved orders.

We designed and built the REST API from the ground up as a modular NestJS monolith, following a strict layered architecture (Controller → Service → Prisma) with full multi-tenant isolation. All responses are automatically wrapped in a consistent \`{ statusCode, message, data }\` envelope via a global interceptor, and all input is validated by a global ValidationPipe using class-validator.

**What we built:**
- **Auth & authorization** — JWT with access/refresh token rotation, bcrypt password hashing, OTP staff login flow, role-based guards (OWNER, ADMIN, custom permissions), and a PermissionsGuard that checks per-staff permission rows in the database
- **Multi-tenant event management** — full CRUD for events, ticket types (including donation-based admission), pricing, capacity, and visibility; scheduled jobs for event lifecycle automation
- **Order & payment flow** — time-limited reservations via BullMQ, commission calculation per approved order, and per-tenant payment method configuration
- **Digital check-in** — signed QR codes per ticket, configurable grace period, and real-time check-in state via Socket.io WebSockets
- **Analytics & billing** — per-tenant reports on ticket sales, revenue, and attendance; billing plans and invoice management
- **Transactional email** — invitation flows, order confirmations, and ticket delivery via Resend
- **Live streaming** — Cloudflare Stream integration with automated live input lifecycle (create, warn, extend, teardown) driven by scheduled jobs and event emitters
- **Exchange rate** — BCV scraper with Redis-backed cache for multi-currency support
- **File storage** — S3-compatible image and asset storage with Sharp-based processing
- **Waitlist** — pre-sale interest capture and waitlist management per event

**Stack:** NestJS v11 · TypeScript · PostgreSQL · Prisma v7 · BullMQ + Redis · Socket.io · Resend · AWS S3 + Sharp · Cloudflare Stream · passport-jwt · class-validator · Swagger`,
    },
    eventezer_admin: {
      first_paragraph: `**Co-created by Ilemar Andrade & Chellys Castillo**

We built the Eventezer Admin Panel as the internal command center for event organizers using the platform. Whether managing a wedding, a corporate conference, or a concert series, organizers use this dashboard to run every operational aspect of their events from a single interface.

**What we built:**
- **Event management** — create, publish, and configure events with full control over ticket types, pricing, capacity, and visibility
- **Attendee & ticket management** — browse registered attendees, filter by ticket type or status, and handle order-level details
- **Digital check-in** — real-time check-in tracking so staff can validate attendees on the day of the event
- **Orders & payments** — review incoming orders, track payment status, and manage commission-based revenue
- **Analytics dashboard** — visual reports on ticket sales, revenue trends, and attendance with interactive charts
- **Authentication** — JWT-based session management with access and refresh token flow

**Stack:** Next.js 16 (App Router + RSC) · React 19 · TypeScript · Tailwind CSS v4 · TanStack Query v5 · Axios · react-hook-form + Zod · ApexCharts · Zustand

We structured the codebase around a feature-folder (Scream) architecture with strict Atomic Design principles, co-located API hooks, and full TypeScript coverage.`,
    },
    eventezer: {
      first_paragraph: `**Co-creators: Ilemar Andrade & Chellys Castillo**

Together with my colleague Chellys Castillo, we designed and built the product's landing page from scratch — a modern web experience focused on converting visitors into registered organizers, covering use cases from individuals (weddings, concerts, workshops) to companies and event agencies.

Eventezer is a SaaS platform for event management that unifies publishing, ticketing, payments, check-ins, and analytics in one place. Its business model charges a monthly subscription plus a commission that applies only when an order is approved, removing financial risk for the organizer.


**What we built:**
- Full landing page with hero, value proposition, use cases, pricing, ROI calculator, FAQ, and contact sections
- Blog with educational content rendered from Markdown
- Light/dark theme support and scroll-driven animations using Framer Motion
- Contact form with validation via React Hook Form + Zod
- Technical SEO: dynamic sitemap, robots.txt, and optimized metadata`,
    },
    swordvoice: {
      first_paragraph:
        "Landing page built alongside my colleague Chellys Castillo for the online academy Swordvoice.",
    },
    puntospoint: {
      first_paragraph:
        "Frontend technical test for PuntosPoint built with Next.js 13 (App Router), MUI, Tailwind CSS and React Query. Features a dashboard with filters tracked via Google Analytics events and a full component catalog published with Storybook.",
      second_paragraph:
        "Includes unit tests with Jest and React Testing Library, end-to-end tests with Cypress, and a CI/CD pipeline with GitHub Actions for automated quality checks on every push.",
    },
    woow_technology: {
      first_paragraph:
        "Full stack application developed as a technical test for Woow Technology. Includes a REST API with JWT authentication, user management, and a web client with protected routes and roles (USER/ADMIN).",
      second_paragraph:
        "Built as a monorepo with a Node.js + Express + Prisma + PostgreSQL backend and a React 18 + Vite + TypeScript + Tailwind CSS frontend, containerized with Docker. The API exposes versioned endpoints for registration, login, profile management and user listing (ADMIN only).",
    },
    landing_page:
      "This project was for the purpose of practicing the layout of a website.",
    memory_game: `
## Folder structure

\`\`\`
├───📁 src/
│ └└└──📁 assets/
│ │ └─└───📁 images/
│ └└───📁 constants/
│ └└───📁 contexts/.
│ ├───📁 components/.
│ │ └└───📁 MyComponent/
│ │ │ │ └────📄 index.tsx
│ │ │ │ └─────📄 MyComponent.modules.scss
│ │ │ │ └└────📄 MyComponent.spec.tsx
│ │ │ │ └└────📄 MyComponent.stories.ts
│ └└───📁 hooks/
│ │ └└───📁 api/
│ │ │ │ └────📄 useGetData.ts
│ │ └────📄 useMyCustomHook.ts
│ └└───📁 layouts/
│ │ │ └────📄 MainLayout.tsx
│ └└───📁 utils/
│ └└───📁 pages/
│ └└───📁 providers/
│ └└───📁 root/
│ │ │ └────📄 App.scss
│ │ │ │ └────📄 App.tsx
│ │ │ │ └────📄 Providers.tsx
│ │ │ │ └────📄 Routes.tsx
│ └└───📄 index.js
\`\`\`

#### Brief explanation of the purpose of each folder.

- \`/src\`:
  This is the main folder for the whole project.

- \`/src/assets\`:
  contains everything related to images, icons, fonts, for now it only has \`/src/assets/images\`, but if it is necessary to place icons or fonts you should create new folders called \`/icons\` and \`/fonts\` respectively inside \`/src/assets\`.

- \`/src/constants\`:
  Contains constant variables that are used in more than one place in the app, for example \`routes.ts\` will store the value of the app's routes.

- \`/src/contexts\`:
  Contains the customs contexts created from react.

- \`/src/components\`:
  Contains the components of the app, which will have a specific way of creating the components. As shown in the example of the structure of the folders; you must create a folder with **the name of the component**, which internally will have four files that are:

  - \`index.tsx\`: file where the logic and jsx of the component is managed.
  - MyComponent.modules.scssss: file with the component's CSS.
  - MyComponent.spec.tsxx: file with the component's unit test.
  - MyComponent.stories.tsxx: file with the component's stories.

- \`/src/hooks\`: this folder contains the customs hooks of the app, in its first level you can place the customs hooks. At the \`/api\` folder level you will place the customs hooks that handle the requests to the server.

- \`/src/layouts\`: this folder contains the created layouts of the app.

- \`/src/utils\`: this folder contains the pure functions created to be used in more than one place of the app.

- \`/src/providers\`: this folder contains the custom providers created from react.

- \`/src/root\`: this folder contains the root files of the app which are:

  - \`/Providers.ts\`: file that wraps the providers.

  - \`/Routes.ts\`: file with the routes of the app (built with react-router-dom).

  - \`/App.ts\`: file that wraps \`providers\`, \`routes\` or any component or dev-tools that must be present in the whole app.

**Note:** This folder structure is of file type, but it is premised that each component, page, hook among others, have their own folder as soon as you add test, stories, CSS or any file directly related to the optimal functioning of the same.
For example:

\`\`\`
│ │ │ ──📁 MyComponent/.
│ │ │ └──└──📄 index.tsx
│ │ │ │ └─────📄 MyComponent.modules.scss
│ │ │ │ └└────📄 MyComponent.test.tsx
│ │ │ │ └────📄 MyComponent.stories.ts
\`\`\`

## Styles

Referring to the styles I was using sass specifically in .scss files, which has \`root/App.scss\` for global styles or shared by more than one module of the app such as \`.perfect-centerer\` or \`text-center\` etc; also each module has its own \`.scss\` if needed.

## Tests

To achieve stability in the operation of each module of the app I applied three types of tests:

- Unit tests: use jest and testing library react.
- Snapshots: use jest and testing library react.
- e2e: use Cypress with testing library react.

## Deploy

Use vercel for deploy.`,
  },
  categories: {
    production: "Production",
    personal: "Personal",
    certification: "Certifications",
    technical_test: "Technical Test",
  },
  contact_me: "Get it touch",
  about: "About",
  works: "Works",
  say_hello: " Hi, I'm Ilemar👋",
  nothing_is_imposible: "Nothing is imposible",
  learn_more_about_me: "Learn <br/> More <br/> About me",
  my_work: "My work",
  view_all_works: "View <br /> All My <br /> Works",
  lets_connect: "Let's connect",
  what_i_do: "What I do",
  web_development: "Web <br /> Development",
  test_code: "Test Code",
  ci_cd: "CI/CD",
  the_last_personal_project: "The last personal project",
  dependencies: "Dependencies",
};

export default en;
