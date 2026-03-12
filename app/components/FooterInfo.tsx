"use client";

import { motion } from "framer-motion";

export function PracticalInfo() {
  return (
    <section id="practical-info" className="py-24 bg-moonlight border-t border-white/5 px-[5%]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
            
            <div className="flex-1">
                <span className="text-accent text-sm font-en tracking-widest block mb-4 uppercase">Info & Reservation</span>
                <h2 className="text-3xl font-light mb-8">가장 편안한 밤을 준비합니다</h2>
                <div className="flex flex-col gap-4">
                    <a href="https://booking.naver.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-[#03c75a] text-white font-medium rounded hover:bg-[#02b351] transition-colors">
                        네이버 객실 예약하기
                    </a>
                    <a href="https://yanolja.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-[#ff3478] text-white font-medium rounded hover:bg-[#e62e6c] transition-colors">
                        야놀자 특가 확인하기
                    </a>
                    <p className="text-gray-500 text-sm mt-4 font-light">
                        * 체크인 시간 및 주차 공간 안내는 예약처에서 날짜별로 정확히 확인 가능합니다.
                    </p>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                <div>
                    <h3 className="text-gray-200 font-medium mb-4 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent block" /> Address
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                        인천광역시 부평구 시장로 32<br/>
                        (부평역 12번 출구에서 5분 거리)
                    </p>
                </div>
                <div>
                    <h3 className="text-gray-200 font-medium mb-4 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent block" /> Contact
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed font-en">
                        0507-1300-1234
                    </p>
                </div>
                <div className="sm:col-span-2">
                     <h3 className="text-gray-200 font-medium mb-4 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent block" /> Policy
                    </h3>
                    <ul className="text-gray-400 font-light space-y-2">
                        <li>• 전 객실 금연 (지정된 흡연 구역 이용)</li>
                        <li>• 반려동물 동반 불가</li>
                        <li>• 미성년자 혼숙 금지 (신분증 확인)</li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#08090b] py-12 px-[5%] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-en font-bold tracking-widest text-white/80">DEL LUNA.</div>
            <div className="text-gray-500 text-xs font-light text-center md:text-left">
                상호: 델루나 호텔 부평 | 대표: 김대표 | 사업자등록번호: 123-45-67890<br/>
                인천광역시 부평구 시장로 32
            </div>
            <div className="text-gray-600 text-xs font-en">
                © {new Date().getFullYear()} Del Luna Hotel Bupyeong. All rights reserved.
            </div>
        </div>
    </footer>
  );
}
