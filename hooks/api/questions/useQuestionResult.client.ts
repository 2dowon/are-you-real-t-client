import { areYouRealTServiceServerFetchInstance } from "@/utils/fetchInstance/server";
import { useQuery } from "@tanstack/react-query";
import { IQuestion } from "./useQuestions";
import { IQuestionDetail } from "./useQuestionsId.client";

interface IQuestionsResultIdResponse {
  id: number;
  prevMbti: string;
  nextMbti: string;
  description: string;
  imageUrl: string;
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

interface IQuestionResultPayload {
  answerId: number[];
  testerId: string;
  prevMbti: string;
}

export const questionsResultApiQueryKey = "postQuestionsResultApi";

export const postQuestionsResultApi = async (
  payload: IQuestionResultPayload
) => {
  const response =
    await areYouRealTServiceServerFetchInstance<IQuestionsResultIdResponse>(
      "/questions/result",
      {
        method: "POST",
        body: JSON.stringify({ ...payload }),
      }
    );

  return response;
};

export const usePostQuestionsResult = ({
  payload,
  enabled,
}: {
  payload: IQuestionResultPayload;
  enabled: boolean;
}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [questionsResultApiQueryKey, payload],
    queryFn: () => postQuestionsResultApi(payload),
    enabled,
  });

  return {
    data,
    isLoading,
    isError,
  };
};
