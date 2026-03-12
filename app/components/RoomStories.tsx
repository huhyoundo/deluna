"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { clsx } from "clsx";

export default function RoomStories() {
  const [activeTab, setActiveTab] = useState("bath");

  const rooms = {
    bath: {
      id: "bath",
      title: "Bath",
      tagline: "SILENT BATH.",
      desc: "수면 위로 퍼지는 온기 속에서 하루의 피로를 벗어냅니다.",
      image: "/084A5515.jpg"
    },
    screen: {
      id: "screen",
      title: "Screen",
      tagline: "CINEMA. IMMERSION.",
      desc: "압도적인 크기의 화면 앞, 오직 당신만의 극장이 시작됩니다.",
      image: "/084A5524.jpg"
    },
    bedding: {
      id: "bedding",
      title: "Sleep",
      tagline: "DEEP SLEEP.",
      desc: "정돈된 침구 위, 깨고 싶지 않은 깊고 고요한 수면.",
      image: "/084A5534.jpg"
    },
    care: {
        id: "care",
        title: "Clean",
        tagline: "REFRESH & CARE.",
        desc: "내일의 상쾌함을 준비하는 스타일러의 섬세한 정돈.",
        image: "/084A5545.jpg"
    }
  };

  const currentRoom = rooms[activeTab as keyof typeof rooms];

  return (
    <section id="room-stories" className="py-32 bg-moonlight border-t border-white/5">
        <div className="max-w-7xl mx-auto px-[5%]">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
                <div>
                    <span className="text-accent text-xs font-en tracking-[0.2em] block mb-4 uppercase">Moods</span>
                    <h2 className="text-3xl md:text-5xl font-light leading-tight">선택된 밤의 조각들</h2>
                </div>
                
                <div className="flex gap-4 border-b border-white/10 pb-4 w-full md:w-auto overflow-x-auto">
                    {Object.values(rooms).map((room) => (
                        <button
                            key={room.id}
                            onClick={() => setActiveTab(room.id)}
                            className={clsx(
                                "text-sm font-light transition-all duration-300 font-en tracking-widest uppercase whitespace-nowrap px-2 pb-2 border-b-2",
                                activeTab === room.id 
                                    ? "text-white border-accent" 
                                    : "text-gray-500 border-transparent hover:text-gray-300"
                            )}
                        >
                            {room.title}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative aspect-[4/5] md:aspect-[21/9] w-full bg-surface rounded-none overflow-hidden group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0"
                    >
                        <Image 
                            src={currentRoom.image} 
                            alt={currentRoom.title} 
                            fill 
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-moonlight via-moonlight/20 to-transparent" />
                        
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col justify-end">
                            <motion.h3 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-en font-light tracking-tight text-white mb-4"
                            >
                                {currentRoom.tagline}
                            </motion.h3>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-gray-300 text-lg md:text-xl font-light"
                            >
                                {currentRoom.desc}
                            </motion.p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    </section>
  );
}
