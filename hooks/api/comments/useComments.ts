"use server";

import { TEN_MINUTE_IN_SECOND } from "@/utils/constants/number.const";
import { areYouRealTServiceServerFetchInstance } from "@/utils/fetchInstance/server";
import { revalidateTag } from "next/cache";

export interface ICommentResponse {
  count: number;
  commentList: IComment[];
}

export interface IComment {
  id: string;
  testerId: string;
  mbti: string;
  content: string;
}

interface ICommentsParams {
  questionId: number;
}

const getCommentsApiTagKey = "getComments";

export const getComments = async (params: ICommentsParams) => {
  const { questionId } = params;

  const response =
    await areYouRealTServiceServerFetchInstance<ICommentResponse>(
      "/questions/comment",
      {
        method: "GET",
        query: { questionId },
        tags: [getCommentsApiTagKey],
        next: { revalidate: TEN_MINUTE_IN_SECOND },
      }
    );

  return response;
};

export async function revalidateGetCommentsApiTag() {
  revalidateTag(getCommentsApiTagKey);
}
