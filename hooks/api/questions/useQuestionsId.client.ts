import { IAnswer } from "@/hooks/api/questions/useQuestions";
import { TEN_MINUTE_IN_SECOND } from "@/utils/constants/number.const";
import { areYouRealTServiceServerFetchInstance } from "@/utils/fetchInstance/server";
import { useQuery } from "@tanstack/react-query";
import { IQuestion } from "./useQuestions";

export interface IQuestionDetail
  extends Omit<IQuestion, "answerList" | "commentCount"> {
  votedAnswerId: number | null;
  answerList: IAnswerDetail[];
}

export interface IAnswerDetail extends IAnswer {
  tag: string;
  selectCount: number;
  // countMeta: {
  //   total: number;
  //   tag1: ITagCountMeta;
  //   tag2: ITagCountMeta;
  // } | null;
}

export interface ITagCountMeta {
  tag: string;
  count: number;
}

interface IQuestionsIdParams {
  testerId: string;
  questionId: string;
}

export const questionsIdApiQueryKey = "getQuestionsIdApi";

export const getQuestionsId = async (params: IQuestionsIdParams) => {
  const { testerId, questionId } = params;

  const response = await areYouRealTServiceServerFetchInstance<IQuestionDetail>(
    `/questions/${questionId}?testerId=${testerId}`,
    {
      method: "GET",
      next: { revalidate: TEN_MINUTE_IN_SECOND },
    }
  );

  return response;
};

export const useGetQuestionsId = ({
  params,
  enabled = true,
}: {
  params: IQuestionsIdParams;
  enabled: boolean;
}) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [questionsIdApiQueryKey, params],
    queryFn: () => getQuestionsId(params),
    enabled,
  });

  return {
    data: data as IQuestionDetail,
    isLoading,
    isError,
  };
};
