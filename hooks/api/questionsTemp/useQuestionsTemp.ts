import { areYouRealTServiceServerFetchInstance } from "@/utils/fetchInstance/server";
import { IQuestion } from "../questions/useQuestions";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IQuestionTemp
  extends Omit<IQuestion, "type" | "voteCount" | "commentCount"> {}

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
