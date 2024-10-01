import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import MbtiTestLinkButton from "./(home)/_components/MbtiTestLinkButton.client";
import MainLogoImage from "/public/static/images/main_logo.png";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black relative">
      <div className="relative h-[35rem] w-[35rem] pc:h-[50rem] pc:w-[50rem]">
        <Image
          src={MainLogoImage}
          alt="error status code 404"
          priority
          fill
          sizes="(max-width: 799px) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      <div className="bottom-[5rem] fixed flex-col flex gap-y-[1rem] w-full px-[3.4rem] pc:max-w-[50rem]">
        <MbtiTestLinkButton />
        <Button asChild size="lg">
          <Link href="/community">토론하러 가기</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
