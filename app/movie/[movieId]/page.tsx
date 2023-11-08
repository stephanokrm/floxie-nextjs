import { Movie } from "@/components/Movie";

export default function Page({ params }: { params: { movieId: number } }) {
  return <Movie movieId={params.movieId} />;
}
