import { MovieData } from "@/types";
import style from "./page.module.css";
import ReviewEditor from "@/components/review/review-editor";
import ReviewList from "@/components/review/review-list";

export const dynamicParams = false;

export async function generateStaticParams() {
  const response = await fetch(`http://localhost:12345/movie`);
  if (!response.ok) throw new Error("에러발생");
  const movies: MovieData[] = await response.json();
  return movies.map((movie) => ({
    id: movie.id.toString(),
  }));
}

async function MovieDetail({ movieId }: { movieId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${movieId}`,
    { cache: "force-cache" }
  );
  if (!response.ok) return <div>오류가 생겼습니다....</div>;
  const movieData = await response.json();

  return (
    <div className={style.moviepage_container}>
      <div
        className={style.img_container}
        style={{ backgroundImage: `url('${movieData.posterImgUrl}')` }}
      >
        <img src={movieData.posterImgUrl} />
      </div>
      <div>
        <div className={style.info_container}>
          <h2 className={style.title}>{movieData.title}</h2>
          <div>
            {movieData.releaseDate} / {movieData.genres.join(",")} /
            {movieData.runtime}분
          </div>
          <div>{movieData.company}</div>
          <div>
            <div className={style.subtitle}>{movieData.subTitle}</div>
            <div className={style.description}>{movieData.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MoviePage({ params }: { params: { id: string } }) {
  return (
    <div className={style.container}>
      <MovieDetail movieId={params.id} />
      <ReviewEditor movieId={params.id} />
      <ReviewList movieId={params.id} />
    </div>
  );
}
