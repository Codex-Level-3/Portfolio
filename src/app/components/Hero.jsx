import Link from "next/link";
import React from "react";
import ContactBtn from "./ContactBtn";
import ResumeBtn from "./ResumeBtn";

export default function Hero() {
  return (
    <div className="pt-5 mx-4">
      <h2 className="text-5xl font-bold text-[#f8fdea]">
        Hi! I am Laqwanda, a Fullstack Software Developer.
      </h2>
      <div className="flex justify-normal items-center gap-6 pt-4 text-center">
        <ContactBtn />
        <ResumeBtn />
      </div>
    </div>
  );
}
