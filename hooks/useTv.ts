"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { queryFnFactory } from "@/utils/queryFnFactory";

export type Tv = {
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

export const useTv = ({ tvId }: { tvId: number }) => {
  return useSuspenseQuery({
    queryKey: ["Tv", tvId],
    queryFn: queryFnFactory<Tv>({
      path: `/${"tv" satisfies Tv["media_type"]}/${tvId}`,
    }),
    select: (data) => data.data,
  });
};
