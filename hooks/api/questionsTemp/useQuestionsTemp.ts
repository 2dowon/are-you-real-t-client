import { TMbtiType } from "@/utils/constants/meta.const";
import { areYouRealTServiceServerFetchInstance } from "@/utils/fetchInstance/server";

export interface IQuestionTemp {
  id: string;
  type: TMbtiType;
  content: string;
  answerList: IAnswerTemp[];
}

export interface IAnswerTemp {
  id: string;
  content: string;
}

export const getQuestionsTemp = async () => {
  const response = await areYouRealTServiceServerFetchInstance<IQuestionTemp[]>(
    "/questions/tmp",
    {
      method: "GET",
    }
  );

  return response;
};
