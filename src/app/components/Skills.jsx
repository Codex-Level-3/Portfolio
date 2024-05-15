"use client";
import React from "react";
import SkillCard from "./SkillCard";
import Carousel from "react-bootstrap/Carousel";
import { skills } from "./skillsList";
import Image from "next/image";

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div>
        {skills.map((skill, index) => (
          <Carousel key={index}>
            <Carousel.Item interval={1000}>
              <Image
                width={150}
                height={150}
                src={`/skills/${skill.src}.png`}
                alt={skill.name + " Logo"}
              />
              <Carousel.Caption>
                <h3>{skill.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        ))}
      </div>
    </section>
  );
}
