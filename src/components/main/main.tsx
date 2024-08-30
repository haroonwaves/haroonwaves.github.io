import BuildingIcon from "@/icons/building.svg";
import { Badge } from "../ui/badge";

const projects = [
  {
    id: 1,
    title: "IndexedDB Manager",
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

const work = [
  {
    id: 1,
    title: "Senior Software Developer",
    company: "Supersorted",
    duration: "Aug 2021 - Present",
    description: [
      `Involved in the app&apos;s development from its inception, utilizing popular technologies (React, Webpack, TypeScript, ESLint)`,
      "Implemented a memory database to enhance app performance for large datasets.",
      "Designed and built an offline-first architecture, enabling most app features to function seamlessly without internet connectivity.",
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

export default function Main() {
  return (
    <div className="p-4 mt-8 md:p-8 xl:p-12 xl:mt-0">
      <section id="summary" className="mb-16">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Full Stack Developer with 4+ Years of Expertise
        </h1>
        <p className="text-gray-600 leading-7">
          Full Stack Web Developer with 4+ years of experience in building
          robust web applications. Specializes in React and TypeScript, with a
          strong focus on creating efficient, offline-capable applications and
          optimizing performance for large datasets.
        </p>
      </section>

      <section id="experience" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b text-gray-700">
          Employment
        </h2>

        {work.map((item) => (
          <div key={item.id} className="mb-8">
            <h3 className="font-semibold mb-2 text-gray-700">{item.title}</h3>
            <div className="flex items-center text-sm gap-2 mb-2 text-gray-500">
              <BuildingIcon />
              <p>{item.company}</p>
              <span className="text-gray-400">|</span>
              <span>{item.duration}</span>
            </div>

            <ul className="my-4 ml-6 list-disc [&>li]:mt-2 text-gray-600">
              {item.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge
                  variant={"secondary"}
                  key={tech}
                  className="bg-gray-100 text-gray-700"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section id="Projects" className="mb-12">
        <h2 className="text-2xl font-bold mb-8 border-b text-gray-700">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-gray-200 p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <BuildingIcon />
                <h3 className="font-semibold text-gray-700">{project.title}</h3>
              </div>
              <p className="text-sm text-gray-500">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <Badge
                    variant={"secondary"}
                    key={tech}
                    className="bg-gray-100 text-gray-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
