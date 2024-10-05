"use client";

import { BASE_URL } from "@/utils/constants/url.const";
import Kakao from "./icon/Kakao";

const KakaoShareButton = ({ resultId }: { resultId: string }) => {
  const handleKakaoShareButtonClick = () => {
    const shareUrl = `${BASE_URL}/result/${resultId}`;

    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "너 진짜 T야?",
          description: "비사이드 포텐데이 409 - 가짜엔프피팀 프로젝트",
          imageUrl: "공유할 이미지 URL",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      });
    }
  };

  return (
    <button
      className="text-label-sb-16 flex w-full justify-center rounded-[0.8rem] bg-[#FAE100] p-[1.6rem] text-[#391B1B]"
      onClick={handleKakaoShareButtonClick}
    >
      <Kakao className="mr-[0.8rem]" />
      카카오톡 공유하기
    </button>
  );
};

export default KakaoShareButton;
