import Image from "next/image";
import Link from "next/link";
import React from "react";
import GitHubSvg from "./GitHubSvg";

export default function Blog() {
  return (
    <section
      className="m-4 border-b-4 border-indigo-500 flex flex-col justify-center items-center"
      id="blog"
    >
      <h2 className="text-3xl font-semibold text-[#f8fdea] mb-4">Project 2</h2>
      <Image src="/blog.png" alt="blog site" height={300} width={300} />
      <h3 className="text-2xl text-[#fee9ce] font-semibold m-3">
        Personal Blog
      </h3>
      <p className="text-xl text-slate-100">
        This blog-inspired webpage represented my first steps into tech, or
        rather, my deeper dive into understanding how it all works. It embodies
        everything I have learned so far in Level 1 and consists of four pages:
        Landing, Home, About, and Thoughts. The project implements HTML, CSS,
        JavaScript, and Bootstrap components.
      </p>
      <h4 className="text-2xl text-orange-200 m-3">
        What inspired me to create this?
      </h4>
      <p className="text-xl text-slate-100">
        I created this blog to provide visitors with an opportunity to learn
        more about me and my interests. The inspiration behind this project was
        to share my journey and passions with others while honing my web
        development skills.
      </p>
      <h4 className="text-2xl text-orange-200 m-3">
        What did I learned during this project?
      </h4>
      <p className="text-xl text-slate-100">
        During this project, I experimented with CSS animations, JavaScript DOM
        manipulation, and for loops. This hands-on experience allowed me to
        understand how to create dynamic and interactive web pages, enhancing
        both the functionality and user experience of my site.
      </p>
      <div className="flex jusify-center items-center gap-5 mb-3 mt-3">
        <Link href="https://github.com/Laqwanda-Nettles/Personal-Webpage">
          <GitHubSvg />
        </Link>
        <Link
          className="text-lg text-white font-semibold hover:text-amber-200"
          href="https://laqwanda-nettles.github.io/Personal-Webpage"
        >
          Visit Site
        </Link>
      </div>
    </section>
  );
}
