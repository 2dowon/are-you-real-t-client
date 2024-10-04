"use server";

import { BASE_API_URL } from "../constants/url.const";
import { FetchRequestConfig, customFetch } from "../functions/customFetch.util";

export const areYouRealTServiceServerFetchInstance = <TResponse>(
  path: string,
  fetchRequestConfig: FetchRequestConfig
) =>
  customFetch<TResponse>({
    path,
    baseURL: `${BASE_API_URL}`,
    headers: { "Content-Type": "application/json" },
    ...fetchRequestConfig,
  });
