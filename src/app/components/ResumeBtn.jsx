"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ResumeBtn() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="cursor-pointer">
        <Link
          className="px-6 py-3 min-w-[200px] shadow-lg shadow-purple-200 rounded-full text-lg tracking-wider font-medium outline-none border-2 border-purple-600 active:shadow-inner bg-purple-600 text-[#f8fdea] hover:bg-transparent hover:text-[#fee9ce] transition-all duration-300"
          href="https://www.canva.com/design/DAGFuMbR6ZY/dOmzVqxX-72lGniPQ4cGEg/view?utm_content=DAGFuMbR6ZY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        >
          Get Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            fill="#fff"
            class="ml-2 inline"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 16a.749.749 0 0 1-.542-.232l-5.25-5.5A.75.75 0 0 1 6.75 9H9.5V3.25c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25V9h2.75a.75.75 0 0 1 .542 1.268l-5.25 5.5A.749.749 0 0 1 12 16zm10.25 6H1.75C.785 22 0 21.215 0 20.25v-.5C0 18.785.785 18 1.75 18h20.5c.965 0 1.75.785 1.75 1.75v.5c0 .965-.785 1.75-1.75 1.75z"
              data-original="#000000"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
