"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function NightInBupyeong() {
  return (
    <section id="night-in-bupyeong" className="py-32 px-[5%] bg-moonlight border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="md:w-5/12"
            >
                <span className="text-accent text-xs font-en tracking-[0.2em] block mb-6 uppercase">Location</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] mb-8 font-en tracking-tight">
                    NIGHT.<br/>
                    WALK.
                </h2>
                <div className="h-[1px] w-12 bg-white/20 mb-8" />
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
                    활기찬 부평 로터리의 즐거움을 뒤로하고,<br/>
                    가장 조용한 시간을 찾아 돌아오는 길.
                </p>
                <p className="text-gray-500 font-light leading-relaxed text-sm">
                    문밖을 나서면 부평 문화의 거리가 펼쳐지고,<br/>
                    문안으로 들어오면 완벽한 단절이 시작됩니다.
                </p>
            </motion.div>

            <motion.div 
               initial={{ scale: 0.95, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="md:w-7/12 w-full relative aspect-[3/4] md:aspect-square overflow-hidden"
            >
                <Image src="/084A5601.jpg" alt="Bupyeong Night" fill className="object-cover" />
            </motion.div>
        </div>
    </section>
  );
}

export function ReviewMood() {
  const containerRef = useRef(null);

  const reviews = [
      { text: "조용하고 정말 깨끗합니다. 큰 화면으로 영화 보면서 욕조를 쓰니 하루 피로가 다 녹네요.", author: "네이버 ∙ 커플PC" },
      { text: "번화가 주변인데도 방음이 정말 잘 되어있습니다. 침구류가 호텔 이상으로 쾌적합니다.", author: "야놀자 ∙ 스탠다드" },
      { text: "사장님의 응대와 세심한 룸 컨디션이 매우 돋보입니다. 다시 부평에 오면 무조건 여기입니다.", author: "여기어때 ∙ 프리미엄" },
      { text: "스타일러와 넓은 공간. 그리고 이 가격에 이런 퀄리티의 베딩이라니, 정말 푹 쉬다 갑니다.", author: "네이버 ∙ 에어드레서" },
  ];

  return (
    <section className="py-32 overflow-hidden bg-[#050507]">
        <div className="px-[5%] max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
                <span className="text-accent text-xs font-en tracking-[0.2em] block mb-4 uppercase">Reviews</span>
                <h2 className="text-3xl md:text-5xl font-light">다녀간 이들의 밤</h2>
            </div>
            <p className="text-gray-500 text-xs font-en tracking-widest uppercase flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-700 block" />
                Drag to explore
            </p>
        </div>

        <div className="pl-[5%]">
            <motion.div 
               ref={containerRef} 
               className="cursor-grab active:cursor-grabbing overflow-hidden pb-12"
            >
                <motion.div 
                   drag="x"
                   dragConstraints={{ right: 0, left: -600 }} 
                   className="flex gap-8 w-max"
                >
                    {reviews.map((rev, idx) => (
                        <div key={idx} className="w-[300px] md:w-[400px] border-l border-white/10 pl-8 shrink-0 select-none pointer-events-none group hover:border-accent/50 transition-colors duration-500">
                            <span className="text-accent text-3xl font-serif leading-none block mb-6">"</span>
                            <p className="text-lg md:text-xl font-light leading-relaxed mb-12 text-gray-300">
                                {rev.text}
                            </p>
                            <span className="text-gray-500 text-sm tracking-wide font-light block">
                                {rev.author}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </section>
  );
}
