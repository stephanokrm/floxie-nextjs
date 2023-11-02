"use client";
import Image from "next/image";
import { useTrendingAll } from "@/hooks/useTrendingAll";
import { InfiniteContainer } from "@/components/InfiniteContainer";

export const TrendingAll = () => {
  const { data, fetchNextPage } = useTrendingAll({ timeWindow: "day" });

  return (
    <InfiniteContainer onView={fetchNextPage}>
      {data?.map((media) => (
        <div key={media.id}>
          <h1>{media.media_type === "movie" ? media.title : media.name}</h1>
          <p>{media.overview}</p>
          <Image
            src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
            alt={media.media_type === "movie" ? media.title : media.name}
            layout="responsive"
            loading="lazy"
            width={500}
            height={750}
          />
        </div>
      ))}
    </InfiniteContainer>
  );
};
