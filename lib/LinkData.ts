import { Home, User, Layers3, GlobeLock, Github, Linkedin, Mail, Settings, ReceiptIndianRupee } from "lucide-react";


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
    {
      name: "Settings",
      href: "/profile",
      key: "my-profile",
      icon: Settings,
      current: false,
    },
  ];


  // SideBar Contact  Route Links 
export const sidebarContactLinks = [
  {
    name: "Email",
    href: "mailto:olatunde336@gmail.com",
    key: "email",
    icon: Mail,
    current: false,
  },
  {
    name: "Resume",
    href: "https://docs.google.com/document/d/1HG7RN7PFtuzhx1CuvgpJh-4LZ4D1Fs0clnvXVJV3074/edit?usp=sharing",
    key: "contact",
    icon: ReceiptIndianRupee,
    current: false,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/olatunderasheed",
    key: "linkedin",
    icon: Linkedin,
    current: false,
  },
  {
    name: "Github",
    href: "https://www.github.com/olatunde1998",
    key: "youtube",
    icon: Github,
    current: false,
  },
];


// Project Data  Links
export const projectLinks = [
  { 
    id: "1",
    imageUrl: "/lms-2.png",
    projectTitle: "Create a Learning Management Application with Next.js.14, NextAuth, Firebase",
    subTitle: "🚀 Create a modern Portfolio Website with Next.js.14, Tailwind, Firebase Database and Firebase-Auth! Learn step-by-step and elevate your development skills.",
    stack: ["TypeScript", "NextJS", "NextAuth", "React-Query", "Vercel", "Tailwind", "Shadcn/UI", "Firebase", "PayStack", "Unit Testing"],
    repositoryUrl:"https://github.com/olatunde1998/online-learning-app",
    projectUrl:"https://online-learning-application.vercel.app/",
    projectFeatures: ["🌐 Next.js App Router", "🔐 Firebase Authentication", "📧 Passwordless Auth", "🔑 OAuth (Google and GitHub)", "💽 Firebase Database", "💨 Payment Service with PayStack", "🎨 Styling with tailwindcss and shadcn UI", "✅ Github Pull Request Template", "💵 Github Workflow", "🐐 Unit Testing", "😶‍🌫️ Deployment to Vercel", "💽 OutStanding ReadMe",] 
  },
  { 
    id: "2",
    imageUrl: "/geomatics-connect.png",
    projectTitle: "Create a Saas Application [Geomatics Connect] with Next.js.14, NextAuth, MongoDB, ExpressJs",
    subTitle: "🚀 Create a modern Saas Application [Geomatics Connect] with Next.js.14, Tailwind, MongoDB Database and NextAuth! Seamless connection between Geomatics Students and Companies.",
    stack: ["TypeScript", "NextJS", "NextAuth", "React-Query", "Vercel", "Tailwind", "ExpressJs", "MongoDB", "PayStack", "Unit Testing"],
    repositoryUrl:"https://github.com/olatunde1998/geomatic-connect",
    projectUrl:"https://geomatic-connect.vercel.app/",
    projectFeatures: ["🌐 Next.js App Router", "🔐 NextAuth Authentication", "📧 Email/Password Auth", "🔑 OAuth (Google and GitHub)", "💽 MongoDB Database", "💨 Payment Service with PayStack", "🎨 Styling with tailwindcss", "✅ Github Pull Request Template", "💵 Github Workflow", "🐐 Unit Testing", "😶‍🌫️ Deployment to Vercel", "💽 OutStanding ReadMe",] 
  },
  {
    id: "3",
    imageUrl: "/project-6.png",
    projectTitle: "Next.js 14 E-Commerce Website with Stripe, and Sanity.io | Full Stack Project",
    subTitle: "🚀 Build a modern and performant full stack Next.js 14 Ecommerce Website complete with secure Stripe payment integration, efficient content management through Sanity.io and beautiful styling using Tailwindcss and Shadcn UI for accessible components.",
    stack: ["TypeScript", "NextJS", "Kinde", "Sanity", "Vercel", "Tailwind", "Shadcn/UI", "Supabase"],
    repositoryUrl:"https://github.com/olatunde1998/geodevcodes-ecommerce",
    projectUrl:"https://geodevcodes-ecommerce.vercel.app/",
    projectFeatures: ["🌐 Next.js App Router", "🔐 Kinde Authentication", "📧 Passwordless Auth", "🔑 OAuth (Google and GitHub)", "💽 Supabase Database", "🎨 Styling with tailwindcss and shadcn UI", "✅ Github Pull Request Template", "💵 Github Workflow", "💵 Store Projects in Sanity", "💽 OutStanding ReadMe", "😶‍🌫️ Deployment to Vercel"] 
  },
  {
    id: "4",
    imageUrl: "/project-2.png",
    projectTitle: "Build a Next.js 14 Blog | React, Sanity.io, Tailwind.css, Shadcn/Ui",
    subTitle: "🚀 Build a stunning blog with Next.js 14! 🌐 Learn React, Sanity.io, Tailwind.css, and Shadcn/UI in this tutorial. 🛠️ Perfect for developers of all levels. Like, subscribe, and let's go! 💻",
    stack: ["TypeScript", "NextJS", "Kinde", "Sanity", "Vercel", "Tailwind", "Shadcn/UI", "Prisma"],
    repositoryUrl:"https://github.com/olatunde1998/geodevcodes-blog",
    projectUrl:"https://geodevcodes-blog.vercel.app/",
    projectFeatures: ["🌐 Next.js App Router", "🔐 Kinde Authentication", "📧 Passwordless Auth", "🔑 OAuth (Google and GitHub)", "🎨 Styling with tailwindcss and shadcn UI", "✅ Github Pull Request Template", "💵 Github Workflow", "💵 Store Projects in Sanity", "🐐 Bento Layout", "💽 OutStanding ReadMe", "😶‍🌫️ Deployment to Vercel"] 
  },
  {
    id: "5",
    imageUrl: "/project-3.png",
    projectTitle: "NextJS 14 | Single Page application in getLinked-tech Hackathon 1.0",
    subTitle: "Welcome to the  NextJs GetLinked-Tech Hackathon. In this Application, we'll dive deep into the latest version of Remix.run, a cutting-edge framework for building full stack JavaScript applications.",
    stack: ["TypeScript", "NextJS", "Vercel", "Tailwind", "NodeJs"],
    repositoryUrl:"https://github.com/olatunde1998/getlinked-tech",
    projectUrl:"https://getlinked-tech.vercel.app/",
    projectFeatures: ["🌐 Next.js App Router",  "💽 NodeJs Database",  "🎨 Styling with tailwindcss", "✅ Github Pull Request Template", "💵 Github Workflow", "🐐 React Hook Form", "😶‍🌫️ Deployment to Vercel", "💽 OutStanding ReadMe"] 
  }, 
  {
    id: "6",
    imageUrl: "/project-4.png",
    projectTitle: "Create a Modern Care-Finder App using Next.js 14, Firebase,",
    subTitle: "🚀 Today we are going to create a Care-Finder App using Next.js 14, Firebase-Auth, Prisma, Firebase, and Tailwind! Learn step-by-step and elevate your development skills.",
    stack: ["TypeScript", "NextJS", "Vercel", "Tailwind", "Firebase", "Prisma"],
    repositoryUrl:"https://github.com/olatunde1998/carefinder-app",
    projectUrl:"https://carefinder-app.vercel.app/",
    projectFeatures: ["🌐 Next.js App Router", "📧 Passwordless Auth", "🔑 OAuth (Google and GitHub)", "💽 Firebase Database", "💨 React TanStack Query", "🎨 Styling with tailwindcss", "✅ React TanStack Table", "💵 Store Projects in Firebase", "✅ Github Pull Request Template", "💵 Github Workflow",  "😶‍🌫️ Deployment to Vercel & AWS Amplify", "💽 OutStanding ReadMe"] 
  },
  {
    id: "7",
    imageUrl: "/project-5.png",
    projectTitle: "Build an Lis-Pendens Application with ReactJs + Vite, PayStack Service, NodeJs Backend: Full Stack Application",
    subTitle: "Learn how to build a cutting-edge Lis-Pendens App using ReactJs + Vite, React-TanStack Query, PayStack Payment Service and Tailwind.css in this Application. Discover the power of ReactJs + Vite  integrate seamless payment processing with PayStack, and enhance your app's visual appeal with Tailwind.css.",
    stack: ["TypeScript", "ReactJS + Vite", "Vercel", "Tailwind", "Shadcn/UI", "NodeJs Backend", "Framer Motion"],
    repositoryUrl:"https://github.com/edgeinnovativetech/lis-pendens",
    projectUrl:"https://lis-pendens.vercel.app/",
    projectFeatures: ["🌐 ReactJs + Vite App", "🔐 Authentication", "📧 Passwordless Auth", "💽 NodeJs Backend", "💨 Prisma Orm", "🎨 Styling with tailwindcss", "✅ React TanStack Query", "🐐 React Hook Form", "😶‍🌫️ Deployment to Vercel",  "📧 Framer Motion Animation", "💽 OutStanding ReadMe"] 
  },  
  {
    id: "8",
    imageUrl: "/project-7.png",
    projectTitle: "Next.js 14 Novant Health Survey Engine using NextJs, Next-Auth, NodeJs, React-Redux and Tailwind.css",
    subTitle: "🚀  Outstanding Survey Engine Application, In this app you can create and customize your Surveys and send to your Customer/Client with Survey Engine app using Next.js? Build with popular tools like NextJs, React-Redux, NodeJs for managing our database, Next-Auth for authentication, React-TanStack Query for efficient data Fetching, and spicing things up with Tailwind.css for some awesome styling.",
    stack: ["JavaScript", "NextJS", "React-Redux", "AWS Amplify", "Tailwind", "Shadcn/UI", "NodeJs Backend", "Prisma"],
    repositoryUrl:"https://github.com/olatunde1998/survey-engine",
    projectUrl:"https://devcentral.d1gey7pwcnhqp2.amplifyapp.com/",
    projectFeatures: ["🌐 Next.js App Router", "🔐 NextAuth Authentication", "📧 Passwordless Auth", "💨 Prisma Orm", "🎨 Styling with tailwindcss", "✅ React TanStack Query", "💵 React-TanStack Table", "🐐 React-Redux", "✅ Github Pull Request Template", "💵 Github Workflow", "😶‍🌫️ Deployment to AWS Amplify & Vercel", "💽 OutStanding ReadMe"] 
  },
  {
    id: "9",
    imageUrl: "/sass.webp",
    projectTitle: "Create a SaaS Application with Next.js.14, Stripe, Kinde, Prisma, Supabase and Tailwind",
    subTitle: "🚀 Build a SaaS Application using Next.js 14, Stripe, Kinde, Prisma, Supabase, and Tailwind! Learn step-by-step and elevate your development skills.",
    stack: ["TypeScript", "NextJS", "Kinde", "Sanity", "Vercel", "Tailwind", "Shadcn/UI", "Supabase", "Prisma"],
    repositoryUrl:"https://github.com/olatunde1998/geodevcodes-saas",
    projectUrl:"#",
    projectFeatures: ["🌐 Next.js App Router", "🔐 Kinde Authentication", "📧 Passwordless Auth", "🔑 OAuth (Google and GitHub)", "💽 Supabase Database", "💨 Prisma Orm", "🎨 Styling with tailwindcss and shadcn UI", "✅ Github Pull Request Template", "💵 Github Workflow", "🐐 Bento Layout", "💽 OutStanding ReadMe", "😶‍🌫️ Deployment to AWS Amplify"] 
  },

  // Upcoming Projects

  //  {
  //   id: "9",
  //   imageUrl: "/sass.webp",
  //   projectTitle: "Create a modern portfolio website with Next.js.14, Tailwind, NextAuth, Sanity and Supabase",
  //   subTitle: "🚀 Create a modern Portfolio Website with Next.js.14, Tailwind, NextAuth, and  Learn step-by-step and elevate your development skills.",
  //   stack: ["TypeScript", "NextJS", "Shadcn/UI", "Vercel", "Tailwind", "Vercel"],
  //   repositoryUrl:"https://github.com/olatunde1998/geodevcodes-microfrontend",
  //   projectUrl:"https://geodevcodes.vercel.app/",
  //   projectFeatures: ["🌐 Next.js App Router", "💨 Shadcn/UI", "🎨 Styling with tailwindcss",  "✅ Github Pull Request Template", "💵 Github Workflow", "😶‍🌫️ Deployment to AWS Amplify & Vercel"] 
  // },
  
  // {
  //   id: "10",
  //   imageUrl: "/sass.webp",
  //   projectTitle: "Build a AI Chatbot with Next.js 13, React, Tailwind, Prisma | Full Stack Tutorial | 2023",
  //   subTitle: "🚀 Welcome to this in-depth Full Stack Tutorial where I will guide you through the process of building an impressive AI Chatbot using cutting-edge technologies. In this video, I will walk you step-by-step through the development of your own intelligent chatbot, incorporating the latest tools and frameworks.",
  //   stack: ["TypeScript", "NextJS", "Planetscale", "Vercel Ai", "Tailwind", "Vercel", "Prisma"],
  //   repositoryUrl:"https://github.com/olatunde1998/",
  //   projectUrl:"#",
  //   projectFeatures: ["🌐 Next.js App Router", "💨 Prisma Orm", "🎨 Styling with tailwindcss",  "✅ Github Pull Request Template", "💵 Github Workflow", "😶‍🌫️ Deployment to AWS Amplify"] 
  // },
];


// Footer Links
export const footerLinks = [
  { id:1,
    name: "Terms of Service",
    href: "/terms",
    key: "terms",
  },
  {
    id: 2,
    name: "Privacy Policy",
    href: "/privacy",
    key: "privacy",
  },
  {
    id:3,
    name: "Contact",
    href: "mailto:olatunde336@gmail.com",
    key: "contact",
  },
  {
    id:4,
    name: "About",
    href: "/about",
    key: "about",
  }
  ];

