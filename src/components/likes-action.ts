"use server";

import { mutateArticleLikes } from "@/queries/queries";

export async function addLikeAction(
  state: number | null,
  formData: FormData,
): Promise<number | null> {
  // Generics

  console.log("Server Function = state", state, formData);

  // cookies()
  // headers()

  const articleId = formData.get("articleId");
  if (typeof articleId !== "string") {
    throw new Error("Falsche ArticleId");
  }

  const newLikes = await mutateArticleLikes(articleId);

  return newLikes;
}
