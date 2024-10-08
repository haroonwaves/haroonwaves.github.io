export const skills = [
  "Typescript",
  "React",
  "NextJS",
  "Svelte",
  "Express",
  "Fastify",
  "React Native",
  "Redux",
  "Electron",
  "Webpack",
  "Firebase",
  "MongoDB",
  "MySQL",
  "TailwindCSS",
  "Sass",
  "Git",
  "AWS",
];

export const projects = [
  {
    id: 1,
    title: "IndexedDB Manager",
    logo: "/idb-crud.png",
    printDescription: [
      "Developed a Chrome DevTool extension for IndexedDB management using Preact and Vite.",
      "Implemented comprehensive functionality, including data export and import capabilities.",
      "Engineered a tabular interface for improved visualization and analysis of IndexedDB data.",
      "Optimized performance to handle and display large datasets efficiently.",
    ],
    description:
      "Engineered a high-performance Chrome DevTool extension for IndexedDB management, leveraging Preact and Vite. The extension features comprehensive data handling capabilities, including export and import functions, along with an optimized tabular interface for efficient visualization and analysis of large IndexedDB datasets. This tool enhances developers' ability to interact with and manipulate IndexedDB data directly within Chrome's developer environment.",
    technologies: [
      "Javascript",
      "Preact",
      "Vite",
      "CRXJS",
      "Dexie.js",
      "TanStack Table",
      "Eslint",
      "Prettier",
      "TailwindCSS",
    ],
  },
  {
    id: 2,
    title: "Signals Devtool",
    logo: "/signals-devtool.png",
    printDescription: [
      "Developed a Chrome extension using Svelte+vite for @preact/signals, similar to Redux DevTools, to monitor signal changes",
      "Engineered real-time tracking functionality for efficient debugging of signal modifications.",
      "Designed a hierarchical tree view to visualize and highlight data differences.",
      "Streamlined integration process for seamless adoption in ongoing projects.",
    ],
    description:
      "Developed a Chrome extension for @preact/signals using Svelte and Vite, inspired by Redux DevTools. Key features include real-time signal change monitoring, a hierarchical tree view for data visualization, and a memory storage system for tracking historical changes. This tool significantly improves debugging efficiency and workflow for projects using @preact/signals, offering easy integration and valuable insights.",
    technologies: [
      "Typescript",
      "Svelte",
      "Vite",
      "CRXJS",
      "TailwindCSS",
      "Git",
      "Github",
    ],
  },
  {
    id: 2,
    title: "Bento Maker",
    logo: "/bento-maker.png",
    printDescription: [
      "Developed a React-based web app using Vite and Konva.js for creating animated bento grids with fully customizable feature.",
      "Implemented canvas animations, GPU-optimized rendering, Firebase integration for authentication and storage, and a predefined templates to reduce user work.",
      "Implemented best practices for optimal performance and user experience.",
    ],
    description:
      "Developed a React-based web app using Vite and Konva.js for creating animated bento grids with fully customizable feature. Features include canvas animations, GPU-optimized rendering, Firebase integration for authentication and storage, and a predefined templates to reduce user work. Implemented best practices for optimal performance and user experience.",
    technologies: [
      "Typescript",
      "React",
      "React router",
      "Vite",
      "Konva.js",
      "Firebase",
      "Eslint",
      "Prettier",
      "Shadcn UI",
      "TailwindCSS",
    ],
  },
];

export const work = [
  {
    id: 1,
    title: "Lead Software Developer",
    company: "Supersorted",
    duration: "Aug 2021 - Present",
    description: [
      `Involved in the app's development from its inception, utilizing popular technologies (React, Webpack, TypeScript, ESLint)`,
      "Designed and built an offline-first architecture, enabling most app features to function seamlessly without internet connectivity.",
      "Implemented a memory database to enhance app performance for large datasets.",
      "Developed a query builder similar to Dexie.js for efficient memory database access.",
      "Implemented React-signals for better and optimized state management.",
      "Built Webpack configuration from the ground up.",
      "Provided mentorship and guidance to interns.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "React-Router",
      "React-signals",
      "Redux-toolkit",
      "Gmail API",
      "Dexie.js",
      "Webpack",
      "AWS",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "B-Tree",
      "Eslint",
      "Prettier",
      "Git",
      "Github",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "E-commerce Project",
    duration: "Mar 2020 - Aug 2021",
    description: [
      `Engineered an e-commerce web app from scratch for a shop using React and Firebase.`,
      "Implemented a Firebase real-time database system so that inventory and order updates are instantly reflected across all user sessions.",
      "Developed an algorithm to optimize promotional offers based on product purchase value and customer segmentation.",
      "Implemented pagination to retrieve data from Firestore for efficient loading and improved performance of product listings.",
      "Created an Admin panel for managing inventory, processing orders and analyzing sales data.",
    ],
    technologies: [
      "Javascript",
      "React",
      "React-Router",
      "Redux-toolkit",
      "Firebase",
      "Realtime Database",
      "Material UI",
      "SCSS",
    ],
  },
  {
    id: 3,
    title: "Freelance Software Developer",
    company: "Local store CRM",
    duration: "Jan 2020 - Feb 2020",
    description: [
      `Engineered a web-based Customer Registry application for a local store, streamlining customer management processes.`,
      "Designed an intuitive and user-friendly interface to enhance user experience and efficiency.",
      "Optimized data retrieval from Firestore by implementing pagination, significantly reducing load times.",
      "Developed sophisticated filtering and sorting algorithms to facilitate quick and easy access to customer information.",
    ],
    technologies: [
      "Javascript",
      "React",
      "Firebase",
      "Firestore",
      "Material UI",
      "CSS",
    ],
  },
];
