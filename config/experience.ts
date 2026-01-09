import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "addo-ai",
    position: "Senior Software Engineer (Frontend)",
    company: "Addo AI",
    location: "United States",
    startDate: new Date("2023-04-01"),
    endDate: "Present",
    description: [
      // "Contributing to the P&L dashboard used by traders and senior stakeholders.",
      // "Leading the migration of the UI from Kendo to UBS's internal design system.",
      // "Building a daily FX rate fetcher by integrating Databricks jobs with backend services.",
    ],
    achievements: [
      // "Delivered production code within 1 month of joining by contributing to the P&L dashboard used by traders and senior stakeholders.",
      // "Led the migration of the UI from Kendo to UBS's internal design system, improving frontend consistency and performance.",
      // "Built a daily FX rate fetcher by integrating Databricks jobs (Python, Spark SQL) with backend services (Java), automating exchange rate updates.",
      // "Won UBS's internal AI Venture Challenge by developing data transformation pipelines and anomaly detection models on trading datasets.",
      // "Collaborated closely with product owners and designers for user-centric features, improving usability and trader workflows.",
    ],
    skills: ["React", "Next.js", "Typescript", "Tailwind", "Bootstrap", "Ant Design", "Material UI", "Python", "Django"],
    companyUrl: "https://addo.ai/",
    logo: "/experience/addo-logo.png",
  },
  {
    id: "virtual-force",
    position: "Software Engineer",
    company: "Virtual Force",
    location: "Lahore, Pakistan",
    startDate: new Date("2021-10-01"),
    endDate: new Date("2023-03-01"),
    description: [
      // "Built backend for AI-driven chatbots using LLMs (GPT-4, Llama-2).",
      // "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations.",
      // "Deployed ML models on AWS SageMaker instead of Replicate.",
    ],
    achievements: [
      // "Built backend for AI-driven chatbots using LLMs (GPT-4, Llama-2), improving function call accuracy by 40%.",
      // "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
      // "Deployed ML models on AWS SageMaker instead of Replicate, cutting load times by 30%.",
      // "Created a Next.js dashboard for user analytics.",
    ],
    skills: ["Next.js", "React", "Typescript", "Node.js", "MongoDB"],
    companyUrl: "https://virtualforce.io/",
    logo: "/experience/vf-logo.png",
  },
  {
    id: "crunch-craft",
    position: "Frontend Developer",
    company: "Crunch Craft",
    location: "Lahore, Pakistan",
    startDate: new Date("2019-09-01"),
    endDate: new Date("2021-06-01"),
    description: [
      // "Developed websites using React, Angular, and GraphQL.",
      // "Set up AWS servers and CI/CD pipelines.",
      // "Built a multi-page PDF reader for large files (>300MB).",
    ],
    achievements: [
      // "Developed websites using React, Angular, and GraphQL; reduced API load time by 30%.",
      // "Set up AWS servers and CI/CD pipelines, scaling traffic to 3,000+ users/day.",
      // "Built a multi-page PDF reader for large files (>300MB) to boost user engagement.",
    ],
    skills: [
      "React",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    // companyUrl: "https://builtdesign.in",
    logo: "/experience/crunch-logo.png",
  },
];
