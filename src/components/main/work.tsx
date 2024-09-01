import { work } from "@/data";
import { Badge } from "../ui/badge";
import BuildingIcon from "@/icons/building.svg";

export default function Work() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 border-b text-gray-700 print:mb-2 print:text-xl">
        Employment
      </h2>

      {work.map((item) => (
        <div key={item.id} className="mb-8 print:mb-4">
          <h3 className="font-semibold mb-2 text-gray-700 print:mb-0 print:text-gray-600">
            {item.title}
          </h3>
          <div className="flex items-center text-sm gap-2 mb-2 text-gray-500 print:text-gray-400">
            <BuildingIcon className="print:hidden" />
            <p>{item.company}</p>
            <span className="text-gray-400 print:text-gray-200">|</span>
            <span>{item.duration}</span>
          </div>

          <ul className="my-4 ml-6 list-disc [&>li]:mt-2 text-gray-600 print:my-2 print:ml-8">
            {item.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 print:hidden">
            {item.technologies.map((tech) => (
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
      ))}
    </>
  );
}
