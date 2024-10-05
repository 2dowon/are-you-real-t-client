import DoubleCaret from "@/components/icon/DoubleCaret";
import Image from "next/image";

const ResultMbtiCard = ({
  prevMbti,
  nextMbti,
  description,
  imageUrl,
}: {
  prevMbti: string;
  nextMbti: string;
  description: string;
  imageUrl: string;
}) => {
  const mbtiResultList: string[][] = [];
  for (let i = 0; i < prevMbti.length; i++) {
    mbtiResultList.push([prevMbti[i], nextMbti[i]]);
  }

  return (
    <div className="flex cursor-default flex-col items-center rounded-[0.8rem] bg-gray-900 px-[1.6rem] py-[2.4rem]">
      <p className="text-label-sb-16 text-primary">나의 진짜 MBTI</p>
      <p className="text-title-sb-32 mb-[2.4rem] mt-[0.8rem]">{nextMbti}</p>

      <div className="relative h-[18rem] w-[28rem]">
        <Image
          src={imageUrl}
          alt="mbti result"
          fill
          className="object-contain"
        />
      </div>

      <p className="text-detail-r-16 my-[3.2rem] text-center">{description}</p>

      <div className="flex w-full gap-x-[0.8rem]">
        {mbtiResultList.map((mbtiResult) => {
          const prevType = mbtiResult[0];
          const nextType = mbtiResult[1];

          const isChanged = prevType !== nextType;
          return (
            <div
              key={`mbti_result_${prevType}_${nextType}`}
              className={`flex flex-1 items-center justify-center rounded-[0.4rem] py-[0.5rem] ${
                isChanged ? "bg-primary" : "bg-gray-800 text-gray-200"
              }`}
            >
              <p className="text-detail-r-20">{prevType}</p>
              <DoubleCaret
                className="mx-[0.5rem]"
                color={isChanged ? "white" : "#A1A1AA"}
              />
              <p className="text-detail-sb-20">{nextType}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultMbtiCard;
