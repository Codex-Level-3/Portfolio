import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-wrap gap-5 justify-around items-center m-6"
    >
      <Image src="/placeholder.png" alt="pic of me" width={300} height={300} />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-[#f8fdea]">About Me</h1>
        <p className="text-xl text-[#fee9ce]">
          Hi there! I&apos;m Laqwanda, a passionate software developer with a
          drive to learn and delve deeper into the world of technology and
          innovation. Currently, I'm pursuing a Full-Stack Software Development
          certificate from CodeX Academy. With a focus on building a strong
          foundation in coding, a knack for problem-solving, a keen eye for
          detail, and a commitment to continuous learning, I aim to deliver
          robust and user-centric software solutions. From front-end development
          to back-end solutions, I'm constantly refining my skills to create
          seamless experiences for users. Let's connect and explore the endless
          possibilities of technology together!
        </p>
      </div>
    </section>
  );
}
