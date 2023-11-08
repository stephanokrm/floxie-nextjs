import { ReactNode } from "react";
import { Metadata, ResolvingMetadata } from "next";
import { queryFnFactory } from "@/utils/queryFnFactory";
import { Tv as TvT } from "@/hooks/useTv";

export async function generateMetadata(
  { params }: { params: { tvId: number } },
  resolvingMetadata: ResolvingMetadata,
): Promise<Metadata> {
  const { data } = await queryFnFactory<TvT>({
    path: `/tv/${params.tvId}`,
  })();

  const metadata = await resolvingMetadata;

  return {
    title: `${metadata.title?.absolute} - ${data.name}`,
    description: `${metadata.description} - ${data.overview}`,
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
