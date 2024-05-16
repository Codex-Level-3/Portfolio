import Image from "next/image";
import React from "react";

export default function Ecommerce() {
  return (
    <section id="ecommerce">
      <Image
        href="./ecommerce.png"
        alt="ecommerce site"
        height={300}
        width={300}
      />
      <h2>Pitmaster Back Alley BBQ</h2>
      <p>
        This is one of my first projects that I built. It is a fake E-commerce
        website that is based off the the real restaurant. It implements basic
        HTML, CSS, and Bootstrap. This project was my introduction into coding
        for the very first time - Discovering HTML elements and attributes,
        styling css selectors, and adding bootstrap components to enhance the
        functionality and appeal to the site.
      </p>
    </section>
  );
}
