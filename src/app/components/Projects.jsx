"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center gap-5 m-5 mb-8"
    >
      <h2 className="font-bold text-3xl text-[#f8fdea] text-center">
        Projects
      </h2>
      <div className="flex gap-6 items-center">
        <ProjectCard
          projectHeader="1"
          title="E-commerce Website"
          description="Pitmasters BBQ was one of my first projects it features my knowledge of HTML, CSS, and Bootstrap."
        />
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="/projects#ecommerce">
            <Image
              src="/ecommerce.png"
              alt="ecommerce website"
              height={200}
              width={200}
            />
          </Link>
        </motion.button>
      </div>
      <div className="flex gap-6 items-center">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="/projects#blog">
            <Image
              src="/blog.png"
              alt="blog website"
              height={200}
              width={200}
            />
          </Link>
        </motion.button>

        <ProjectCard
          projectHeader="2"
          title="Blog"
          description="This blog-inspired webpage implemented HTML, CSS animations, Bootstrap, and JavaScript."
        />
      </div>
      <div className="flex gap-6 items-center">
        <ProjectCard
          projectHeader="3"
          title="Recipe App"
          description="What's for Dinner? project incorporated API integration, object-oriented programming, CSS Animations, and SCSS 7-1 architecture."
        />
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="/projects#recipe">
            <Image
              src="/recipe.png"
              alt="recipe website"
              height={250}
              width={250}
            />
          </Link>
        </motion.button>
      </div>
      <div className="flex gap-6 items-center">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="/projects#community">
            <Image
              src="/community.png"
              alt="community website"
              height={250}
              width={250}
            />
          </Link>
        </motion.button>

        <ProjectCard
          projectHeader="4"
          title="Community Website"
          description="This Community Marketplace is a CRUD application that implements next.js, integration of npm packages, Firebase's authentication and Firestore database."
        />
      </div>
    </section>
  );
}
