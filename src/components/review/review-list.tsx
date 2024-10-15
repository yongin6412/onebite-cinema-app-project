import { ReviewData } from "@/types";
import ReviewItem from "./review-item";

export default async function ReviewList({ movieId }: { movieId: string }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/movie/${movieId}`,
      { next: { tags: [`review-${movieId}`] } }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const movieReviews: ReviewData[] = await response.json();
    return (
      <div>
        {movieReviews.map((review) => (
          <ReviewItem key={review.id} reviewItem={review} />
        ))}
      </div>
    );
  } catch (err) {
    console.error(err);
  }
}
