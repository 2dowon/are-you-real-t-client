import { areYouRealTServiceServerFetchInstance } from "@/utils/fetchInstance/server";
import { customServerAction } from "@/utils/functions/customServerAction.util";
import { IQuestion } from "./useQuestions";
import { IQuestionDetail } from "./useQuestionsId.client";

interface IQuestionsResultIdResponse {
  id: number;
  prevMbti: string;
  nextMbti: string;
  description: string;
  // imageUrl: string;
  changedQuestions: IChangedQuestion[];
  recommendQuestions: IRecommendedQuestion[];
}

export interface IChangedQuestion {
  prevType: string;
  nextType: string;
  title: string;
  question: IQuestionDetail;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IRecommendedQuestion
  extends Pick<IQuestion, "id" | "type" | "content"> {}

interface IQuestionsResultIdParams {
  resultId: string;
}

interface IQuestionResultPayload {
  answerId: number[];
  testerId: string;
  prevMbti: string;
}

interface IQuestionResultResponse {
  resultId: string;
}

export const getQuestionsResultId = async (
  params: IQuestionsResultIdParams
) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { resultId } = params;

  const response =
    await areYouRealTServiceServerFetchInstance<IQuestionsResultIdResponse>(
      `/questions/result/${resultId}`,
      {
        method: "GET",
      }
    );

  return response;
};

export const postQuestionsResultApi = async (
  payload: IQuestionResultPayload
) => {
  const response =
    await areYouRealTServiceServerFetchInstance<IQuestionResultResponse>(
      "/questions/result",
      {
        method: "POST",
        body: JSON.stringify({ ...payload }),
      }
    );

  return response;
};

export const postQuestionsResult = async (payload: IQuestionResultPayload) => {
  return await customServerAction<IQuestionResultResponse>({
    apiFunction: postQuestionsResultApi(payload),
  });
};
