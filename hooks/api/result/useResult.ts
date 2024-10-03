interface IResultParams {
  resultId: number;
}

export const getResult = async (params: IResultParams) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("## params", params);

  // const response = await areYouRealTServiceServerFetchInstance<IQuestion[]>(
  //   "/questions",
  //   {
  //     method: "GET",
  //   }
  // );

  // return response;

  return {};
};
