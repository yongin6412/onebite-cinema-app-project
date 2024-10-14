import style from "./page.module.css";
import MovieItem from "@/components/movieItem";
import { MovieData } from "@/types";
import { Suspense } from "react";
import Delay from "../utils/delay";
import MovieListSkeleton from "@/components/skeleton/movie-list-skeleton";

async function RecoMovies() {
  await Delay(2000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    { next: { revalidate: 5 } }
  );
  if (!response.ok) {
    return <div>오류가 생겼습니다.</div>;
  }
  const recoMovies: MovieData[] = await response.json();
  return recoMovies.map((movie) => (
    <MovieItem key={`recoMovie-${movie.id}}`} movieItem={movie} />
  ));
}

async function AllMovies() {
  await Delay(3000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return <div>오류가 생겼습니다.</div>;
  }
  const allMovies: MovieData[] = await response.json();
  return allMovies.map((movie) => (
    <MovieItem key={`allMovie-${movie.id}`} movieItem={movie} />
  ));
}

export default function Home() {
  return (
    <div className={style.home_container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.reco_container}>
          <Suspense fallback={<MovieListSkeleton count={3} />}>
            <RecoMovies />
          </Suspense>
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_container}>
          <Suspense fallback={<MovieListSkeleton count={10} />}>
            <AllMovies />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
