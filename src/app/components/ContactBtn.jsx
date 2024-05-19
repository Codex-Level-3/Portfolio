"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactBtn() {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="cursor-pointer px-6 py-3 min-w-[140px] shadow-lg shadow-purple-200 rounded-full text-[#fee9ce] text-lg tracking-wider font-medium outline-none border-2 border-purple-600 active:shadow-inner hover:bg-purple-600 hover:text-[#f8fdea] transition-all duration-300">
          <Link href="#contact">Contact Me</Link>
        </div>
      </motion.div>
    </>
  );
}
