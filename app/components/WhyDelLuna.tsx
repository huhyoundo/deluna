"use client";

import { motion, Variants } from "framer-motion";

export default function WhyDelLuna() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  };

  const sections = [
    {
      num: "01",
      title: "CINEMA. \nIMMERSION.",
      desc: "전 객실 65~85인치 스마트 TV 세팅. 무료 OTT와 함께 빈틈없는 몰입을 선사합니다."
    },
    {
      num: "02",
      title: "SILENT. \nBATH.",
      desc: "넓고 아주 깨끗한 프라이빗 욕조. 따뜻한 물에 하루를 녹이는 완벽한 재충전의 시간."
    },
    {
      num: "03",
      title: "DEEP. \nSLEEP.",
      desc: "호텔급 침구류와 암막 커튼. 방해받지 않는 조도로 가장 깊은 수면을 약속합니다."
    }
  ];

  return (
    <section id="why-del-luna" className="py-32 px-[5%] max-w-7xl mx-auto border-t border-white/5 bg-[#0a0b0f]">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
        <div className="lg:w-1/3">
          <span className="text-accent text-xs font-en tracking-[0.2em] block mb-6 uppercase">Philosophy</span>
          <h2 className="text-3xl md:text-5xl font-light leading-tight">가장 확실한<br/>쉼의 형태</h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-gray-400 font-light text-lg leading-relaxed text-balance">
            화려한 치장보다 머무는 동안의 본질적인 감각에 집중합니다.<br/>
            보는 것, 씻는 것, 자는 것.<br/>
            휴식의 세 가지 기둥을 최상의 컨디션으로 다듬었습니다.
          </p>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8"
      >
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="group relative flex flex-col border-t border-white/10 pt-8"
          >
            <span className="text-accent font-en text-sm tracking-widest mb-16 inline-block">
              [ {sec.num} ]
            </span>
            <h3 className="text-3xl md:text-4xl font-light mb-6 font-en leading-tight whitespace-pre-line tracking-tight">
              {sec.title}
            </h3>
            <p className="text-gray-400 font-light leading-relaxed mt-auto">
              {sec.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
