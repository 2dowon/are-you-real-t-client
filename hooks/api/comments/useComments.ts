"use server";

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

  //   const response =
  //     await areYouRealTServiceServerFetchInstance<ICommentResponse>("/comments", {
  //       method: "GET",
  //       query: { questionId },
  //     });
  const response =
    await areYouRealTServiceServerFetchInstance<ICommentResponse>(
      "/questions/comment/t",
      {
        method: "GET",
        query: { questionId },
        tags: [getCommentsApiTagKey],
      }
    );

  return response;
};

export async function revalidateGetCommentsApiTag() {
  revalidateTag(getCommentsApiTagKey);
}
