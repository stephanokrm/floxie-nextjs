"use client";

import { FC } from "react";
import Image from "next/image";
import { useMovie } from "@/hooks/useMovie";

type MovieProps = { movieId: number };

export const Movie: FC<MovieProps> = ({ movieId }) => {
  const { data } = useMovie({ movieId });

  if (!data) return null;

  return (
    <Image
      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
      alt={data.title}
      priority
      width={500}
      height={750}
    />
  );
};
