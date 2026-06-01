import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "다뉴비스튜디오 | Danewbie Studio",
  description:
    "다뉴비스튜디오 — 새로운 재미를 만드는 게임 스튜디오. 우리가 만드는 게임과 비전을 소개합니다.",
  openGraph: {
    title: "다뉴비스튜디오 | Danewbie Studio",
    description: "새로운 재미를 만드는 게임 스튜디오",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
