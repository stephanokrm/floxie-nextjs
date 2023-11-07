import axios from "axios";

export const queryFnFactory =
  <T>({ path }: { path: string }) =>
  ({ pageParam, signal }: { pageParam?: number; signal: AbortSignal }) => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const request = new URL(`https://api.themoviedb.org/3${path}`);
    request.searchParams.set("language", navigator?.language ?? "en-US");
    request.searchParams.set(
      "api_key",
      process.env.NEXT_PUBLIC_TMDB_API_KEY ?? "",
    );

    if (pageParam) {
      request.searchParams.set("page", pageParam.toString());
    }

    const promise = axios.get<T>(request.toString(), {
      cancelToken: source.token,
    });

    signal?.addEventListener("abort", () => {
      source.cancel("Query was cancelled by TanStack Query");
    });

    return promise;
  };
