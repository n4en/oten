import Link from "next/link";
import toolsData from "./toolsData";
import Image from "next/image";

// ToolCard Component
const ToolCard = ({
  name,
  Icon,
  url,
}: {
  name: string;
  Icon: React.ElementType;
  url: string;
}) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit ${name}`}
    className="flex flex-col items-center justify-center p-4 h-full hover:opacity-75 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow"
  >
    <Icon className="w-8 h-8 text-black-500 dark:text-white" />
    <span className="mt-2 text-center text-sm dark:text-white">{name}</span>
  </Link>
);

// ToolSection Component
const ToolSection = ({
  title,
  tools,
}: {
  title: string;
  tools: { name: string; icon: React.ElementType; url: string }[];
}) => (
  <div className="flex flex-col items-center">
    <h2 className="text-2xl font-semibold mb-4 dark:text-white">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 w-full">
      {tools.map(({ name, icon, url }) => (
        <ToolCard key={name} name={name} Icon={icon} url={url} />
      ))}
    </div>
  </div>
);

const ProjectInfo = () => (
  <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10 px-6 sm:px-12 lg:px-20 shadow-lg mb-12 w-full dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 dark:text-gray-300">
    <div className="absolute inset-0 opacity-10 pointer-events-none bg-code-pattern bg-cover"></div>
    <div className="relative z-10 max-w-screen-xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
        Welcome to <span className="text-yellow-300">oTen</span> - Open Source
        Tools for Software Life Cycle
      </h1>
      <p className="text-lg md:text-xl font-light leading-relaxed mb-6 max-w-4xl mx-auto">
      <span className="font-semibold">oTen</span>(OpenTen) is your ultimate guide to the top 10 open-source tools
        for each stage of the software development lifecycle (SDLC). Whether you
        are coding, testing, deploying, or maintaining software, oTen curates
        the best free tools to help developers and teams streamline their
        processes and collaborate more effectively.
      </p>
    </div>
  </section>
);

// Main Pager Component
export default function Pager() {
  return (
    <div className="w-full">
      <header className="relative flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 dark:text-gray-300">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-code-pattern bg-cover"></div>
        <div className="relative z-10 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="oTen Logo"
              className="w-10 h-10 mr-2 filter dark:invert"
              width={40}
              height={40}
            />
            <span className="text-3xl font-extrabold text-white transition-transform transform hover:scale-105 dark:text-gray-300">
              oTen
            </span>
          </Link>
        </div>
      </header>
      <ProjectInfo />

      <main className="w-full max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {Object.entries(toolsData).map(([category, tools]) => (
            <ToolSection key={category} title={category} tools={tools} />
          ))}
        </div>
      </main>
    </div>
  );
}
