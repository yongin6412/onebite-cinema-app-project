import MovieItem from "@/components/movieItem";
import style from "./page.module.css";
import { MovieData } from "@/types";
import Delay from "@/app/utils/delay";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  await Delay(3000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${searchParams.q}`,
    { cache: "force-cache" }
  );
  if (!response.ok) return <div>오류가 발생했습니다....</div>;
  const searchMovies: MovieData[] = await response.json();

  return (
    <div>
      <div className={style.searchpage_container}>
        {searchMovies.map((movie) => (
          <MovieItem key={movie.id} movieItem={movie} />
        ))}
      </div>
    </div>
  );
}
