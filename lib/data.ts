import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/project2.png";
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
    description: `Worked on the snowflake, a cloud SQL-based database platform.
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
    title: "DevFlow",
    description:
      "I worked as a full-stack developer on this startup project for 2 months. Users can give public feedback to questions asked on the comunity.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: corpcommentImg,
    url: "https://dev-flow-wine.vercel.app"
  },
  {
    title: "Personal Banking",
    description:
      "It is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to manages their finances.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Appwrite", "Plaid", "Dwolla"],
    imageUrl: rmtdevImg,
    url: "https://personal-banking.vercel.app"
  },
  {
    title: "Personal Portfolio page",
    description:
      "A personal portfolio website",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    url: "https://portfolio-website-sand-three-26.vercel.app"
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
