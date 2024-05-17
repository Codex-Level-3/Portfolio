import Link from "next/link";
import React from "react";

export default function Breadcrumb() {
  return (
    <ul className="flex items-center justify-center font-[sans-serif] space-x-4">
      <li className="text-gray-400 hover:text-amber-200 text-lg font-bold cursor-pointer">
        <Link href="/projects#ecommerce">Project 1</Link>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-gray-400 w-3.5 -rotate-90"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd"
            data-original="#000000"
          ></path>
        </svg>
      </li>
      <li className="text-gray-400 hover:text-amber-200 text-lg font-bold cursor-pointer">
        <Link href="/projects#blog">Project 2</Link>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-gray-400 w-3.5 -rotate-90"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd"
            data-original="#000000"
          ></path>
        </svg>
      </li>
      <li className="text-gray-400 hover:text-amber-200 text-lg font-bold cursor-pointer">
        <Link href="/projects#recipe">Project 3</Link>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-gray-400 w-3.5 -rotate-90"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clipRule="evenodd"
            data-original="#000000"
          ></path>
        </svg>
      </li>
      <li className="text-gray-400 hover:text-amber-200 text-lg font-bold cursor-pointer">
        <Link href="/projects#community">Project 4</Link>
      </li>
    </ul>
  );
}
