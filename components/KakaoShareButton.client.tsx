"use client";

import { BASE_URL } from "@/utils/constants/url.const";
import { usePathname } from "next/navigation";

const KakaoShareButton = () => {
  const pathname = usePathname();

  const handleKakaoShareButtonClick = () => {
    let shareUrl = BASE_URL;
    if (pathname !== "/") {
      shareUrl += pathname;
    }

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
      className="bg-yellow-200 p-[1rem] rounded-lg"
      onClick={handleKakaoShareButtonClick}
    >
      카카오톡 공유하기
    </button>
  );
};

export default KakaoShareButton;
