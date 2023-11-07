"use client";
import Image from "next/image";
import { useTv } from "@/hooks/useTv";

export default function Page({ params }: { params: { tvId: number } }) {
  const { data } = useTv({ tvId: params.tvId });

  if (!data) return null;

  return (
    <Image
      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
      alt={data.name}
      loading="lazy"
      width={500}
      height={750}
    />
  );
}
