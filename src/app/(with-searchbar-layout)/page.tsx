import mockData from "@/dummy.json";
import style from "./page.module.css";
import MovieItem from "@/components/movieItem";
import { MovieData } from "@/types";

async function RecoMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    { next: { revalidate: 5 } }
  );
  if (!response.ok) {
    return <div>오류가 생겼습니다.</div>;
  }
  const recoMovies: MovieData[] = await response.json();
  return (
    <div className={style.reco_container}>
      {recoMovies.map((movie) => (
        <MovieItem key={`recoMovie-${movie.id}}`} movieItem={movie} />
      ))}
    </div>
  );
}

async function AllMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return <div>오류가 생겼습니다.</div>;
  }
  const allMovies: MovieData[] = await response.json();
  return (
    <div className={style.all_container}>
      {allMovies.map((movie) => (
        <MovieItem key={`allMovie-${movie.id}`} movieItem={movie} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={style.home_container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <RecoMovies />
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <AllMovies />
      </section>
    </div>
  );
}
