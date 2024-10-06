import Image from "next/image";
import LoadingGif from "/public/static/images/loading.gif";
import LoadingBGImage from "/public/static/images/loading_bg.png";

const ResultLoading = () => {
  return (
    <div className="pc:max-w-[50rem] relative flex h-screen w-screen flex-col items-center justify-center pb-[10rem]">
      <div className="pc:max-w-[50rem] relative h-[60vh] w-[80vw]">
        <Image
          src={LoadingBGImage}
          alt="loading Background Image"
          priority
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2">
        <div className="pc:h-[20rem] pc:w-[20rem] relative h-[12rem] w-[12rem]">
          <Image
            src={LoadingGif}
            alt="loading"
            priority
            fill
            className="object-cover"
          />
        </div>
        <div className="text-label-r-16 text-center">
          <p>진.짜.</p>
          <p>MBTI 검증중</p>
        </div>
      </div>
    </div>
  );
};

export default ResultLoading;
