import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HomeBGImage from "/public/static/images/home_bg.png";
import HomeLogoImage from "/public/static/images/home_logo.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden relative">
      <div className="relative w-screen h-screen pc:max-w-[50rem]">
        <Image
          src={HomeBGImage}
          alt="Home Background Image"
          priority
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-[calc(100vh_/_15)]">
        <div className="relative w-[70vw] h-[60vh] pc:w-[40rem] pc:h-[70rem]">
          <Image
            src={HomeLogoImage}
            alt="Home Logo Image"
            priority
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="bottom-[5rem] fixed flex-col flex gap-y-[1rem] w-full px-[3.4rem] pc:max-w-[50rem]">
        <Button asChild variant="primary" size="lg">
          <Link href={`/login?redirectURI=${encodeURIComponent("/questions")}`}>
            MBTI 검증해보기
          </Link>
        </Button>
        <Button asChild variant="gray" size="lg">
          <Link href={`/login?redirectURI=${encodeURIComponent("/community")}`}>
            토론하러 가기
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
