import React from "react";

export default function ProjectCard({ projectHeader, title, description }) {
  return (
    <div>
      <h2>{`Project ${projectHeader}`}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
