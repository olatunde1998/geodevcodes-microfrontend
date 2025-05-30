import { Home, User, Layers3, GlobeLock } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiPwa,
  SiNodedotjs,
  SiOpensourceinitiative,
} from "react-icons/si";

// SideBar Route Links
export const sidebarRouteLinks = [
  {
    name: "Home",
    href: "/",
    key: "home",
    icon: Home,
    current: false,
  },
  {
    name: "Projects",
    href: "/projects",
    key: "projects",
    icon: GlobeLock,
    current: false,
  },
  {
    name: "About",
    href: "/about",
    key: "about",
    icon: User,
    current: false,
  },
  {
    name: "Stack",
    href: "/stack",
    key: "stack",
    icon: Layers3,
    current: false,
  },
];

// Project Data  Links
export const projectLinks = [
  {
    id: "1",
    imageUrl: "/project-7.png",
    projectTitle: "AI Powered Survey Engine",
    subTitle:
      "🚀  Outstanding AI Powered Survey Engine Application, In this app you can create and customize your Surveys or build your survey with AI automation and send to your Customer/Client with Survey Engine app? Build with popular tools like NextJs, React-Redux, NodeJs for managing our database, Next-Auth for authentication, React-TanStack Query for efficient data Fetching, and spicing things up with Tailwind.css for some awesome styling.",
    stack: [
      "AI Integration",
      "TypeScript",
      "NextJS",
      "React-Redux",
      "AWS Amplify",
      "Tailwind",
      "Shadcn/UI",
      "NestJs Backend",
      "Prisma",
    ],
    repositoryUrl: "https://github.com/olatunde1998/survey-engine",
    projectUrl: "https://app.thesurveyengine.com/en",
    category: ["TypeScript", "NextJs", "React-Redux", "AI", "Web App", "PWA"],
    projectFeatures: [
      "🌐 Next.js App Router",
      "🔐 NextAuth Authentication",
      "💨 Payment Service with Flutterwave",
      "🎨 Styling with tailwindcss",
      "✅ React TanStack Query",
      "💵 React-TanStack Table",
      "🐐 React-Redux",
      "✅ Github Pull Request Template",
      "💵 Github Workflow",
      "😶‍🌫️ Deployment to AWS Amplify & Vercel",
      "💽 OutStanding ReadMe",
    ],
  },
  {
    id: "2",
    imageUrl: "/geomatic-connect.png",
    projectTitle: "Geomatics Connect | Job Board Application",
    subTitle:
      "🚀 Create a modern Saas Application [Geomatics Connect] with Next.js.14, Tailwind, MongoDB Database and NextAuth! Seamless connection between Geomatics Students and Companies.",
    stack: [
      "TypeScript",
      "NextJS",
      "NextAuth",
      "React-Query",
      "Vercel",
      "Tailwind",
      "ExpressJs",
      "MongoDB",
      "PayStack",
      "Unit Testing",
    ],
    repositoryUrl: "https://github.com/olatunde1998/geomatic-connect",
    projectUrl: "https://www.geomaticconnect.work/",
    category: ["TypeScript", "NextJs", "AI", "Web App", "PWA"],
    projectFeatures: [
      "🌐 Next.js App Router",
      "🔐 NextAuth Authentication",
      "📧 Email/Password Auth",
      "🔑 OAuth (Google and GitHub)",
      "💽 MongoDB Database",
      "💨 Payment Service with PayStack",
      "🎨 Styling with tailwindcss",
      "✅ Github Pull Request Template",
      "💵 Github Workflow",
      "🐐 Unit Testing",
      "😶‍🌫️ Deployment to Vercel",
      "💽 OutStanding ReadMe",
    ],
  },
  {
    id: "3",
    imageUrl: "/portfolio.png",
    projectTitle: "My Portfolio Website",
    subTitle: "🚀   AI Powered Portfolio with Blogify",
    stack: [
      "TypeScript",
      "NextJS",
      "NextAuth",
      "Vercel",
      "Tailwind",
      "Shadcn/UI",
      "MongoDB",
    ],
    repositoryUrl: "https://github.com/olatunde1998/geodevcodes-microfrontend",
    projectUrl: "https://geodevcodes.vercel.app/",
    category: ["TypeScript", "NextJs", "React-Redux", "AI", "Web App", "PWA"],
    projectFeatures: [
      "🌐 Next.js App Router",
      "🔐 Kinde Authentication",
      "📧 Passwordless Auth",
      "🔑 OAuth (Google and GitHub)",
      "🎨 Styling with tailwindcss and shadcn UI",
      "✅ Github Pull Request Template",
      "💵 Github Workflow",
      "💵 Store Projects in Sanity",
      "🐐 Bento Layout",
      "💽 OutStanding ReadMe",
      "😶‍🌫️ Deployment to Vercel",
    ],
  },
  {
    id: "4",
    imageUrl: "/must.png",
    projectTitle: "Must Culture Share: Internationalization with i18n",
    subTitle:
      "🚀 Developed the Must Culture landing page with full internationalization, supporting five languages: English, Korean, Chinese, German, and Arabic",
    stack: [
      "TypeScript",
      "NextJS",
      "Kinde",
      "Sanity",
      "Vercel",
      "Tailwind",
      "Shadcn/UI",
      "Prisma",
    ],
    repositoryUrl: "https://github.com/olatunde1998/must",
    projectUrl: "https://must-geodevcodes.vercel.app/ko",
    category: ["TypeScript", "NextJs", "Web Application"],
    projectFeatures: [
      "🌐 Next.js App Router",
      "🎨 Styling with tailwindcss and shadcn UI",
      "✅ Github Pull Request Template",
      "💵 Github Workflow",
      "💵 Store Projects in Sanity",
      "🐐 Bento Layout",
      "💽 OutStanding ReadMe",
      "😶‍🌫️ Deployment to Vercel",
    ],
  },
  {
    id: "5",
    imageUrl: "/scoutbeta.png",
    projectTitle: "ScoutBeta: Marketplace for Space and Location Scouting",
    subTitle:
      "🚀 No.1 Online marketplace for space and location scouting for creators just in 3 clicks.",
    stack: [
      "TypeScript",
      "NextJS",
      "NextAuth",
      "Vercel",
      "Tailwind",
      "Shadcn/UI",
      "Zustand",
    ],
    repositoryUrl: "https://github.com/scoutbeta-solutions",
    projectUrl: "https://scoutbeta.vercel.app/",
    category: ["TypeScript", "NextJs", "Zustand", "Web App", "PWA"],
    projectFeatures: [
      "🌐 Next.js App Router",
      "🔐 NextAuth Authentication",
      "🔑 OAuth (Google and GitHub)",
      "💽 Supabase Database",
      "🎨 Styling with tailwindcss and shadcn UI",
      "✅ Github Pull Request Template",
      "💵 Github Workflow",
      "🐐 Bento Layout",
      "💽 OutStanding ReadMe",
      "😶‍🌫️ Deployment to AWS Amplify",
    ],
  },
  {
    id: "6",
    imageUrl: "/lms-2.png",
    projectTitle: "Learning Management System with Next.js.14, NextAuth",
    subTitle:
      "🚀 Create a modern Learning Management System For software developers  with Next.js.14, Tailwind,  Learn step-by-step and elevate your development skills.",
    stack: [
      "TypeScript",
      "NextJS",
      "NextAuth",
      "React-Query",
      "Vercel",
      "Tailwind",
      "Shadcn/UI",
      "Firebase",
      "PayStack",
      "Unit Testing",
    ],
    repositoryUrl: "https://github.com/olatunde1998/online-learning-app",
    projectUrl: "https://online-learning-application.vercel.app/",
    category: ["TypeScript", "NextJs", "Web App", "PWA", "ReactJs"],
    projectFeatures: [
      "🌐 Next.js App Router",
      "🔐 Firebase Authentication",
      "📧 Passwordless Auth",
      "🔑 OAuth (Google and GitHub)",
      "💨 Payment Service with PayStack",
      "🎨 Styling with tailwindcss and shadcn UI",
      "✅ Github Pull Request Template",
      "💵 Github Workflow",
      "🐐 Unit Testing",
      "😶‍🌫️ Deployment to Vercel",
      "💽 OutStanding ReadMe",
    ],
  },
  {
    id: "7",
    imageUrl: "/project-3.png",
    projectTitle:
      "NextJS 14 | Single Page application in getLinked-tech Hackathon 1.0",
    subTitle:
      "Welcome to the  NextJs GetLinked-Tech Hackathon. In this Application, we'll dive deep into the latest version of Remix.run, a cutting-edge framework for building full stack JavaScript applications.",
    stack: ["TypeScript", "NextJS", "Vercel", "Tailwind", "NodeJs"],
    repositoryUrl: "https://github.com/olatunde1998/getlinked-tech",
    projectUrl: "https://getlinked-tech.vercel.app/",
    category: ["Typescript", "NextJs", "Web Application", "ReactJs"],
    projectFeatures: [
      "🌐 Next.js App Router",
      "💽 NodeJs Database",
      "🎨 Styling with tailwindcss",
      "✅ Github Pull Request Template",
      "💵 Github Workflow",
      "🐐 React Hook Form",
      "😶‍🌫️ Deployment to Vercel",
      "💽 OutStanding ReadMe",
    ],
  },
  {
    id: "8",
    imageUrl: "/project-4.png",
    projectTitle: "Modern Care-Finder App using Next.js 14, Firebase-Auth",
    subTitle:
      "🚀 Today we are going to create a Care-Finder App using Next.js 14, Firebase-Auth, Prisma, Firebase, and Tailwind! Learn step-by-step and elevate your development skills.",
    stack: ["TypeScript", "NextJS", "Vercel", "Tailwind", "Firebase", "Prisma"],
    repositoryUrl: "https://github.com/olatunde1998/carefinder-app",
    projectUrl: "https://carefinder-app.vercel.app/",
    category: ["TypeScript", "NextJs", "Web App", "ReactJs"],
    projectFeatures: [
      "🌐 Next.js App Router",
      "📧 Passwordless Auth",
      "🔑 OAuth (Google and GitHub)",
      "💽 Firebase Database",
      "💨 React TanStack Query",
      "🎨 Styling with tailwindcss",
      "✅ React TanStack Table",
      "💵 Store Projects in Firebase",
      "✅ Github Pull Request Template",
      "💵 Github Workflow",
      "😶‍🌫️ Deployment to Vercel & AWS Amplify",
      "💽 OutStanding ReadMe",
    ],
  },
  {
    id: "9",
    imageUrl: "/project-6.jpeg",
    projectTitle:
      "E-Commerce Website with Stripe, and Sanity.io | Full Stack Project",
    subTitle:
      "🚀 Full-Stack Ecommerce Website complete with secure Stripe payment integration, efficient content management through Sanity.io and beautiful styling using Tailwindcss and Shadcn UI for accessible components.",
    stack: [
      "TypeScript",
      "NextJS",
      "Kinde",
      "Sanity",
      "Vercel",
      "Tailwind",
      "Shadcn/UI",
      "Supabase",
    ],
    repositoryUrl: "https://github.com/olatunde1998/geodevcodes-ecommerce",
    projectUrl: "https://geodevcodes-ecommerce.vercel.app/",
    category: ["TypeScript", "NextJs", "Web App", "ReactJs"],
    projectFeatures: [
      "🌐 Next.js App Router",
      "🔐 Kinde Authentication",
      "📧 Passwordless Auth",
      "🔑 OAuth (Google and GitHub)",
      "💽 Supabase Database",
      "🎨 Styling with tailwindcss and shadcn UI",
      "✅ Github Pull Request Template",
      "💵 Github Workflow",
      "💵 Store Projects in Sanity",
      "💽 OutStanding ReadMe",
      "😶‍🌫️ Deployment to Vercel",
    ],
  },
];

// Project Category Options

export const categoryOptions = [
  {
    label: "AI",
    value: "AI",
    icon: SiOpensourceinitiative,
  },
  {
    label: "NextJs",
    value: "NextJs",
    icon: SiNextdotjs,
  },
  {
    label: "PWA",
    value: "PWA",
    icon: SiPwa,
  },
  {
    label: "TypeScript",
    value: "TypeScript",
    icon: SiTypescript,
  },
  {
    label: "ReactJs",
    value: "ReactJs",
    icon: SiReact,
  },
];
