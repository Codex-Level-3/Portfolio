import React from "react";

export default function ProjectCard({ projectHeader, title, description }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#9997bc]">{`Project ${projectHeader}`}</h2>
      <h3 className="text-xl text-[#fee9ce]">{title}</h3>
      <p className="text-xl text-[#f8fdea]">{description}</p>
    </div>
  );
}
