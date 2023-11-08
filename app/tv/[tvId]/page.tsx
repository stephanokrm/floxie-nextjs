import { Tv } from "@/components/Tv";

export default function Page({ params }: { params: { tvId: number } }) {
  return <Tv tvId={params.tvId} />;
}
