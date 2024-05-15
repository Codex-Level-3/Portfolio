"use client";
import React, { useEffect, useRef } from "react";
import SkillCard from "./SkillCard";
import { skills } from "./skillsList";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Skills() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    let timerId;
    if (emblaApi) {
      // Start autoplay manually
      const startAutoplay = () => {
        timerId = setInterval(() => {
          emblaApi.scrollNext();
        }, 2000);
      };

      // Call startAutoplay to initiate autoplay
      startAutoplay();

      // Stop autoplay when the component unmounts
      return () => {
        clearInterval(timerId);
      };
    }
  }, [emblaApi]);

  return (
    <section className="bg-gradient-to-r from-zinc-900 to-[#3b2869] mt-4 pt-2 pb-8">
      <h2 className="text-center font-bold text-[#f8fdea] text-3xl p-2">
        Skills
      </h2>

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {skills.map((skill, index) => (
            <div key={index} className="embla__slide flex-[0_0_35%]">
              <div className="backdrop-blur-sm bg-black/30 shadow-xl shadow-cyan-500/30 h-[280px] w-[200px] pt-4 rounded-lg overflow-hidden mb-3 mt-3 mx-auto font-[sans-serif] flex flex-col justify-center items-center">
                <Image
                  className="w-full"
                  width={150}
                  height={150}
                  src={`/skills/${skill.src}.png`}
                  alt={skill.name + " Logo"}
                />
                <div className="px-4 py-6">
                  <h3 className="text-[#f8fdea] text-xl font-bold text-center">
                    {skill.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
