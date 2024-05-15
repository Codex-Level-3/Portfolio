import React from "react";

export default function Header() {
  return (
    <div
      id="header"
      className="p-3 h-16 w-full flex justify-between items-center"
    >
      <div>
        <h1 className="text-4xl font-bold">LN</h1>
      </div>
      <ul
        id="nav-menu"
        className="flex justify-around gap-5 text-lg font-semibold"
      >
        <li>ABOUT ME</li>
        <li>SKILLS</li>
        <li>PROJECTS</li>
        <li>BLOG</li>
      </ul>
    </div>
  );
}
