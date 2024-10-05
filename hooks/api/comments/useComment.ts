import { areYouRealTServiceServerFetchInstance } from "@/utils/fetchInstance/server";
import { customServerAction } from "@/utils/functions/customServerAction.util";

interface ICommentResponse {
  message: string;
  data: {
    id: string;
    questionId: string;
    testerId: string;
    mbti: string;
    content: string;
  };
}

interface ICommentPayload {
  questionId: number;
  testerId: string;
  mbti: string;
  content: string;
}

export const postCommentApi = async (payload: ICommentPayload) => {
  const response =
    await areYouRealTServiceServerFetchInstance<ICommentResponse>(
      "/questions/comment",
      {
        method: "POST",
        body: JSON.stringify({ ...payload }),
      }
    );

  return response;
};

export const postComment = async (payload: ICommentPayload) => {
  return await customServerAction<ICommentResponse>({
    apiFunction: postCommentApi(payload),
  });
};
