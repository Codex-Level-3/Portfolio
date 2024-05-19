import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div
      id="header"
      className="p-3 h-16 w-full flex justify-between items-center"
    >
      <div>
        <Link href="/">
          <h1 className="text-4xl font-bold">LN</h1>
        </Link>
      </div>
      <ul
        id="nav-menu"
        className="flex justify-around gap-5 text-lg font-semibold"
      >
        <li>
          <Link href="/#about">ABOUT ME</Link>
        </li>
        <li>
          <Link href="/#skills">SKILLS</Link>
        </li>
        <li>
          <Link href="/projects">PROJECTS</Link>
        </li>
      </ul>
    </div>
  );
}
