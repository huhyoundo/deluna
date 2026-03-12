"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 flex justify-between items-center px-[5%] py-6 ${
        scrolled ? "bg-moonlight/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <a href="#" className="flex flex-col items-center justify-center opacity-90 hover:opacity-100 transition-opacity gap-1">
        <span className="text-xl md:text-2xl font-serif tracking-[0.3em] text-white">
          HOTEL DEL LUNA
        </span>
        <div className="flex items-center gap-2">
          <div className="w-4 md:w-8 h-[1px] bg-accent/60" />
          <span className="text-[0.6rem] md:text-xs font-en tracking-[0.4em] text-accent uppercase">
            The Mystic Purr
          </span>
          <div className="w-4 md:w-8 h-[1px] bg-accent/60" />
        </div>
      </a>
      <a
        href="#practical-info"
        className="px-6 py-2.5 rounded text-sm font-medium bg-accent text-black hover:bg-accent-hover transition-all duration-300 transform hover:-translate-y-0.5"
      >
        예약 안내
      </a>
    </motion.header>
  );
}
