const Comment = ({ mbti, comment }: { mbti: string; comment: string }) => {
  return (
    <div className="flex">
      <div className="mr-[0.8rem] mt-[0.2rem] h-[2rem] w-[2rem] shrink-0 rounded-full bg-red-200" />

      <div className="">
        <p className="text-title-m-16 mb-[1rem] flex items-center text-white">
          {mbti}
        </p>

        <p className="text-reply-r-14 leading-[150%] text-gray-200">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Comment;
