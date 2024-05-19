import Link from "next/link";
import React from "react";
import GitHubSvg from "./GitHubSvg";
import Image from "next/image";

export default function Community() {
  return (
    <section
      className="m-4 border-b-4 border-indigo-500 flex flex-col justify-center items-center"
      id="community"
    >
      <h2 className="text-3xl font-semibold text-[#f8fdea] mb-4">Project 4</h2>
      <Image
        src="/community.png"
        alt="community website"
        height={300}
        width={300}
      />
      <h3 className="text-2xl text-[#fee9ce] font-semibold m-3">
        Community Marketplace
      </h3>
      <p className="text-xl text-slate-100">
        The Community Marketplace is a mockup CRUD project that showcases a
        range of skills I acquired, including initializing a Next.js project,
        incorporating npm packages like react-bootstrap and axios, implementing
        Firebase authentication and data management, and styling with Tailwind
        CSS. This project demonstrates my ability to integrate various tools and
        technologies to create a functional and visually appealing web
        application.
      </p>
      <h4 className="text-2xl text-orange-200 m-3">
        What inspired me to create this?
      </h4>
      <p className="text-xl text-slate-100">
        The inspiration for this Community Marketplace came from a desire to
        facilitate local commerce and community engagement. I wanted to create
        an online space where users can easily buy, sell, and trade goods within
        their community, enhancing connectivity and resource sharing. This
        project also provided an opportunity to explore and implement various
        web development technologies, advancing my skills and preparing me for
        real-world applications.
      </p>
      <h4 className="text-2xl text-orange-200 m-3">
        What did I learned during this project?
      </h4>
      <p className="text-xl text-slate-100">
        I learned many technical skills through this project. I used axios to
        fetch external data, Firebase for secure user authentication and data
        management, and Next.js for server-side rendering and routing. Tailwind
        CSS helped me design a responsive and attractive app. I also gained
        experience with modular components, environment variables, and solving
        integration challenges. Implementing CRUD operations deepened my
        understanding of data management and user interactions.
      </p>
      <div className="flex jusify-center items-center gap-5 mb-3 mt-3">
        <Link href="https://github.com/Codex-Level-3/community-marketplace">
          <GitHubSvg />
        </Link>
        <Link
          className="text-lg text-white font-semibold hover:text-amber-200"
          href="https://communitymarketplace.netlify.app/"
        >
          Visit Site
        </Link>
      </div>
    </section>
  );
}
