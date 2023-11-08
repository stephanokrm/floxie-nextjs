import { ReactNode } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { queryFnFactory } from "@/utils/queryFnFactory";
import { Movie as MovieT } from "@/hooks/useMovie";

export async function generateMetadata(
  { params }: { params: { movieId: number } },
  resolvingMetadata: ResolvingMetadata,
): Promise<Metadata> {
  const { data } = await queryFnFactory<MovieT>({
    path: `/movie/${params.movieId}`,
  })();

  const metadata = await resolvingMetadata;

  return {
    title: `${metadata.title?.absolute} - ${data.title}`,
    description: `${metadata.description} - ${data.overview}`,
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
