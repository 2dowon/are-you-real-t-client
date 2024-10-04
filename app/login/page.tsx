import { Suspense } from "react";
import TesterLoginPage from "./TesterLoginPage.client";

const LoginPage = () => {
  return (
    <div className="px-[2.5rem]">
      <p className="text-title-sb-20 my-[3.2rem]">나의 MBTI는?</p>

      <Suspense>
        <TesterLoginPage />
      </Suspense>
    </div>
  );
};

export default LoginPage;
