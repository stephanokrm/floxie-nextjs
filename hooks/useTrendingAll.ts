"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryFnFactory } from "@/utils/queryFnFactory";
import { Movie } from "@/hooks/useMovie";
import { Tv } from "@/hooks/useTv";

type PaginatedResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

type Media = Movie | Tv;

type TrendingAllResponse = PaginatedResponse<Media>;

export const useTrendingAll = ({
  timeWindow,
}: {
  timeWindow: "day" | "week";
}) => {
  return useInfiniteQuery({
    queryKey: ["TrendingAll", timeWindow],
    queryFn: queryFnFactory<TrendingAllResponse>({
      path: `/trending/all/${timeWindow}`,
    }),
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) => firstPage.data.page - 1 ?? undefined,
    getNextPageParam: (lastPage) => lastPage.data.page + 1 ?? undefined,
    select: (data) => data.pages.flatMap((page) => page.data.results),
  });
};
