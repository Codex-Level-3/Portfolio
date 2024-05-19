import Image from "next/image";
import Link from "next/link";
import React from "react";
import GitHubSvg from "./GitHubSvg";

export default function Ecommerce() {
  return (
    <section
      className="m-4 border-b-4 border-indigo-500 flex flex-col justify-center items-center"
      id="ecommerce"
    >
      <h2 className="text-3xl font-semibold text-[#f8fdea] mb-4">Project 1</h2>
      <Image
        src="/ecommerce.png"
        alt="ecommerce site"
        height={300}
        width={300}
      />
      <h3 className="text-2xl text-[#fee9ce] font-semibold m-3">
        Pitmaster Back Alley BBQ
      </h3>
      <p className="text-xl text-slate-100">
        This is one of the first projects I built: a fake E-commerce website
        inspired by a real restaurant. It incorporates basic HTML, CSS, and
        Bootstrap. This project marked my initial exploration into coding, where
        I discovered HTML elements and attributes, styling CSS selectors, and
        integrated Bootstrap components to enhance the functionality and appeal
        of the site.
      </p>
      <div className="flex jusify-center items-center gap-5 mb-3 mt-3">
        <Link href="https://github.com/Laqwanda-Nettles/Bootstrap-Project">
          <GitHubSvg />
        </Link>
        <Link
          className="text-lg text-white font-semibold hover:text-amber-200"
          href="https://laqwanda-nettles.github.io/Bootstrap-Project/"
        >
          Visit Site
        </Link>
      </div>
    </section>
  );
}
