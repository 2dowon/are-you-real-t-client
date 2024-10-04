import { IAnswer } from "@/hooks/api/questions/useQuestions";
import { useQuery } from "@tanstack/react-query";
import { IQuestion } from "./useQuestions";

export interface IQuestionDetail
  extends Omit<IQuestion, "answerList" | "commentCount"> {
  votedAnswerId: string | null;
  answerList: IAnswerDetail[];
}

export interface IAnswerDetail extends IAnswer {
  tag: string;
  countMeta: {
    total: number;
    tag1: ITagCountMeta;
    tag2: ITagCountMeta;
  };
}

interface ITagCountMeta {
  tag: string;
  count: number;
}

interface IQuestionsIdParams {
  testerId: string;
  questionId: string;
}

export const questionsIdApiQueryKey = "getQuestionsIdApi";

export const getQuestionsId = async (params: IQuestionsIdParams) => {
  // const response = await areYouRealTServiceServerFetchInstance<IQuestion>(
  //   "/questions",
  //   {
  //     method: "GET",
  //   }
  // );

  // return response;

  return {
    id: "1",
    type: "energy",
    votedAnswerId: "2",
    voteCount: 15,
    content: "평생 취미를 하나만 가질 수 있다면?",
    answerList: [
      {
        id: "1",
        content: "평생 망원경으로 우주 관측하고 칼세이건 되기",
        tag: "N",
        countMeta: {
          total: 10,
          tag1: { tag: "I", count: 7 },
          tag2: { tag: "E", count: 3 },
        },
      },
      {
        id: "2",
        content: "평생 현미경으로 미생물 관찰하고 파스퇴르 되기",
        tag: "S",
        countMeta: {
          total: 20,
          tag1: { tag: "I", count: 8 },
          tag2: { tag: "E", count: 12 },
        },
      },
    ],
  } as IQuestionDetail;
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
