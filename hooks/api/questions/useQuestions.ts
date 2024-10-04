import { TMbtiType } from "@/utils/constants/meta.const";
import { areYouRealTServiceServerFetchInstance } from "@/utils/fetchInstance/server";

export interface IQuestion {
  id: string;
  content: string;
  answerList: IAnswer[];
  type: TMbtiType;
  voteCount: number;
  commentCount: number;
}

export interface IAnswer {
  id: string;
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
