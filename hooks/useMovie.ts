"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { queryFnFactory } from "@/utils/queryFnFactory";

export type Movie = {
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

export const useMovie = ({ movieId }: { movieId: number }) => {
  return useSuspenseQuery({
    queryKey: ["Movie", movieId],
    queryFn: queryFnFactory<Movie>({
      path: `/${"movie" satisfies Movie["media_type"]}/${movieId}`,
    }),
    select: (data) => data.data,
  });
};
