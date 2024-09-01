import { projects } from "@/data";
import { Badge } from "../ui/badge";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-8 border-b text-gray-700 print:text print:mb-2 print:text-xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 print:grid-cols-1">
        {projects.map((project) => (
          <>
            <div
              key={project.id}
              className="rounded-lg border border-gray-200 p-4 print:border-none print:p-0"
            >
              <div className="flex items-center gap-3 mb-4 print:mb-0">
                <Image
                  className="print:hidden"
                  src={project.logo}
                  alt={project.title}
                  width={24}
                  height={24}
                />
                <h3 className="font-semibold text-gray-700 print:text-gray-600">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500 leading-6 print:hidden">
                {project.description}
              </p>
              <ul className="ml-8 list-disc [&>li]:mt-2 text-gray-600 hidden print:block">
                {project.printDescription.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-5 print:hidden">
                {project.technologies.map((tech) => (
                  <Badge
                    variant={"secondary"}
                    key={tech}
                    className="bg-gray-100 text-gray-500"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
