"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative h-screen w-full flex flex-col justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <Image
          src="/084A5506.jpg"
          alt="Del Luna Hotel Experience"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-[#0a0b0f]/40 to-transparent z-10" 
        />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-20 px-8 text-left md:px-16 flex flex-col gap-6 mt-32 max-w-7xl mx-auto w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-light leading-[1.1] drop-shadow-2xl font-en tracking-tight"
        >
          SILENCE<br />
          <span className="text-gray-400 italic font-title">& SPACE.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/80 text-xl md:text-2xl font-light tracking-wide max-w-lg mt-4"
        >
          완벽한 고요, 압도적인 몰입.<br />
          부평 델루나가 제안하는 가장 깊은 휴식.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 mt-12"
        >
          <a href="#practical-info" className="px-10 py-4 bg-white text-black font-medium tracking-widest uppercase text-sm rounded-full hover:bg-accent hover:text-white transition-all duration-300">
            Reservation
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-en tracking-[0.3em] text-gray-400">SCROLL</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
