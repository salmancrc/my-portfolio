import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "J&J-bionic-assist",
    companyName: "Bionic (Johnson & Johnson)",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed a modern web application for Johnson & Johnson's Bionic CSR Users with AI features.",
    websiteLink: "https://youtu.be/KgWkxJV2hpI",
    techStack: ["Next.js", "React", "Typescript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/J&J-bionic/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Modern and responsive landing page showcasing company services and portfolio",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "eastlight-homes",
    companyName: "Eastlight DMS",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed a modern web application for Eastlight Community Homes for managing the complex documents.",
    websiteLink: "https://youtu.be/Nvly4yCrGPY",
    techStack: ["React", "Tailwind", "Typescript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/eastlight/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "mtm-assistant",
    companyName: "MTM Chatbot Assistant",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed a modern web chatbot application for MTM to assist users for ride booking using AI.",
    websiteLink: "https://youtube.com/shorts/2hjMYVt7b-I?feature=share",
    techStack: ["React", "Typescript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/mtm-assistant/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "cases-and-bakes",
    companyName: "Cakes and Bakes",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      " Developed and optimized a high-performing website for Cakes and Bakes, catering to over 10000 users.",
    websiteLink: "https://cakesandbakes.com/",
    techStack: ["Next.js", "React", "Typescript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/cakes&bakes/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "prc-saltillo",
    companyName: "PRC Saltillo Chatbot",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed a modern web chatbot application for PRC Saltillo to assist users with their queries using AI.",
    // websiteLink: "https://ai4s-appservice-sandbox-useast-01.azurewebsites.net/",
    websiteLink: "",
    techStack: ["React", "Tailwind", "Typescript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/prc-saltillo/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "massive-data",
    companyName: "Massive Data Website",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed a modern dashboards application for users to intract with advanced data visualizations",
    websiteLink: "https://youtu.be/w7Taxj5nyjc",
    techStack: ["React", "Typescript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/massive-data/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
  {
    id: "kips-colleges",
    companyName: "KIPS Colleges Website",
    type: "Professional",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Developed a modern web chatbot application for MTM to assist users for ride booking using AI.",
    websiteLink: "https://kipscolleges.com/",
    techStack: ["React", "Typescript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/kips/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [],
      bullets: [],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
