import KakaoShareButton from "@/components/KakaoShareButton.client";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-[1rem] font-bold">카카오톡 공유하기 Test</h1>
      <KakaoShareButton />
    </div>
  );
};

export default HomePage;
