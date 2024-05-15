import React from "react";
import { skills } from "./skillsList";
import Image from "next/image";

export default function SkillCard() {
  return (
    <section>
      <h2>Skills</h2>
      <div className="flex">
        {skills.map((skill, index) => (
          <div key={index}>
            <Image
              width={150}
              height={150}
              src={`/skills/${skill.src}.png`}
              alt={skill.name + " Logo"}
            />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
