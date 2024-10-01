import Caret from "@/components/icon/Caret";
import Link from "next/link";
import { Suspense } from "react";
import TesterLoginPage from "./TesterLoginPage.client";

const LoginPage = () => {
  return (
    <div>
      <div className="mx-[2.6rem] mt-[3.2rem] mb-[4.8rem]">
        <Link href="/" className="flex items-center gap-x-[1rem]">
          <Caret className="w-[1.8rem] h-[1.8rem]" />
          <p className="text-title text-white">나의 MBTI는?</p>
        </Link>
      </div>

      <Suspense>
        <TesterLoginPage />
      </Suspense>
    </div>
  );
};

export default LoginPage;
