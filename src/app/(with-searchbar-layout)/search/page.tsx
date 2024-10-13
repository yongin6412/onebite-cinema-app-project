import MovieItem from "@/components/movieItem";
import mockData from "@/dummy.json";
import style from "./page.module.css";

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    <div>
      <div className={style.searchpage_container}>
        {mockData.map((movie) => (
          <MovieItem key={movie.id} movieItem={movie} />
        ))}
      </div>
    </div>
  );
}
