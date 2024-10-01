const Comment = ({ mbti, comment }: { mbti: string; comment: string }) => {
  return (
    <div className="flex">
      <div className="w-[2.4rem] h-[2.4rem] rounded-full bg-red-200 shrink-0 mr-[0.8rem] mt-[0.5rem]" />

      <div>
        <p className="flex items-center mb-[1rem] text-button text-white">
          {mbti}
        </p>

        <p className="text-label text-white">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
