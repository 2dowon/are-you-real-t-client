import { areYouRealTServiceServerFetchInstance } from "@/utils/fetchInstance/server";
import { customServerAction } from "@/utils/functions/customServerAction.util";

interface IVoteResponse {
  message: string;
  data: {
    id: string;
    questionId: string;
    testerId: string;
    answerId: string;
  };
}

interface IVotePayload {
  questionId: string;
  testerId: string;
  answerId: string;
}

export const postVoteApi = async (payload: IVotePayload) => {
  const response = await areYouRealTServiceServerFetchInstance<IVoteResponse>(
    "/questions/vote",
    {
      method: "POST",
      body: JSON.stringify({ ...payload }),
    }
  );

  return response;
};

export const postVote = async (payload: IVotePayload) => {
  return await customServerAction<IVoteResponse>({
    apiFunction: postVoteApi(payload),
  });
};
