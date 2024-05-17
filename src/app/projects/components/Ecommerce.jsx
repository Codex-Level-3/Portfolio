import Image from "next/image";
import Link from "next/link";
import React from "react";
import GitHubSvg from "./GitHubSvg";

export default function Ecommerce() {
  return (
    <section id="ecommerce">
      <h2>Project 1</h2>
      <Image
        src="/ecommerce.png"
        alt="ecommerce site"
        height={300}
        width={300}
      />
      <h3>Pitmaster Back Alley BBQ</h3>
      <p>
        This is one of the first projects I built: a fake E-commerce website
        inspired by a real restaurant. It incorporates basic HTML, CSS, and
        Bootstrap. This project marked my initial exploration into coding, where
        I discovered HTML elements and attributes, styling CSS selectors, and
        integrated Bootstrap components to enhance the functionality and appeal
        of the site.
      </p>
      <Link href="https://github.com/Laqwanda-Nettles/Bootstrap-Project">
        <GitHubSvg />
      </Link>
      <Link href="https://laqwanda-nettles.github.io/Bootstrap-Project/">
        Visit Site
      </Link>
    </section>
  );
}
