import { TMbtiType } from "@/utils/constants/meta.const";
import { areYouRealTServiceServerFetchInstance } from "@/utils/fetchInstance/server";

export interface IQuestion {
  id: number;
  content: string;
  imageUrl: string;
  answerList: IAnswer[];
  type: TMbtiType;
  voteCount: number;
  commentCount: number;
}

export interface IAnswer {
  id: number;
  content: string;
}

export const getQuestions = async () => {
  const response = await areYouRealTServiceServerFetchInstance<IQuestion[]>(
    "/questions",
    {
      method: "GET",
    }
  );

  return response;
};
