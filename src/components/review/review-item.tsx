import { ReviewData } from "@/types";
import style from "./review-item.module.css";

type ReviewItemProps = {
  reviewItem: ReviewData;
};

export default function ReviewItem({ reviewItem }: ReviewItemProps) {
  return (
    <div className={style.container}>
      <div className={style.title_containter}>
        <div className={style.title}>{reviewItem.author}</div>
        <div className={style.date}>
          {new Date(reviewItem.createdAt).toLocaleDateString()}일 작성됨
        </div>
      </div>
      <div className={style.content}>{reviewItem.content}</div>
      <div className={style.delete}>🗑 리뷰 삭제하기</div>
    </div>
  );
}
