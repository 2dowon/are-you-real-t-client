import { Suspense } from "react";
import ResultClientPage from "./ResultPage.client";
import ResultLoading from "./_components/ResultLoading";

const ResultPage = () => {
  return (
    <Suspense fallback={<ResultLoading />}>
      <ResultClientPage />
    </Suspense>
  );
};

export default ResultPage;
