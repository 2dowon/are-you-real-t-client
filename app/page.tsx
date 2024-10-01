import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HomeImage from "/public/static/images/home_image.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black relative">
      <div className="relative w-full h-full pc:w-[50rem]">
        <Image
          src={HomeImage}
          alt="Home Image"
          priority
          fill
          className="object-contain"
        />
      </div>

      <div className="bottom-[5rem] fixed flex-col flex gap-y-[1rem] w-full px-[3.4rem] pc:max-w-[50rem]">
        <Button asChild variant="primary" size="lg">
          <Link href={`/login?redirectURI=${encodeURIComponent("/test")}`}>
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
