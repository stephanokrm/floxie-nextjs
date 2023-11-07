"use client";
import { useMovie } from "@/hooks/useMovie";
import Image from "next/image";

export default function Page({ params }: { params: { movieId: number } }) {
  const { data } = useMovie({ movieId: params.movieId });

  if (!data) return null;

  return (
    <Image
      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
      alt={data.title}
      loading="lazy"
      width={500}
      height={750}
    />
  );
}
