import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HomeBGImage from "/public/static/images/home_bg.png";
import HomeLogoImage from "/public/static/images/home_logo.png";

const HomePage = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <div className="pc:max-w-[50rem] relative h-screen w-screen">
        <Image
          src={HomeBGImage}
          alt="Home Background Image"
          priority
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-[calc(100vh_/_15)]">
        <div className="pc:w-[40rem] pc:h-[calc(100vh/1.5)] relative h-[60vh] w-[70vw]">
          <Image
            src={HomeLogoImage}
            alt="Home Logo Image"
            priority
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="pc:max-w-[50rem] fixed bottom-[5rem] flex w-full flex-col gap-y-[1.6rem] px-[3.5rem]">
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
