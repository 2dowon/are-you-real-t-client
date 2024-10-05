/* eslint-disable @typescript-eslint/no-explicit-any */
import KakaoScript from "@/components/KakaoScript.client";
import { Toaster } from "@/components/ui/sonner";
import { getMetadata } from "@/utils/functions/metaData.util";
import "./globals.css";

declare global {
  interface Window {
    Kakao: any;
  }
}

export const metadata = getMetadata();

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
        <main>{children}</main>
        <Toaster />
      </body>
      <KakaoScript />
    </html>
  );
}
