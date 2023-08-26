"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
     
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-xl">
      I'm a computer system engineering student in Al Azhar university I decided to pursue my passion for
              programming. I enrolled in a coding bootcamp and learned full-stack web development. My favorite part of
              programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a
              problem. My core stack is React, Next.js. I am also familiar with TypeScript, I am always looking to learn
              new technologies. I am currently looking for a full-time position as a software developer.
      </p>
    </motion.section>
  );
}
