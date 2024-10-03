import { IAnswer } from "@/hooks/api/questions/useQuestions";
import { IQuestion } from "../questions/useQuestions";

export interface IQuestionDetail extends Omit<IQuestion, "answerList"> {
  answerList: IAnswerDetail[];
}

export interface IAnswerDetail extends IAnswer {
  count: number;
}

interface IQuestionParams {
  questionId: number;
}

export const getQuestion = async (params: IQuestionParams) => {
  // const response = await areYouRealTServiceServerFetchInstance<IQuestion>(
  //   "/questions",
  //   {
  //     method: "GET",
  //   }
  // );

  // return response;

  console.log("##  getQuestion params", params);

  return {
    id: "1",
    type: "energy",
    answerCount: 1000,
    commentCount: 100,
    content: "평생 취미를 하나만 가질 수 있다면?",
    answerList: [
      {
        id: "1",
        content: "평생 망원경으로 우주 관측하고 칼세이건 되기",
        tag: "N",
        count: 300,
      },
      {
        id: "2",
        content: "평생 현미경으로 미생물 관찰하고 파스퇴르 되기",
        tag: "S",
        count: 700,
      },
    ],
  } as IQuestionDetail;
};
