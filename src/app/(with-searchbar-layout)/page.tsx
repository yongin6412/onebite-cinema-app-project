import mockData from "@/dummy.json";
import style from "./page.module.css";
import MovieItem from "@/components/movieItem";

export default function Home() {
  return (
    <div className={style.home_container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.reco_container}>
          {mockData.slice(0, 3).map((movie) => (
            <MovieItem key={`recoMovie-${movie.id}}`} movieItem={movie} />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_container}>
          {mockData.map((movie) => (
            <MovieItem key={`allMovie-${movie.id}`} movieItem={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}
