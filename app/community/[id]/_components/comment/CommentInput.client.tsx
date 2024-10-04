"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { postComment } from "@/hooks/api/comments/useComment";
import { revalidateGetCommentsApiTag } from "@/hooks/api/comments/useComments";
import { useAuthenticationStore } from "@/store/useAuthenticationStore";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, useTransition } from "react";

const CommentInput = ({ questionId }: { questionId: string }) => {
  const router = useRouter();

  const testerId = useAuthenticationStore((state) => state.testerId);
  const testerMBTI = useAuthenticationStore((state) => state.testerMBTI);

  const [textareaValue, setTextareaValue] = useState("");

  const [isPending, startTransition] = useTransition();

  const handleCommentInputClick = () => {
    if (!testerId || !testerMBTI) {
      router.push(
        `/login?redirectURI=${encodeURIComponent(`/community/${questionId}`)}`
      );
      return;
    }

    if (isPending) {
      return;
    }

    startTransition(async () => {
      const response = await postComment({
        questionId,
        testerId,
        mbti: testerMBTI,
        content: textareaValue,
      });
      const { isSuccess, isError } = response ?? {};

      if (isSuccess) {
        setTextareaValue("");
        await revalidateGetCommentsApiTag();
      }
      if (isError) {
        // toast.error(
        //   "댓글 작성에 오류가 발생했습니다.\n잠시 후 다시 시도해 주세요.",
        // );
      }
    });
  };

  return (
    <div className="flex flex-col items-end space-y-[1.2rem]">
      <Textarea
        className="text-label-r-16 w-full px-[2rem] py-[1.8rem] text-gray-200"
        value={textareaValue}
        placeholder="댓글을 남겨주세요"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setTextareaValue(e.target.value);
        }}
      />

      <Button
        variant="gray"
        size="sm"
        disabled={textareaValue === ""}
        onClick={handleCommentInputClick}
      >
        입력하기
      </Button>
    </div>
  );
};

export default CommentInput;
