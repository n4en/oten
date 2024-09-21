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
  SiCypress,
  SiMocha,
  SiSelenium,
  SiCircleci,
  SiTravisci,
  SiJenkins,
  SiSonarqube,
  SiPostman,
} from "react-icons/si";

// Define the tools once for easy reuse
const icons = {
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  vscode: SiVisualstudiocode,
  jest: SiJest,
  cypress: SiCypress,
  mocha: SiMocha,
  selenium: SiSelenium,
  circleci: SiCircleci,
  travisci: SiTravisci,
  jenkins: SiJenkins,
  sonarqube: SiSonarqube,
  postman: SiPostman,
};

// Tool Data
const tools = {
  "Placeholder1": [
    { name: "React", icon: icons.react, url: "https://reactjs.org/" },
    { name: "Next.js", icon: icons.nextjs, url: "https://nextjs.org/" },
    { name: "TailwindCSS", icon: icons.tailwind, url: "https://tailwindcss.com/" },
    { name: "TailwindCSS", icon: icons.tailwind, url: "https://tailwindcss.com/" },
    { name: "TailwindCSS", icon: icons.tailwind, url: "https://tailwindcss.com/" },
  ],
  Placeholder2: [
    { name: "React", icon: icons.react, url: "https://reactjs.org/" },
    { name: "Next.js", icon: icons.nextjs, url: "https://nextjs.org/" },
    { name: "TailwindCSS", icon: icons.tailwind, url: "https://tailwindcss.com/" },
    { name: "TypeScript", icon: icons.typescript, url: "https://www.typescriptlang.org/" },
    { name: "Docker", icon: icons.docker, url: "https://www.docker.com/" },
    { name: "Git", icon: icons.git, url: "https://git-scm.com/" },
    { name: "GitHub", icon: icons.github, url: "https://github.com/" },
    { name: "VS Code", icon: icons.vscode, url: "https://code.visualstudio.com/" },
    { name: "Eclipse", icon: icons.github, url: "https://www.eclipse.org/" },
  ],
  Placeholder3: [
    { name: "Jest", icon: icons.jest, url: "https://jestjs.io/" },
    { name: "Cypress", icon: icons.cypress, url: "https://www.cypress.io/" },
    { name: "Mocha", icon: icons.mocha, url: "https://mochajs.org/" },
    { name: "Selenium", icon: icons.selenium, url: "https://www.selenium.dev/" },
    { name: "CircleCI", icon: icons.circleci, url: "https://circleci.com/" },
    { name: "TravisCI", icon: icons.travisci, url: "https://travis-ci.org/" },
    { name: "Jenkins", icon: icons.jenkins, url: "https://www.jenkins.io/" },
    { name: "SonarQube", icon: icons.sonarqube, url: "https://www.sonarqube.org/" },
    { name: "Postman", icon: icons.postman, url: "https://www.postman.com/" },
    { name: "TestNG", icon: icons.github, url: "https://testng.org/doc/index.html" },
  ],
  Placeholder4: [
    { name: "Jest", icon: icons.jest, url: "https://jestjs.io/" },
    { name: "Cypress", icon: icons.cypress, url: "https://www.cypress.io/" },
    { name: "Mocha", icon: icons.mocha, url: "https://mochajs.org/" },
    { name: "Selenium", icon: icons.selenium, url: "https://www.selenium.dev/" },
    { name: "CircleCI", icon: icons.circleci, url: "https://circleci.com/" },
    { name: "TravisCI", icon: icons.travisci, url: "https://travis-ci.org/" },
    { name: "Jenkins", icon: icons.jenkins, url: "https://www.jenkins.io/" },
  ],
};

export default tools;
