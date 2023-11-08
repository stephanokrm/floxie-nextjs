"use client";

import { FC } from "react";
import Image from "next/image";
import { useTv } from "@/hooks/useTv";

type TvProps = { tvId: number };

export const Tv: FC<TvProps> = ({ tvId }) => {
  const { data } = useTv({ tvId });

  if (!data) return null;

  return (
    <Image
      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
      alt={data.name}
      priority
      width={500}
      height={750}
    />
  );
};
