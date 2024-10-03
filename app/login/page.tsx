import { Suspense } from "react";
import TesterLoginPage from "./TesterLoginPage.client";

const LoginPage = () => {
  return (
    <div>
      <div className="px-[2rem] my-[3.2rem]">
        <p className="text-detail text-white">나의 MBTI는?</p>
      </div>

      <Suspense>
        <TesterLoginPage />
      </Suspense>
    </div>
  );
};

export default LoginPage;
