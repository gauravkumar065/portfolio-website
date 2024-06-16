import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Full Stack Developer",
    location: "Token Metrics",
    description:
      `Implemented login system integration with Google and Twitter, and successfully migrated 150k users from Okta user authentication to Supabase auth, reducing costs from $30k/month to $0. 
       Developed NFT-based wallet connect login system with enhanced security measures. 
      Created Telegram bots featuring various services including alerts for bullish and bearish indicators, price predictions, etc., for crypto tokens. 
      Designed a top-tier frontend for chatbots integrated with AI backend using ChatGPT and proprietary data. 
      Engineered a robust payment system incorporating Stripe payment, PayPal, and Coinpayment gateways.`,
    icon: React.createElement(FaReact),
    date: "Nov 2022 - March 2024",
  },
  {
    title: "Full Stack Developer",
    location: "Skugal Technology",
    description:`Worked on the snowflake, a cloud SQL-based database platform.
    Made robust payment gateways. Stripe, PayPal, and coin payment and their webhooks and IPN. 
    Build Some Cron-jobs for various functionality.
    Worked In NX workspace, which is widely used in various projects.`,
    icon: React.createElement(FaReact),
    date: "Feb 2022 - Nov 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Kudos Finance",
    description:
      `Worked on sub-wallet APIs for a virtual account (VA). 
      Worked on various Microservices like geolocation, pin codes, 
      reducing EMI calculator, monthly dues. 
      Build react component-based screens application that can be use later.`,
    icon: React.createElement(FaReact),
    date: "Sep 2017 - Aug 2021",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Supabase"
] as const;
