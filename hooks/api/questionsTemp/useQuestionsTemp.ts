import { areYouRealTServiceServerFetchInstance } from "@/utils/fetchInstance/server";

export interface IQuestionTemp {
  id: string;
  content: string;
  imageUrl: string;
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
      cache: "no-cache",
    }
  );

  return response;
};
