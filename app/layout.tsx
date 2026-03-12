import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "인천 부평 델루나 호텔 | 어반 리트리트 (Urban Retreat)",
  description: "부평의 밤을 가장 감각적으로 쉬는 방법. 부평역 인근 최고급 시설, 대형 TV, 무료 OTT, 프라이빗 욕조를 갖춘 델루나 호텔 부평점.",
  openGraph: {
    title: "인천 부평 델루나 호텔",
    description: "도심 한가운데, 더 조용한 장면. 큰 화면과 깊은 욕조, 그리고 쉬어가는 밤.",
    images: [{ url: "/084A5506.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fallback to standard pretendard if localfont not seeded, but we'll try CDN via style mapping if needed.
  // Actually, easiest robust way without managing woff2 files manually is just standard class mapping
  return (
    <html lang="ko" className={`${inter.variable} bg-moonlight text-white overflow-x-hidden`}>
      <head>
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --font-pretendard: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
          }
        `}} />
      </head>
      <body className="font-kr antialiased relative">
        {children}
      </body>
    </html>
  );
}
