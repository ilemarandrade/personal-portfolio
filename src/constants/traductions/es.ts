const es = {
  main_titles: {
    software_developer: "Desarrollador de Software",
    about_me: "Acerca de mí",
    all_personal_works: "Todos Mis Trabajos Personales",
  },
  about_me: {
    first_paragraph:
      "Soy un soñador que no cree en lo imposible, persistente y comprometido con mis metas y proyectos. Resolver problemas y dar soluciones efectivas, prácticas y con un enfoque trascendental son mis motivaciones a la hora de desempeñar mi rol como desarrollador web; Desfragmentar grandes problemas en pequeños desafíos diarios es la solución para mí.",
    second_paragraph:
      "Disfruto aprendiendo cosas nuevas, pasando tiempo con mi guitarra y cantando con mi esposa, jugar al baloncesto, iluminar todo lo que puedo y, por supuesto, todos los momentos destacados de la NBA.",
    third_paragraph:
      "Me encanta enseñar casi cualquier cosa, por eso también disfruto ser mentor en la academia de desarrolladores de software Swordvoice; En mi comunidad, también con mi esposa doy clases de música sin fines de lucro a jóvenes que quieren aumentar su conocimiento de un instrumento o de sus voces. Deseo algún día ser padre y también enseñarle todo lo que sé y guiarlo a alcanzar todos sus sueños con perseverancia.",
  },
  contact: {
    first_paragraph:
      "¿Estás buscando un desarrollador que te ayude con tu próximo proyecto?",
    second_paragrah:
      "¡Me encantaría saber de ti! Ya sea para un nuevo proyecto, para mejorar o mantener su proyecto o cualquier cosa relacionada con el desarrollo de software, ¡puedo ayudar! ¡Solo contácteme en este formulario o correo electrónico o whatsapp a continuación y comencemos a colaborar!",
    want_to_call_me: "¿QUIERES LLAMARME?",
    can_do_it_by_ws: "Puedes hacerlo por Whatsapp",
    just_want_to_email_me: "¿SOLO QUIERES ENVIARME UN CORREO ELECTRÓNICO?",
    form: {
      button: "Enviar mensaje",
      name: "Nombre",
      email: "Correo",
      type_your_message: "Escribe tu mensaje",
    },
  },
  projects: {
    wallet: {
      first_paragraph:
        "Desarrolle una app web con el fin de registrar ingresos y gastos, tener un seguimiento del historial de los movimientos del usuario y eliminar movimientos erróneos restableciendo el saldo correspondiente, se puede disfrutar de dicho servicio con un simple registro en la plataforma y seguidamente hacer login, además es una app multiidioma el cual posee ingles y español.",
      second_paragraph:
        "En el proceso de desarrollo pude aplicar un código limpio y escalable tanto en el frontend como en el backend siendo este último entorno de desarrollo un conocimiento reciente el cual pude aplicar en un ambiente real siendo fundamental para el óptimo funcionamiento de la app.",
    },
    movie_search: {
      first_paragraph:
        "Este proyecto fue donde practique por primera vez consumir servicios de una api el cual utilice esta api publica https://omdbapi.com/.",
      second_paragraph:
        "Este proyecto le permite buscar y ver una descripción general de la película seleccionada.",
    },
    drum_machine: {
      first_paragraph:
        'Este proyecto es parte de los proyectos para obtener mi certificado en "Front End Development Libraries", en esta caja de ritmos lo que más puedo destacar es el uso de un estado global manejado por redux y la etiqueta de audio para obtener un sonido después de hacer clic cada botón.',
      second_paragraph:
        "Para que puedas usarlo, debes encenderlo y tienes dos bancos de sonido disponibles para comenzar a hacer música con la combinación de ellos.",
    },
    calculator: {
      first_paragraph:
        'Este proyecto es parte de los proyectos para obtener mi certificado en "Front End Development Libraries".',
    },
    eventezer_services: {
      first_paragraph: `**Co-creada por Ilemar Andrade & Chellys Castillo**

Eventezer es una plataforma SaaS multi-tenant para la gestión de eventos, orientada tanto a personas naturales (bodas, conciertos, talleres) como a organizaciones (empresas, agencias, asociaciones), con un modelo de suscripción mensual + comisión únicamente sobre órdenes aprobadas.

Diseñamos y construimos la API REST desde cero como un monolito NestJS modular, con arquitectura en capas estricta (Controller → Service → Prisma) y aislamiento multi-tenant completo. Todas las respuestas se envuelven automáticamente en un envelope \`{ statusCode, message, data }\` mediante un interceptor global, y toda entrada es validada por un ValidationPipe global con class-validator.

**Qué desarrolle:**
- **Autenticación y autorización** — JWT con rotación de access/refresh token, bcrypt, flujo de login OTP para staff, guards por roles (OWNER, ADMIN, permisos personalizados) y un PermissionsGuard que verifica filas de permisos por staff en la base de datos
- **Gestión de eventos multi-tenant** — CRUD completo de eventos, tipos de entrada (incluyendo admisión por donación), precios, capacidad y visibilidad; jobs programados para el ciclo de vida de los eventos
- **Flujo de órdenes y pagos** — reservas temporales con expiración via BullMQ, cálculo de comisiones por orden aprobada, configuración de métodos de pago por tenant
- **Check-in digital** — QR firmados por entrada, período de gracia configurable, estado en tiempo real via Socket.io WebSockets
- **Analíticas y facturación** — reportes por tenant sobre ventas, ingresos y asistencia; gestión de planes de facturación y facturas
- **Email transaccional** — flujos de invitación, confirmaciones de órdenes y envío de entradas via Resend
- **Transmisión en vivo** — integración con Cloudflare Stream con ciclo de vida automatizado del live input, impulsado por jobs programados y event emitters
- **Tipo de cambio** — scraper del BCV con caché en Redis para soporte multi-divisa
- **Almacenamiento de archivos** — almacenamiento S3-compatible con procesamiento via Sharp
- **Lista de espera** — captura de interés preventa y gestión de lista de espera por evento
`,
    },
    eventezer_admin: {
      first_paragraph: `**Co-creada por Ilemar Andrade & Chellys Castillo**

Construimos el Panel de Administración de Eventezer como el centro de operaciones interno para los organizadores de eventos. Ya sea una boda, una conferencia corporativa o un ciclo de conciertos, los organizadores gestionan desde este dashboard cada aspecto operativo de sus eventos en una sola interfaz.

**Qué construimos:**
- **Gestión de eventos** — crear, publicar y configurar eventos con control total sobre tipos de entradas, precios, capacidad y visibilidad
- **Gestión de asistentes y entradas** — consultar asistentes registrados, filtrar por tipo de entrada o estado, gestionar detalles a nivel de orden
- **Check-in digital** — seguimiento en tiempo real para que el staff valide asistentes el día del evento
- **Órdenes y pagos** — revisar órdenes entrantes, hacer seguimiento del estado de pago y gestionar ingresos por comisión
- **Dashboard de analíticas** — reportes visuales sobre ventas, tendencias de ingresos y asistencia con gráficas interactivas
- **Autenticación** — gestión de sesiones JWT con flujo de access token y refresh token

**Stack:** Next.js 16 (App Router + RSC) · React 19 · TypeScript · Tailwind CSS v4 · TanStack Query v5 · Axios · react-hook-form + Zod · ApexCharts · Zustand

Estructuramos el código con arquitectura de carpetas por feature (Scream Architecture) y principios de Atomic Design, hooks de API co-localizados y cobertura total de TypeScript.`,
    },
    eventezer: {
      first_paragraph: `**Co-creadores: Ilemar Andrade & Chellys Castillo**

Junto a mi colega Chellys Castillo, diseñamos y desarrollamos la landing page del producto desde cero: una experiencia web moderna orientada a convertir visitantes en organizadores registrados, cubriendo casos de uso desde personas naturales (bodas, conciertos, talleres) hasta empresas y productoras de eventos.

Eventezer es una plataforma SaaS de gestión de eventos que unifica publicación, ticketing, pagos, check-ins y analítica en un solo lugar. Su modelo de negocio cobra suscripción mensual más una comisión que aplica únicamente cuando una orden queda aprobada, eliminando el riesgo financiero para el organizador.


**Lo que construimos:**
- Landing page completa con secciones de hero, propuesta de valor, casos de uso, precios, calculadora de ROI, FAQ y contacto
- Blog con contenido educativo renderizado desde Markdown
- Soporte para tema claro/oscuro y animaciones con scroll usando Framer Motion
- Formulario de contacto con validación via React Hook Form + Zod
- SEO técnico: sitemap dinámico, robots.txt y metadatos optimizados`,
    },
    swordvoice: {
      first_paragraph:
        "Landing page que construí junto a mi colega Chellys Castillo para la academia en línea Swordvoice",
    },
    puntospoint: {
      first_paragraph:
        "Prueba técnica frontend para PuntosPoint desarrollada con Next.js 13 (App Router), MUI, Tailwind CSS y React Query. Incluye un dashboard con filtros rastreados mediante eventos de Google Analytics y un catálogo de componentes publicado con Storybook.",
      second_paragraph:
        "Cuenta con tests unitarios con Jest y React Testing Library, tests end-to-end con Cypress y un pipeline CI/CD con GitHub Actions para verificaciones automáticas de calidad en cada push.",
    },
    woow_technology: {
      first_paragraph:
        "Aplicación full stack desarrollada como prueba técnica para Woow Technology. Incluye API REST con autenticación JWT, gestión de usuarios y cliente web con rutas protegidas y roles (USER/ADMIN).",
      second_paragraph:
        "Construida como monorepo con backend Node.js + Express + Prisma + PostgreSQL y frontend React 18 + Vite + TypeScript + Tailwind CSS, containerizada con Docker. La API expone endpoints versionados para registro, login, perfil y listado de usuarios (solo ADMIN).",
    },
    landing_page:
      "Este proyecto fue con el propósito de practicar la maquetación de un sitio web.",
    memory_game: `
## Estructura de carpetas

\`\`\`
├───📁 src/
│   └───📁 assets/
│   │   └───📁 images/
│   └───📁 constants/
│   └───📁 contexts/
│   ├───📁 components/
│   │   └───📁 MyComponent/
│   │   │   └───📄 index.tsx
│   │   │   └───📄 MyComponent.modules.scss
│   │   │   └───📄 MyComponent.spec.tsx
│   │   │   └───📄 MyComponent.stories.ts
│   └───📁 hooks/
│   │   └───📁 api/
│   │   │   └───📄 useGetData.ts
│   │   └───📄 useMyCustomHook.ts
│   └───📁 layouts/
│   │   │   └───📄 MainLayout.tsx
│   └───📁 utils/
│   └───📁 pages/
│   └───📁 providers/
│   └───📁 root/
│   │   │   └───📄 App.scss
│   │   │   └───📄 App.tsx
│   │   │   └───📄 Providers.tsx
│   │   │   └───📄 Routes.tsx
│   └───📄 index.js
\`\`\`

#### Breve explicación del propósito de cada carpeta

- \`/src\`:
Es la carpeta principal de todo el proyecto.

- \`/src/assets\`:
contiene todo lo relacionado con las imágenes, iconos, fuentes, por ahora solo tiene \`/src/assets/images\`, pero si es necesario colocar iconos o fuentes debería crearse unas nuevas carpetas llamadas \`/icons\` y \`/fonts\` respectivamente dentro de \`/src/assets\`.

- \`/src/constants\`:
Contiene variables constantes que son usadas en más de un lugar de la app, por ejemplo \`routes.ts\` guardara el valor de las rutas de la app.

- \`/src/contexts\`:
Contiene los customs contexts creados de react.

- \`/src/components\`:
Contiene los componentes de la app, la cual tendrá una forma específica de crear los componentes. Como se muestra en el ejemplo de la estructura de las carpetas; se debe crear una carpeta con **el nombre del componente**, que internamente tendrá cuatro archivos que son:

- \`index.tsx\`: archivo donde se maneja la lógica y el jsx del componente.
- \`MyComponent.modules.scss\`: archivo con el CSS del componente.
- \`MyComponent.spec.tsx\`: archivo con el test unitario del componente.
- \`MyComponent.stories.tsx\`: archivo con la stories del componente.

- \`/src/hooks\`: esta carpeta contiene los customs hooks de la app, en su primer nivel se puede colocar los customs hooks. A nivel de la carpeta \`/api\` se colocarán los customs hooks que manejen los request al servidor.

- \`/src/layouts\`: esta carpeta contiene los layouts creados de la app.

- \`/src/utils\`: esta carpeta contiene las funciones puras creadas para su uso en mas de un lugar de la app.

- \`/src/providers\`: esta carpeta contiene los customs providers creados de react.

- \`/src/root\`: esta carpeta contiene los archivos raíces de la app que son:

- \`/Providers.ts\`: archivo que envuelve los providers.

- \`/Routes.ts\`: archivo con las rutas de la app. (construido con react-router-dom)

- \`/App.ts\`: que envuelve a \`providers\`, \`routes\` o algún componente o dev-tools que deba estar presente en toda la app.

**Nota:** Esta estructura de carpetas es de tipo de fichero, pero se tiene como premisa que cada componente, página, hook entre otros, tengan su propia carpeta a partir de que se le agregue test, stories, CSS o cualquier archivo directamente relacionado con el funcionamiento óptimo de los mismos.
Por ejemplo:

\`\`\`
│   │  ──📁 MyComponent/
│   │   │   └───📄 index.tsx
│   │   │   └───📄 MyComponent.modules.scss
│   │   │   └───📄 MyComponent.test.tsx
│   │   │   └───📄 MyComponent.stories.ts
\`\`\`

## Styles

Referente a los styles estuve usando sass específicamente en archivos .scss, los cuales cuenta con \`root/App.scss\` para los styles globales o compartidos por más de un módulo de la app como por ejemplo \`.perfect-center\` o \`text-center\` etc; además cada módulo posee su propio \`.scss\` si es necesario.

## Tests

Para lograr estabilidad en el funcionamiento de cada módulo de la app apliqué tres tipos de test:

- Test unitarios: utilice jest y testing library react.
- Snapshots: utilice jest y testing library react.
- e2e: utilice Cypress con testing library react.

## Deploy

Utilice vercel para el deploy.    
    `,
  },
  categories: {
    production: "Producción",
    personal: "Personales",
    certification: "Certificaciones",
    technical_test: "Pruebas Técnicas",
  },
  contact_me: "Contactame",
  about: "Conoceme",
  works: "Trabajos",
  say_hello: " Hola, soy Ilemar👋",
  nothing_is_imposible: "Nada es Imposible",
  learn_more_about_me: "Aprende <br/> mas <br/> de mi",
  my_work: "Mi trabajo",
  view_all_works: "Revisa<br /> todo mis <br /> trabajos",
  lets_connect: "Conectemos",
  what_i_do: "Que hago",
  web_development: "Desarrollo <br /> Web",
  test_code: "Test a código",
  ci_cd: "CI/CD",
  the_last_personal_project: "Ultimo proyecto personal",
  dependencies: "Dependencias",
};

export default es;
