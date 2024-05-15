import React from "react";
import { Image } from "react-bootstrap";

export default function About() {
  return (
    <div className="flex gap-5 justify-around items-center m-6">
      <Image
        src="https://placehold.co/600x400.png"
        alt="pic of me"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-[#f8fdea]">About Me</h1>
        <p className="text-xl text-[#fee9ce]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}
