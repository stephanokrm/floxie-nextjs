"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryFnFactory } from "@/utils/queryFnFactory";

type PaginatedResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

type Media = Movie | Tv;

type Tv = {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: "tv";
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: "movie";
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type TrendingAllResponse = PaginatedResponse<Media>;

export const useTrendingAll = ({
  timeWindow,
}: {
  timeWindow: "day" | "week";
}) => {
  return useInfiniteQuery({
    queryKey: ["TrendingAll", timeWindow],
    queryFn: queryFnFactory<TrendingAllResponse>({
      url: `https://api.themoviedb.org/3/trending/all/${timeWindow}`,
    }),
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) => firstPage.data.page - 1 ?? undefined,
    getNextPageParam: (lastPage) => lastPage.data.page + 1 ?? undefined,
    select: (data) => data.pages.flatMap((page) => page.data.results),
  });
};
