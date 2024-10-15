import createReivewAction from "@/actions/create-review-action";
import style from "./review-editor.module.css";

export default function ReviewEditor({ movieId }: { movieId: string }) {
  return (
    <form className={style.from_container} action={createReivewAction}>
      <input name="movieId" value={movieId} hidden />
      <textarea required name="content" placeholder="리뷰내용" />
      <div className={style.submit_container}>
        <input required name="author" placeholder="작성자" />
        <button type="submit">작성하기</button>
      </div>
    </form>
  );
}
