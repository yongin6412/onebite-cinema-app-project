"use server";

import { revalidateTag } from "next/cache";

export default async function createReivewAction(formData: FormData) {
  const movieId = formData.get("movieId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!movieId || !content || !author) return;

  const reviewData = { movieId, content, author };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify(reviewData),
      }
    );
    revalidateTag(`review-${movieId}`);
  } catch (err) {
    console.error(err);
  }
}
