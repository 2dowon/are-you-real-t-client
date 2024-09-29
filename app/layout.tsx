/* eslint-disable @typescript-eslint/no-explicit-any */
import KakaoScript from "@/components/KakaoScript.client";
import type { Metadata } from "next";
import "./globals.css";

declare global {
  interface Window {
    Kakao: any;
  }
}

export const metadata: Metadata = {
  title: "너 진짜 T야?",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
      <KakaoScript />
    </html>
  );
}
