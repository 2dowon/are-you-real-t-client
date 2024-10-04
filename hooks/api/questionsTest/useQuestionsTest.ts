interface IQuestionsTestParams {
  testerId: string;
  mbti: string;
  answerIdList: string;
}

export const getQuestionsTest = async (params: IQuestionsTestParams) => {
  // const response = await areYouRealTServiceServerFetchInstance<IQuestionTemp[]>(
  //   "/questions/temp",
  //   {
  //     method: "GET",
  //   }
  // );

  // return response;

  console.log("## getQuestionsTest params", params);

  return 1;
};
