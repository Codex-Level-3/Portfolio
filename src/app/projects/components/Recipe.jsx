import Link from "next/link";
import React from "react";
import GitHubSvg from "./GitHubSvg";
import Image from "next/image";

export default function Recipe() {
  return (
    <section
      className="m-4 border-b-4 border-indigo-500 flex flex-col justify-center items-center"
      id="recipe"
    >
      <h2 className="text-3xl font-semibold text-[#f8fdea] mb-4">Project 3</h2>
      <Image src="/recipe.png" alt="recipe app" height={300} width={300} />
      <h3 className="text-2xl text-[#fee9ce] font-semibold m-3">
        Recipe App - What&apos;s for Dinner?
      </h3>
      <p className="text-xl text-slate-100">
        This recipe app features comprehensive API integration, dynamic CSS
        animations and enhancements, effective utilization of modals for
        improved user interaction, and the structured styling capabilities of
        SASS.
      </p>
      <h4 className="text-2xl text-orange-200 m-3">
        What inspired me to create this?
      </h4>
      <p className="text-xl text-slate-100">
        The concept came from my sister and I asking the same question to each
        other everyday - &quot;What&apos;s for Dinner?&quot;. Since we both love
        trying and exploring different cuisines, and I have a background in
        Culinary Arts, it was natural for me to create a recipe app. This
        project not only showcases my coding skills but also combines my passion
        for culinary arts with technology.
      </p>
      <h4 className="text-2xl text-orange-200 m-3">
        What did I learned during this project?
      </h4>
      <p className="text-xl text-slate-100">
        This project incorporated object-oriented programming, API integration,
        and SCSS 7-1 architecture. I learned how to create and incorporate
        modals, use data attributes and dataset properties, and work with
        asynchronous JavaScript functions. Additionally, I enhanced my
        understanding of CSS animations, responsive design, and the overall user
        experience.
      </p>
      <div className="flex jusify-center items-center gap-5 mb-3 mt-3">
        <Link href="https://github.com/Laqwanda-Nettles/Recipe-App">
          <GitHubSvg />
        </Link>
        <Link
          className="text-lg text-white font-semibold hover:text-amber-200"
          href="https://laqwanda-nettles.github.io/Recipe-App/"
        >
          Visit Site
        </Link>
      </div>
    </section>
  );
}
