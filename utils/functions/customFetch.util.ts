type Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export interface FetchRequestConfig extends RequestInit {
  baseURL?: string;
  path?: string;
  method?: Method;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query?: string | Record<string, any> | URLSearchParams | string[][];
  tags?: string[];
}

export const customFetch = <TResponse>(
  fetchRequestConfig: FetchRequestConfig
): Promise<TResponse> => {
  const {
    baseURL,
    path,
    method,
    query = null,
    headers,
    body,
    tags,
    ...extraOptions
  } = fetchRequestConfig;

  let queryString = "";
  if (query) {
    queryString = new URLSearchParams(query).toString();
    queryString = queryString && `?${queryString}`;
  }

  return fetch(`${baseURL}${path}${queryString}`, {
    method,
    headers,
    body,
    credentials: "same-origin",
    next: { tags }, // Pass tags here
    ...extraOptions,
  })
    .then((response) => response.json())
    .then((data) => data as TResponse);
};
