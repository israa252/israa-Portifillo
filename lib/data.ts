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
    title: "Computer System Engineering",
    location: "Al, Azhar university",
    description:
      " currently studied",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2025",
  },
  {
    title: "Front-End Developer",
    location: "Ryada ",
    description:
      "I learn as a  Front End developer for 3 months  I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: " 2022",
  },
  {
    title: "Next js Dev",
    location: "Remotly",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind ,MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: " Hypet Tech Company ",
    description:
      "I worked as a full-stack developer on this startup project . Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB"],
    imageUrl: corpcommentImg,
  },
  {
    title: "online course website",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Html", "js"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Burger website",
    description:
      " website for food ",
    tags: ["React" , "Tailwind", "Framer"],
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
  
 
  "Python",
   
  "Framer Motion",
] as const;
