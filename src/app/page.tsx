import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiJest,
  SiPostman,
  SiCypress,
  SiMocha,
  SiSelenium,
  SiCircleci,
  SiTravisci,
  SiJenkins,
  SiSonarqube,
  SiAzurepipelines,
} from "react-icons/si";

// Tool types
interface Tool {
  name: string;
  icon: React.ElementType;
}

// Icons for Development Tools
const developmentTools: Tool[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "VS Code", icon: SiVisualstudiocode },
  { name: "Postman", icon: SiPostman },
  { name: "Cypress", icon: SiCypress },
];

// Icons for Testing Tools
const testingTools: Tool[] = [
  { name: "Jest", icon: SiJest },
  { name: "Postman", icon: SiPostman },
  { name: "Cypress", icon: SiCypress },
  { name: "Mocha", icon: SiMocha },
  { name: "Selenium", icon: SiSelenium },
  { name: "CircleCI", icon: SiCircleci },
  { name: "TravisCI", icon: SiTravisci },
  { name: "Jenkins", icon: SiJenkins },
  { name: "SonarQube", icon: SiSonarqube },
  { name: "Azure Pipelines", icon: SiAzurepipelines },
];

export default function Pager() {
  const ToolCard = ({
    name,
    Icon,
    colorClass,
  }: {
    name: string;
    Icon: React.ElementType;
    colorClass: string;
  }) => (
    <div className="flex flex-col items-center p-2">
      <Icon className={`w-8 h-8 ${colorClass} dark:text-white`} />
      <span className="mt-1 text-center text-sm dark:text-white">{name}</span>
    </div>
  );

  return (
    <div>
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-semibold dark:text-white">oTen</span>
        </Link>
      </header>

      {/* Body Section */}
      <main className="container mx-auto p-4">
        {/* Tools Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-8">
          {/* Development Tools */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 dark:text-white">
              Development Tools
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {developmentTools.map((tool) => (
                <ToolCard
                  key={tool.name}
                  name={tool.name}
                  Icon={tool.icon}
                  colorClass="text-black-500"
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 dark:text-white">
              Development Tools
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {developmentTools.map((tool) => (
                <ToolCard
                  key={tool.name}
                  name={tool.name}
                  Icon={tool.icon}
                  colorClass="text-black-500"
                />
              ))}
            </div>
          </div>

          {/* Testing Tools */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 dark:text-white">
              Testing Tools
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {testingTools.map((tool) => (
                <ToolCard
                  key={tool.name}
                  name={tool.name}
                  Icon={tool.icon}
                  colorClass="text-black-500"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
