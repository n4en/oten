import Link from "next/link";
import tools from "./toolsData";
import Image from "next/image";

// Tool types
interface Tool {
  name: string;
  icon: React.ElementType;
  url: string;
}

const ToolCard = ({ name, icon: Icon, url }: Tool) => (
  <Link
    href={url}
    target="_blank"
    className="flex flex-col items-center justify-center p-2 h-full hover:opacity-75"
  >
    <Icon className="w-8 h-8 text-black-500 dark:text-white" />
    <span className="mt-1 text-center text-sm dark:text-white">{name}</span>
  </Link>
);

const ToolSection = ({ title, tools }: { title: string; tools: Tool[] }) => (
  <div className="flex flex-col items-center">
    <h2 className="text-2xl font-semibold mb-3 dark:text-white">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
      {tools.map((tool) => (
        <ToolCard
          key={tool.name}
          name={tool.name}
          icon={tool.icon}
          url={tool.url}
        />
      ))}
    </div>
  </div>
);

export default function Pager() {
  return (
    <div>
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="oTen Logo" className="w-10 h-10 mr-2 filter dark:invert" width={10} height={10} />
          <span className="text-3xl font-extrabold text-black-600 dark:text-black-400 transition-transform transform hover:scale-105">
            oTen
          </span>
        </Link>
      </header>

      {/* Body Section */}
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-8">
          <ToolSection title="Development" tools={tools.development} />
          <ToolSection title="Testing" tools={tools.testing} />
          <ToolSection title="Placeholder2" tools={tools.development} />
          <ToolSection title="Placeholder3" tools={tools.testing} />
        </div>
      </main>
    </div>
  );
}
