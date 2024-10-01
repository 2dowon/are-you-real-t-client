/* eslint-disable @typescript-eslint/no-explicit-any */
import KakaoScript from "@/components/KakaoScript.client";
import type { Metadata } from "next";
import Authentication from "../components/Authentication.client";
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
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body>
        <Authentication />
        {children}
      </body>
      <KakaoScript />
    </html>
  );
}
