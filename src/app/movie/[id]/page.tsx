import mockData from "@/dummy.json";
import style from "./page.module.css";

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${params.id}`,
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
