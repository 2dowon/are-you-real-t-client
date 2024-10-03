import { getResult } from "@/hooks/api/result/useResult";

interface IResultPageProps {
  params: { id: string };
}

const ResultPage = async ({ params: { id } }: IResultPageProps) => {
  const result = await getResult({ resultId: Number(id) });

  console.log("## result", result);

  return (
    <div>
      <h1 className="text-white text-title-question mb-[1rem]">결과 {id}</h1>
    </div>
  );
};

export default ResultPage;
