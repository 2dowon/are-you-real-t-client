"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useState } from "react";

const CommentInput = () => {
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <div className="flex flex-col items-end space-y-[1.2rem]">
      <Textarea
        className="w-full px-[2rem] py-[1.8rem] text-label"
        value={textareaValue}
        placeholder="댓글을 남겨주세요"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          setTextareaValue(e.target.value);
        }}
      />

      <Button variant="gray" size="sm" disabled={textareaValue === ""}>
        입력하기
      </Button>
    </div>
  );
};

export default CommentInput;
