"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SignatureDetails() {
  const details = [
    {
      img: "/084A5541.jpg",
      title: "DETAILS.",
      desc: "섬세하게 조율된 어메니티",
      colSpan: "col-span-1 md:col-span-2",
      aspect: "aspect-[4/5] md:aspect-[16/9]"
    },
    {
      img: "/084A5556.jpg",
      title: "AIR.",
      desc: "보이지 않는 공기까지 정돈합니다",
      colSpan: "col-span-1",
      aspect: "aspect-[4/5]"
    },
    {
      img: "/084A5561.jpg",
      title: "SCENT.",
      desc: "은은하게 머무는 시그니처 향",
      colSpan: "col-span-1",
      aspect: "aspect-[4/5]"
    },
    {
      img: "/084A5572.jpg",
      title: "LIGHT.",
      desc: "수면을 방해하지 않는 간접 조명",
      colSpan: "col-span-1 md:col-span-2",
      aspect: "aspect-[4/5] md:aspect-[21/9]"
    }
  ];

  return (
    <section className="py-32 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-[5%]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-accent text-xs font-en tracking-[0.2em] block mb-4 uppercase">Signatures</span>
            <h2 className="text-3xl md:text-5xl font-light mb-6">시선이 닿지 않는 곳까지</h2>
          </div>
          <p className="text-gray-400 font-light max-w-md text-balance pb-2">
            드러내지 않아도 온전히 느낄 수 있도록, 머무는 내내 피부에 닿는 모든 것들을 가장 좋은 컨디션으로 남겨둡니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {details.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group overflow-hidden ${item.colSpan} ${item.aspect}`}
            >
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-start">
                <h4 className="text-2xl font-light font-en tracking-widest text-white mb-2">{item.title}</h4>
                <p className="text-gray-300 font-light text-sm tracking-wide">{item.desc}</p>
                <div className="w-0 h-[1px] bg-accent mt-4 transition-all duration-500 group-hover:w-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
