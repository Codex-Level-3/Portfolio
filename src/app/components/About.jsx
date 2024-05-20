import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-wrap gap-5 justify-around items-center m-6"
    >
      <Image
        className="object-top h-52 object-cover rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/50"
        src="/me1.png"
        alt="pic of me"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-[#f8fdea]">About Me</h1>
        <p className="text-xl text-[#fee9ce]">
          Hi there! I&apos;m Laqwanda, a passionate software developer with a
          unique background in Culinary Arts and a drive to delve deeper into
          technology and innovation. Currently, I&apos;m pursuing a Full-Stack
          Software Development certificate from CodeX Academy. My journey from
          the kitchen to coding has honed my creativity and precision, allowing
          me to tackle problem-solving with a versatile and adaptable approach.
        </p>
        <p className="text-xl text-[#fee9ce]">
          I focus on building a strong foundation in coding, with a keen eye for
          detail and a commitment to continuous learning. From front-end
          development to back-end solutions, I strive to create seamless,
          user-centric experiences. My eagerness to learn drives me to explore
          new languages and innovative projects. Let&apos;s connect and explore
          the endless possibilities of technology together!
        </p>
      </div>
    </section>
  );
}
