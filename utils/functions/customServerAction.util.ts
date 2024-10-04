interface ICustomServerActionResponse<TResponse> {
  data: TResponse;
  isSuccess: boolean;
  isError: boolean;
}

export const customServerActionError: ICustomServerActionResponse<null> = {
  data: null,
  isSuccess: false,
  isError: true,
};

export const customServerAction = async <TResponse>({
  apiFunction,
}: {
  apiFunction: Promise<TResponse>;
}): Promise<ICustomServerActionResponse<TResponse | null>> => {
  try {
    const response = await apiFunction;
    return { data: response as TResponse, isSuccess: true, isError: false };
  } catch (error) {
    return customServerActionError;
  }
};
