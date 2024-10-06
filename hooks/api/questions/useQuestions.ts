import { TMbtiType } from "@/utils/constants/meta.const";
import { TEN_MINUTE_IN_SECOND } from "@/utils/constants/number.const";
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
      next: { revalidate: TEN_MINUTE_IN_SECOND },
    }
  );

  return response;
};
