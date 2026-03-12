"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only on mobile and after scrolling past hero
      if (window.innerWidth < 768 && window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-0 left-0 w-full z-50 p-4 md:hidden"
        >
            <div className="bg-[#14161c]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-light">가장 합리적인 예약</span>
                    <span className="text-lg font-medium tracking-wide font-en">Booking Now</span>
                </div>
                <div className="flex gap-2">
                    <a href="https://booking.naver.com" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl bg-[#03c75a] text-white font-medium text-sm flex items-center justify-center">
                        N예약
                    </a>
                    <a href="https://yanolja.com" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl bg-[#ff3478] text-white font-medium text-sm flex items-center justify-center">
                        야놀자
                    </a>
                </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
