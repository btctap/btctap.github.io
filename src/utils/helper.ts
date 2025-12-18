import { formatError } from "./errors";
import { config } from "../config";

export const isIos = () =>
  !!navigator.userAgent.match(/iphone|ipad/gi) || false;

export const isMobile = () =>
  isIos() || !!navigator.userAgent.match(/android|blackberry/gi) || false;

export const requestTimeoutDuration = 5_000;

export const getApiUrl = (backend: string): string => {
  return "https://" + backend + "/api/";
};

export const getBlacklist = async (): Promise<string> => {
  const controller = new AbortController();
  const requestTimeout = setTimeout(
    () => controller.abort({ reason: "Request timed out" }),
    requestTimeoutDuration,
  );

  try {
    const opts: RequestInit = {
      signal: controller.signal,
    };

    const response = await fetch("/blacklist.txt", opts);

    if (!response.ok) {
      try {
        const contentType = response.headers.get("content-type");
        if (contentType?.includes("application/json")) {
          const body = await response.json();
          return Promise.reject(formatError(body));
        }
        return Promise.reject(await response.text());

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        return Promise.reject(response);
      }
    }
    return await response.text();
  } catch (e) {
    throw new Error(e);
  } finally {
    clearTimeout(requestTimeout);
  }
};

export const fetcher = async <T = unknown>(
  withAuth: boolean,
  backend: string,
  url: string,
  params?: Record<string, unknown>,
): Promise<T> => {
  const controller = new AbortController();
  const requestTimeout = setTimeout(
    () => controller.abort({ reason: "Request timed out" }),
    requestTimeoutDuration,
  );

  try {
    let opts: RequestInit = {
      signal: controller.signal,
    };

    if (withAuth) {
      opts = {
        headers: {
          Authorization: "Bearer " + config.token,
          "Content-Type": "application/json",
        },
        signal: controller.signal,
        ...(params ? { method: "POST", body: JSON.stringify(params) } : null),
      };
    }

    const apiUrl = getApiUrl(backend) + url;
    const response = await fetch(apiUrl, opts);

    if (!response.ok) {
      try {
        const contentType = response.headers.get("content-type");
        if (contentType?.includes("application/json")) {
          const body = await response.json();
          return Promise.reject(formatError(body));
        }
        return Promise.reject(await response.text());

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        return Promise.reject(response);
      }
    }
    return (await response.json()) as T;
  } catch (e) {
    throw new Error(e);
  } finally {
    clearTimeout(requestTimeout);
  }
};
