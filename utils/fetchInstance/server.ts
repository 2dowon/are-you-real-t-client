"use server";

import { BASE_URL } from "../constants/url.const";
import { FetchRequestConfig, customFetch } from "../functions/customFetch.util";

export const areYouRealTServiceServerFetchInstance = <TResponse>(
  path: string,
  fetchRequestConfig: FetchRequestConfig
) =>
  customFetch<TResponse>({
    path,
    baseURL: `${BASE_URL}`,
    ...fetchRequestConfig,
  });
