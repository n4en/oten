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
  
  // Tool Data
  const tools = {
    development: [
      { name: "React", icon: SiReact, url: "https://reactjs.org/" },
      { name: "Next.js", icon: SiNextdotjs, url: "https://nextjs.org/" },
      { name: "TailwindCSS", icon: SiTailwindcss, url: "https://tailwindcss.com/" },
      { name: "TypeScript", icon: SiTypescript, url: "https://www.typescriptlang.org/" },
      { name: "Docker", icon: SiDocker, url: "https://www.docker.com/" },
      { name: "Git", icon: SiGit, url: "https://git-scm.com/" },
      { name: "GitHub", icon: SiGithub, url: "https://github.com/" },
      { name: "VS Code", icon: SiVisualstudiocode, url: "https://code.visualstudio.com/" },
      { name: "Eclipse", icon: SiGithub, url: "https://www.eclipse.org/" },
      { name: "Apache Maven", icon: SiGithub, url: "https://maven.apache.org/" },
    ],
    testing: [
      { name: "Jest", icon: SiJest, url: "https://jestjs.io/" },
      { name: "Cypress", icon: SiCypress, url: "https://www.cypress.io/" },
      { name: "Mocha", icon: SiMocha, url: "https://mochajs.org/" },
      { name: "Selenium", icon: SiSelenium, url: "https://www.selenium.dev/" },
      { name: "CircleCI", icon: SiCircleci, url: "https://circleci.com/" },
      { name: "TravisCI", icon: SiTravisci, url: "https://travis-ci.org/" },
      { name: "Jenkins", icon: SiJenkins, url: "https://www.jenkins.io/" },
      { name: "SonarQube", icon: SiSonarqube, url: "https://www.sonarqube.org/" },
      { name: "Postman", icon: SiPostman, url: "https://www.postman.com/" },
      { name: "TestNG", icon: SiGithub, url: "https://testng.org/doc/index.html" },
    ],
  };
  
  export default tools;
  