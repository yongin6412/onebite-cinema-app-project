import MovieItem from "@/components/movieItem";
import style from "./page.module.css";
import { MovieData } from "@/types";
import Delay from "@/app/utils/delay";
import { Suspense } from "react";
import MovieListSkeleton from "@/components/skeleton/movie-list-skeleton";

async function SearchResult({ q }: { q: string }) {
  await Delay(2000);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
    { cache: "force-cache" }
  );
  if (!response.ok) return <div>오류가 발생했습니다....</div>;
  const searchMovies: MovieData[] = await response.json();

  if (searchMovies.length === 0)
    return <div>해당 영화는 존재하지 않아요...</div>;

  return searchMovies.map((movie) => (
    <MovieItem key={movie.id} movieItem={movie} />
  ));
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    <div className={style.searchpage_container}>
      <Suspense
        key={searchParams.q || ""}
        fallback={<MovieListSkeleton count={3} />}
      >
        <SearchResult q={searchParams.q || ""} />
      </Suspense>
    </div>
  );
}
