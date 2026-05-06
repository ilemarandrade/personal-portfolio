# Portfolio Personal — CLAUDE.md

## Stack

- **Framework**: Next.js 13 (Pages Router)
- **Lenguaje**: TypeScript (strict mode)
- **UI**: MUI v5 + Emotion (`@mui/material`, `@emotion/styled`)
- **Animaciones**: Framer Motion (variantes centralizadas en `src/constants/animation.ts`)
- **Formularios**: React Hook Form + Yup
- **i18n**: hook propio (`useTranslation`) — sin librerías externas
- **Package manager**: pnpm
- **Node**: 24.x
- **Deploy**: Vercel

## Estructura de directorios

```
src/
├── assets/          # imágenes e iconos (StaticImageData de next/image)
├── components/      # componentes reutilizables (un folder por componente con barrel index.ts)
├── constants/       # datos estáticos y configuración
│   ├── animation.ts       # todas las variantes de Framer Motion
│   ├── galery.ts          # imágenes de la sección About
│   ├── menuItems.ts       # ítems de navegación
│   ├── myProjects.ts      # lista de proyectos (IProject[]) + lastProject
│   └── traductions/
│       ├── en.ts          # textos en inglés
│       └── es.ts          # textos en español
├── hooks/
│   └── useTranslation.ts  # hook de i18n basado en next/router locale
├── layout/
│   └── MainLayout.tsx     # layout principal (Head, Header, bigTitle, Footer)
├── pages/           # rutas Next.js (Pages Router)
│   ├── index.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   └── works/
│       ├── index.tsx
│       └── [name].tsx     # página dinámica por slug de proyecto
└── styles/
    ├── globals.css
    └── theme.ts           # tema MUI (dark, naranja primario, fuente DM Sans)
```

## Path alias

`@/*` apunta a `./src/*`. Usar siempre el alias, nunca rutas relativas largas.

## Tema / Design tokens

- **Fondo**: `#111111` (dark)
- **Color primario**: `rgb(255, 105, 0)` (naranja)
- **Texto secundario**: `#838683`
- **Texto terciario**: `rgb(255, 105, 0)`
- **Fuente**: DM Sans (Google Fonts)
- Las cards (`BoxMain`) tienen fondo `rgb(51, 54, 57)` y cambian a naranja primario en hover
- Border radius estándar de cards: `24px`

## i18n

- El hook `useTranslation` expone `t(key)` — la clave usa notación de punto (`"about_me.first_paragraph"`)
- Los textos con HTML (e.g. saltos de línea) se renderizan con `dangerouslySetInnerHTML={{ __html: t("key") }}`
- Siempre agregar la clave en **ambos** archivos: `src/constants/traductions/en.ts` y `es.ts`
- El locale se obtiene de `next/router` (`locale === "en"` → inglés)

## Animaciones

- Todas las variantes de Framer Motion están centralizadas en `src/constants/animation.ts`
- Para agregar una nueva animación: añadir el objeto a `animation` en ese archivo y usar la referencia desde los componentes
- Nunca escribir variantes inline en los componentes; siempre referenciar `animation.*`

## Convención de componentes

```
src/components/MiComponente/
├── MiComponente.tsx   # lógica + JSX
└── index.ts           # re-exportación (barrel)
```

Styled components se definen en el mismo archivo TSX usando `styled()` de MUI (Emotion).

## Proyectos (`myProjects.ts`)

Cada proyecto sigue la interfaz `IProject`:

```ts
interface IProject {
  name: string;
  slug: string;         // slug para la ruta /works/[name]
  link: string;         // ruta interna
  environment: string;  // e.g. "REACT APP WEB"
  img: StaticImageData;
  link_external?: string;
  link_github?: string;
  description: string[];  // claves i18n o texto directo
  dependencies: { environment: string; tools: string[] }[];
  isMarkdown?: boolean;       // si la descripción es markdown
  codesandboxLink?: string;
  isItAdesktopImage?: boolean;
}
```

`lastProject` (primer elemento del array) se muestra en la home. Al agregar un proyecto nuevo y querer que sea el "último", ponerlo primero en el array.

## Comandos frecuentes

```bash
pnpm dev       # servidor de desarrollo (http://localhost:3000)
pnpm build     # build de producción
pnpm lint      # ESLint (next/core-web-vitals)
```

## Convención de commits

Conventional Commits + gitmoji:

```
tipo: :emoji: descripción corta
```

Ejemplos usados en este repo:
- `build: :package: descripción`
- `style: :lipstick: descripción`
- `style: :fire: descripción`

## Reglas de trabajo

- No agregar comentarios a menos que el "por qué" sea no obvio
- No abstracciones prematuras: tres líneas similares es mejor que una abstracción anticipada
- No agregar manejo de errores para escenarios que no pueden ocurrir
- Responsive: usar `useMediaQuery` o los breakpoints de MUI (`xs`, `sm`, `md`)
- Las páginas usan `MainLayout` con `title` y opcionalmente `bigTitle` (texto grande animado en la parte superior)
- Para agregar una página nueva: crear el archivo en `src/pages/`, agregarlo a `src/constants/menuItems.ts` si va en el nav, y agregar las traducciones en ambos archivos de traductions
