export interface IQuestion {
  id: string;
  content: string;
  answerList: IAnswer[];
}

interface IAnswer {
  id: string;
  content: string;
  tag: string;
}

export const getQuestions = async () => {
  // const response = await areYouRealTServiceServerFetchInstance<IQuestion[]>(
  //   "/questions",
  //   {
  //     method: "GET",
  //   }
  // );

  // return response;

  return [
    {
      id: "1",
      content: "평생 취미를 하나만 가질 수 있다면?",
      answerList: [
        {
          id: "1",
          content: "평생 망원경으로 우주 관측하고 칼세이건 되기",
          tag: "N",
        },
        {
          id: "2",
          content: "평생 현미경으로 미생물 관찰하고 파스퇴르 되기",
          tag: "S",
        },
      ],
    },
    {
      id: "2",
      content: "인생이 막막할때",
      answerList: [
        {
          id: "3",
          content: "슬프다……",
          tag: "F",
        },
        {
          id: "4",
          content: "천 리 간다",
          tag: "T",
        },
      ],
    },
  ] as IQuestion[];
};
