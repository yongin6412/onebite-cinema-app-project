import { MovieData } from "@/types";
import Link from "next/link";
import style from "./movieItem.module.css";

type MovieItemProps = {
  movieItem: MovieData;
};

export default function MovieItem({ movieItem }: MovieItemProps) {
  return (
    <Link className={style.container} href={`/movie/${movieItem.id}`}>
      <img src={movieItem.posterImgUrl} />
    </Link>
  );
}
